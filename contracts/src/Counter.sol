// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseHook} from "v4-periphery/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";

import {FullMath} from "v4-core/src/libraries/FullMath.sol";

import "forge-std/console.sol";

contract Counter is BaseHook {
    using PoolIdLibrary for PoolKey;

    uint24 internal fee;
    IPoolManager manager;
    // NOTE: ---------------------------------------------------------
    // state variables should typically be unique to a pool
    // a single hook contract should be able to service multiple pools
    // ---------------------------------------------------------------

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {
        manager = _poolManager;
    }

    /* @dev we don't need to keep track of the unix timestamp of the trades
    * because we are using axiom to access the data from previous blocks
    */
    mapping(bytes32 poolKey => mapping(address user => uint256 volume)) public userTradeVolume;
    mapping(bytes32 poolKey => mapping(address user => uint256 volume0)) internal token0Volume;
    mapping(bytes32 poolKey => mapping(address user => uint256 volume1)) internal token1Volume;

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: true,
            afterAddLiquidity: false,
            beforeRemoveLiquidity: true,
            afterRemoveLiquidity: false,
            beforeSwap: true,
            afterSwap: true,
            beforeDonate: false,
            afterDonate: false
        });
    }

    function setFee(uint24 _fee) external {
        fee = _fee;
    }

    function forcePoolFeeUpdate(PoolKey calldata _key, uint24 _fee) internal {
        manager.updateDynamicSwapFee(_key, _fee);
    }

    // -----------------------------------------------
    // NOTE: see IHooks.sol for function documentation
    // -----------------------------------------------

    function unwrapPoolKey(PoolKey calldata key) internal pure returns (bytes32 bytesKey) {
        assembly {
            key := bytesKey
        }
    }

    function sqrtPriceX96ToUint(uint160 sqrtPriceX96, uint8 decimalsToken0) internal pure returns (uint256) {
        uint256 numerator1 = uint256(sqrtPriceX96) * uint256(sqrtPriceX96);
        uint256 numerator2 = 10 ** decimalsToken0;
        return FullMath.mulDiv(numerator1, numerator2, 1 << 192);
    }

    function getUserSpecificFee(PoolKey calldata key, IPoolManager.SwapParams calldata swapParams, address user)
        internal
        returns (uint24)
    {
        if (swapParams.zeroForOne) {
            token0Volume[unwrapPoolKey(key)][user] += uint256(swapParams.amountSpecified);
        } else {
            token1Volume[unwrapPoolKey(key)][user] += uint256(swapParams.amountSpecified);
        }
        // uint256 volume = userTradeVolume[unwrapPoolKey(key)][user];

        (uint160 sqrtPriceX96, int24 tick, uint16 protocolFee, uint24 swapFee) =
            manager.getSlot0(PoolIdLibrary.toId(key));

        console.log("swap fee", sqrtPriceX96);

        uint256 price = sqrtPriceX96ToUint(sqrtPriceX96, 18);
        console.log("price pre", price);

        // uint volume = token0Volume[unwrapPoolKey(key)][user] + token1Volume[unwrapPoolKey(key)][user];

        forcePoolFeeUpdate(key, fee);
        return 0;
    }

    function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata swapParams, bytes calldata)
        external
        override
        returns (bytes4)
    {
        console.log("calling force pool update");

        // tx.origin as placeholder
        getUserSpecificFee(key, swapParams, tx.origin);

        console.logInt(swapParams.amountSpecified);

        return BaseHook.beforeSwap.selector;
    }

    function afterSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata, BalanceDelta, bytes calldata)
        external
        view
        override
        returns (bytes4)
    {
        (uint160 sqrtPriceX96, int24 tick, uint16 protocolFee, uint24 swapFee) =
            manager.getSlot0(PoolIdLibrary.toId(key));

        console.log("swap fee", sqrtPriceX96);

        uint256 price = sqrtPriceX96ToUint(sqrtPriceX96, 18);
        console.log("price post", price);

        return BaseHook.afterSwap.selector;
    }

    function beforeAddLiquidity(
        address,
        PoolKey calldata key,
        IPoolManager.ModifyLiquidityParams calldata,
        bytes calldata
    ) external pure override returns (bytes4) {
        return BaseHook.beforeAddLiquidity.selector;
    }

    function beforeRemoveLiquidity(
        address,
        PoolKey calldata key,
        IPoolManager.ModifyLiquidityParams calldata,
        bytes calldata
    ) external pure override returns (bytes4) {
        return BaseHook.beforeRemoveLiquidity.selector;
    }
}
