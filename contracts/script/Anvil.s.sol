// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {PoolManager} from "v4-core/src/PoolManager.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolModifyLiquidityTest} from "v4-core/src/test/PoolModifyLiquidityTest.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";
import {PoolDonateTest} from "v4-core/src/test/PoolDonateTest.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {MockERC20} from "solmate/test/utils/mocks/MockERC20.sol";
import {Constants} from "v4-core/src/../test/utils/Constants.sol";
import {TickMath} from "v4-core/src/libraries/TickMath.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";

import {SwapFeeLibrary} from "v4-core/src/libraries/SwapFeeLibrary.sol";

import {RoyaltyHook} from "../src/RoyaltyHook.sol";
import {HookMiner} from "../test/utils/HookMiner.sol";

import "forge-std/console.sol";

/// @notice Forge script for deploying v4 & hooks to **anvil**
/// @dev This script only works on an anvil RPC because v4 exceeds bytecode limits
contract CounterScript is Script {
    address constant CREATE2_DEPLOYER = address(0x4e59b44847b379578588920cA78FbF26c0B4956C);
    address constant AXIOM_V2_QUERY_ADDRESS = address(0x83c8c0B395850bA55c830451Cfaca4F2A667a983);

    function setUp() public {}

    function run() public {
        vm.broadcast();
        IPoolManager manager = deployPoolManager();

        // hook contracts must have specific flags encoded in the address
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.AFTER_SWAP_FLAG);
        (address hookAddress, bytes32 salt) = HookMiner.find(
            address(0x4e59b44847b379578588920cA78FbF26c0B4956C),
            flags,
            type(RoyaltyHook).creationCode,
            abi.encode(address(manager), AXIOM_V2_QUERY_ADDRESS, uint64(block.chainid), bytes32(0))
        );

        // ----------------------------- //
        // Deploy the hook using CREATE2 //
        // ----------------------------- //
        vm.broadcast();
        RoyaltyHook royaltyHook = new RoyaltyHook{salt: salt}(
            IPoolManager(address(manager)), AXIOM_V2_QUERY_ADDRESS, uint64(block.chainid), bytes32(0)
        );
        require(address(royaltyHook) == hookAddress, "CounterTest: hook address mismatch");

        // Additional helpers for interacting with the pool
        vm.startBroadcast();
        (PoolModifyLiquidityTest lpRouter, PoolSwapTest swapRouter,) = deployRouters(manager);
        vm.stopBroadcast();

        // test the lifecycle (create pool, add liquidity, swap)
        vm.startBroadcast();
        testLifecycle(manager, address(royaltyHook), lpRouter, swapRouter);
        vm.stopBroadcast();

        console.log("failing");
    }

    // -----------------------------------------------------------
    // Helpers
    // -----------------------------------------------------------
    function deployPoolManager() internal returns (IPoolManager) {
        return IPoolManager(address(new PoolManager(500000)));
    }

    function deployRouters(IPoolManager manager)
        internal
        returns (PoolModifyLiquidityTest lpRouter, PoolSwapTest swapRouter, PoolDonateTest donateRouter)
    {
        lpRouter = new PoolModifyLiquidityTest(manager);
        swapRouter = new PoolSwapTest(manager);
        donateRouter = new PoolDonateTest(manager);
    }

    function deployTokens() internal returns (MockERC20 token0, MockERC20 token1) {
        MockERC20 tokenA = new MockERC20("USDC", "USDC", 18);
        MockERC20 tokenB = new MockERC20("USDT", "USDT", 18);
        if (uint160(address(tokenA)) < uint160(address(tokenB))) {
            token0 = tokenA;
            token1 = tokenB;
        } else {
            token0 = tokenA;
            token1 = tokenB;
        }
    }

    function testLifecycle(
        IPoolManager manager,
        address hook,
        PoolModifyLiquidityTest lpRouter,
        PoolSwapTest swapRouter
    ) internal {
        (MockERC20 token0, MockERC20 token1) = deployTokens();
        token0.mint(msg.sender, 100_000 ether);
        token1.mint(msg.sender, 100_000 ether);

        token0.mint(0xa0Ee7A142d267C1f36714E4a8F75612F20a79720, 100_000 ether);
        token1.mint(0xa0Ee7A142d267C1f36714E4a8F75612F20a79720, 100_000 ether);

        bytes memory ZERO_BYTES = new bytes(0);

        // initialize the pool
        int24 tickSpacing = 60;
        PoolKey memory poolKey = PoolKey(
            Currency.wrap(address(token0)),
            Currency.wrap(address(token1)),
            SwapFeeLibrary.DYNAMIC_FEE_FLAG,
            tickSpacing,
            IHooks(hook)
        );
        manager.initialize(poolKey, Constants.SQRT_RATIO_1_1, ZERO_BYTES);

        // approve the tokens to the routers
        token0.approve(address(lpRouter), type(uint256).max);
        token1.approve(address(lpRouter), type(uint256).max);
        token0.approve(address(swapRouter), type(uint256).max);
        token1.approve(address(swapRouter), type(uint256).max);

        console.log("approval", token0.allowance(address(msg.sender), address(swapRouter)));

        // add full range liquidity to the pool
        lpRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(
                TickMath.minUsableTick(tickSpacing), TickMath.maxUsableTick(tickSpacing), 100 ether
            ),
            ZERO_BYTES
        );
        // swap some tokens
        bool zeroForOne = true;
        int256 amountSpecified = -1e18;
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amountSpecified,
            sqrtPriceLimitX96: zeroForOne ? TickMath.MIN_SQRT_RATIO + 1 : TickMath.MAX_SQRT_RATIO - 1 // unlimited impact
        });
        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});
        swapRouter.swap(poolKey, params, testSettings, abi.encode(msg.sender));

        console.log("balance swapper", token0.balanceOf(address(msg.sender)));
        console.log("address swap", address(swapRouter));
        console.log("address hook", address(hook));

        console.log("token0", address(token0));
        console.log("token1", address(token1));
    }
}
