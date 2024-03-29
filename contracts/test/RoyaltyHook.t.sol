// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {TickMath} from "v4-core/src/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";
import {Deployers} from "v4-core/test/utils/Deployers.sol";
import {RoyaltyHook} from "../src/RoyaltyHook.sol";
import {HookMiner} from "./utils/HookMiner.sol";

import {SwapFeeLibrary} from "v4-core/src/libraries/SwapFeeLibrary.sol";

contract RoyaltyHookTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    address constant AXIOM_V2_QUERY_ADDRESS = address(0x83c8c0B395850bA55c830451Cfaca4F2A667a983);

    RoyaltyHook royaltyHook;
    PoolId poolId;

    function setUp() public {
        // creates the pool manager, utility routers, and test tokens
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.AFTER_SWAP_FLAG);
        (address hookAddress, bytes32 salt) = HookMiner.find(
            address(this),
            flags,
            type(RoyaltyHook).creationCode,
            abi.encode(address(manager), AXIOM_V2_QUERY_ADDRESS, uint64(block.chainid), bytes32(0))
        );
        royaltyHook = new RoyaltyHook{salt: salt}(
            IPoolManager(address(manager)), AXIOM_V2_QUERY_ADDRESS, uint64(block.chainid), bytes32(0)
        );
        require(address(royaltyHook) == hookAddress, "RoyaltyHook: hook address mismatch");

        // Create the pool
        key = PoolKey(currency0, currency1, SwapFeeLibrary.DYNAMIC_FEE_FLAG, 60, IHooks(address(royaltyHook)));
        poolId = key.toId();
        manager.initialize(key, SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(key, IPoolManager.ModifyLiquidityParams(-60, 60, 10 ether), ZERO_BYTES);
        modifyLiquidityRouter.modifyLiquidity(key, IPoolManager.ModifyLiquidityParams(-120, 120, 10 ether), ZERO_BYTES);
        modifyLiquidityRouter.modifyLiquidity(
            key,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 10 ether),
            ZERO_BYTES
        );
    }

    function testRoyaltyHooks() public {
        // positions were created in setup()
        // Perform a test swap //
        bool zeroForOne = true;
        int256 amountSpecified = -1e18; // negative number indicates exact input swap!
        BalanceDelta swapDelta = swap(key, zeroForOne, amountSpecified, abi.encode(address(this)));
        // ------------------- //

        assertEq(int256(swapDelta.amount0()), amountSpecified);
    }

    function testLiquidityHooks() public {
        // positions were created in setup()
        // remove liquidity
        int256 liquidityDelta = -1e18;
        modifyLiquidityRouter.modifyLiquidity(
            key, IPoolManager.ModifyLiquidityParams(-60, 60, liquidityDelta), ZERO_BYTES
        );
    }
    function test_swapFromRouter() public {
        IPoolManager.SwapParams memory params =
            IPoolManager.SwapParams({zeroForOne: true, amountSpecified: -100, sqrtPriceLimitX96: SQRT_RATIO_1_2});
        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});

        swapRouter.swap(key, params, testSettings, abi.encode(address(msg.sender)));
    }

    function test_swapFromRouterTestUpdate() public {
        IPoolManager.SwapParams memory params =
            IPoolManager.SwapParams({zeroForOne: true, amountSpecified: -100, sqrtPriceLimitX96: SQRT_RATIO_1_2});
        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({withdrawTokens: true, settleUsingTransfer: true, currencyAlreadySent: false});


        royaltyHook.testUpdateFee(100, 1810632682, 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720);
        swapRouter.swap(key, params, testSettings, abi.encode(address(msg.sender)));
    }
}
