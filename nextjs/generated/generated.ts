import {
  Address,
  UseContractEventConfig,
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useChainId,
  useContractEvent,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
} from "wagmi";
import { PrepareWriteContractResult, ReadContractResult, WriteContractMode } from "wagmi/actions";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseHook
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseHookABI = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "BalanceDelta", type: "int256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterAddLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterDonate",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint160", type: "uint160" },
      { name: "", internalType: "int24", type: "int24" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterInitialize",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "BalanceDelta", type: "int256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterRemoveLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "", internalType: "BalanceDelta", type: "int256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterSwap",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeAddLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeDonate",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint160", type: "uint160" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeInitialize",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeRemoveLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeSwap",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "getHookPermissions",
    outputs: [
      {
        name: "",
        internalType: "struct Hooks.Permissions",
        type: "tuple",
        components: [
          { name: "beforeInitialize", internalType: "bool", type: "bool" },
          { name: "afterInitialize", internalType: "bool", type: "bool" },
          { name: "beforeAddLiquidity", internalType: "bool", type: "bool" },
          { name: "afterAddLiquidity", internalType: "bool", type: "bool" },
          { name: "beforeRemoveLiquidity", internalType: "bool", type: "bool" },
          { name: "afterRemoveLiquidity", internalType: "bool", type: "bool" },
          { name: "beforeSwap", internalType: "bool", type: "bool" },
          { name: "afterSwap", internalType: "bool", type: "bool" },
          { name: "beforeDonate", internalType: "bool", type: "bool" },
          { name: "afterDonate", internalType: "bool", type: "bool" },
        ],
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "poolManager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  { type: "error", inputs: [{ name: "hooks", internalType: "address", type: "address" }], name: "HookAddressNotValid" },
  { type: "error", inputs: [], name: "HookNotImplemented" },
  { type: "error", inputs: [], name: "InvalidPool" },
  { type: "error", inputs: [], name: "LockFailure" },
  { type: "error", inputs: [], name: "NotPoolManager" },
  { type: "error", inputs: [], name: "NotSelf" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Constants
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const constantsABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "SQRT_RATIO_121_100",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "SQRT_RATIO_1_1",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "SQRT_RATIO_1_2",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "SQRT_RATIO_1_4",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "SQRT_RATIO_2_1",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "SQRT_RATIO_4_1",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "_poolManager", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "BalanceDelta", type: "int256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterAddLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterDonate",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint160", type: "uint160" },
      { name: "", internalType: "int24", type: "int24" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterInitialize",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "BalanceDelta", type: "int256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterRemoveLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "", internalType: "BalanceDelta", type: "int256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "afterSwap",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeAddLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeDonate",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "", internalType: "uint160", type: "uint160" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeInitialize",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeRemoveLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "swapParams",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeSwap",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "getHookPermissions",
    outputs: [
      {
        name: "",
        internalType: "struct Hooks.Permissions",
        type: "tuple",
        components: [
          { name: "beforeInitialize", internalType: "bool", type: "bool" },
          { name: "afterInitialize", internalType: "bool", type: "bool" },
          { name: "beforeAddLiquidity", internalType: "bool", type: "bool" },
          { name: "afterAddLiquidity", internalType: "bool", type: "bool" },
          { name: "beforeRemoveLiquidity", internalType: "bool", type: "bool" },
          { name: "afterRemoveLiquidity", internalType: "bool", type: "bool" },
          { name: "beforeSwap", internalType: "bool", type: "bool" },
          { name: "afterSwap", internalType: "bool", type: "bool" },
          { name: "beforeDonate", internalType: "bool", type: "bool" },
          { name: "afterDonate", internalType: "bool", type: "bool" },
        ],
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "poolManager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "_fee", internalType: "uint24", type: "uint24" }],
    name: "setFee",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "poolKey", internalType: "bytes32", type: "bytes32" },
      { name: "user", internalType: "address", type: "address" },
    ],
    name: "userTradeVolume",
    outputs: [{ name: "volume", internalType: "uint256", type: "uint256" }],
  },
  { type: "error", inputs: [{ name: "hooks", internalType: "address", type: "address" }], name: "HookAddressNotValid" },
  { type: "error", inputs: [], name: "HookNotImplemented" },
  { type: "error", inputs: [], name: "InvalidPool" },
  { type: "error", inputs: [], name: "LockFailure" },
  { type: "error", inputs: [], name: "NotPoolManager" },
  { type: "error", inputs: [], name: "NotSelf" },
] as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterAddress = {
  5: "0x2b0bcF56b565F8526522F2Ea109ffF0Ede40E6B9",
  420: "0x0000000000000000000000000000000000000000",
  1442: "0x0000000000000000000000000000000000000000",
  31337: "0x330ae74DAA74d90FAc17045EbBa5bA7d233f69D9",
  80001: "0x0000000000000000000000000000000000000000",
  84531: "0x0000000000000000000000000000000000000000",
  421613: "0x0000000000000000000000000000000000000000",
  421614: "0x0000000000000000000000000000000000000000",
  534351: "0x0000000000000000000000000000000000000000",
  11155111: "0x0000000000000000000000000000000000000000",
} as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterConfig = { address: counterAddress, abi: counterABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CurrencyLibrary
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const currencyLibraryABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "NATIVE",
    outputs: [{ name: "", internalType: "Currency", type: "address" }],
  },
  { type: "error", inputs: [], name: "ERC20TransferFailed" },
  { type: "error", inputs: [], name: "NativeTransferFailed" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Deployers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deployersABI = [
  { stateMutability: "payable", type: "receive" },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "LIQ_PARAMS",
    outputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "liquidityDelta", internalType: "int256", type: "int256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MAX_PRICE_LIMIT",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MIN_PRICE_LIMIT",
    outputs: [{ name: "", internalType: "uint160", type: "uint160" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "REMOVE_LIQ_PARAMS",
    outputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "liquidityDelta", internalType: "int256", type: "int256" },
    ],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "spender", internalType: "address", type: "address", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6909
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6909ABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "isOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "spender", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "operator", internalType: "address", type: "address", indexed: true },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "OperatorSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "caller", internalType: "address", type: "address", indexed: false },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6909Claims
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6909ClaimsABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "isOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "spender", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "operator", internalType: "address", type: "address", indexed: true },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "OperatorSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "caller", internalType: "address", type: "address", indexed: false },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HookMiner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hookMinerABI = [
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "deployer", internalType: "address", type: "address" },
      { name: "salt", internalType: "uint256", type: "uint256" },
      { name: "creationCode", internalType: "bytes", type: "bytes" },
    ],
    name: "computeAddress",
    outputs: [{ name: "hookAddress", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "deployer", internalType: "address", type: "address" },
      { name: "flags", internalType: "uint160", type: "uint160" },
      { name: "creationCode", internalType: "bytes", type: "bytes" },
      { name: "constructorArgs", internalType: "bytes", type: "bytes" },
    ],
    name: "find",
    outputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "bytes32", type: "bytes32" },
    ],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hooksABI = [
  { type: "error", inputs: [], name: "FailedHookCall" },
  { type: "error", inputs: [{ name: "hooks", internalType: "address", type: "address" }], name: "HookAddressNotValid" },
  { type: "error", inputs: [], name: "InvalidHookResponse" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Minimal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MinimalABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "spender", internalType: "address", type: "address", indexed: true },
      { name: "value", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "value", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6909Claims
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6909ClaimsABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
    ],
    name: "allowance",
    outputs: [{ name: "amount", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ name: "amount", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "isOperator",
    outputs: [{ name: "approved", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IHooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iHooksABI = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "delta", internalType: "BalanceDelta", type: "int256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "afterAddLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "afterDonate",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "tick", internalType: "int24", type: "int24" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "afterInitialize",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "delta", internalType: "BalanceDelta", type: "int256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "afterRemoveLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "delta", internalType: "BalanceDelta", type: "int256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "afterSwap",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeAddLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeDonate",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeInitialize",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeRemoveLiquidity",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "beforeSwap",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILockCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLockCallbackABI = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolManagerABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MAX_TICK_SPACING",
    outputs: [{ name: "", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MIN_PROTOCOL_FEE_DENOMINATOR",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MIN_TICK_SPACING",
    outputs: [{ name: "", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
    ],
    name: "allowance",
    outputs: [{ name: "amount", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ name: "amount", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "burn",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "caller", internalType: "address", type: "address" },
      { name: "currency", internalType: "Currency", type: "address" },
    ],
    name: "currencyDelta",
    outputs: [{ name: "", internalType: "int256", type: "int256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "donate",
    outputs: [{ name: "", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "slot", internalType: "bytes32", type: "bytes32" }],
    name: "extsload",
    outputs: [{ name: "value", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "slot", internalType: "bytes32", type: "bytes32" },
      { name: "nSlots", internalType: "uint256", type: "uint256" },
    ],
    name: "extsload",
    outputs: [{ name: "value", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "getLiquidity",
    outputs: [{ name: "liquidity", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "PoolId", type: "bytes32" }],
    name: "getLiquidity",
    outputs: [{ name: "liquidity", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getLockNonzeroDeltaCount",
    outputs: [{ name: "_nonzeroDeltaCount", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "word", internalType: "int16", type: "int16" },
    ],
    name: "getPoolBitmapInfo",
    outputs: [{ name: "tickBitmap", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "tick", internalType: "int24", type: "int24" },
    ],
    name: "getPoolTickInfo",
    outputs: [
      {
        name: "",
        internalType: "struct Pool.TickInfo",
        type: "tuple",
        components: [
          { name: "liquidityGross", internalType: "uint128", type: "uint128" },
          { name: "liquidityNet", internalType: "int128", type: "int128" },
          { name: "feeGrowthOutside0X128", internalType: "uint256", type: "uint256" },
          { name: "feeGrowthOutside1X128", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "getPosition",
    outputs: [
      {
        name: "position",
        internalType: "struct Position.Info",
        type: "tuple",
        components: [
          { name: "liquidity", internalType: "uint128", type: "uint128" },
          { name: "feeGrowthInside0LastX128", internalType: "uint256", type: "uint256" },
          { name: "feeGrowthInside1LastX128", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "PoolId", type: "bytes32" }],
    name: "getSlot0",
    outputs: [
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "tick", internalType: "int24", type: "int24" },
      { name: "protocolFee", internalType: "uint16", type: "uint16" },
      { name: "swapFee", internalType: "uint24", type: "uint24" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "initialize",
    outputs: [{ name: "tick", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "isLockSet",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "isOperator",
    outputs: [{ name: "approved", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lock",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "modifyLiquidity",
    outputs: [{ name: "", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "Currency", type: "address" }],
    name: "protocolFeesAccrued",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "currency", internalType: "Currency", type: "address" }],
    name: "reservesOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "setProtocolFee",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [{ name: "token", internalType: "Currency", type: "address" }],
    name: "settle",
    outputs: [{ name: "paid", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "swap",
    outputs: [{ name: "", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "currency", internalType: "Currency", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "take",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "newDynamicSwapFee", internalType: "uint24", type: "uint24" },
    ],
    name: "updateDynamicSwapFee",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "currency0", internalType: "Currency", type: "address", indexed: true },
      { name: "currency1", internalType: "Currency", type: "address", indexed: true },
      { name: "fee", internalType: "uint24", type: "uint24", indexed: false },
      { name: "tickSpacing", internalType: "int24", type: "int24", indexed: false },
      { name: "hooks", internalType: "contract IHooks", type: "address", indexed: false },
    ],
    name: "Initialize",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "sender", internalType: "address", type: "address", indexed: true },
      { name: "tickLower", internalType: "int24", type: "int24", indexed: false },
      { name: "tickUpper", internalType: "int24", type: "int24", indexed: false },
      { name: "liquidityDelta", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "ModifyLiquidity",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "protocolFeeController", internalType: "address", type: "address", indexed: false }],
    name: "ProtocolFeeControllerUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "protocolFee", internalType: "uint16", type: "uint16", indexed: false },
    ],
    name: "ProtocolFeeUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "sender", internalType: "address", type: "address", indexed: true },
      { name: "amount0", internalType: "int128", type: "int128", indexed: false },
      { name: "amount1", internalType: "int128", type: "int128", indexed: false },
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160", indexed: false },
      { name: "liquidity", internalType: "uint128", type: "uint128", indexed: false },
      { name: "tick", internalType: "int24", type: "int24", indexed: false },
      { name: "fee", internalType: "uint24", type: "uint24", indexed: false },
    ],
    name: "Swap",
  },
  { type: "error", inputs: [], name: "AlreadyLocked" },
  { type: "error", inputs: [], name: "CurrenciesOutOfOrderOrEqual" },
  { type: "error", inputs: [], name: "CurrencyNotSettled" },
  { type: "error", inputs: [], name: "FeeNotDynamic" },
  { type: "error", inputs: [], name: "ManagerNotLocked" },
  { type: "error", inputs: [], name: "MaxCurrenciesTouched" },
  { type: "error", inputs: [], name: "NotPoolManagerToken" },
  { type: "error", inputs: [], name: "PoolNotInitialized" },
  { type: "error", inputs: [], name: "ProtocolFeeCannotBeFetched" },
  { type: "error", inputs: [], name: "ProtocolFeeControllerCallFailedOrInvalidResult" },
  { type: "error", inputs: [], name: "TickSpacingTooLarge" },
  { type: "error", inputs: [], name: "TickSpacingTooSmall" },
  { type: "error", inputs: [], name: "UnauthorizedDynamicSwapFeeUpdate" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProtocolFeeController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProtocolFeeControllerABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        name: "poolKey",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "protocolFeeForPool",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProtocolFees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProtocolFeesABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MIN_PROTOCOL_FEE_DENOMINATOR",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "Currency", type: "address" }],
    name: "protocolFeesAccrued",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "protocolFeeController", internalType: "address", type: "address", indexed: false }],
    name: "ProtocolFeeControllerUpdated",
  },
  { type: "error", inputs: [], name: "FeeNotDynamic" },
  { type: "error", inputs: [], name: "ProtocolFeeCannotBeFetched" },
  { type: "error", inputs: [], name: "ProtocolFeeControllerCallFailedOrInvalidResult" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InvalidReturnSizeProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const invalidReturnSizeProtocolFeeControllerTestABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "protocolFeeForPool",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20ABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "_name", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
      { name: "_decimals", internalType: "uint8", type: "uint8" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "burn",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "spender", internalType: "address", type: "address", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NestedActionExecutor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nestedActionExecutorABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "_manager", internalType: "contract IPoolManager", type: "address" },
      { name: "_user", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "actions", internalType: "enum Action[]", type: "uint8[]" }],
    name: "execute",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "manager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "_key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "setKey",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
  { type: "error", inputs: [], name: "KeyNotSet" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NoDelegateCall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const noDelegateCallABI = [{ type: "error", inputs: [], name: "DelegateCallNotAllowed" }] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OutOfBoundsProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const outOfBoundsProtocolFeeControllerTestABI = [
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "protocolFeeForPool",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OverflowProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const overflowProtocolFeeControllerTestABI = [
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "protocolFeeForPool",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Owned
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownedABI = [
  { stateMutability: "nonpayable", type: "constructor", inputs: [] },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "setOwner",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "oldOwner", internalType: "address", type: "address", indexed: true },
      { name: "newOwner", internalType: "address", type: "address", indexed: true },
    ],
    name: "OwnerChanged",
  },
  { type: "error", inputs: [], name: "InvalidCaller" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolABI = [
  { type: "error", inputs: [], name: "NoLiquidityToReceiveFees" },
  { type: "error", inputs: [], name: "PoolAlreadyInitialized" },
  { type: "error", inputs: [], name: "PoolNotInitialized" },
  {
    type: "error",
    inputs: [
      { name: "sqrtPriceCurrentX96", internalType: "uint160", type: "uint160" },
      { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
    ],
    name: "PriceLimitAlreadyExceeded",
  },
  {
    type: "error",
    inputs: [{ name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" }],
    name: "PriceLimitOutOfBounds",
  },
  { type: "error", inputs: [], name: "SwapAmountCannotBeZero" },
  { type: "error", inputs: [{ name: "tick", internalType: "int24", type: "int24" }], name: "TickLiquidityOverflow" },
  {
    type: "error",
    inputs: [{ name: "tickLower", internalType: "int24", type: "int24" }],
    name: "TickLowerOutOfBounds",
  },
  { type: "error", inputs: [{ name: "tick", internalType: "int24", type: "int24" }], name: "TickNotInitialized" },
  {
    type: "error",
    inputs: [{ name: "tickUpper", internalType: "int24", type: "int24" }],
    name: "TickUpperOutOfBounds",
  },
  {
    type: "error",
    inputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "TicksMisordered",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolClaimsTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolClaimsTestABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "_manager", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "currency", internalType: "Currency", type: "address" },
      { name: "user", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "deposit",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "rawData", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "manager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "currency", internalType: "Currency", type: "address" },
      { name: "user", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
  { type: "error", inputs: [], name: "SafeCastOverflow" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolDonateTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const poolDonateTestABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "_manager", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "donate",
    outputs: [{ name: "delta", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "rawData", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "manager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
  { type: "error", inputs: [], name: "ERC20TransferFailed" },
  { type: "error", inputs: [], name: "NativeTransferFailed" },
] as const;

/**
 *
 */
export const poolDonateTestAddress = {
  31337: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
} as const;

/**
 *
 */
export const poolDonateTestConfig = { address: poolDonateTestAddress, abi: poolDonateTestABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export const poolManagerABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "controllerGasLimit", internalType: "uint256", type: "uint256" }],
  },
  { stateMutability: "payable", type: "receive" },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MAX_TICK_SPACING",
    outputs: [{ name: "", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MIN_PROTOCOL_FEE_DENOMINATOR",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MIN_TICK_SPACING",
    outputs: [{ name: "", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "burn",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "currency", internalType: "Currency", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "collectProtocolFees",
    outputs: [{ name: "amountCollected", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "caller", internalType: "address", type: "address" },
      { name: "currency", internalType: "Currency", type: "address" },
    ],
    name: "currencyDelta",
    outputs: [{ name: "currencyDelta", internalType: "int256", type: "int256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "donate",
    outputs: [{ name: "delta", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "slot", internalType: "bytes32", type: "bytes32" }],
    name: "extsload",
    outputs: [{ name: "value", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "startSlot", internalType: "bytes32", type: "bytes32" },
      { name: "nSlots", internalType: "uint256", type: "uint256" },
    ],
    name: "extsload",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "_owner", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "getLiquidity",
    outputs: [{ name: "liquidity", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "PoolId", type: "bytes32" }],
    name: "getLiquidity",
    outputs: [{ name: "liquidity", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getLockNonzeroDeltaCount",
    outputs: [{ name: "_nonzeroDeltaCount", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "word", internalType: "int16", type: "int16" },
    ],
    name: "getPoolBitmapInfo",
    outputs: [{ name: "tickBitmap", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "tick", internalType: "int24", type: "int24" },
    ],
    name: "getPoolTickInfo",
    outputs: [
      {
        name: "",
        internalType: "struct Pool.TickInfo",
        type: "tuple",
        components: [
          { name: "liquidityGross", internalType: "uint128", type: "uint128" },
          { name: "liquidityNet", internalType: "int128", type: "int128" },
          { name: "feeGrowthOutside0X128", internalType: "uint256", type: "uint256" },
          { name: "feeGrowthOutside1X128", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "_owner", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "getPosition",
    outputs: [
      {
        name: "position",
        internalType: "struct Position.Info",
        type: "tuple",
        components: [
          { name: "liquidity", internalType: "uint128", type: "uint128" },
          { name: "feeGrowthInside0LastX128", internalType: "uint256", type: "uint256" },
          { name: "feeGrowthInside1LastX128", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "PoolId", type: "bytes32" }],
    name: "getSlot0",
    outputs: [
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "tick", internalType: "int24", type: "int24" },
      { name: "protocolFee", internalType: "uint16", type: "uint16" },
      { name: "swapFee", internalType: "uint24", type: "uint24" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "initialize",
    outputs: [{ name: "tick", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "isLockSet",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "isOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lock",
    outputs: [{ name: "result", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "modifyLiquidity",
    outputs: [{ name: "delta", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "PoolId", type: "bytes32" }],
    name: "pools",
    outputs: [
      {
        name: "slot0",
        internalType: "struct Pool.Slot0",
        type: "tuple",
        components: [
          { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
          { name: "tick", internalType: "int24", type: "int24" },
          { name: "protocolFee", internalType: "uint16", type: "uint16" },
          { name: "swapFee", internalType: "uint24", type: "uint24" },
        ],
      },
      { name: "feeGrowthGlobal0X128", internalType: "uint256", type: "uint256" },
      { name: "feeGrowthGlobal1X128", internalType: "uint256", type: "uint256" },
      { name: "liquidity", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "protocolFeeController",
    outputs: [{ name: "", internalType: "contract IProtocolFeeController", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "currency", internalType: "Currency", type: "address" }],
    name: "protocolFeesAccrued",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "currency", internalType: "Currency", type: "address" }],
    name: "reservesOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setOperator",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "setOwner",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "setProtocolFee",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "controller", internalType: "contract IProtocolFeeController", type: "address" }],
    name: "setProtocolFeeController",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [{ name: "currency", internalType: "Currency", type: "address" }],
    name: "settle",
    outputs: [{ name: "paid", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "swap",
    outputs: [{ name: "delta", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "currency", internalType: "Currency", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "take",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "newDynamicSwapFee", internalType: "uint24", type: "uint24" },
    ],
    name: "updateDynamicSwapFee",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "spender", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "currency0", internalType: "Currency", type: "address", indexed: true },
      { name: "currency1", internalType: "Currency", type: "address", indexed: true },
      { name: "fee", internalType: "uint24", type: "uint24", indexed: false },
      { name: "tickSpacing", internalType: "int24", type: "int24", indexed: false },
      { name: "hooks", internalType: "contract IHooks", type: "address", indexed: false },
    ],
    name: "Initialize",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "sender", internalType: "address", type: "address", indexed: true },
      { name: "tickLower", internalType: "int24", type: "int24", indexed: false },
      { name: "tickUpper", internalType: "int24", type: "int24", indexed: false },
      { name: "liquidityDelta", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "ModifyLiquidity",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "owner", internalType: "address", type: "address", indexed: true },
      { name: "operator", internalType: "address", type: "address", indexed: true },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "OperatorSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "oldOwner", internalType: "address", type: "address", indexed: true },
      { name: "newOwner", internalType: "address", type: "address", indexed: true },
    ],
    name: "OwnerChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "protocolFeeController", internalType: "address", type: "address", indexed: false }],
    name: "ProtocolFeeControllerUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "protocolFee", internalType: "uint16", type: "uint16", indexed: false },
    ],
    name: "ProtocolFeeUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32", indexed: true },
      { name: "sender", internalType: "address", type: "address", indexed: true },
      { name: "amount0", internalType: "int128", type: "int128", indexed: false },
      { name: "amount1", internalType: "int128", type: "int128", indexed: false },
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160", indexed: false },
      { name: "liquidity", internalType: "uint128", type: "uint128", indexed: false },
      { name: "tick", internalType: "int24", type: "int24", indexed: false },
      { name: "fee", internalType: "uint24", type: "uint24", indexed: false },
    ],
    name: "Swap",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "caller", internalType: "address", type: "address", indexed: false },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true },
      { name: "amount", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
  { type: "error", inputs: [], name: "AlreadyLocked" },
  { type: "error", inputs: [], name: "CannotUpdateEmptyPosition" },
  { type: "error", inputs: [], name: "CurrenciesOutOfOrderOrEqual" },
  { type: "error", inputs: [], name: "CurrencyNotSettled" },
  { type: "error", inputs: [], name: "DelegateCallNotAllowed" },
  { type: "error", inputs: [], name: "ERC20TransferFailed" },
  { type: "error", inputs: [], name: "FailedHookCall" },
  { type: "error", inputs: [], name: "FeeNotDynamic" },
  { type: "error", inputs: [], name: "FeeTooLarge" },
  { type: "error", inputs: [{ name: "hooks", internalType: "address", type: "address" }], name: "HookAddressNotValid" },
  { type: "error", inputs: [], name: "InvalidCaller" },
  { type: "error", inputs: [], name: "InvalidHookResponse" },
  { type: "error", inputs: [], name: "InvalidPrice" },
  { type: "error", inputs: [], name: "InvalidPriceOrLiquidity" },
  { type: "error", inputs: [], name: "InvalidSqrtRatio" },
  { type: "error", inputs: [], name: "InvalidTick" },
  { type: "error", inputs: [], name: "ManagerNotLocked" },
  { type: "error", inputs: [], name: "MaxCurrenciesTouched" },
  { type: "error", inputs: [], name: "NativeTransferFailed" },
  { type: "error", inputs: [], name: "NoLiquidityToReceiveFees" },
  { type: "error", inputs: [], name: "NotEnoughLiquidity" },
  { type: "error", inputs: [], name: "NotPoolManagerToken" },
  { type: "error", inputs: [], name: "PoolAlreadyInitialized" },
  { type: "error", inputs: [], name: "PoolNotInitialized" },
  { type: "error", inputs: [], name: "PoolNotInitialized" },
  {
    type: "error",
    inputs: [
      { name: "sqrtPriceCurrentX96", internalType: "uint160", type: "uint160" },
      { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
    ],
    name: "PriceLimitAlreadyExceeded",
  },
  {
    type: "error",
    inputs: [{ name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" }],
    name: "PriceLimitOutOfBounds",
  },
  { type: "error", inputs: [], name: "PriceOverflow" },
  { type: "error", inputs: [], name: "ProtocolFeeCannotBeFetched" },
  { type: "error", inputs: [], name: "ProtocolFeeControllerCallFailedOrInvalidResult" },
  { type: "error", inputs: [], name: "SafeCastOverflow" },
  { type: "error", inputs: [], name: "SwapAmountCannotBeZero" },
  { type: "error", inputs: [{ name: "tick", internalType: "int24", type: "int24" }], name: "TickLiquidityOverflow" },
  {
    type: "error",
    inputs: [{ name: "tickLower", internalType: "int24", type: "int24" }],
    name: "TickLowerOutOfBounds",
  },
  {
    type: "error",
    inputs: [
      { name: "tick", internalType: "int24", type: "int24" },
      { name: "tickSpacing", internalType: "int24", type: "int24" },
    ],
    name: "TickMisaligned",
  },
  { type: "error", inputs: [], name: "TickSpacingTooLarge" },
  { type: "error", inputs: [], name: "TickSpacingTooSmall" },
  {
    type: "error",
    inputs: [{ name: "tickUpper", internalType: "int24", type: "int24" }],
    name: "TickUpperOutOfBounds",
  },
  {
    type: "error",
    inputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "TicksMisordered",
  },
  { type: "error", inputs: [], name: "UnauthorizedDynamicSwapFeeUpdate" },
] as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export const poolManagerAddress = {
  5: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  420: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
  1442: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
  31337: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  80001: "0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6",
  84531: "0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D",
  421613: "0xC94a4C0a89937E278a0d427bb393134E68d5ec09",
  421614: "0xb673AE03413860776497B8C9b3E3F8d4D8745cB3",
  534351: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
  11155111: "0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219",
} as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export const poolManagerConfig = { address: poolManagerAddress, abi: poolManagerABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolModifyLiquidityTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolModifyLiquidityTestABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "_manager", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "rawData", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "manager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
      { name: "settleUsingTransfer", internalType: "bool", type: "bool" },
      { name: "withdrawTokens", internalType: "bool", type: "bool" },
    ],
    name: "modifyLiquidity",
    outputs: [{ name: "delta", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.ModifyLiquidityParams",
        type: "tuple",
        components: [
          { name: "tickLower", internalType: "int24", type: "int24" },
          { name: "tickUpper", internalType: "int24", type: "int24" },
          { name: "liquidityDelta", internalType: "int256", type: "int256" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "modifyLiquidity",
    outputs: [{ name: "delta", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
  { type: "error", inputs: [], name: "ERC20TransferFailed" },
  { type: "error", inputs: [], name: "NativeTransferFailed" },
] as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolModifyLiquidityTestAddress = {
  5: "0x83feDBeD11B3667f40263a88e8435fca51A03F8C",
  420: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
  1442: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
  31337: "0x3079c0319F8734239eB06765666468F7B76Eb505",
  80001: "0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763",
  84531: "0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710",
  421613: "0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b",
  421614: "0x30654C69B212AD057E817EcA26da6c5edA32E2E7",
  534351: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
  11155111: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
} as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolModifyLiquidityTestConfig = {
  address: poolModifyLiquidityTestAddress,
  abi: poolModifyLiquidityTestABI,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolNestedActionsTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolNestedActionsTestABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "_manager", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "executor",
    outputs: [{ name: "", internalType: "contract NestedActionExecutor", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lock",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolSwapTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolSwapTestABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "_manager", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "rawData", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "manager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      {
        name: "params",
        internalType: "struct IPoolManager.SwapParams",
        type: "tuple",
        components: [
          { name: "zeroForOne", internalType: "bool", type: "bool" },
          { name: "amountSpecified", internalType: "int256", type: "int256" },
          { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
        ],
      },
      {
        name: "testSettings",
        internalType: "struct PoolSwapTest.TestSettings",
        type: "tuple",
        components: [
          { name: "withdrawTokens", internalType: "bool", type: "bool" },
          { name: "settleUsingTransfer", internalType: "bool", type: "bool" },
          { name: "currencyAlreadySent", internalType: "bool", type: "bool" },
        ],
      },
      { name: "hookData", internalType: "bytes", type: "bytes" },
    ],
    name: "swap",
    outputs: [{ name: "delta", internalType: "BalanceDelta", type: "int256" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
  { type: "error", inputs: [], name: "ERC20TransferFailed" },
  { type: "error", inputs: [], name: "NativeTransferFailed" },
  { type: "error", inputs: [], name: "NoSwapOccurred" },
] as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolSwapTestAddress = {
  5: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  420: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
  1442: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
  31337: "0xAf7CCF0Ff7Ef054A1db43330F5431958Ab4A9441",
  80001: "0x6550fa0D92B38F52C37D32d71084A7B270226Ba5",
  84531: "0xe99395035e1a89b6da10a73821Fc60158d5e59E9",
  421613: "0xa26b026581Fa923CFf3084119bf2d14060945a63",
  421614: "0x24C731645ee1e35C3219153d370EBd79784D1E91",
  534351: "0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395",
  11155111: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
} as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolSwapTestConfig = { address: poolSwapTestAddress, abi: poolSwapTestABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolTakeTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolTakeTestABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [{ name: "_manager", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "rawData", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "manager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
    ],
    name: "take",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
  { type: "error", inputs: [], name: "SafeCastOverflow" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolTestBase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolTestBaseABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "lockAcquired",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "manager",
    outputs: [{ name: "", internalType: "contract IPoolManager", type: "address" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "address", type: "address", indexed: false }],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "int256[]", type: "int256[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "val", internalType: "address[]", type: "address[]", indexed: false }],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32", indexed: false }],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "int256", type: "int256", indexed: false }],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256[]", type: "uint256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256[]", type: "int256[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address[]", type: "address[]", indexed: false },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      { name: "decimals", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "string", type: "string", indexed: false }],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "uint256", type: "uint256", indexed: false }],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "", internalType: "bytes", type: "bytes", indexed: false }],
    name: "logs",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Position
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const positionABI = [{ type: "error", inputs: [], name: "CannotUpdateEmptyPosition" }] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const protocolFeeControllerTestABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        name: "key",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "protocolFeeForPool",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "id", internalType: "PoolId", type: "bytes32" },
      { name: "fee", internalType: "uint16", type: "uint16" },
    ],
    name: "setSwapFeeForPool",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "PoolId", type: "bytes32" }],
    name: "swapFeeForPool",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProtocolFees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const protocolFeesABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MIN_PROTOCOL_FEE_DENOMINATOR",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "currency", internalType: "Currency", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "collectProtocolFees",
    outputs: [{ name: "amountCollected", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "protocolFeeController",
    outputs: [{ name: "", internalType: "contract IProtocolFeeController", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "currency", internalType: "Currency", type: "address" }],
    name: "protocolFeesAccrued",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "setOwner",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "controller", internalType: "contract IProtocolFeeController", type: "address" }],
    name: "setProtocolFeeController",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "oldOwner", internalType: "address", type: "address", indexed: true },
      { name: "newOwner", internalType: "address", type: "address", indexed: true },
    ],
    name: "OwnerChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "protocolFeeController", internalType: "address", type: "address", indexed: false }],
    name: "ProtocolFeeControllerUpdated",
  },
  { type: "error", inputs: [], name: "ERC20TransferFailed" },
  { type: "error", inputs: [], name: "FeeNotDynamic" },
  { type: "error", inputs: [], name: "InvalidCaller" },
  { type: "error", inputs: [], name: "NativeTransferFailed" },
  { type: "error", inputs: [], name: "ProtocolFeeCannotBeFetched" },
  { type: "error", inputs: [], name: "ProtocolFeeControllerCallFailedOrInvalidResult" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RevertingProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const revertingProtocolFeeControllerTestABI = [
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      {
        name: "",
        internalType: "struct PoolKey",
        type: "tuple",
        components: [
          { name: "currency0", internalType: "Currency", type: "address" },
          { name: "currency1", internalType: "Currency", type: "address" },
          { name: "fee", internalType: "uint24", type: "uint24" },
          { name: "tickSpacing", internalType: "int24", type: "int24" },
          { name: "hooks", internalType: "contract IHooks", type: "address" },
        ],
      },
    ],
    name: "protocolFeeForPool",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastABI = [{ type: "error", inputs: [], name: "SafeCastOverflow" }] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SqrtPriceMath
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sqrtPriceMathABI = [
  { type: "error", inputs: [], name: "InvalidPrice" },
  { type: "error", inputs: [], name: "InvalidPriceOrLiquidity" },
  { type: "error", inputs: [], name: "NotEnoughLiquidity" },
  { type: "error", inputs: [], name: "PriceOverflow" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SwapFeeLibrary
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const swapFeeLibraryABI = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DYNAMIC_FEE_FLAG",
    outputs: [{ name: "", internalType: "uint24", type: "uint24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MAX_SWAP_FEE",
    outputs: [{ name: "", internalType: "uint24", type: "uint24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "STATIC_FEE_MASK",
    outputs: [{ name: "", internalType: "uint24", type: "uint24" }],
  },
  { type: "error", inputs: [], name: "FeeTooLarge" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TickBitmap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tickBitmapABI = [
  {
    type: "error",
    inputs: [
      { name: "tick", internalType: "int24", type: "int24" },
      { name: "tickSpacing", internalType: "int24", type: "int24" },
    ],
    name: "TickMisaligned",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TickMath
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tickMathABI = [
  { type: "error", inputs: [], name: "InvalidSqrtRatio" },
  { type: "error", inputs: [], name: "InvalidTick" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Token0
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export const token0ABI = [
  {
    type: "event",
    inputs: [
      { name: "owner", type: "address", indexed: true },
      { name: "spender", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
  },
  { stateMutability: "view", type: "function", inputs: [], name: "decimals", outputs: [{ name: "", type: "uint8" }] },
  { stateMutability: "view", type: "function", inputs: [], name: "name", outputs: [{ name: "", type: "string" }] },
  { stateMutability: "view", type: "function", inputs: [], name: "symbol", outputs: [{ name: "", type: "string" }] },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", type: "address" },
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
  },
] as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export const token0Address = {
  5: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
  420: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
  1442: "0xeb4708989b42f0cd327A6Bd8f76a931429137fd7",
  31337: "0x2DAFBDF11A8Cf84c372539A38D781D8248399AE3",
  80001: "0x841B5A0b3DBc473c8A057E2391014aa4C4751351",
  84531: "0x73666807a1Ed304C2993C72D2b07434a4a561d26",
  421613: "0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a",
  421614: "0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94",
  534351: "0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16",
  11155111: "0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94",
} as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export const token0Config = { address: token0Address, abi: token0ABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Token1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export const token1ABI = [
  {
    type: "event",
    inputs: [
      { name: "owner", type: "address", indexed: true },
      { name: "spender", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
  },
  { stateMutability: "view", type: "function", inputs: [], name: "decimals", outputs: [{ name: "", type: "uint8" }] },
  { stateMutability: "view", type: "function", inputs: [], name: "name", outputs: [{ name: "", type: "string" }] },
  { stateMutability: "view", type: "function", inputs: [], name: "symbol", outputs: [{ name: "", type: "string" }] },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", type: "address" },
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
  },
] as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export const token1Address = {
  5: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
  420: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
  1442: "0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49",
  31337: "0xa8cEAFb1940244F2f022FF8440a42411B4F07fC4",
  80001: "0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317",
  84531: "0x482Bf489989ea9c40aC978739E11f1699384dd7F",
  421613: "0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6",
  421614: "0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E",
  534351: "0x5C038EE8AB7bD7699037E277874F1c611aD0C28F",
  11155111: "0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E",
} as const;

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export const token1Config = { address: token1Address, abi: token1ABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseHookABI}__.
 */
export function useBaseHookRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof baseHookABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof baseHookABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: baseHookABI, ...config } as UseContractReadConfig<
    typeof baseHookABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"getHookPermissions"`.
 */
export function useBaseHookGetHookPermissions<
  TFunctionName extends "getHookPermissions",
  TSelectData = ReadContractResult<typeof baseHookABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseHookABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: baseHookABI, functionName: "getHookPermissions", ...config } as UseContractReadConfig<
    typeof baseHookABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"poolManager"`.
 */
export function useBaseHookPoolManager<
  TFunctionName extends "poolManager",
  TSelectData = ReadContractResult<typeof baseHookABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof baseHookABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: baseHookABI, functionName: "poolManager", ...config } as UseContractReadConfig<
    typeof baseHookABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__.
 */
export function useBaseHookWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof baseHookABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, TFunctionName, TMode>({ abi: baseHookABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterAddLiquidity"`.
 */
export function useBaseHookAfterAddLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "afterAddLiquidity">["request"]["abi"],
        "afterAddLiquidity",
        TMode
      > & { functionName?: "afterAddLiquidity" }
    : UseContractWriteConfig<typeof baseHookABI, "afterAddLiquidity", TMode> & {
        abi?: never;
        functionName?: "afterAddLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "afterAddLiquidity", TMode>({
    abi: baseHookABI,
    functionName: "afterAddLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterDonate"`.
 */
export function useBaseHookAfterDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "afterDonate">["request"]["abi"],
        "afterDonate",
        TMode
      > & { functionName?: "afterDonate" }
    : UseContractWriteConfig<typeof baseHookABI, "afterDonate", TMode> & {
        abi?: never;
        functionName?: "afterDonate";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "afterDonate", TMode>({
    abi: baseHookABI,
    functionName: "afterDonate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function useBaseHookAfterInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "afterInitialize">["request"]["abi"],
        "afterInitialize",
        TMode
      > & { functionName?: "afterInitialize" }
    : UseContractWriteConfig<typeof baseHookABI, "afterInitialize", TMode> & {
        abi?: never;
        functionName?: "afterInitialize";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "afterInitialize", TMode>({
    abi: baseHookABI,
    functionName: "afterInitialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterRemoveLiquidity"`.
 */
export function useBaseHookAfterRemoveLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "afterRemoveLiquidity">["request"]["abi"],
        "afterRemoveLiquidity",
        TMode
      > & { functionName?: "afterRemoveLiquidity" }
    : UseContractWriteConfig<typeof baseHookABI, "afterRemoveLiquidity", TMode> & {
        abi?: never;
        functionName?: "afterRemoveLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "afterRemoveLiquidity", TMode>({
    abi: baseHookABI,
    functionName: "afterRemoveLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterSwap"`.
 */
export function useBaseHookAfterSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "afterSwap">["request"]["abi"],
        "afterSwap",
        TMode
      > & { functionName?: "afterSwap" }
    : UseContractWriteConfig<typeof baseHookABI, "afterSwap", TMode> & {
        abi?: never;
        functionName?: "afterSwap";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "afterSwap", TMode>({
    abi: baseHookABI,
    functionName: "afterSwap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeAddLiquidity"`.
 */
export function useBaseHookBeforeAddLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "beforeAddLiquidity">["request"]["abi"],
        "beforeAddLiquidity",
        TMode
      > & { functionName?: "beforeAddLiquidity" }
    : UseContractWriteConfig<typeof baseHookABI, "beforeAddLiquidity", TMode> & {
        abi?: never;
        functionName?: "beforeAddLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "beforeAddLiquidity", TMode>({
    abi: baseHookABI,
    functionName: "beforeAddLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function useBaseHookBeforeDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "beforeDonate">["request"]["abi"],
        "beforeDonate",
        TMode
      > & { functionName?: "beforeDonate" }
    : UseContractWriteConfig<typeof baseHookABI, "beforeDonate", TMode> & {
        abi?: never;
        functionName?: "beforeDonate";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "beforeDonate", TMode>({
    abi: baseHookABI,
    functionName: "beforeDonate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function useBaseHookBeforeInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "beforeInitialize">["request"]["abi"],
        "beforeInitialize",
        TMode
      > & { functionName?: "beforeInitialize" }
    : UseContractWriteConfig<typeof baseHookABI, "beforeInitialize", TMode> & {
        abi?: never;
        functionName?: "beforeInitialize";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "beforeInitialize", TMode>({
    abi: baseHookABI,
    functionName: "beforeInitialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeRemoveLiquidity"`.
 */
export function useBaseHookBeforeRemoveLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "beforeRemoveLiquidity">["request"]["abi"],
        "beforeRemoveLiquidity",
        TMode
      > & { functionName?: "beforeRemoveLiquidity" }
    : UseContractWriteConfig<typeof baseHookABI, "beforeRemoveLiquidity", TMode> & {
        abi?: never;
        functionName?: "beforeRemoveLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "beforeRemoveLiquidity", TMode>({
    abi: baseHookABI,
    functionName: "beforeRemoveLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function useBaseHookBeforeSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "beforeSwap">["request"]["abi"],
        "beforeSwap",
        TMode
      > & { functionName?: "beforeSwap" }
    : UseContractWriteConfig<typeof baseHookABI, "beforeSwap", TMode> & {
        abi?: never;
        functionName?: "beforeSwap";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "beforeSwap", TMode>({
    abi: baseHookABI,
    functionName: "beforeSwap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function useBaseHookLockAcquired<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof baseHookABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof baseHookABI, "lockAcquired", TMode> & {
        abi?: never;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  return useContractWrite<typeof baseHookABI, "lockAcquired", TMode>({
    abi: baseHookABI,
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__.
 */
export function usePrepareBaseHookWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof baseHookABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: baseHookABI, ...config } as UsePrepareContractWriteConfig<
    typeof baseHookABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterAddLiquidity"`.
 */
export function usePrepareBaseHookAfterAddLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseHookABI, "afterAddLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "afterAddLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "afterAddLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterDonate"`.
 */
export function usePrepareBaseHookAfterDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof baseHookABI, "afterDonate">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "afterDonate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "afterDonate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function usePrepareBaseHookAfterInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseHookABI, "afterInitialize">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "afterInitialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "afterInitialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterRemoveLiquidity"`.
 */
export function usePrepareBaseHookAfterRemoveLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseHookABI, "afterRemoveLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "afterRemoveLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "afterRemoveLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"afterSwap"`.
 */
export function usePrepareBaseHookAfterSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof baseHookABI, "afterSwap">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "afterSwap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "afterSwap">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeAddLiquidity"`.
 */
export function usePrepareBaseHookBeforeAddLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseHookABI, "beforeAddLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "beforeAddLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "beforeAddLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function usePrepareBaseHookBeforeDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof baseHookABI, "beforeDonate">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "beforeDonate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "beforeDonate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function usePrepareBaseHookBeforeInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseHookABI, "beforeInitialize">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "beforeInitialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "beforeInitialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeRemoveLiquidity"`.
 */
export function usePrepareBaseHookBeforeRemoveLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof baseHookABI, "beforeRemoveLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "beforeRemoveLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "beforeRemoveLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function usePrepareBaseHookBeforeSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof baseHookABI, "beforeSwap">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "beforeSwap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "beforeSwap">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link baseHookABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePrepareBaseHookLockAcquired(
  config: Omit<UsePrepareContractWriteConfig<typeof baseHookABI, "lockAcquired">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: baseHookABI,
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof baseHookABI, "lockAcquired">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__.
 */
export function useConstantsRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: constantsABI, ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_121_100"`.
 */
export function useConstantsSqrtRatio_121_100<
  TFunctionName extends "SQRT_RATIO_121_100",
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: "SQRT_RATIO_121_100", ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_1_1"`.
 */
export function useConstantsSqrtRatio_1_1<
  TFunctionName extends "SQRT_RATIO_1_1",
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: "SQRT_RATIO_1_1", ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_1_2"`.
 */
export function useConstantsSqrtRatio_1_2<
  TFunctionName extends "SQRT_RATIO_1_2",
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: "SQRT_RATIO_1_2", ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_1_4"`.
 */
export function useConstantsSqrtRatio_1_4<
  TFunctionName extends "SQRT_RATIO_1_4",
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: "SQRT_RATIO_1_4", ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_2_1"`.
 */
export function useConstantsSqrtRatio_2_1<
  TFunctionName extends "SQRT_RATIO_2_1",
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: "SQRT_RATIO_2_1", ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link constantsABI}__ and `functionName` set to `"SQRT_RATIO_4_1"`.
 */
export function useConstantsSqrtRatio_4_1<
  TFunctionName extends "SQRT_RATIO_4_1",
  TSelectData = ReadContractResult<typeof constantsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof constantsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: constantsABI, functionName: "SQRT_RATIO_4_1", ...config } as UseContractReadConfig<
    typeof constantsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>, "abi" | "address"> & {
    chainId?: keyof typeof counterAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterSwap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterAfterSwap<
  TFunctionName extends "afterSwap",
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterSwap",
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeAddLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterBeforeAddLiquidity<
  TFunctionName extends "beforeAddLiquidity",
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeAddLiquidity",
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeRemoveLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterBeforeRemoveLiquidity<
  TFunctionName extends "beforeRemoveLiquidity",
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeRemoveLiquidity",
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"getHookPermissions"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterGetHookPermissions<
  TFunctionName extends "getHookPermissions",
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "getHookPermissions",
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"poolManager"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterPoolManager<
  TFunctionName extends "poolManager",
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "poolManager",
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"userTradeVolume"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterUserTradeVolume<
  TFunctionName extends "userTradeVolume",
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "userTradeVolume",
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterAddLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterAfterAddLiquidity<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "afterAddLiquidity">["request"]["abi"],
        "afterAddLiquidity",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "afterAddLiquidity" }
    : UseContractWriteConfig<typeof counterABI, "afterAddLiquidity", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "afterAddLiquidity";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "afterAddLiquidity", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterAddLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterDonate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterAfterDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "afterDonate">["request"]["abi"],
        "afterDonate",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "afterDonate" }
    : UseContractWriteConfig<typeof counterABI, "afterDonate", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "afterDonate";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "afterDonate", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterDonate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterInitialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterAfterInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "afterInitialize">["request"]["abi"],
        "afterInitialize",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "afterInitialize" }
    : UseContractWriteConfig<typeof counterABI, "afterInitialize", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "afterInitialize";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "afterInitialize", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterInitialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterRemoveLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterAfterRemoveLiquidity<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "afterRemoveLiquidity">["request"]["abi"],
        "afterRemoveLiquidity",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "afterRemoveLiquidity" }
    : UseContractWriteConfig<typeof counterABI, "afterRemoveLiquidity", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "afterRemoveLiquidity";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "afterRemoveLiquidity", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterRemoveLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeDonate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterBeforeDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "beforeDonate">["request"]["abi"],
        "beforeDonate",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "beforeDonate" }
    : UseContractWriteConfig<typeof counterABI, "beforeDonate", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "beforeDonate";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "beforeDonate", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeDonate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeInitialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterBeforeInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "beforeInitialize">["request"]["abi"],
        "beforeInitialize",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "beforeInitialize" }
    : UseContractWriteConfig<typeof counterABI, "beforeInitialize", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "beforeInitialize";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "beforeInitialize", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeInitialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeSwap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterBeforeSwap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "beforeSwap">["request"]["abi"],
        "beforeSwap",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "beforeSwap" }
    : UseContractWriteConfig<typeof counterABI, "beforeSwap", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "beforeSwap";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "beforeSwap", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeSwap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterLockAcquired<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof counterABI, "lockAcquired", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "lockAcquired", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function useCounterSetFee<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, "setFee">["request"]["abi"],
        "setFee",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "setFee" }
    : UseContractWriteConfig<typeof counterABI, "setFee", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "setFee";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof counterABI, "setFee", TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "setFee",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>, "abi" | "address"> & {
    chainId?: keyof typeof counterAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterAddLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterAfterAddLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, "afterAddLiquidity">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterAddLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "afterAddLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterDonate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterAfterDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, "afterDonate">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof counterAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterDonate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "afterDonate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterInitialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterAfterInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, "afterInitialize">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterInitialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "afterInitialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"afterRemoveLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterAfterRemoveLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, "afterRemoveLiquidity">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "afterRemoveLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "afterRemoveLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeDonate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterBeforeDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, "beforeDonate">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof counterAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeDonate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "beforeDonate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeInitialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterBeforeInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, "beforeInitialize">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeInitialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "beforeInitialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"beforeSwap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterBeforeSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, "beforeSwap">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof counterAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "beforeSwap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "beforeSwap">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterLockAcquired(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, "lockAcquired">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof counterAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "lockAcquired">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export function usePrepareCounterSetFee(
  config: Omit<UsePrepareContractWriteConfig<typeof counterABI, "setFee">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof counterAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: "setFee",
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, "setFee">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link currencyLibraryABI}__.
 */
export function useCurrencyLibraryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof currencyLibraryABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof currencyLibraryABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: currencyLibraryABI, ...config } as UseContractReadConfig<
    typeof currencyLibraryABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link currencyLibraryABI}__ and `functionName` set to `"NATIVE"`.
 */
export function useCurrencyLibraryNative<
  TFunctionName extends "NATIVE",
  TSelectData = ReadContractResult<typeof currencyLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof currencyLibraryABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: currencyLibraryABI, functionName: "NATIVE", ...config } as UseContractReadConfig<
    typeof currencyLibraryABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link deployersABI}__.
 */
export function useDeployersRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof deployersABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof deployersABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: deployersABI, ...config } as UseContractReadConfig<
    typeof deployersABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link deployersABI}__ and `functionName` set to `"LIQ_PARAMS"`.
 */
export function useDeployersLiqParams<
  TFunctionName extends "LIQ_PARAMS",
  TSelectData = ReadContractResult<typeof deployersABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof deployersABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: deployersABI, functionName: "LIQ_PARAMS", ...config } as UseContractReadConfig<
    typeof deployersABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link deployersABI}__ and `functionName` set to `"MAX_PRICE_LIMIT"`.
 */
export function useDeployersMaxPriceLimit<
  TFunctionName extends "MAX_PRICE_LIMIT",
  TSelectData = ReadContractResult<typeof deployersABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof deployersABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: deployersABI, functionName: "MAX_PRICE_LIMIT", ...config } as UseContractReadConfig<
    typeof deployersABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link deployersABI}__ and `functionName` set to `"MIN_PRICE_LIMIT"`.
 */
export function useDeployersMinPriceLimit<
  TFunctionName extends "MIN_PRICE_LIMIT",
  TSelectData = ReadContractResult<typeof deployersABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof deployersABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: deployersABI, functionName: "MIN_PRICE_LIMIT", ...config } as UseContractReadConfig<
    typeof deployersABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link deployersABI}__ and `functionName` set to `"REMOVE_LIQ_PARAMS"`.
 */
export function useDeployersRemoveLiqParams<
  TFunctionName extends "REMOVE_LIQ_PARAMS",
  TSelectData = ReadContractResult<typeof deployersABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof deployersABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: deployersABI, functionName: "REMOVE_LIQ_PARAMS", ...config } as UseContractReadConfig<
    typeof deployersABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"DOMAIN_SEPARATOR"`.
 */
export function useErc20DomainSeparator<
  TFunctionName extends "DOMAIN_SEPARATOR",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "DOMAIN_SEPARATOR", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "allowance", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "balanceOf", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends "decimals",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "decimals", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends "name",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "name", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"nonces"`.
 */
export function useErc20Nonces<
  TFunctionName extends "nonces",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "nonces", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends "symbol",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "symbol", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: erc20ABI, functionName: "totalSupply", ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({ abi: erc20ABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof erc20ABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, "approve", TMode>({
    abi: erc20ABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"permit"`.
 */
export function useErc20Permit<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, "permit">["request"]["abi"],
        "permit",
        TMode
      > & { functionName?: "permit" }
    : UseContractWriteConfig<typeof erc20ABI, "permit", TMode> & {
        abi?: never;
        functionName?: "permit";
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, "permit", TMode>({
    abi: erc20ABI,
    functionName: "permit",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof erc20ABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, "transfer", TMode>({
    abi: erc20ABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof erc20ABI, "transferFrom", TMode> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, "transferFrom", TMode>({
    abi: erc20ABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, "approve">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: "approve", ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    "approve"
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"permit"`.
 */
export function usePrepareErc20Permit(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, "permit">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc20ABI, functionName: "permit", ...config } as UsePrepareContractWriteConfig<
    typeof erc20ABI,
    "permit"
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, "transfer">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, "transferFrom">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof erc20ABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, ...config } as UseContractEventConfig<typeof erc20ABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof erc20ABI, "Approval">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, eventName: "Approval", ...config } as UseContractEventConfig<
    typeof erc20ABI,
    "Approval"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<UseContractEventConfig<typeof erc20ABI, "Transfer">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc20ABI, eventName: "Transfer", ...config } as UseContractEventConfig<
    typeof erc20ABI,
    "Transfer"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ABI}__.
 */
export function useErc6909Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc6909ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof erc6909ABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: erc6909ABI, ...config } as UseContractReadConfig<
    typeof erc6909ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc6909Allowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof erc6909ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: erc6909ABI, functionName: "allowance", ...config } as UseContractReadConfig<
    typeof erc6909ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc6909BalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof erc6909ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: erc6909ABI, functionName: "balanceOf", ...config } as UseContractReadConfig<
    typeof erc6909ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"isOperator"`.
 */
export function useErc6909IsOperator<
  TFunctionName extends "isOperator",
  TSelectData = ReadContractResult<typeof erc6909ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: erc6909ABI, functionName: "isOperator", ...config } as UseContractReadConfig<
    typeof erc6909ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc6909SupportsInterface<
  TFunctionName extends "supportsInterface",
  TSelectData = ReadContractResult<typeof erc6909ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: erc6909ABI, functionName: "supportsInterface", ...config } as UseContractReadConfig<
    typeof erc6909ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ABI}__.
 */
export function useErc6909Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc6909ABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ABI, TFunctionName, TMode>({ abi: erc6909ABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc6909Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof erc6909ABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ABI, "approve", TMode>({
    abi: erc6909ABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"setOperator"`.
 */
export function useErc6909SetOperator<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ABI, "setOperator">["request"]["abi"],
        "setOperator",
        TMode
      > & { functionName?: "setOperator" }
    : UseContractWriteConfig<typeof erc6909ABI, "setOperator", TMode> & {
        abi?: never;
        functionName?: "setOperator";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ABI, "setOperator", TMode>({
    abi: erc6909ABI,
    functionName: "setOperator",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc6909Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof erc6909ABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ABI, "transfer", TMode>({
    abi: erc6909ABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc6909TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof erc6909ABI, "transferFrom", TMode> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ABI, "transferFrom", TMode>({
    abi: erc6909ABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ABI}__.
 */
export function usePrepareErc6909Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc6909ABI, ...config } as UsePrepareContractWriteConfig<
    typeof erc6909ABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc6909Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ABI, "approve">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"setOperator"`.
 */
export function usePrepareErc6909SetOperator(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ABI, "setOperator">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ABI,
    functionName: "setOperator",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ABI, "setOperator">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc6909Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ABI, "transfer">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc6909TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ABI, "transferFrom">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ABI}__.
 */
export function useErc6909Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof erc6909ABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ABI, ...config } as UseContractEventConfig<typeof erc6909ABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc6909ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof erc6909ABI, "Approval">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ABI, eventName: "Approval", ...config } as UseContractEventConfig<
    typeof erc6909ABI,
    "Approval"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ABI}__ and `eventName` set to `"OperatorSet"`.
 */
export function useErc6909OperatorSetEvent(
  config: Omit<UseContractEventConfig<typeof erc6909ABI, "OperatorSet">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ABI, eventName: "OperatorSet", ...config } as UseContractEventConfig<
    typeof erc6909ABI,
    "OperatorSet"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc6909TransferEvent(
  config: Omit<UseContractEventConfig<typeof erc6909ABI, "Transfer">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ABI, eventName: "Transfer", ...config } as UseContractEventConfig<
    typeof erc6909ABI,
    "Transfer"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ClaimsABI}__.
 */
export function useErc6909ClaimsRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc6909ClaimsABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof erc6909ClaimsABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: erc6909ClaimsABI, ...config } as UseContractReadConfig<
    typeof erc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc6909ClaimsAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof erc6909ClaimsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ClaimsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: erc6909ClaimsABI, functionName: "allowance", ...config } as UseContractReadConfig<
    typeof erc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc6909ClaimsBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof erc6909ClaimsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ClaimsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: erc6909ClaimsABI, functionName: "balanceOf", ...config } as UseContractReadConfig<
    typeof erc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"isOperator"`.
 */
export function useErc6909ClaimsIsOperator<
  TFunctionName extends "isOperator",
  TSelectData = ReadContractResult<typeof erc6909ClaimsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ClaimsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: erc6909ClaimsABI, functionName: "isOperator", ...config } as UseContractReadConfig<
    typeof erc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc6909ClaimsSupportsInterface<
  TFunctionName extends "supportsInterface",
  TSelectData = ReadContractResult<typeof erc6909ClaimsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6909ClaimsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: erc6909ClaimsABI,
    functionName: "supportsInterface",
    ...config,
  } as UseContractReadConfig<typeof erc6909ClaimsABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__.
 */
export function useErc6909ClaimsWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ClaimsABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc6909ClaimsABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ClaimsABI, TFunctionName, TMode>({ abi: erc6909ClaimsABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"approve"`.
 */
export function useErc6909ClaimsApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ClaimsABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof erc6909ClaimsABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ClaimsABI, "approve", TMode>({
    abi: erc6909ClaimsABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"setOperator"`.
 */
export function useErc6909ClaimsSetOperator<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ClaimsABI, "setOperator">["request"]["abi"],
        "setOperator",
        TMode
      > & { functionName?: "setOperator" }
    : UseContractWriteConfig<typeof erc6909ClaimsABI, "setOperator", TMode> & {
        abi?: never;
        functionName?: "setOperator";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ClaimsABI, "setOperator", TMode>({
    abi: erc6909ClaimsABI,
    functionName: "setOperator",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc6909ClaimsTransfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ClaimsABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof erc6909ClaimsABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ClaimsABI, "transfer", TMode>({
    abi: erc6909ClaimsABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc6909ClaimsTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc6909ClaimsABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof erc6909ClaimsABI, "transferFrom", TMode> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any,
) {
  return useContractWrite<typeof erc6909ClaimsABI, "transferFrom", TMode>({
    abi: erc6909ClaimsABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__.
 */
export function usePrepareErc6909ClaimsWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: erc6909ClaimsABI, ...config } as UsePrepareContractWriteConfig<
    typeof erc6909ClaimsABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc6909ClaimsApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "approve">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ClaimsABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"setOperator"`.
 */
export function usePrepareErc6909ClaimsSetOperator(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "setOperator">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ClaimsABI,
    functionName: "setOperator",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "setOperator">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc6909ClaimsTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "transfer">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ClaimsABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc6909ClaimsTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6909ClaimsABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6909ClaimsABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ClaimsABI}__.
 */
export function useErc6909ClaimsEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof erc6909ClaimsABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ClaimsABI, ...config } as UseContractEventConfig<
    typeof erc6909ClaimsABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc6909ClaimsApprovalEvent(
  config: Omit<UseContractEventConfig<typeof erc6909ClaimsABI, "Approval">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ClaimsABI, eventName: "Approval", ...config } as UseContractEventConfig<
    typeof erc6909ClaimsABI,
    "Approval"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `eventName` set to `"OperatorSet"`.
 */
export function useErc6909ClaimsOperatorSetEvent(
  config: Omit<UseContractEventConfig<typeof erc6909ClaimsABI, "OperatorSet">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ClaimsABI, eventName: "OperatorSet", ...config } as UseContractEventConfig<
    typeof erc6909ClaimsABI,
    "OperatorSet"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6909ClaimsABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc6909ClaimsTransferEvent(
  config: Omit<UseContractEventConfig<typeof erc6909ClaimsABI, "Transfer">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: erc6909ClaimsABI, eventName: "Transfer", ...config } as UseContractEventConfig<
    typeof erc6909ClaimsABI,
    "Transfer"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookMinerABI}__.
 */
export function useHookMinerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof hookMinerABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof hookMinerABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: hookMinerABI, ...config } as UseContractReadConfig<
    typeof hookMinerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookMinerABI}__ and `functionName` set to `"computeAddress"`.
 */
export function useHookMinerComputeAddress<
  TFunctionName extends "computeAddress",
  TSelectData = ReadContractResult<typeof hookMinerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hookMinerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: hookMinerABI, functionName: "computeAddress", ...config } as UseContractReadConfig<
    typeof hookMinerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link hookMinerABI}__ and `functionName` set to `"find"`.
 */
export function useHookMinerFind<
  TFunctionName extends "find",
  TSelectData = ReadContractResult<typeof hookMinerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof hookMinerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: hookMinerABI, functionName: "find", ...config } as UseContractReadConfig<
    typeof hookMinerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function useIerc20MinimalRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc20MinimalABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ierc20MinimalABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: ierc20MinimalABI, ...config } as UseContractReadConfig<
    typeof ierc20MinimalABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20MinimalAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof ierc20MinimalABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MinimalABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: ierc20MinimalABI, functionName: "allowance", ...config } as UseContractReadConfig<
    typeof ierc20MinimalABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20MinimalBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof ierc20MinimalABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc20MinimalABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: ierc20MinimalABI, functionName: "balanceOf", ...config } as UseContractReadConfig<
    typeof ierc20MinimalABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function useIerc20MinimalWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc20MinimalABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, TFunctionName, TMode>({ abi: ierc20MinimalABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20MinimalApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof ierc20MinimalABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, "approve", TMode>({
    abi: ierc20MinimalABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20MinimalTransfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof ierc20MinimalABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, "transfer", TMode>({
    abi: ierc20MinimalABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20MinimalTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc20MinimalABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof ierc20MinimalABI, "transferFrom", TMode> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any,
) {
  return useContractWrite<typeof ierc20MinimalABI, "transferFrom", TMode>({
    abi: ierc20MinimalABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function usePrepareIerc20MinimalWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc20MinimalABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: ierc20MinimalABI, ...config } as UsePrepareContractWriteConfig<
    typeof ierc20MinimalABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20MinimalApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc20MinimalABI, "approve">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MinimalABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MinimalABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20MinimalTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc20MinimalABI, "transfer">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MinimalABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MinimalABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20MinimalABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20MinimalTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20MinimalABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc20MinimalABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20MinimalABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MinimalABI}__.
 */
export function useIerc20MinimalEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof ierc20MinimalABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: ierc20MinimalABI, ...config } as UseContractEventConfig<
    typeof ierc20MinimalABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MinimalABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20MinimalApprovalEvent(
  config: Omit<UseContractEventConfig<typeof ierc20MinimalABI, "Approval">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: ierc20MinimalABI, eventName: "Approval", ...config } as UseContractEventConfig<
    typeof ierc20MinimalABI,
    "Approval"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20MinimalABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20MinimalTransferEvent(
  config: Omit<UseContractEventConfig<typeof ierc20MinimalABI, "Transfer">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: ierc20MinimalABI, eventName: "Transfer", ...config } as UseContractEventConfig<
    typeof ierc20MinimalABI,
    "Transfer"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6909ClaimsABI}__.
 */
export function useIerc6909ClaimsRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc6909ClaimsABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ierc6909ClaimsABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: ierc6909ClaimsABI, ...config } as UseContractReadConfig<
    typeof ierc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc6909ClaimsAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof ierc6909ClaimsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc6909ClaimsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: ierc6909ClaimsABI, functionName: "allowance", ...config } as UseContractReadConfig<
    typeof ierc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc6909ClaimsBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof ierc6909ClaimsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc6909ClaimsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: ierc6909ClaimsABI, functionName: "balanceOf", ...config } as UseContractReadConfig<
    typeof ierc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"isOperator"`.
 */
export function useIerc6909ClaimsIsOperator<
  TFunctionName extends "isOperator",
  TSelectData = ReadContractResult<typeof ierc6909ClaimsABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof ierc6909ClaimsABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: ierc6909ClaimsABI, functionName: "isOperator", ...config } as UseContractReadConfig<
    typeof ierc6909ClaimsABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__.
 */
export function useIerc6909ClaimsWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc6909ClaimsABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ierc6909ClaimsABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof ierc6909ClaimsABI, TFunctionName, TMode>({ abi: ierc6909ClaimsABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc6909ClaimsApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc6909ClaimsABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof ierc6909ClaimsABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any,
) {
  return useContractWrite<typeof ierc6909ClaimsABI, "approve", TMode>({
    abi: ierc6909ClaimsABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"setOperator"`.
 */
export function useIerc6909ClaimsSetOperator<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc6909ClaimsABI, "setOperator">["request"]["abi"],
        "setOperator",
        TMode
      > & { functionName?: "setOperator" }
    : UseContractWriteConfig<typeof ierc6909ClaimsABI, "setOperator", TMode> & {
        abi?: never;
        functionName?: "setOperator";
      } = {} as any,
) {
  return useContractWrite<typeof ierc6909ClaimsABI, "setOperator", TMode>({
    abi: ierc6909ClaimsABI,
    functionName: "setOperator",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc6909ClaimsTransfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc6909ClaimsABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof ierc6909ClaimsABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any,
) {
  return useContractWrite<typeof ierc6909ClaimsABI, "transfer", TMode>({
    abi: ierc6909ClaimsABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc6909ClaimsTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ierc6909ClaimsABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof ierc6909ClaimsABI, "transferFrom", TMode> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any,
) {
  return useContractWrite<typeof ierc6909ClaimsABI, "transferFrom", TMode>({
    abi: ierc6909ClaimsABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__.
 */
export function usePrepareIerc6909ClaimsWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: ierc6909ClaimsABI, ...config } as UsePrepareContractWriteConfig<
    typeof ierc6909ClaimsABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc6909ClaimsApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "approve">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6909ClaimsABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"setOperator"`.
 */
export function usePrepareIerc6909ClaimsSetOperator(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "setOperator">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6909ClaimsABI,
    functionName: "setOperator",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "setOperator">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc6909ClaimsTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "transfer">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6909ClaimsABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6909ClaimsABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc6909ClaimsTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6909ClaimsABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc6909ClaimsABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__.
 */
export function useIHooksWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iHooksABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, TFunctionName, TMode>({ abi: iHooksABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterAddLiquidity"`.
 */
export function useIHooksAfterAddLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "afterAddLiquidity">["request"]["abi"],
        "afterAddLiquidity",
        TMode
      > & { functionName?: "afterAddLiquidity" }
    : UseContractWriteConfig<typeof iHooksABI, "afterAddLiquidity", TMode> & {
        abi?: never;
        functionName?: "afterAddLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "afterAddLiquidity", TMode>({
    abi: iHooksABI,
    functionName: "afterAddLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterDonate"`.
 */
export function useIHooksAfterDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "afterDonate">["request"]["abi"],
        "afterDonate",
        TMode
      > & { functionName?: "afterDonate" }
    : UseContractWriteConfig<typeof iHooksABI, "afterDonate", TMode> & {
        abi?: never;
        functionName?: "afterDonate";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "afterDonate", TMode>({
    abi: iHooksABI,
    functionName: "afterDonate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function useIHooksAfterInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "afterInitialize">["request"]["abi"],
        "afterInitialize",
        TMode
      > & { functionName?: "afterInitialize" }
    : UseContractWriteConfig<typeof iHooksABI, "afterInitialize", TMode> & {
        abi?: never;
        functionName?: "afterInitialize";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "afterInitialize", TMode>({
    abi: iHooksABI,
    functionName: "afterInitialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterRemoveLiquidity"`.
 */
export function useIHooksAfterRemoveLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "afterRemoveLiquidity">["request"]["abi"],
        "afterRemoveLiquidity",
        TMode
      > & { functionName?: "afterRemoveLiquidity" }
    : UseContractWriteConfig<typeof iHooksABI, "afterRemoveLiquidity", TMode> & {
        abi?: never;
        functionName?: "afterRemoveLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "afterRemoveLiquidity", TMode>({
    abi: iHooksABI,
    functionName: "afterRemoveLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterSwap"`.
 */
export function useIHooksAfterSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "afterSwap">["request"]["abi"],
        "afterSwap",
        TMode
      > & { functionName?: "afterSwap" }
    : UseContractWriteConfig<typeof iHooksABI, "afterSwap", TMode> & {
        abi?: never;
        functionName?: "afterSwap";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "afterSwap", TMode>({
    abi: iHooksABI,
    functionName: "afterSwap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeAddLiquidity"`.
 */
export function useIHooksBeforeAddLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "beforeAddLiquidity">["request"]["abi"],
        "beforeAddLiquidity",
        TMode
      > & { functionName?: "beforeAddLiquidity" }
    : UseContractWriteConfig<typeof iHooksABI, "beforeAddLiquidity", TMode> & {
        abi?: never;
        functionName?: "beforeAddLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "beforeAddLiquidity", TMode>({
    abi: iHooksABI,
    functionName: "beforeAddLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function useIHooksBeforeDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "beforeDonate">["request"]["abi"],
        "beforeDonate",
        TMode
      > & { functionName?: "beforeDonate" }
    : UseContractWriteConfig<typeof iHooksABI, "beforeDonate", TMode> & {
        abi?: never;
        functionName?: "beforeDonate";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "beforeDonate", TMode>({
    abi: iHooksABI,
    functionName: "beforeDonate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function useIHooksBeforeInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "beforeInitialize">["request"]["abi"],
        "beforeInitialize",
        TMode
      > & { functionName?: "beforeInitialize" }
    : UseContractWriteConfig<typeof iHooksABI, "beforeInitialize", TMode> & {
        abi?: never;
        functionName?: "beforeInitialize";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "beforeInitialize", TMode>({
    abi: iHooksABI,
    functionName: "beforeInitialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeRemoveLiquidity"`.
 */
export function useIHooksBeforeRemoveLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "beforeRemoveLiquidity">["request"]["abi"],
        "beforeRemoveLiquidity",
        TMode
      > & { functionName?: "beforeRemoveLiquidity" }
    : UseContractWriteConfig<typeof iHooksABI, "beforeRemoveLiquidity", TMode> & {
        abi?: never;
        functionName?: "beforeRemoveLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "beforeRemoveLiquidity", TMode>({
    abi: iHooksABI,
    functionName: "beforeRemoveLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function useIHooksBeforeSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iHooksABI, "beforeSwap">["request"]["abi"],
        "beforeSwap",
        TMode
      > & { functionName?: "beforeSwap" }
    : UseContractWriteConfig<typeof iHooksABI, "beforeSwap", TMode> & {
        abi?: never;
        functionName?: "beforeSwap";
      } = {} as any,
) {
  return useContractWrite<typeof iHooksABI, "beforeSwap", TMode>({
    abi: iHooksABI,
    functionName: "beforeSwap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__.
 */
export function usePrepareIHooksWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: iHooksABI, ...config } as UsePrepareContractWriteConfig<
    typeof iHooksABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterAddLiquidity"`.
 */
export function usePrepareIHooksAfterAddLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iHooksABI, "afterAddLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "afterAddLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "afterAddLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterDonate"`.
 */
export function usePrepareIHooksAfterDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, "afterDonate">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "afterDonate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "afterDonate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterInitialize"`.
 */
export function usePrepareIHooksAfterInitialize(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, "afterInitialize">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "afterInitialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "afterInitialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterRemoveLiquidity"`.
 */
export function usePrepareIHooksAfterRemoveLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iHooksABI, "afterRemoveLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "afterRemoveLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "afterRemoveLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"afterSwap"`.
 */
export function usePrepareIHooksAfterSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, "afterSwap">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "afterSwap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "afterSwap">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeAddLiquidity"`.
 */
export function usePrepareIHooksBeforeAddLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iHooksABI, "beforeAddLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "beforeAddLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "beforeAddLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeDonate"`.
 */
export function usePrepareIHooksBeforeDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, "beforeDonate">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "beforeDonate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "beforeDonate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeInitialize"`.
 */
export function usePrepareIHooksBeforeInitialize(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, "beforeInitialize">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "beforeInitialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "beforeInitialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeRemoveLiquidity"`.
 */
export function usePrepareIHooksBeforeRemoveLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iHooksABI, "beforeRemoveLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "beforeRemoveLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "beforeRemoveLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iHooksABI}__ and `functionName` set to `"beforeSwap"`.
 */
export function usePrepareIHooksBeforeSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof iHooksABI, "beforeSwap">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iHooksABI,
    functionName: "beforeSwap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iHooksABI, "beforeSwap">);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__.
 */
export function useILockCallbackWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iLockCallbackABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iLockCallbackABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof iLockCallbackABI, TFunctionName, TMode>({ abi: iLockCallbackABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function useILockCallbackLockAcquired<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iLockCallbackABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof iLockCallbackABI, "lockAcquired", TMode> & {
        abi?: never;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  return useContractWrite<typeof iLockCallbackABI, "lockAcquired", TMode>({
    abi: iLockCallbackABI,
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__.
 */
export function usePrepareILockCallbackWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof iLockCallbackABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: iLockCallbackABI, ...config } as UsePrepareContractWriteConfig<
    typeof iLockCallbackABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iLockCallbackABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePrepareILockCallbackLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iLockCallbackABI, "lockAcquired">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iLockCallbackABI,
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iLockCallbackABI, "lockAcquired">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function useIPoolManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: iPoolManagerABI, ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"MAX_TICK_SPACING"`.
 */
export function useIPoolManagerMaxTickSpacing<
  TFunctionName extends "MAX_TICK_SPACING",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "MAX_TICK_SPACING", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 */
export function useIPoolManagerMinProtocolFeeDenominator<
  TFunctionName extends "MIN_PROTOCOL_FEE_DENOMINATOR",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: iPoolManagerABI,
    functionName: "MIN_PROTOCOL_FEE_DENOMINATOR",
    ...config,
  } as UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"MIN_TICK_SPACING"`.
 */
export function useIPoolManagerMinTickSpacing<
  TFunctionName extends "MIN_TICK_SPACING",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "MIN_TICK_SPACING", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"allowance"`.
 */
export function useIPoolManagerAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "allowance", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIPoolManagerBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "balanceOf", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"currencyDelta"`.
 */
export function useIPoolManagerCurrencyDelta<
  TFunctionName extends "currencyDelta",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "currencyDelta", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"extsload"`.
 */
export function useIPoolManagerExtsload<
  TFunctionName extends "extsload",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "extsload", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getLiquidity"`.
 */
export function useIPoolManagerGetLiquidity<
  TFunctionName extends "getLiquidity",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "getLiquidity", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getLockNonzeroDeltaCount"`.
 */
export function useIPoolManagerGetLockNonzeroDeltaCount<
  TFunctionName extends "getLockNonzeroDeltaCount",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: iPoolManagerABI,
    functionName: "getLockNonzeroDeltaCount",
    ...config,
  } as UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getPoolBitmapInfo"`.
 */
export function useIPoolManagerGetPoolBitmapInfo<
  TFunctionName extends "getPoolBitmapInfo",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: iPoolManagerABI,
    functionName: "getPoolBitmapInfo",
    ...config,
  } as UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getPoolTickInfo"`.
 */
export function useIPoolManagerGetPoolTickInfo<
  TFunctionName extends "getPoolTickInfo",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "getPoolTickInfo", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getPosition"`.
 */
export function useIPoolManagerGetPosition<
  TFunctionName extends "getPosition",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "getPosition", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"getSlot0"`.
 */
export function useIPoolManagerGetSlot0<
  TFunctionName extends "getSlot0",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "getSlot0", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"isLockSet"`.
 */
export function useIPoolManagerIsLockSet<
  TFunctionName extends "isLockSet",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "isLockSet", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"isOperator"`.
 */
export function useIPoolManagerIsOperator<
  TFunctionName extends "isOperator",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "isOperator", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 */
export function useIPoolManagerProtocolFeesAccrued<
  TFunctionName extends "protocolFeesAccrued",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: iPoolManagerABI,
    functionName: "protocolFeesAccrued",
    ...config,
  } as UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"reservesOf"`.
 */
export function useIPoolManagerReservesOf<
  TFunctionName extends "reservesOf",
  TSelectData = ReadContractResult<typeof iPoolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iPoolManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: iPoolManagerABI, functionName: "reservesOf", ...config } as UseContractReadConfig<
    typeof iPoolManagerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function useIPoolManagerWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof iPoolManagerABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, TFunctionName, TMode>({ abi: iPoolManagerABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"approve"`.
 */
export function useIPoolManagerApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "approve", TMode>({
    abi: iPoolManagerABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"burn"`.
 */
export function useIPoolManagerBurn<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "burn">["request"]["abi"],
        "burn",
        TMode
      > & { functionName?: "burn" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "burn", TMode> & {
        abi?: never;
        functionName?: "burn";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "burn", TMode>({
    abi: iPoolManagerABI,
    functionName: "burn",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"donate"`.
 */
export function useIPoolManagerDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "donate">["request"]["abi"],
        "donate",
        TMode
      > & { functionName?: "donate" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "donate", TMode> & {
        abi?: never;
        functionName?: "donate";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "donate", TMode>({
    abi: iPoolManagerABI,
    functionName: "donate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"initialize"`.
 */
export function useIPoolManagerInitialize<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "initialize">["request"]["abi"],
        "initialize",
        TMode
      > & { functionName?: "initialize" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "initialize", TMode> & {
        abi?: never;
        functionName?: "initialize";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "initialize", TMode>({
    abi: iPoolManagerABI,
    functionName: "initialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"lock"`.
 */
export function useIPoolManagerLock<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "lock">["request"]["abi"],
        "lock",
        TMode
      > & { functionName?: "lock" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "lock", TMode> & {
        abi?: never;
        functionName?: "lock";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "lock", TMode>({
    abi: iPoolManagerABI,
    functionName: "lock",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"mint"`.
 */
export function useIPoolManagerMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "mint">["request"]["abi"],
        "mint",
        TMode
      > & { functionName?: "mint" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "mint", TMode> & {
        abi?: never;
        functionName?: "mint";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "mint", TMode>({
    abi: iPoolManagerABI,
    functionName: "mint",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"modifyLiquidity"`.
 */
export function useIPoolManagerModifyLiquidity<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "modifyLiquidity">["request"]["abi"],
        "modifyLiquidity",
        TMode
      > & { functionName?: "modifyLiquidity" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "modifyLiquidity", TMode> & {
        abi?: never;
        functionName?: "modifyLiquidity";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "modifyLiquidity", TMode>({
    abi: iPoolManagerABI,
    functionName: "modifyLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setOperator"`.
 */
export function useIPoolManagerSetOperator<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "setOperator">["request"]["abi"],
        "setOperator",
        TMode
      > & { functionName?: "setOperator" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "setOperator", TMode> & {
        abi?: never;
        functionName?: "setOperator";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "setOperator", TMode>({
    abi: iPoolManagerABI,
    functionName: "setOperator",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setProtocolFee"`.
 */
export function useIPoolManagerSetProtocolFee<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "setProtocolFee">["request"]["abi"],
        "setProtocolFee",
        TMode
      > & { functionName?: "setProtocolFee" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "setProtocolFee", TMode> & {
        abi?: never;
        functionName?: "setProtocolFee";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "setProtocolFee", TMode>({
    abi: iPoolManagerABI,
    functionName: "setProtocolFee",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"settle"`.
 */
export function useIPoolManagerSettle<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "settle">["request"]["abi"],
        "settle",
        TMode
      > & { functionName?: "settle" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "settle", TMode> & {
        abi?: never;
        functionName?: "settle";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "settle", TMode>({
    abi: iPoolManagerABI,
    functionName: "settle",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"swap"`.
 */
export function useIPoolManagerSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "swap">["request"]["abi"],
        "swap",
        TMode
      > & { functionName?: "swap" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "swap", TMode> & {
        abi?: never;
        functionName?: "swap";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "swap", TMode>({
    abi: iPoolManagerABI,
    functionName: "swap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"take"`.
 */
export function useIPoolManagerTake<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "take">["request"]["abi"],
        "take",
        TMode
      > & { functionName?: "take" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "take", TMode> & {
        abi?: never;
        functionName?: "take";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "take", TMode>({
    abi: iPoolManagerABI,
    functionName: "take",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"transfer"`.
 */
export function useIPoolManagerTransfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "transfer", TMode>({
    abi: iPoolManagerABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIPoolManagerTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "transferFrom", TMode> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "transferFrom", TMode>({
    abi: iPoolManagerABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 */
export function useIPoolManagerUpdateDynamicSwapFee<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof iPoolManagerABI, "updateDynamicSwapFee">["request"]["abi"],
        "updateDynamicSwapFee",
        TMode
      > & { functionName?: "updateDynamicSwapFee" }
    : UseContractWriteConfig<typeof iPoolManagerABI, "updateDynamicSwapFee", TMode> & {
        abi?: never;
        functionName?: "updateDynamicSwapFee";
      } = {} as any,
) {
  return useContractWrite<typeof iPoolManagerABI, "updateDynamicSwapFee", TMode>({
    abi: iPoolManagerABI,
    functionName: "updateDynamicSwapFee",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function usePrepareIPoolManagerWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: iPoolManagerABI, ...config } as UsePrepareContractWriteConfig<
    typeof iPoolManagerABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIPoolManagerApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "approve">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"burn"`.
 */
export function usePrepareIPoolManagerBurn(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "burn">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "burn",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "burn">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"donate"`.
 */
export function usePrepareIPoolManagerDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "donate">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "donate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "donate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"initialize"`.
 */
export function usePrepareIPoolManagerInitialize(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "initialize">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "initialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "initialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"lock"`.
 */
export function usePrepareIPoolManagerLock(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "lock">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "lock",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "lock">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareIPoolManagerMint(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "mint">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "mint",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "mint">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"modifyLiquidity"`.
 */
export function usePrepareIPoolManagerModifyLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, "modifyLiquidity">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "modifyLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "modifyLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setOperator"`.
 */
export function usePrepareIPoolManagerSetOperator(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, "setOperator">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "setOperator",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "setOperator">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"setProtocolFee"`.
 */
export function usePrepareIPoolManagerSetProtocolFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, "setProtocolFee">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "setProtocolFee",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "setProtocolFee">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"settle"`.
 */
export function usePrepareIPoolManagerSettle(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "settle">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "settle",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "settle">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"swap"`.
 */
export function usePrepareIPoolManagerSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "swap">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "swap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "swap">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"take"`.
 */
export function usePrepareIPoolManagerTake(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "take">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "take",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "take">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIPoolManagerTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof iPoolManagerABI, "transfer">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIPoolManagerTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "transferFrom">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link iPoolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 */
export function usePrepareIPoolManagerUpdateDynamicSwapFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof iPoolManagerABI, "updateDynamicSwapFee">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: iPoolManagerABI,
    functionName: "updateDynamicSwapFee",
    ...config,
  } as UsePrepareContractWriteConfig<typeof iPoolManagerABI, "updateDynamicSwapFee">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__.
 */
export function useIPoolManagerEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"Initialize"`.
 */
export function useIPoolManagerInitializeEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, "Initialize">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: "Initialize", ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    "Initialize"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"ModifyLiquidity"`.
 */
export function useIPoolManagerModifyLiquidityEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, "ModifyLiquidity">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: "ModifyLiquidity", ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    "ModifyLiquidity"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 */
export function useIPoolManagerProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof iPoolManagerABI, "ProtocolFeeControllerUpdated">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: iPoolManagerABI,
    eventName: "ProtocolFeeControllerUpdated",
    ...config,
  } as UseContractEventConfig<typeof iPoolManagerABI, "ProtocolFeeControllerUpdated">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"ProtocolFeeUpdated"`.
 */
export function useIPoolManagerProtocolFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, "ProtocolFeeUpdated">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: iPoolManagerABI,
    eventName: "ProtocolFeeUpdated",
    ...config,
  } as UseContractEventConfig<typeof iPoolManagerABI, "ProtocolFeeUpdated">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iPoolManagerABI}__ and `eventName` set to `"Swap"`.
 */
export function useIPoolManagerSwapEvent(
  config: Omit<UseContractEventConfig<typeof iPoolManagerABI, "Swap">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: iPoolManagerABI, eventName: "Swap", ...config } as UseContractEventConfig<
    typeof iPoolManagerABI,
    "Swap"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProtocolFeeControllerABI}__.
 */
export function useIProtocolFeeControllerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iProtocolFeeControllerABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof iProtocolFeeControllerABI, TFunctionName, TSelectData>, "abi"> = {} as any,
) {
  return useContractRead({ abi: iProtocolFeeControllerABI, ...config } as UseContractReadConfig<
    typeof iProtocolFeeControllerABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProtocolFeeControllerABI}__ and `functionName` set to `"protocolFeeForPool"`.
 */
export function useIProtocolFeeControllerProtocolFeeForPool<
  TFunctionName extends "protocolFeeForPool",
  TSelectData = ReadContractResult<typeof iProtocolFeeControllerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iProtocolFeeControllerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: iProtocolFeeControllerABI,
    functionName: "protocolFeeForPool",
    ...config,
  } as UseContractReadConfig<typeof iProtocolFeeControllerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProtocolFeesABI}__.
 */
export function useIProtocolFeesRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof iProtocolFeesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof iProtocolFeesABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: iProtocolFeesABI, ...config } as UseContractReadConfig<
    typeof iProtocolFeesABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProtocolFeesABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 */
export function useIProtocolFeesMinProtocolFeeDenominator<
  TFunctionName extends "MIN_PROTOCOL_FEE_DENOMINATOR",
  TSelectData = ReadContractResult<typeof iProtocolFeesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iProtocolFeesABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: iProtocolFeesABI,
    functionName: "MIN_PROTOCOL_FEE_DENOMINATOR",
    ...config,
  } as UseContractReadConfig<typeof iProtocolFeesABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link iProtocolFeesABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 */
export function useIProtocolFeesProtocolFeesAccrued<
  TFunctionName extends "protocolFeesAccrued",
  TSelectData = ReadContractResult<typeof iProtocolFeesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof iProtocolFeesABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: iProtocolFeesABI,
    functionName: "protocolFeesAccrued",
    ...config,
  } as UseContractReadConfig<typeof iProtocolFeesABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iProtocolFeesABI}__.
 */
export function useIProtocolFeesEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof iProtocolFeesABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: iProtocolFeesABI, ...config } as UseContractEventConfig<
    typeof iProtocolFeesABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link iProtocolFeesABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 */
export function useIProtocolFeesProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof iProtocolFeesABI, "ProtocolFeeControllerUpdated">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: iProtocolFeesABI,
    eventName: "ProtocolFeeControllerUpdated",
    ...config,
  } as UseContractEventConfig<typeof iProtocolFeesABI, "ProtocolFeeControllerUpdated">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invalidReturnSizeProtocolFeeControllerTestABI}__.
 */
export function useInvalidReturnSizeProtocolFeeControllerTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof invalidReturnSizeProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invalidReturnSizeProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any,
) {
  return useContractRead({ abi: invalidReturnSizeProtocolFeeControllerTestABI, ...config } as UseContractReadConfig<
    typeof invalidReturnSizeProtocolFeeControllerTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link invalidReturnSizeProtocolFeeControllerTestABI}__ and `functionName` set to `"protocolFeeForPool"`.
 */
export function useInvalidReturnSizeProtocolFeeControllerTestProtocolFeeForPool<
  TFunctionName extends "protocolFeeForPool",
  TSelectData = ReadContractResult<typeof invalidReturnSizeProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof invalidReturnSizeProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: invalidReturnSizeProtocolFeeControllerTestABI,
    functionName: "protocolFeeForPool",
    ...config,
  } as UseContractReadConfig<typeof invalidReturnSizeProtocolFeeControllerTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: mockErc20ABI, ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"DOMAIN_SEPARATOR"`.
 */
export function useMockErc20DomainSeparator<
  TFunctionName extends "DOMAIN_SEPARATOR",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "DOMAIN_SEPARATOR", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useMockErc20Allowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "allowance", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useMockErc20BalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "balanceOf", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useMockErc20Decimals<
  TFunctionName extends "decimals",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "decimals", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"name"`.
 */
export function useMockErc20Name<
  TFunctionName extends "name",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "name", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"nonces"`.
 */
export function useMockErc20Nonces<
  TFunctionName extends "nonces",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "nonces", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useMockErc20Symbol<
  TFunctionName extends "symbol",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "symbol", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useMockErc20TotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<typeof mockErc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mockErc20ABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: mockErc20ABI, functionName: "totalSupply", ...config } as UseContractReadConfig<
    typeof mockErc20ABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mockErc20ABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, TFunctionName, TMode>({ abi: mockErc20ABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useMockErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof mockErc20ABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, "approve", TMode>({
    abi: mockErc20ABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"burn"`.
 */
export function useMockErc20Burn<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, "burn">["request"]["abi"],
        "burn",
        TMode
      > & { functionName?: "burn" }
    : UseContractWriteConfig<typeof mockErc20ABI, "burn", TMode> & {
        abi?: never;
        functionName?: "burn";
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, "burn", TMode>({
    abi: mockErc20ABI,
    functionName: "burn",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function useMockErc20Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, "mint">["request"]["abi"],
        "mint",
        TMode
      > & { functionName?: "mint" }
    : UseContractWriteConfig<typeof mockErc20ABI, "mint", TMode> & {
        abi?: never;
        functionName?: "mint";
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, "mint", TMode>({
    abi: mockErc20ABI,
    functionName: "mint",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"permit"`.
 */
export function useMockErc20Permit<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, "permit">["request"]["abi"],
        "permit",
        TMode
      > & { functionName?: "permit" }
    : UseContractWriteConfig<typeof mockErc20ABI, "permit", TMode> & {
        abi?: never;
        functionName?: "permit";
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, "permit", TMode>({
    abi: mockErc20ABI,
    functionName: "permit",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useMockErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof mockErc20ABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, "transfer", TMode>({
    abi: mockErc20ABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useMockErc20TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mockErc20ABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof mockErc20ABI, "transferFrom", TMode> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any,
) {
  return useContractWrite<typeof mockErc20ABI, "transferFrom", TMode>({
    abi: mockErc20ABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function usePrepareMockErc20Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: mockErc20ABI, ...config } as UsePrepareContractWriteConfig<
    typeof mockErc20ABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareMockErc20Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, "approve">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"burn"`.
 */
export function usePrepareMockErc20Burn(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, "burn">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: "burn",
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, "burn">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareMockErc20Mint(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, "mint">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: "mint",
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, "mint">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"permit"`.
 */
export function usePrepareMockErc20Permit(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, "permit">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: "permit",
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, "permit">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareMockErc20Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, "transfer">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mockErc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareMockErc20TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof mockErc20ABI, "transferFrom">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: mockErc20ABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof mockErc20ABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__.
 */
export function useMockErc20Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof mockErc20ABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: mockErc20ABI, ...config } as UseContractEventConfig<typeof mockErc20ABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useMockErc20ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof mockErc20ABI, "Approval">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: mockErc20ABI, eventName: "Approval", ...config } as UseContractEventConfig<
    typeof mockErc20ABI,
    "Approval"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mockErc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useMockErc20TransferEvent(
  config: Omit<UseContractEventConfig<typeof mockErc20ABI, "Transfer">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: mockErc20ABI, eventName: "Transfer", ...config } as UseContractEventConfig<
    typeof mockErc20ABI,
    "Transfer"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link nestedActionExecutorABI}__.
 */
export function useNestedActionExecutorRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof nestedActionExecutorABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof nestedActionExecutorABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: nestedActionExecutorABI, ...config } as UseContractReadConfig<
    typeof nestedActionExecutorABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function useNestedActionExecutorIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof nestedActionExecutorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof nestedActionExecutorABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: nestedActionExecutorABI, functionName: "IS_TEST", ...config } as UseContractReadConfig<
    typeof nestedActionExecutorABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function useNestedActionExecutorLockAcquired<
  TFunctionName extends "lockAcquired",
  TSelectData = ReadContractResult<typeof nestedActionExecutorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof nestedActionExecutorABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: nestedActionExecutorABI,
    functionName: "lockAcquired",
    ...config,
  } as UseContractReadConfig<typeof nestedActionExecutorABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"manager"`.
 */
export function useNestedActionExecutorManager<
  TFunctionName extends "manager",
  TSelectData = ReadContractResult<typeof nestedActionExecutorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof nestedActionExecutorABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: nestedActionExecutorABI, functionName: "manager", ...config } as UseContractReadConfig<
    typeof nestedActionExecutorABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__.
 */
export function useNestedActionExecutorWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof nestedActionExecutorABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof nestedActionExecutorABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof nestedActionExecutorABI, TFunctionName, TMode>({
    abi: nestedActionExecutorABI,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"execute"`.
 */
export function useNestedActionExecutorExecute<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof nestedActionExecutorABI, "execute">["request"]["abi"],
        "execute",
        TMode
      > & { functionName?: "execute" }
    : UseContractWriteConfig<typeof nestedActionExecutorABI, "execute", TMode> & {
        abi?: never;
        functionName?: "execute";
      } = {} as any,
) {
  return useContractWrite<typeof nestedActionExecutorABI, "execute", TMode>({
    abi: nestedActionExecutorABI,
    functionName: "execute",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"failed"`.
 */
export function useNestedActionExecutorFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof nestedActionExecutorABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { functionName?: "failed" }
    : UseContractWriteConfig<typeof nestedActionExecutorABI, "failed", TMode> & {
        abi?: never;
        functionName?: "failed";
      } = {} as any,
) {
  return useContractWrite<typeof nestedActionExecutorABI, "failed", TMode>({
    abi: nestedActionExecutorABI,
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"setKey"`.
 */
export function useNestedActionExecutorSetKey<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof nestedActionExecutorABI, "setKey">["request"]["abi"],
        "setKey",
        TMode
      > & { functionName?: "setKey" }
    : UseContractWriteConfig<typeof nestedActionExecutorABI, "setKey", TMode> & {
        abi?: never;
        functionName?: "setKey";
      } = {} as any,
) {
  return useContractWrite<typeof nestedActionExecutorABI, "setKey", TMode>({
    abi: nestedActionExecutorABI,
    functionName: "setKey",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__.
 */
export function usePrepareNestedActionExecutorWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof nestedActionExecutorABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: nestedActionExecutorABI, ...config } as UsePrepareContractWriteConfig<
    typeof nestedActionExecutorABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"execute"`.
 */
export function usePrepareNestedActionExecutorExecute(
  config: Omit<
    UsePrepareContractWriteConfig<typeof nestedActionExecutorABI, "execute">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: nestedActionExecutorABI,
    functionName: "execute",
    ...config,
  } as UsePrepareContractWriteConfig<typeof nestedActionExecutorABI, "execute">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"failed"`.
 */
export function usePrepareNestedActionExecutorFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof nestedActionExecutorABI, "failed">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: nestedActionExecutorABI,
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof nestedActionExecutorABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `functionName` set to `"setKey"`.
 */
export function usePrepareNestedActionExecutorSetKey(
  config: Omit<
    UsePrepareContractWriteConfig<typeof nestedActionExecutorABI, "setKey">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: nestedActionExecutorABI,
    functionName: "setKey",
    ...config,
  } as UsePrepareContractWriteConfig<typeof nestedActionExecutorABI, "setKey">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__.
 */
export function useNestedActionExecutorEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: nestedActionExecutorABI, ...config } as UseContractEventConfig<
    typeof nestedActionExecutorABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log"`.
 */
export function useNestedActionExecutorLogEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: nestedActionExecutorABI, eventName: "log", ...config } as UseContractEventConfig<
    typeof nestedActionExecutorABI,
    "log"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_address"`.
 */
export function useNestedActionExecutorLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_address",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_array"`.
 */
export function useNestedActionExecutorLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: nestedActionExecutorABI, eventName: "log_array", ...config } as UseContractEventConfig<
    typeof nestedActionExecutorABI,
    "log_array"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_bytes"`.
 */
export function useNestedActionExecutorLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: nestedActionExecutorABI, eventName: "log_bytes", ...config } as UseContractEventConfig<
    typeof nestedActionExecutorABI,
    "log_bytes"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function useNestedActionExecutorLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_bytes32",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_int"`.
 */
export function useNestedActionExecutorLogIntEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: nestedActionExecutorABI, eventName: "log_int", ...config } as UseContractEventConfig<
    typeof nestedActionExecutorABI,
    "log_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_address"`.
 */
export function useNestedActionExecutorLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_address">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_address",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_array"`.
 */
export function useNestedActionExecutorLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_array">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_array",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function useNestedActionExecutorLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_bytes">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_bytes",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function useNestedActionExecutorLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_bytes32">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_bytes32",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function useNestedActionExecutorLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_decimal_int">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function useNestedActionExecutorLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_decimal_uint">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_int"`.
 */
export function useNestedActionExecutorLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_int">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_int",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_string"`.
 */
export function useNestedActionExecutorLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_string">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_string",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function useNestedActionExecutorLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_uint">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_named_uint",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_named_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_string"`.
 */
export function useNestedActionExecutorLogStringEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: nestedActionExecutorABI,
    eventName: "log_string",
    ...config,
  } as UseContractEventConfig<typeof nestedActionExecutorABI, "log_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"log_uint"`.
 */
export function useNestedActionExecutorLogUintEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "log_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: nestedActionExecutorABI, eventName: "log_uint", ...config } as UseContractEventConfig<
    typeof nestedActionExecutorABI,
    "log_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nestedActionExecutorABI}__ and `eventName` set to `"logs"`.
 */
export function useNestedActionExecutorLogsEvent(
  config: Omit<UseContractEventConfig<typeof nestedActionExecutorABI, "logs">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: nestedActionExecutorABI, eventName: "logs", ...config } as UseContractEventConfig<
    typeof nestedActionExecutorABI,
    "logs"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link outOfBoundsProtocolFeeControllerTestABI}__.
 */
export function useOutOfBoundsProtocolFeeControllerTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof outOfBoundsProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof outOfBoundsProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any,
) {
  return useContractRead({ abi: outOfBoundsProtocolFeeControllerTestABI, ...config } as UseContractReadConfig<
    typeof outOfBoundsProtocolFeeControllerTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link outOfBoundsProtocolFeeControllerTestABI}__ and `functionName` set to `"protocolFeeForPool"`.
 */
export function useOutOfBoundsProtocolFeeControllerTestProtocolFeeForPool<
  TFunctionName extends "protocolFeeForPool",
  TSelectData = ReadContractResult<typeof outOfBoundsProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof outOfBoundsProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: outOfBoundsProtocolFeeControllerTestABI,
    functionName: "protocolFeeForPool",
    ...config,
  } as UseContractReadConfig<typeof outOfBoundsProtocolFeeControllerTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link overflowProtocolFeeControllerTestABI}__.
 */
export function useOverflowProtocolFeeControllerTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof overflowProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof overflowProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any,
) {
  return useContractRead({ abi: overflowProtocolFeeControllerTestABI, ...config } as UseContractReadConfig<
    typeof overflowProtocolFeeControllerTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link overflowProtocolFeeControllerTestABI}__ and `functionName` set to `"protocolFeeForPool"`.
 */
export function useOverflowProtocolFeeControllerTestProtocolFeeForPool<
  TFunctionName extends "protocolFeeForPool",
  TSelectData = ReadContractResult<typeof overflowProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof overflowProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: overflowProtocolFeeControllerTestABI,
    functionName: "protocolFeeForPool",
    ...config,
  } as UseContractReadConfig<typeof overflowProtocolFeeControllerTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownedABI}__.
 */
export function useOwnedRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ownedABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof ownedABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: ownedABI, ...config } as UseContractReadConfig<
    typeof ownedABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ownedABI}__ and `functionName` set to `"owner"`.
 */
export function useOwnedOwner<
  TFunctionName extends "owner",
  TSelectData = ReadContractResult<typeof ownedABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof ownedABI, TFunctionName, TSelectData>, "abi" | "functionName"> = {} as any,
) {
  return useContractRead({ abi: ownedABI, functionName: "owner", ...config } as UseContractReadConfig<
    typeof ownedABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownedABI}__.
 */
export function useOwnedWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownedABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof ownedABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof ownedABI, TFunctionName, TMode>({ abi: ownedABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ownedABI}__ and `functionName` set to `"setOwner"`.
 */
export function useOwnedSetOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof ownedABI, "setOwner">["request"]["abi"],
        "setOwner",
        TMode
      > & { functionName?: "setOwner" }
    : UseContractWriteConfig<typeof ownedABI, "setOwner", TMode> & {
        abi?: never;
        functionName?: "setOwner";
      } = {} as any,
) {
  return useContractWrite<typeof ownedABI, "setOwner", TMode>({
    abi: ownedABI,
    functionName: "setOwner",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownedABI}__.
 */
export function usePrepareOwnedWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof ownedABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: ownedABI, ...config } as UsePrepareContractWriteConfig<
    typeof ownedABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ownedABI}__ and `functionName` set to `"setOwner"`.
 */
export function usePrepareOwnedSetOwner(
  config: Omit<UsePrepareContractWriteConfig<typeof ownedABI, "setOwner">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: ownedABI,
    functionName: "setOwner",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ownedABI, "setOwner">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownedABI}__.
 */
export function useOwnedEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof ownedABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: ownedABI, ...config } as UseContractEventConfig<typeof ownedABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ownedABI}__ and `eventName` set to `"OwnerChanged"`.
 */
export function useOwnedOwnerChangedEvent(
  config: Omit<UseContractEventConfig<typeof ownedABI, "OwnerChanged">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: ownedABI, eventName: "OwnerChanged", ...config } as UseContractEventConfig<
    typeof ownedABI,
    "OwnerChanged"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolClaimsTestABI}__.
 */
export function usePoolClaimsTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolClaimsTestABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof poolClaimsTestABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: poolClaimsTestABI, ...config } as UseContractReadConfig<
    typeof poolClaimsTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function usePoolClaimsTestIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof poolClaimsTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolClaimsTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: poolClaimsTestABI, functionName: "IS_TEST", ...config } as UseContractReadConfig<
    typeof poolClaimsTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"manager"`.
 */
export function usePoolClaimsTestManager<
  TFunctionName extends "manager",
  TSelectData = ReadContractResult<typeof poolClaimsTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolClaimsTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: poolClaimsTestABI, functionName: "manager", ...config } as UseContractReadConfig<
    typeof poolClaimsTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__.
 */
export function usePoolClaimsTestWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolClaimsTestABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof poolClaimsTestABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof poolClaimsTestABI, TFunctionName, TMode>({ abi: poolClaimsTestABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"deposit"`.
 */
export function usePoolClaimsTestDeposit<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolClaimsTestABI, "deposit">["request"]["abi"],
        "deposit",
        TMode
      > & { functionName?: "deposit" }
    : UseContractWriteConfig<typeof poolClaimsTestABI, "deposit", TMode> & {
        abi?: never;
        functionName?: "deposit";
      } = {} as any,
) {
  return useContractWrite<typeof poolClaimsTestABI, "deposit", TMode>({
    abi: poolClaimsTestABI,
    functionName: "deposit",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePoolClaimsTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolClaimsTestABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { functionName?: "failed" }
    : UseContractWriteConfig<typeof poolClaimsTestABI, "failed", TMode> & {
        abi?: never;
        functionName?: "failed";
      } = {} as any,
) {
  return useContractWrite<typeof poolClaimsTestABI, "failed", TMode>({
    abi: poolClaimsTestABI,
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePoolClaimsTestLockAcquired<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolClaimsTestABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof poolClaimsTestABI, "lockAcquired", TMode> & {
        abi?: never;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  return useContractWrite<typeof poolClaimsTestABI, "lockAcquired", TMode>({
    abi: poolClaimsTestABI,
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"withdraw"`.
 */
export function usePoolClaimsTestWithdraw<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolClaimsTestABI, "withdraw">["request"]["abi"],
        "withdraw",
        TMode
      > & { functionName?: "withdraw" }
    : UseContractWriteConfig<typeof poolClaimsTestABI, "withdraw", TMode> & {
        abi?: never;
        functionName?: "withdraw";
      } = {} as any,
) {
  return useContractWrite<typeof poolClaimsTestABI, "withdraw", TMode>({
    abi: poolClaimsTestABI,
    functionName: "withdraw",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__.
 */
export function usePreparePoolClaimsTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolClaimsTestABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: poolClaimsTestABI, ...config } as UsePrepareContractWriteConfig<
    typeof poolClaimsTestABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"deposit"`.
 */
export function usePreparePoolClaimsTestDeposit(
  config: Omit<UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "deposit">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolClaimsTestABI,
    functionName: "deposit",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "deposit">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePreparePoolClaimsTestFailed(
  config: Omit<UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "failed">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolClaimsTestABI,
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePreparePoolClaimsTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "lockAcquired">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolClaimsTestABI,
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "lockAcquired">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolClaimsTestABI}__ and `functionName` set to `"withdraw"`.
 */
export function usePreparePoolClaimsTestWithdraw(
  config: Omit<UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "withdraw">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolClaimsTestABI,
    functionName: "withdraw",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolClaimsTestABI, "withdraw">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__.
 */
export function usePoolClaimsTestEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log"`.
 */
export function usePoolClaimsTestLogEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_address"`.
 */
export function usePoolClaimsTestLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_address", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_address"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_array"`.
 */
export function usePoolClaimsTestLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_array", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_array"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_bytes"`.
 */
export function usePoolClaimsTestLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_bytes", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_bytes"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function usePoolClaimsTestLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_bytes32", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_bytes32"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_int"`.
 */
export function usePoolClaimsTestLogIntEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_int", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_address"`.
 */
export function usePoolClaimsTestLogNamedAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_named_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolClaimsTestABI,
    eventName: "log_named_address",
    ...config,
  } as UseContractEventConfig<typeof poolClaimsTestABI, "log_named_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_array"`.
 */
export function usePoolClaimsTestLogNamedArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_named_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_named_array", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_named_array"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function usePoolClaimsTestLogNamedBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_named_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_named_bytes", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_named_bytes"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function usePoolClaimsTestLogNamedBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_named_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolClaimsTestABI,
    eventName: "log_named_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolClaimsTestABI, "log_named_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function usePoolClaimsTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolClaimsTestABI, "log_named_decimal_int">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolClaimsTestABI,
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof poolClaimsTestABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function usePoolClaimsTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolClaimsTestABI, "log_named_decimal_uint">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolClaimsTestABI,
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof poolClaimsTestABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_int"`.
 */
export function usePoolClaimsTestLogNamedIntEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_named_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_named_int", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_named_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_string"`.
 */
export function usePoolClaimsTestLogNamedStringEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_named_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolClaimsTestABI,
    eventName: "log_named_string",
    ...config,
  } as UseContractEventConfig<typeof poolClaimsTestABI, "log_named_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function usePoolClaimsTestLogNamedUintEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_named_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_named_uint", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_named_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_string"`.
 */
export function usePoolClaimsTestLogStringEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_string", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_string"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"log_uint"`.
 */
export function usePoolClaimsTestLogUintEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "log_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "log_uint", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "log_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolClaimsTestABI}__ and `eventName` set to `"logs"`.
 */
export function usePoolClaimsTestLogsEvent(
  config: Omit<UseContractEventConfig<typeof poolClaimsTestABI, "logs">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolClaimsTestABI, eventName: "logs", ...config } as UseContractEventConfig<
    typeof poolClaimsTestABI,
    "logs"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolDonateTestABI}__.
 *
 *
 */
export function usePoolDonateTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolDonateTestABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>, "abi" | "address"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractRead({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    ...config,
  } as UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"IS_TEST"`.
 *
 *
 */
export function usePoolDonateTestIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof poolDonateTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractRead({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "IS_TEST",
    ...config,
  } as UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"manager"`.
 *
 *
 */
export function usePoolDonateTestManager<
  TFunctionName extends "manager",
  TSelectData = ReadContractResult<typeof poolDonateTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractRead({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "manager",
    ...config,
  } as UseContractReadConfig<typeof poolDonateTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__.
 *
 *
 */
export function usePoolDonateTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolDonateTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolDonateTestABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolDonateTestABI, TFunctionName, TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
      } = {} as any,
) {
  return useContractWrite<typeof poolDonateTestABI, TFunctionName, TMode>({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"donate"`.
 *
 *
 */
export function usePoolDonateTestDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolDonateTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolDonateTestABI, "donate">["request"]["abi"],
        "donate",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "donate" }
    : UseContractWriteConfig<typeof poolDonateTestABI, "donate", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "donate";
      } = {} as any,
) {
  return useContractWrite<typeof poolDonateTestABI, "donate", TMode>({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "donate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"failed"`.
 *
 *
 */
export function usePoolDonateTestFailed<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolDonateTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolDonateTestABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "failed" }
    : UseContractWriteConfig<typeof poolDonateTestABI, "failed", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "failed";
      } = {} as any,
) {
  return useContractWrite<typeof poolDonateTestABI, "failed", TMode>({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 *
 */
export function usePoolDonateTestLockAcquired<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolDonateTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolDonateTestABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof poolDonateTestABI, "lockAcquired", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  return useContractWrite<typeof poolDonateTestABI, "lockAcquired", TMode>({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__.
 *
 *
 */
export function usePreparePoolDonateTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolDonateTestABI, TFunctionName>, "abi" | "address"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolDonateTestABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"donate"`.
 *
 *
 */
export function usePreparePoolDonateTestDonate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolDonateTestABI, "donate">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "donate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolDonateTestABI, "donate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"failed"`.
 *
 *
 */
export function usePreparePoolDonateTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolDonateTestABI, "failed">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolDonateTestABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolDonateTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 *
 */
export function usePreparePoolDonateTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolDonateTestABI, "lockAcquired">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolDonateTestABI, "lockAcquired">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__.
 *
 *
 */
export function usePoolDonateTestEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, TEventName>, "abi" | "address"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log"`.
 *
 *
 */
export function usePoolDonateTestLogEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_address"`.
 *
 *
 */
export function usePoolDonateTestLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_address">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_address",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_array"`.
 *
 *
 */
export function usePoolDonateTestLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_array">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_array",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_bytes"`.
 *
 *
 */
export function usePoolDonateTestLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_bytes">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_bytes32"`.
 *
 *
 */
export function usePoolDonateTestLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_bytes32">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_int"`.
 *
 *
 */
export function usePoolDonateTestLogIntEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_int">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_int",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_address"`.
 *
 *
 */
export function usePoolDonateTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof poolDonateTestABI, "log_named_address">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_address",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_array"`.
 *
 *
 */
export function usePoolDonateTestLogNamedArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_named_array">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_array",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_bytes"`.
 *
 *
 */
export function usePoolDonateTestLogNamedBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_named_bytes">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 *
 *
 */
export function usePoolDonateTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof poolDonateTestABI, "log_named_bytes32">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 *
 *
 */
export function usePoolDonateTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolDonateTestABI, "log_named_decimal_int">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 *
 *
 */
export function usePoolDonateTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolDonateTestABI, "log_named_decimal_uint">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_int"`.
 *
 *
 */
export function usePoolDonateTestLogNamedIntEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_named_int">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_int",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_string"`.
 *
 *
 */
export function usePoolDonateTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof poolDonateTestABI, "log_named_string">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolDonateTestAddress } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_string",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_named_uint"`.
 *
 *
 */
export function usePoolDonateTestLogNamedUintEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_named_uint">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_named_uint",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_named_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_string"`.
 *
 *
 */
export function usePoolDonateTestLogStringEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_string">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_string",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"log_uint"`.
 *
 *
 */
export function usePoolDonateTestLogUintEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "log_uint">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "log_uint",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "log_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolDonateTestABI}__ and `eventName` set to `"logs"`.
 *
 *
 */
export function usePoolDonateTestLogsEvent(
  config: Omit<UseContractEventConfig<typeof poolDonateTestABI, "logs">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolDonateTestAddress;
  } = {} as any,
) {
  return useContractEvent({
    abi: poolDonateTestABI,
    address: poolDonateTestAddress[31337],
    eventName: "logs",
    ...config,
  } as UseContractEventConfig<typeof poolDonateTestABI, "logs">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>, "abi" | "address"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MAX_TICK_SPACING"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerMaxTickSpacing<
  TFunctionName extends "MAX_TICK_SPACING",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "MAX_TICK_SPACING",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerMinProtocolFeeDenominator<
  TFunctionName extends "MIN_PROTOCOL_FEE_DENOMINATOR",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "MIN_PROTOCOL_FEE_DENOMINATOR",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"MIN_TICK_SPACING"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerMinTickSpacing<
  TFunctionName extends "MIN_TICK_SPACING",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "MIN_TICK_SPACING",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"allowance"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "allowance",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"currencyDelta"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerCurrencyDelta<
  TFunctionName extends "currencyDelta",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "currencyDelta",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"extsload"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerExtsload<
  TFunctionName extends "extsload",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "extsload",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerGetLiquidity<
  TFunctionName extends "getLiquidity",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "getLiquidity",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getLockNonzeroDeltaCount"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerGetLockNonzeroDeltaCount<
  TFunctionName extends "getLockNonzeroDeltaCount",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "getLockNonzeroDeltaCount",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getPoolBitmapInfo"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerGetPoolBitmapInfo<
  TFunctionName extends "getPoolBitmapInfo",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "getPoolBitmapInfo",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getPoolTickInfo"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerGetPoolTickInfo<
  TFunctionName extends "getPoolTickInfo",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "getPoolTickInfo",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerGetPosition<
  TFunctionName extends "getPosition",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "getPosition",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"getSlot0"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerGetSlot0<
  TFunctionName extends "getSlot0",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "getSlot0",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"isLockSet"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerIsLockSet<
  TFunctionName extends "isLockSet",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "isLockSet",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"isOperator"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerIsOperator<
  TFunctionName extends "isOperator",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "isOperator",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"owner"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerOwner<
  TFunctionName extends "owner",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "owner",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"pools"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerPools<
  TFunctionName extends "pools",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "pools",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"protocolFeeController"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerProtocolFeeController<
  TFunctionName extends "protocolFeeController",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "protocolFeeController",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerProtocolFeesAccrued<
  TFunctionName extends "protocolFeesAccrued",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "protocolFeesAccrued",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"reservesOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerReservesOf<
  TFunctionName extends "reservesOf",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "reservesOf",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSupportsInterface<
  TFunctionName extends "supportsInterface",
  TSelectData = ReadContractResult<typeof poolManagerABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "supportsInterface",
    ...config,
  } as UseContractReadConfig<typeof poolManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolManagerABI, TFunctionName, TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, TFunctionName, TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerApprove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "approve" }
    : UseContractWriteConfig<typeof poolManagerABI, "approve", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "approve";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "approve", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"burn"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerBurn<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "burn">["request"]["abi"],
        "burn",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "burn" }
    : UseContractWriteConfig<typeof poolManagerABI, "burn", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "burn";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "burn", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "burn",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectProtocolFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerCollectProtocolFees<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "collectProtocolFees">["request"]["abi"],
        "collectProtocolFees",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "collectProtocolFees" }
    : UseContractWriteConfig<typeof poolManagerABI, "collectProtocolFees", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "collectProtocolFees";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "collectProtocolFees", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "collectProtocolFees",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"donate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerDonate<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "donate">["request"]["abi"],
        "donate",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "donate" }
    : UseContractWriteConfig<typeof poolManagerABI, "donate", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "donate";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "donate", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "donate",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "initialize">["request"]["abi"],
        "initialize",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "initialize" }
    : UseContractWriteConfig<typeof poolManagerABI, "initialize", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "initialize";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "initialize", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "initialize",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lock"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerLock<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "lock">["request"]["abi"],
        "lock",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "lock" }
    : UseContractWriteConfig<typeof poolManagerABI, "lock", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "lock";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "lock", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "lock",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerMint<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "mint">["request"]["abi"],
        "mint",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "mint" }
    : UseContractWriteConfig<typeof poolManagerABI, "mint", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "mint";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "mint", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "mint",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"modifyLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerModifyLiquidity<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "modifyLiquidity">["request"]["abi"],
        "modifyLiquidity",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "modifyLiquidity" }
    : UseContractWriteConfig<typeof poolManagerABI, "modifyLiquidity", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "modifyLiquidity";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "modifyLiquidity", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "modifyLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOperator"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSetOperator<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "setOperator">["request"]["abi"],
        "setOperator",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "setOperator" }
    : UseContractWriteConfig<typeof poolManagerABI, "setOperator", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "setOperator";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "setOperator", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setOperator",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOwner"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSetOwner<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "setOwner">["request"]["abi"],
        "setOwner",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "setOwner" }
    : UseContractWriteConfig<typeof poolManagerABI, "setOwner", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "setOwner";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "setOwner", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setOwner",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSetProtocolFee<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "setProtocolFee">["request"]["abi"],
        "setProtocolFee",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "setProtocolFee" }
    : UseContractWriteConfig<typeof poolManagerABI, "setProtocolFee", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "setProtocolFee";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "setProtocolFee", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setProtocolFee",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFeeController"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSetProtocolFeeController<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "setProtocolFeeController">["request"]["abi"],
        "setProtocolFeeController",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "setProtocolFeeController" }
    : UseContractWriteConfig<typeof poolManagerABI, "setProtocolFeeController", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "setProtocolFeeController";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "setProtocolFeeController", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setProtocolFeeController",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"settle"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSettle<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "settle">["request"]["abi"],
        "settle",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "settle" }
    : UseContractWriteConfig<typeof poolManagerABI, "settle", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "settle";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "settle", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "settle",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSwap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "swap">["request"]["abi"],
        "swap",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "swap" }
    : UseContractWriteConfig<typeof poolManagerABI, "swap", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "swap";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "swap", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "swap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"take"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerTake<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "take">["request"]["abi"],
        "take",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "take" }
    : UseContractWriteConfig<typeof poolManagerABI, "take", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "take";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "take", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "take",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerTransfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "transfer" }
    : UseContractWriteConfig<typeof poolManagerABI, "transfer", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "transfer";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "transfer", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof poolManagerABI, "transferFrom", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "transferFrom";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "transferFrom", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerUpdateDynamicSwapFee<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolManagerAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolManagerABI, "updateDynamicSwapFee">["request"]["abi"],
        "updateDynamicSwapFee",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "updateDynamicSwapFee" }
    : UseContractWriteConfig<typeof poolManagerABI, "updateDynamicSwapFee", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "updateDynamicSwapFee";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolManagerABI, "updateDynamicSwapFee", TMode>({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "updateDynamicSwapFee",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, TFunctionName>, "abi" | "address"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "approve">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"burn"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerBurn(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "burn">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "burn",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "burn">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"collectProtocolFees"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerCollectProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "collectProtocolFees">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "collectProtocolFees",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "collectProtocolFees">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"donate"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerDonate(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "donate">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "donate",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "donate">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "initialize">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "initialize",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "initialize">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"lock"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerLock(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "lock">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "lock",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "lock">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerMint(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "mint">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "mint",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "mint">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"modifyLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerModifyLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "modifyLiquidity">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "modifyLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "modifyLiquidity">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOperator"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerSetOperator(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "setOperator">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setOperator",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "setOperator">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setOwner"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerSetOwner(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "setOwner">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setOwner",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "setOwner">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerSetProtocolFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "setProtocolFee">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setProtocolFee",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "setProtocolFee">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"setProtocolFeeController"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerSetProtocolFeeController(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "setProtocolFeeController">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "setProtocolFeeController",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "setProtocolFeeController">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"settle"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerSettle(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "settle">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "settle",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "settle">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "swap">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "swap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "swap">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"take"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerTake(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "take">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "take",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "take">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof poolManagerABI, "transfer">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "transferFrom">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "transferFrom">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolManagerABI}__ and `functionName` set to `"updateDynamicSwapFee"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePreparePoolManagerUpdateDynamicSwapFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolManagerABI, "updateDynamicSwapFee">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    functionName: "updateDynamicSwapFee",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolManagerABI, "updateDynamicSwapFee">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, TEventName>, "abi" | "address"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerApprovalEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "Approval">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "Approval",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "Approval">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerInitializeEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "Initialize">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "Initialize",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "Initialize">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ModifyLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerModifyLiquidityEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "ModifyLiquidity">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "ModifyLiquidity",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "ModifyLiquidity">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"OperatorSet"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerOperatorSetEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "OperatorSet">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "OperatorSet",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "OperatorSet">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"OwnerChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerOwnerChangedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "OwnerChanged">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "OwnerChanged",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "OwnerChanged">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof poolManagerABI, "ProtocolFeeControllerUpdated">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolManagerAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "ProtocolFeeControllerUpdated",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "ProtocolFeeControllerUpdated">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"ProtocolFeeUpdated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerProtocolFeeUpdatedEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "ProtocolFeeUpdated">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "ProtocolFeeUpdated",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "ProtocolFeeUpdated">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerSwapEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "Swap">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "Swap",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "Swap">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolManagerABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export function usePoolManagerTransferEvent(
  config: Omit<UseContractEventConfig<typeof poolManagerABI, "Transfer">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolManagerAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolManagerABI,
    address: poolManagerAddress[chainId as keyof typeof poolManagerAddress],
    eventName: "Transfer",
    ...config,
  } as UseContractEventConfig<typeof poolManagerABI, "Transfer">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolModifyLiquidityTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolModifyLiquidityTestABI, TFunctionName, TSelectData>,
    "abi" | "address"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    ...config,
  } as UseContractReadConfig<typeof poolModifyLiquidityTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"IS_TEST"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof poolModifyLiquidityTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolModifyLiquidityTestABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "IS_TEST",
    ...config,
  } as UseContractReadConfig<typeof poolModifyLiquidityTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"manager"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestManager<
  TFunctionName extends "manager",
  TSelectData = ReadContractResult<typeof poolModifyLiquidityTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolModifyLiquidityTestABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "manager",
    ...config,
  } as UseContractReadConfig<typeof poolModifyLiquidityTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolModifyLiquidityTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolModifyLiquidityTestABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolModifyLiquidityTestABI, TFunctionName, TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolModifyLiquidityTestABI, TFunctionName, TMode>({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"failed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestFailed<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolModifyLiquidityTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolModifyLiquidityTestABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "failed" }
    : UseContractWriteConfig<typeof poolModifyLiquidityTestABI, "failed", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "failed";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolModifyLiquidityTestABI, "failed", TMode>({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLockAcquired<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolModifyLiquidityTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolModifyLiquidityTestABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof poolModifyLiquidityTestABI, "lockAcquired", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolModifyLiquidityTestABI, "lockAcquired", TMode>({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"modifyLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestModifyLiquidity<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolModifyLiquidityTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolModifyLiquidityTestABI, "modifyLiquidity">["request"]["abi"],
        "modifyLiquidity",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "modifyLiquidity" }
    : UseContractWriteConfig<typeof poolModifyLiquidityTestABI, "modifyLiquidity", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "modifyLiquidity";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolModifyLiquidityTestABI, "modifyLiquidity", TMode>({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "modifyLiquidity",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolModifyLiquidityTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, TFunctionName>, "abi" | "address"> & {
    chainId?: keyof typeof poolModifyLiquidityTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"failed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolModifyLiquidityTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, "failed">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolModifyLiquidityTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, "lockAcquired">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, "lockAcquired">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `functionName` set to `"modifyLiquidity"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePreparePoolModifyLiquidityTestModifyLiquidity(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, "modifyLiquidity">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    functionName: "modifyLiquidity",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolModifyLiquidityTestABI, "modifyLiquidity">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolModifyLiquidityTestABI, TEventName>, "abi" | "address"> & {
    chainId?: keyof typeof poolModifyLiquidityTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogEvent(
  config: Omit<UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolModifyLiquidityTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_address"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_address">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_address",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_array"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_array">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_array",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_bytes"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_bytes">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_bytes32"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_bytes32">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_int"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_int">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_int",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_address"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_address">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_address",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_array"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_array">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_array",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_bytes"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_bytes">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_bytes32">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_decimal_int">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_decimal_uint">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_int"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_int">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_int",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_string"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_string">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_string",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_named_uint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_uint">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_named_uint",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_named_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_string"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogStringEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_string">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_string",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"log_uint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_uint">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolModifyLiquidityTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "log_uint",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "log_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolModifyLiquidityTestABI}__ and `eventName` set to `"logs"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export function usePoolModifyLiquidityTestLogsEvent(
  config: Omit<UseContractEventConfig<typeof poolModifyLiquidityTestABI, "logs">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolModifyLiquidityTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolModifyLiquidityTestABI,
    address: poolModifyLiquidityTestAddress[chainId as keyof typeof poolModifyLiquidityTestAddress],
    eventName: "logs",
    ...config,
  } as UseContractEventConfig<typeof poolModifyLiquidityTestABI, "logs">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolNestedActionsTestABI}__.
 */
export function usePoolNestedActionsTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolNestedActionsTestABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof poolNestedActionsTestABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: poolNestedActionsTestABI, ...config } as UseContractReadConfig<
    typeof poolNestedActionsTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function usePoolNestedActionsTestIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof poolNestedActionsTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolNestedActionsTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: poolNestedActionsTestABI, functionName: "IS_TEST", ...config } as UseContractReadConfig<
    typeof poolNestedActionsTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"executor"`.
 */
export function usePoolNestedActionsTestExecutor<
  TFunctionName extends "executor",
  TSelectData = ReadContractResult<typeof poolNestedActionsTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolNestedActionsTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: poolNestedActionsTestABI,
    functionName: "executor",
    ...config,
  } as UseContractReadConfig<typeof poolNestedActionsTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__.
 */
export function usePoolNestedActionsTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolNestedActionsTestABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof poolNestedActionsTestABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof poolNestedActionsTestABI, TFunctionName, TMode>({
    abi: poolNestedActionsTestABI,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePoolNestedActionsTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolNestedActionsTestABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { functionName?: "failed" }
    : UseContractWriteConfig<typeof poolNestedActionsTestABI, "failed", TMode> & {
        abi?: never;
        functionName?: "failed";
      } = {} as any,
) {
  return useContractWrite<typeof poolNestedActionsTestABI, "failed", TMode>({
    abi: poolNestedActionsTestABI,
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"lock"`.
 */
export function usePoolNestedActionsTestLock<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolNestedActionsTestABI, "lock">["request"]["abi"],
        "lock",
        TMode
      > & { functionName?: "lock" }
    : UseContractWriteConfig<typeof poolNestedActionsTestABI, "lock", TMode> & {
        abi?: never;
        functionName?: "lock";
      } = {} as any,
) {
  return useContractWrite<typeof poolNestedActionsTestABI, "lock", TMode>({
    abi: poolNestedActionsTestABI,
    functionName: "lock",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePoolNestedActionsTestLockAcquired<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolNestedActionsTestABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof poolNestedActionsTestABI, "lockAcquired", TMode> & {
        abi?: never;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  return useContractWrite<typeof poolNestedActionsTestABI, "lockAcquired", TMode>({
    abi: poolNestedActionsTestABI,
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__.
 */
export function usePreparePoolNestedActionsTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolNestedActionsTestABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: poolNestedActionsTestABI, ...config } as UsePrepareContractWriteConfig<
    typeof poolNestedActionsTestABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePreparePoolNestedActionsTestFailed(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolNestedActionsTestABI, "failed">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolNestedActionsTestABI,
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolNestedActionsTestABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"lock"`.
 */
export function usePreparePoolNestedActionsTestLock(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolNestedActionsTestABI, "lock">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolNestedActionsTestABI,
    functionName: "lock",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolNestedActionsTestABI, "lock">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePreparePoolNestedActionsTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolNestedActionsTestABI, "lockAcquired">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolNestedActionsTestABI,
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolNestedActionsTestABI, "lockAcquired">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__.
 */
export function usePoolNestedActionsTestEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: poolNestedActionsTestABI, ...config } as UseContractEventConfig<
    typeof poolNestedActionsTestABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log"`.
 */
export function usePoolNestedActionsTestLogEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolNestedActionsTestABI, eventName: "log", ...config } as UseContractEventConfig<
    typeof poolNestedActionsTestABI,
    "log"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_address"`.
 */
export function usePoolNestedActionsTestLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_address",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_array"`.
 */
export function usePoolNestedActionsTestLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_array",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_bytes"`.
 */
export function usePoolNestedActionsTestLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function usePoolNestedActionsTestLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_int"`.
 */
export function usePoolNestedActionsTestLogIntEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolNestedActionsTestABI, eventName: "log_int", ...config } as UseContractEventConfig<
    typeof poolNestedActionsTestABI,
    "log_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_address"`.
 */
export function usePoolNestedActionsTestLogNamedAddressEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_address">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_address",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_array"`.
 */
export function usePoolNestedActionsTestLogNamedArrayEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_array">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_array",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function usePoolNestedActionsTestLogNamedBytesEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_bytes">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function usePoolNestedActionsTestLogNamedBytes32Event(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_bytes32">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function usePoolNestedActionsTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_decimal_int">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function usePoolNestedActionsTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_decimal_uint">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_int"`.
 */
export function usePoolNestedActionsTestLogNamedIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_int">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_int",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_string"`.
 */
export function usePoolNestedActionsTestLogNamedStringEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_string">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_string",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function usePoolNestedActionsTestLogNamedUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_uint">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_named_uint",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_named_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_string"`.
 */
export function usePoolNestedActionsTestLogStringEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({
    abi: poolNestedActionsTestABI,
    eventName: "log_string",
    ...config,
  } as UseContractEventConfig<typeof poolNestedActionsTestABI, "log_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"log_uint"`.
 */
export function usePoolNestedActionsTestLogUintEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "log_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolNestedActionsTestABI, eventName: "log_uint", ...config } as UseContractEventConfig<
    typeof poolNestedActionsTestABI,
    "log_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolNestedActionsTestABI}__ and `eventName` set to `"logs"`.
 */
export function usePoolNestedActionsTestLogsEvent(
  config: Omit<UseContractEventConfig<typeof poolNestedActionsTestABI, "logs">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolNestedActionsTestABI, eventName: "logs", ...config } as UseContractEventConfig<
    typeof poolNestedActionsTestABI,
    "logs"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolSwapTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolSwapTestABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>, "abi" | "address"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    ...config,
  } as UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"IS_TEST"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof poolSwapTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolSwapTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "IS_TEST",
    ...config,
  } as UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"manager"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestManager<
  TFunctionName extends "manager",
  TSelectData = ReadContractResult<typeof poolSwapTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolSwapTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "manager",
    ...config,
  } as UseContractReadConfig<typeof poolSwapTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolSwapTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolSwapTestABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof poolSwapTestABI, TFunctionName, TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolSwapTestABI, TFunctionName, TMode>({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"failed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestFailed<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolSwapTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolSwapTestABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "failed" }
    : UseContractWriteConfig<typeof poolSwapTestABI, "failed", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "failed";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolSwapTestABI, "failed", TMode>({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLockAcquired<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolSwapTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolSwapTestABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof poolSwapTestABI, "lockAcquired", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolSwapTestABI, "lockAcquired", TMode>({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestSwap<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof poolSwapTestAddress,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolSwapTestABI, "swap">["request"]["abi"],
        "swap",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "swap" }
    : UseContractWriteConfig<typeof poolSwapTestABI, "swap", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "swap";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof poolSwapTestABI, "swap", TMode>({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "swap",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePreparePoolSwapTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolSwapTestABI, TFunctionName>, "abi" | "address"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolSwapTestABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"failed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePreparePoolSwapTestFailed(
  config: Omit<UsePrepareContractWriteConfig<typeof poolSwapTestABI, "failed">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolSwapTestABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"lockAcquired"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePreparePoolSwapTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolSwapTestABI, "lockAcquired">,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof poolSwapTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolSwapTestABI, "lockAcquired">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolSwapTestABI}__ and `functionName` set to `"swap"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePreparePoolSwapTestSwap(
  config: Omit<UsePrepareContractWriteConfig<typeof poolSwapTestABI, "swap">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    functionName: "swap",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolSwapTestABI, "swap">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, TEventName>, "abi" | "address"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_address"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_address">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_address",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_array"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_array">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_array",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_bytes"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_bytes">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_bytes32"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_bytes32">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_int"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogIntEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_int">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_int",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_address"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_named_address">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_address",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_address">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_array"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_named_array">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_array",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_array">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_bytes"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_named_bytes">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_bytes",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_bytes">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_named_bytes32">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_bytes32",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_bytes32">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolSwapTestABI, "log_named_decimal_int">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolSwapTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolSwapTestABI, "log_named_decimal_uint">,
    "abi" | "address" | "eventName"
  > & { chainId?: keyof typeof poolSwapTestAddress } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_int"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedIntEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_named_int">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_int",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_string"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedStringEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_named_string">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_string",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_named_uint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogNamedUintEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_named_uint">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_named_uint",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_named_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_string"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogStringEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_string">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_string",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_string">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"log_uint"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogUintEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "log_uint">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "log_uint",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "log_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolSwapTestABI}__ and `eventName` set to `"logs"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export function usePoolSwapTestLogsEvent(
  config: Omit<UseContractEventConfig<typeof poolSwapTestABI, "logs">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof poolSwapTestAddress;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: poolSwapTestABI,
    address: poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress],
    eventName: "logs",
    ...config,
  } as UseContractEventConfig<typeof poolSwapTestABI, "logs">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolTakeTestABI}__.
 */
export function usePoolTakeTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolTakeTestABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof poolTakeTestABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: poolTakeTestABI, ...config } as UseContractReadConfig<
    typeof poolTakeTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function usePoolTakeTestIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof poolTakeTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolTakeTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: poolTakeTestABI, functionName: "IS_TEST", ...config } as UseContractReadConfig<
    typeof poolTakeTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"manager"`.
 */
export function usePoolTakeTestManager<
  TFunctionName extends "manager",
  TSelectData = ReadContractResult<typeof poolTakeTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolTakeTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: poolTakeTestABI, functionName: "manager", ...config } as UseContractReadConfig<
    typeof poolTakeTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__.
 */
export function usePoolTakeTestWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolTakeTestABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof poolTakeTestABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof poolTakeTestABI, TFunctionName, TMode>({ abi: poolTakeTestABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePoolTakeTestFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolTakeTestABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { functionName?: "failed" }
    : UseContractWriteConfig<typeof poolTakeTestABI, "failed", TMode> & {
        abi?: never;
        functionName?: "failed";
      } = {} as any,
) {
  return useContractWrite<typeof poolTakeTestABI, "failed", TMode>({
    abi: poolTakeTestABI,
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePoolTakeTestLockAcquired<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolTakeTestABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof poolTakeTestABI, "lockAcquired", TMode> & {
        abi?: never;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  return useContractWrite<typeof poolTakeTestABI, "lockAcquired", TMode>({
    abi: poolTakeTestABI,
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"take"`.
 */
export function usePoolTakeTestTake<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolTakeTestABI, "take">["request"]["abi"],
        "take",
        TMode
      > & { functionName?: "take" }
    : UseContractWriteConfig<typeof poolTakeTestABI, "take", TMode> & {
        abi?: never;
        functionName?: "take";
      } = {} as any,
) {
  return useContractWrite<typeof poolTakeTestABI, "take", TMode>({
    abi: poolTakeTestABI,
    functionName: "take",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__.
 */
export function usePreparePoolTakeTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolTakeTestABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: poolTakeTestABI, ...config } as UsePrepareContractWriteConfig<
    typeof poolTakeTestABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"failed"`.
 */
export function usePreparePoolTakeTestFailed(
  config: Omit<UsePrepareContractWriteConfig<typeof poolTakeTestABI, "failed">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolTakeTestABI,
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolTakeTestABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePreparePoolTakeTestLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolTakeTestABI, "lockAcquired">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolTakeTestABI,
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolTakeTestABI, "lockAcquired">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolTakeTestABI}__ and `functionName` set to `"take"`.
 */
export function usePreparePoolTakeTestTake(
  config: Omit<UsePrepareContractWriteConfig<typeof poolTakeTestABI, "take">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolTakeTestABI,
    functionName: "take",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolTakeTestABI, "take">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__.
 */
export function usePoolTakeTestEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log"`.
 */
export function usePoolTakeTestLogEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_address"`.
 */
export function usePoolTakeTestLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_address", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_address"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_array"`.
 */
export function usePoolTakeTestLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_array", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_array"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_bytes"`.
 */
export function usePoolTakeTestLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_bytes", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_bytes"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function usePoolTakeTestLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_bytes32", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_bytes32"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_int"`.
 */
export function usePoolTakeTestLogIntEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_int", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_address"`.
 */
export function usePoolTakeTestLogNamedAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_named_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_named_address", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_named_address"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_array"`.
 */
export function usePoolTakeTestLogNamedArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_named_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_named_array", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_named_array"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function usePoolTakeTestLogNamedBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_named_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_named_bytes", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_named_bytes"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function usePoolTakeTestLogNamedBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_named_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_named_bytes32", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_named_bytes32"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function usePoolTakeTestLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolTakeTestABI, "log_named_decimal_int">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolTakeTestABI,
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof poolTakeTestABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function usePoolTakeTestLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolTakeTestABI, "log_named_decimal_uint">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolTakeTestABI,
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof poolTakeTestABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_int"`.
 */
export function usePoolTakeTestLogNamedIntEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_named_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_named_int", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_named_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_string"`.
 */
export function usePoolTakeTestLogNamedStringEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_named_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_named_string", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_named_string"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function usePoolTakeTestLogNamedUintEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_named_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_named_uint", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_named_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_string"`.
 */
export function usePoolTakeTestLogStringEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_string", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_string"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"log_uint"`.
 */
export function usePoolTakeTestLogUintEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "log_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "log_uint", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "log_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTakeTestABI}__ and `eventName` set to `"logs"`.
 */
export function usePoolTakeTestLogsEvent(
  config: Omit<UseContractEventConfig<typeof poolTakeTestABI, "logs">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTakeTestABI, eventName: "logs", ...config } as UseContractEventConfig<
    typeof poolTakeTestABI,
    "logs"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolTestBaseABI}__.
 */
export function usePoolTestBaseRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof poolTestBaseABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof poolTestBaseABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: poolTestBaseABI, ...config } as UseContractReadConfig<
    typeof poolTestBaseABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolTestBaseABI}__ and `functionName` set to `"IS_TEST"`.
 */
export function usePoolTestBaseIsTest<
  TFunctionName extends "IS_TEST",
  TSelectData = ReadContractResult<typeof poolTestBaseABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolTestBaseABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: poolTestBaseABI, functionName: "IS_TEST", ...config } as UseContractReadConfig<
    typeof poolTestBaseABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link poolTestBaseABI}__ and `functionName` set to `"manager"`.
 */
export function usePoolTestBaseManager<
  TFunctionName extends "manager",
  TSelectData = ReadContractResult<typeof poolTestBaseABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof poolTestBaseABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: poolTestBaseABI, functionName: "manager", ...config } as UseContractReadConfig<
    typeof poolTestBaseABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolTestBaseABI}__.
 */
export function usePoolTestBaseWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolTestBaseABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof poolTestBaseABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof poolTestBaseABI, TFunctionName, TMode>({ abi: poolTestBaseABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolTestBaseABI}__ and `functionName` set to `"failed"`.
 */
export function usePoolTestBaseFailed<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolTestBaseABI, "failed">["request"]["abi"],
        "failed",
        TMode
      > & { functionName?: "failed" }
    : UseContractWriteConfig<typeof poolTestBaseABI, "failed", TMode> & {
        abi?: never;
        functionName?: "failed";
      } = {} as any,
) {
  return useContractWrite<typeof poolTestBaseABI, "failed", TMode>({
    abi: poolTestBaseABI,
    functionName: "failed",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link poolTestBaseABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePoolTestBaseLockAcquired<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof poolTestBaseABI, "lockAcquired">["request"]["abi"],
        "lockAcquired",
        TMode
      > & { functionName?: "lockAcquired" }
    : UseContractWriteConfig<typeof poolTestBaseABI, "lockAcquired", TMode> & {
        abi?: never;
        functionName?: "lockAcquired";
      } = {} as any,
) {
  return useContractWrite<typeof poolTestBaseABI, "lockAcquired", TMode>({
    abi: poolTestBaseABI,
    functionName: "lockAcquired",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolTestBaseABI}__.
 */
export function usePreparePoolTestBaseWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof poolTestBaseABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: poolTestBaseABI, ...config } as UsePrepareContractWriteConfig<
    typeof poolTestBaseABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolTestBaseABI}__ and `functionName` set to `"failed"`.
 */
export function usePreparePoolTestBaseFailed(
  config: Omit<UsePrepareContractWriteConfig<typeof poolTestBaseABI, "failed">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolTestBaseABI,
    functionName: "failed",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolTestBaseABI, "failed">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link poolTestBaseABI}__ and `functionName` set to `"lockAcquired"`.
 */
export function usePreparePoolTestBaseLockAcquired(
  config: Omit<
    UsePrepareContractWriteConfig<typeof poolTestBaseABI, "lockAcquired">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: poolTestBaseABI,
    functionName: "lockAcquired",
    ...config,
  } as UsePrepareContractWriteConfig<typeof poolTestBaseABI, "lockAcquired">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__.
 */
export function usePoolTestBaseEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log"`.
 */
export function usePoolTestBaseLogEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_address"`.
 */
export function usePoolTestBaseLogAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_address", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_address"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_array"`.
 */
export function usePoolTestBaseLogArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_array", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_array"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_bytes"`.
 */
export function usePoolTestBaseLogBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_bytes", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_bytes"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_bytes32"`.
 */
export function usePoolTestBaseLogBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_bytes32", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_bytes32"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_int"`.
 */
export function usePoolTestBaseLogIntEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_int", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_address"`.
 */
export function usePoolTestBaseLogNamedAddressEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_named_address">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_named_address", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_named_address"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_array"`.
 */
export function usePoolTestBaseLogNamedArrayEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_named_array">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_named_array", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_named_array"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_bytes"`.
 */
export function usePoolTestBaseLogNamedBytesEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_named_bytes">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_named_bytes", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_named_bytes"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_bytes32"`.
 */
export function usePoolTestBaseLogNamedBytes32Event(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_named_bytes32">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_named_bytes32", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_named_bytes32"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_decimal_int"`.
 */
export function usePoolTestBaseLogNamedDecimalIntEvent(
  config: Omit<
    UseContractEventConfig<typeof poolTestBaseABI, "log_named_decimal_int">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolTestBaseABI,
    eventName: "log_named_decimal_int",
    ...config,
  } as UseContractEventConfig<typeof poolTestBaseABI, "log_named_decimal_int">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_decimal_uint"`.
 */
export function usePoolTestBaseLogNamedDecimalUintEvent(
  config: Omit<
    UseContractEventConfig<typeof poolTestBaseABI, "log_named_decimal_uint">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: poolTestBaseABI,
    eventName: "log_named_decimal_uint",
    ...config,
  } as UseContractEventConfig<typeof poolTestBaseABI, "log_named_decimal_uint">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_int"`.
 */
export function usePoolTestBaseLogNamedIntEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_named_int">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_named_int", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_named_int"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_string"`.
 */
export function usePoolTestBaseLogNamedStringEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_named_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_named_string", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_named_string"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_named_uint"`.
 */
export function usePoolTestBaseLogNamedUintEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_named_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_named_uint", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_named_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_string"`.
 */
export function usePoolTestBaseLogStringEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_string">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_string", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_string"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"log_uint"`.
 */
export function usePoolTestBaseLogUintEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "log_uint">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "log_uint", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "log_uint"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link poolTestBaseABI}__ and `eventName` set to `"logs"`.
 */
export function usePoolTestBaseLogsEvent(
  config: Omit<UseContractEventConfig<typeof poolTestBaseABI, "logs">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: poolTestBaseABI, eventName: "logs", ...config } as UseContractEventConfig<
    typeof poolTestBaseABI,
    "logs"
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeeControllerTestABI}__.
 */
export function useProtocolFeeControllerTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof protocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof protocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any,
) {
  return useContractRead({ abi: protocolFeeControllerTestABI, ...config } as UseContractReadConfig<
    typeof protocolFeeControllerTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeeControllerTestABI}__ and `functionName` set to `"protocolFeeForPool"`.
 */
export function useProtocolFeeControllerTestProtocolFeeForPool<
  TFunctionName extends "protocolFeeForPool",
  TSelectData = ReadContractResult<typeof protocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof protocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: protocolFeeControllerTestABI,
    functionName: "protocolFeeForPool",
    ...config,
  } as UseContractReadConfig<typeof protocolFeeControllerTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeeControllerTestABI}__ and `functionName` set to `"swapFeeForPool"`.
 */
export function useProtocolFeeControllerTestSwapFeeForPool<
  TFunctionName extends "swapFeeForPool",
  TSelectData = ReadContractResult<typeof protocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof protocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: protocolFeeControllerTestABI,
    functionName: "swapFeeForPool",
    ...config,
  } as UseContractReadConfig<typeof protocolFeeControllerTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link protocolFeeControllerTestABI}__.
 */
export function useProtocolFeeControllerTestWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof protocolFeeControllerTestABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof protocolFeeControllerTestABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof protocolFeeControllerTestABI, TFunctionName, TMode>({
    abi: protocolFeeControllerTestABI,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link protocolFeeControllerTestABI}__ and `functionName` set to `"setSwapFeeForPool"`.
 */
export function useProtocolFeeControllerTestSetSwapFeeForPool<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof protocolFeeControllerTestABI, "setSwapFeeForPool">["request"]["abi"],
        "setSwapFeeForPool",
        TMode
      > & { functionName?: "setSwapFeeForPool" }
    : UseContractWriteConfig<typeof protocolFeeControllerTestABI, "setSwapFeeForPool", TMode> & {
        abi?: never;
        functionName?: "setSwapFeeForPool";
      } = {} as any,
) {
  return useContractWrite<typeof protocolFeeControllerTestABI, "setSwapFeeForPool", TMode>({
    abi: protocolFeeControllerTestABI,
    functionName: "setSwapFeeForPool",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link protocolFeeControllerTestABI}__.
 */
export function usePrepareProtocolFeeControllerTestWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof protocolFeeControllerTestABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: protocolFeeControllerTestABI, ...config } as UsePrepareContractWriteConfig<
    typeof protocolFeeControllerTestABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link protocolFeeControllerTestABI}__ and `functionName` set to `"setSwapFeeForPool"`.
 */
export function usePrepareProtocolFeeControllerTestSetSwapFeeForPool(
  config: Omit<
    UsePrepareContractWriteConfig<typeof protocolFeeControllerTestABI, "setSwapFeeForPool">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: protocolFeeControllerTestABI,
    functionName: "setSwapFeeForPool",
    ...config,
  } as UsePrepareContractWriteConfig<typeof protocolFeeControllerTestABI, "setSwapFeeForPool">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeesABI}__.
 */
export function useProtocolFeesRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof protocolFeesABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: protocolFeesABI, ...config } as UseContractReadConfig<
    typeof protocolFeesABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"MIN_PROTOCOL_FEE_DENOMINATOR"`.
 */
export function useProtocolFeesMinProtocolFeeDenominator<
  TFunctionName extends "MIN_PROTOCOL_FEE_DENOMINATOR",
  TSelectData = ReadContractResult<typeof protocolFeesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: protocolFeesABI,
    functionName: "MIN_PROTOCOL_FEE_DENOMINATOR",
    ...config,
  } as UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"owner"`.
 */
export function useProtocolFeesOwner<
  TFunctionName extends "owner",
  TSelectData = ReadContractResult<typeof protocolFeesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: protocolFeesABI, functionName: "owner", ...config } as UseContractReadConfig<
    typeof protocolFeesABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"protocolFeeController"`.
 */
export function useProtocolFeesProtocolFeeController<
  TFunctionName extends "protocolFeeController",
  TSelectData = ReadContractResult<typeof protocolFeesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: protocolFeesABI,
    functionName: "protocolFeeController",
    ...config,
  } as UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"protocolFeesAccrued"`.
 */
export function useProtocolFeesProtocolFeesAccrued<
  TFunctionName extends "protocolFeesAccrued",
  TSelectData = ReadContractResult<typeof protocolFeesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: protocolFeesABI,
    functionName: "protocolFeesAccrued",
    ...config,
  } as UseContractReadConfig<typeof protocolFeesABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link protocolFeesABI}__.
 */
export function useProtocolFeesWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof protocolFeesABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof protocolFeesABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any,
) {
  return useContractWrite<typeof protocolFeesABI, TFunctionName, TMode>({ abi: protocolFeesABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"collectProtocolFees"`.
 */
export function useProtocolFeesCollectProtocolFees<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof protocolFeesABI, "collectProtocolFees">["request"]["abi"],
        "collectProtocolFees",
        TMode
      > & { functionName?: "collectProtocolFees" }
    : UseContractWriteConfig<typeof protocolFeesABI, "collectProtocolFees", TMode> & {
        abi?: never;
        functionName?: "collectProtocolFees";
      } = {} as any,
) {
  return useContractWrite<typeof protocolFeesABI, "collectProtocolFees", TMode>({
    abi: protocolFeesABI,
    functionName: "collectProtocolFees",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"setOwner"`.
 */
export function useProtocolFeesSetOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof protocolFeesABI, "setOwner">["request"]["abi"],
        "setOwner",
        TMode
      > & { functionName?: "setOwner" }
    : UseContractWriteConfig<typeof protocolFeesABI, "setOwner", TMode> & {
        abi?: never;
        functionName?: "setOwner";
      } = {} as any,
) {
  return useContractWrite<typeof protocolFeesABI, "setOwner", TMode>({
    abi: protocolFeesABI,
    functionName: "setOwner",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"setProtocolFeeController"`.
 */
export function useProtocolFeesSetProtocolFeeController<TMode extends WriteContractMode = undefined>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof protocolFeesABI, "setProtocolFeeController">["request"]["abi"],
        "setProtocolFeeController",
        TMode
      > & { functionName?: "setProtocolFeeController" }
    : UseContractWriteConfig<typeof protocolFeesABI, "setProtocolFeeController", TMode> & {
        abi?: never;
        functionName?: "setProtocolFeeController";
      } = {} as any,
) {
  return useContractWrite<typeof protocolFeesABI, "setProtocolFeeController", TMode>({
    abi: protocolFeesABI,
    functionName: "setProtocolFeeController",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link protocolFeesABI}__.
 */
export function usePrepareProtocolFeesWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof protocolFeesABI, TFunctionName>, "abi"> = {} as any,
) {
  return usePrepareContractWrite({ abi: protocolFeesABI, ...config } as UsePrepareContractWriteConfig<
    typeof protocolFeesABI,
    TFunctionName
  >);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"collectProtocolFees"`.
 */
export function usePrepareProtocolFeesCollectProtocolFees(
  config: Omit<
    UsePrepareContractWriteConfig<typeof protocolFeesABI, "collectProtocolFees">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: protocolFeesABI,
    functionName: "collectProtocolFees",
    ...config,
  } as UsePrepareContractWriteConfig<typeof protocolFeesABI, "collectProtocolFees">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"setOwner"`.
 */
export function usePrepareProtocolFeesSetOwner(
  config: Omit<UsePrepareContractWriteConfig<typeof protocolFeesABI, "setOwner">, "abi" | "functionName"> = {} as any,
) {
  return usePrepareContractWrite({
    abi: protocolFeesABI,
    functionName: "setOwner",
    ...config,
  } as UsePrepareContractWriteConfig<typeof protocolFeesABI, "setOwner">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link protocolFeesABI}__ and `functionName` set to `"setProtocolFeeController"`.
 */
export function usePrepareProtocolFeesSetProtocolFeeController(
  config: Omit<
    UsePrepareContractWriteConfig<typeof protocolFeesABI, "setProtocolFeeController">,
    "abi" | "functionName"
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: protocolFeesABI,
    functionName: "setProtocolFeeController",
    ...config,
  } as UsePrepareContractWriteConfig<typeof protocolFeesABI, "setProtocolFeeController">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link protocolFeesABI}__.
 */
export function useProtocolFeesEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof protocolFeesABI, TEventName>, "abi"> = {} as any,
) {
  return useContractEvent({ abi: protocolFeesABI, ...config } as UseContractEventConfig<
    typeof protocolFeesABI,
    TEventName
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link protocolFeesABI}__ and `eventName` set to `"OwnerChanged"`.
 */
export function useProtocolFeesOwnerChangedEvent(
  config: Omit<UseContractEventConfig<typeof protocolFeesABI, "OwnerChanged">, "abi" | "eventName"> = {} as any,
) {
  return useContractEvent({ abi: protocolFeesABI, eventName: "OwnerChanged", ...config } as UseContractEventConfig<
    typeof protocolFeesABI,
    "OwnerChanged"
  >);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link protocolFeesABI}__ and `eventName` set to `"ProtocolFeeControllerUpdated"`.
 */
export function useProtocolFeesProtocolFeeControllerUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof protocolFeesABI, "ProtocolFeeControllerUpdated">,
    "abi" | "eventName"
  > = {} as any,
) {
  return useContractEvent({
    abi: protocolFeesABI,
    eventName: "ProtocolFeeControllerUpdated",
    ...config,
  } as UseContractEventConfig<typeof protocolFeesABI, "ProtocolFeeControllerUpdated">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link revertingProtocolFeeControllerTestABI}__.
 */
export function useRevertingProtocolFeeControllerTestRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof revertingProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof revertingProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any,
) {
  return useContractRead({ abi: revertingProtocolFeeControllerTestABI, ...config } as UseContractReadConfig<
    typeof revertingProtocolFeeControllerTestABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link revertingProtocolFeeControllerTestABI}__ and `functionName` set to `"protocolFeeForPool"`.
 */
export function useRevertingProtocolFeeControllerTestProtocolFeeForPool<
  TFunctionName extends "protocolFeeForPool",
  TSelectData = ReadContractResult<typeof revertingProtocolFeeControllerTestABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof revertingProtocolFeeControllerTestABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: revertingProtocolFeeControllerTestABI,
    functionName: "protocolFeeForPool",
    ...config,
  } as UseContractReadConfig<typeof revertingProtocolFeeControllerTestABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link swapFeeLibraryABI}__.
 */
export function useSwapFeeLibraryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof swapFeeLibraryABI, TFunctionName>,
>(config: Omit<UseContractReadConfig<typeof swapFeeLibraryABI, TFunctionName, TSelectData>, "abi"> = {} as any) {
  return useContractRead({ abi: swapFeeLibraryABI, ...config } as UseContractReadConfig<
    typeof swapFeeLibraryABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link swapFeeLibraryABI}__ and `functionName` set to `"DYNAMIC_FEE_FLAG"`.
 */
export function useSwapFeeLibraryDynamicFeeFlag<
  TFunctionName extends "DYNAMIC_FEE_FLAG",
  TSelectData = ReadContractResult<typeof swapFeeLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof swapFeeLibraryABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: swapFeeLibraryABI,
    functionName: "DYNAMIC_FEE_FLAG",
    ...config,
  } as UseContractReadConfig<typeof swapFeeLibraryABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link swapFeeLibraryABI}__ and `functionName` set to `"MAX_SWAP_FEE"`.
 */
export function useSwapFeeLibraryMaxSwapFee<
  TFunctionName extends "MAX_SWAP_FEE",
  TSelectData = ReadContractResult<typeof swapFeeLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof swapFeeLibraryABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({ abi: swapFeeLibraryABI, functionName: "MAX_SWAP_FEE", ...config } as UseContractReadConfig<
    typeof swapFeeLibraryABI,
    TFunctionName,
    TSelectData
  >);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link swapFeeLibraryABI}__ and `functionName` set to `"STATIC_FEE_MASK"`.
 */
export function useSwapFeeLibraryStaticFeeMask<
  TFunctionName extends "STATIC_FEE_MASK",
  TSelectData = ReadContractResult<typeof swapFeeLibraryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof swapFeeLibraryABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any,
) {
  return useContractRead({
    abi: swapFeeLibraryABI,
    functionName: "STATIC_FEE_MASK",
    ...config,
  } as UseContractReadConfig<typeof swapFeeLibraryABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>, "abi" | "address"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"allowance"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Allowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "allowance",
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0BalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"decimals"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Decimals<
  TFunctionName extends "decimals",
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "decimals",
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Name<
  TFunctionName extends "name",
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "name",
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"symbol"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Symbol<
  TFunctionName extends "symbol",
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "symbol",
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"totalSupply"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0TotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<typeof token0ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token0Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "totalSupply",
    ...config,
  } as UseContractReadConfig<typeof token0ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof token0ABI, TFunctionName, TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token0ABI, TFunctionName, TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Approve<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "approve" }
    : UseContractWriteConfig<typeof token0ABI, "approve", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "approve";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token0ABI, "approve", TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Transfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "transfer" }
    : UseContractWriteConfig<typeof token0ABI, "transfer", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "transfer";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token0ABI, "transfer", TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0TransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token0Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token0ABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof token0ABI, "transferFrom", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "transferFrom";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token0ABI, "transferFrom", TMode>({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function usePrepareToken0Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, TFunctionName>, "abi" | "address"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function usePrepareToken0Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, "approve">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function usePrepareToken0Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, "transfer">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token0ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function usePrepareToken0TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof token0ABI, "transferFrom">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof token0ABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token0ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof token0ABI, TEventName>, "abi" | "address"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    ...config,
  } as UseContractEventConfig<typeof token0ABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token0ABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof token0ABI, "Approval">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    eventName: "Approval",
    ...config,
  } as UseContractEventConfig<typeof token0ABI, "Approval">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token0ABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aed99B81255c1d8D7b222A5F16290741B9DcD39)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x841B5A0b3DBc473c8A057E2391014aa4C4751351)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x73666807a1Ed304C2993C72D2b07434a4a561d26)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x5cbA23E581A5cBee77BE4E98Df0bCea74C0B5C9a)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x615bCf3371F7daF8E8f7d26db10e12F0F4830C94)
 */
export function useToken0TransferEvent(
  config: Omit<UseContractEventConfig<typeof token0ABI, "Transfer">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof token0Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: token0ABI,
    address: token0Address[chainId as keyof typeof token0Address],
    eventName: "Transfer",
    ...config,
  } as UseContractEventConfig<typeof token0ABI, "Transfer">);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>, "abi" | "address"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"allowance"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Allowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "allowance",
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1BalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"decimals"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Decimals<
  TFunctionName extends "decimals",
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "decimals",
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Name<
  TFunctionName extends "name",
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "name",
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"symbol"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Symbol<
  TFunctionName extends "symbol",
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "symbol",
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"totalSupply"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1TotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<typeof token1ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>,
    "abi" | "address" | "functionName"
  > & { chainId?: keyof typeof token1Address } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractRead({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "totalSupply",
    ...config,
  } as UseContractReadConfig<typeof token1ABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, string>["request"]["abi"],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof token1ABI, TFunctionName, TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token1ABI, TFunctionName, TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Approve<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, "approve">["request"]["abi"],
        "approve",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "approve" }
    : UseContractWriteConfig<typeof token1ABI, "approve", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "approve";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token1ABI, "approve", TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Transfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, "transfer">["request"]["abi"],
        "transfer",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "transfer" }
    : UseContractWriteConfig<typeof token1ABI, "transfer", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "transfer";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token1ABI, "transfer", TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1TransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof token1Address,
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof token1ABI, "transferFrom">["request"]["abi"],
        "transferFrom",
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: "transferFrom" }
    : UseContractWriteConfig<typeof token1ABI, "transferFrom", TMode> & {
        abi?: never;
        address?: never;
        chainId?: TChainId;
        functionName?: "transferFrom";
      } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractWrite<typeof token1ABI, "transferFrom", TMode>({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function usePrepareToken1Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, TFunctionName>, "abi" | "address"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function usePrepareToken1Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, "approve">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function usePrepareToken1Transfer(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, "transfer">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link token1ABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function usePrepareToken1TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof token1ABI, "transferFrom">, "abi" | "address" | "functionName"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return usePrepareContractWrite({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof token1ABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token1ABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1Event<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof token1ABI, TEventName>, "abi" | "address"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    ...config,
  } as UseContractEventConfig<typeof token1ABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token1ABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1ApprovalEvent(
  config: Omit<UseContractEventConfig<typeof token1ABI, "Approval">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    eventName: "Approval",
    ...config,
  } as UseContractEventConfig<typeof token1ABI, "Approval">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link token1ABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x77513a96372816fBD0Ab84D897cF261656208B18)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x482Bf489989ea9c40aC978739E11f1699384dd7F)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5C038EE8AB7bD7699037E277874F1c611aD0C28F)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x3D5e538D212b05bc4b3F70520189AA3dEA588B1E)
 */
export function useToken1TransferEvent(
  config: Omit<UseContractEventConfig<typeof token1ABI, "Transfer">, "abi" | "address" | "eventName"> & {
    chainId?: keyof typeof token1Address;
  } = {} as any,
) {
  const { chain } = useNetwork();
  const defaultChainId = useChainId();
  const chainId = config.chainId ?? chain?.id ?? defaultChainId;
  return useContractEvent({
    abi: token1ABI,
    address: token1Address[chainId as keyof typeof token1Address],
    eventName: "Transfer",
    ...config,
  } as UseContractEventConfig<typeof token1ABI, "Transfer">);
}
