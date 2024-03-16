import contracts from "~~/config/contracts";
import {
  counterConfig,
  poolManagerConfig,
  poolModifyLiquidityTestConfig,
  poolSwapTestConfig,
} from "~~/generated/generated";

export const TOKEN_ADDRESSES = [{ 31337: contracts.Token0.address }, { 31337: contracts.Token1.address }];

export const DEBUGGABLE_ADDRESSES = [
  { ...counterConfig, name: "Counter" },
  { ...poolManagerConfig, name: "PoolManager" },
  { ...poolModifyLiquidityTestConfig, name: "PoolModifyLiquidityTest" },
  { ...poolSwapTestConfig, name: "PoolSwapTest" },
];
