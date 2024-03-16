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
    PoolSwapTest internal swapRouter = PoolSwapTest(0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9);
    MockERC20 internal token0 = MockERC20(0x0165878A594ca255338adfa4d48449f69242Eb8F);
    MockERC20 internal token1 = MockERC20(0xa513E6E4b8f2a923D98304ec87F64353C4D5C853);
    address internal hook = 0x0304dB7e57e2F6e5fE39Aa498c0bE815374F1859;

    function setUp() public {
        uint256 NineNthPrivateKey = 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6;
        vm.startBroadcast(NineNthPrivateKey);
    }

    function run() public {
        int24 tickSpacing = 60;
        PoolKey memory poolKey = PoolKey(
            Currency.wrap(address(token0)),
            Currency.wrap(address(token1)),
            SwapFeeLibrary.DYNAMIC_FEE_FLAG,
            tickSpacing,
            IHooks(hook)
        );

        token0.approve(address(swapRouter), type(uint256).max);
        token1.approve(address(swapRouter), type(uint256).max);

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
    }
}
