import {
  counterConfig,
  poolManagerConfig,
  poolModifyLiquidityTestConfig,
  poolSwapTestConfig,
  token0Address,
  token1Address,
} from "~~/generated/generated";

export const TOKEN_ADDRESSES = [{31337: "0x0165878A594ca255338adfa4d48449f69242Eb8F"},{31337:"0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"}];

export const DEBUGGABLE_ADDRESSES = [
  { ...counterConfig, name: "Counter" },
  { ...poolManagerConfig, name: "PoolManager" },
  { ...poolModifyLiquidityTestConfig, name: "PoolModifyLiquidityTest" },
  { ...poolSwapTestConfig, name: "PoolSwapTest" },
];
