// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseHook} from "v4-periphery/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {AxiomV2Client} from "axiom-crypto/v2-periphery/client/AxiomV2Client.sol";

contract Counter is BaseHook, AxiomV2Client {
    using PoolIdLibrary for PoolKey;

    /// @dev Axiom V2 Query Schema.
    bytes32 immutable QUERY_SCHEMA;

    /// @dev Source chain id for the Axiom V2 callback.
    uint64 immutable SOURCE_CHAIN_ID;

    struct FeeRebate {
        uint24 amount;
        uint232 expiry;
    }

    mapping(PoolId poolId => mapping(address user => FeeRebate feeRebate)) public userSpecificFeeRebate;

    // NOTE: ---------------------------------------------------------
    // state variables should typically be unique to a pool
    // a single hook contract should be able to service multiple pools
    // ---------------------------------------------------------------

    constructor(
        IPoolManager _poolManager,
        address _axiomV2QueryAddress,
        uint64 _callbackSourceChainId,
        bytes32 _querySchema
    ) BaseHook(_poolManager) AxiomV2Client(_axiomV2QueryAddress) {
        QUERY_SCHEMA = _querySchema;
        SOURCE_CHAIN_ID = _callbackSourceChainId;
    }

    /// #region Axiom V2 Callbacks

    function _validateAxiomV2Call(
        AxiomCallbackType callbackType,
        uint64 sourceChainId,
        address caller,
        bytes32 querySchema,
        uint256 queryId,
        bytes calldata extraData
    ) internal view override {
        require(sourceChainId == SOURCE_CHAIN_ID, "Source chain ID does not match");
        require(querySchema == QUERY_SCHEMA, "Invalid query schema");

        // <Add any additional desired validation>
    }

    /// @dev Callback function for Axiom V2.
    /// In here, we update the user-specific fee rebate for the given pool and user.
    /// Fee rebates include an expiry timestamp, so the rebate amount is only valid until the expiry.
    function _axiomV2Callback(
        uint64 sourceChainId,
        address caller,
        bytes32 querySchema,
        uint256 queryId,
        bytes32[] calldata axiomResults,
        bytes calldata extraData
    ) internal override {
        // First axiom result is the poolId
        PoolId poolId = PoolId.wrap(axiomResults[0]);
        // Second axiom result is the user address
        address userAddress = address(uint160(uint256(axiomResults[1])));
        // Third axiom result is the new fee rebate amount
        uint24 newFeeRebateAmount = uint24(uint256(axiomResults[2]));
        // Fourth axiom result is the new fee rebate expiry
        uint232 newFeeRebateExpiry = uint232(uint256(axiomResults[3]));

        // Update the user-specific fee rebate
        userSpecificFeeRebate[poolId][userAddress] = FeeRebate({amount: newFeeRebateAmount, expiry: newFeeRebateExpiry});
    }

    /// #endregion Axiom V2 Callbacks

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: false,
            afterAddLiquidity: false,
            beforeRemoveLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: true,
            afterSwap: true,
            beforeDonate: false,
            afterDonate: false
        });
    }

    /// #region Uniswap V4 Hooks

    function getUserSpecificFee(PoolKey calldata key, address user) public view returns (uint24) {
        FeeRebate memory rebate = userSpecificFeeRebate[key.toId()][user];
        if (block.number < rebate.expiry) {
            if (rebate.amount >= key.fee) {
                return 1; // Minimum non-zero fee
            } else {
                return key.fee - rebate.amount;
            }
        } else {
            return key.fee;
        }
    }

    function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata, bytes calldata data)
        external
        override
        returns (bytes4)
    {
        address msgSender = abi.decode(data, (address));
        /// @dev The following line is a blatant security vulnerability. Please don't use it in production.
        poolManager.updateDynamicSwapFee(key, getUserSpecificFee(key, msgSender));
        return BaseHook.beforeSwap.selector;
    }

    function afterSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata, BalanceDelta, bytes calldata)
        external
        override
        returns (bytes4)
    {
        poolManager.updateDynamicSwapFee(key, key.fee);
        return BaseHook.afterSwap.selector;
    }

    function beforeAddLiquidity(address, PoolKey calldata, IPoolManager.ModifyLiquidityParams calldata, bytes calldata)
        external
        pure
        override
        returns (bytes4)
    {
        return BaseHook.beforeAddLiquidity.selector;
    }

    function beforeRemoveLiquidity(
        address,
        PoolKey calldata,
        IPoolManager.ModifyLiquidityParams calldata,
        bytes calldata
    ) external pure override returns (bytes4) {
        return BaseHook.beforeRemoveLiquidity.selector;
    }

    /// #endregion Uniswap V4 Hooks
}
