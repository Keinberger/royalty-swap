import { ERC20Abi, PoolSwapTestAbi } from "./abis";
import { Abi } from "viem";

export const contracts = {
  Token0: {
    address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    abi: ERC20Abi as Abi,
  },
  Token1: {
    address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    abi: ERC20Abi as Abi,
  },
  PoolSwapTest: {
    address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    abi: PoolSwapTestAbi as Abi,
  },
  RoyaltyPool: {
    address: "0x030Bcfe20E864DbF109c29ece904f3e53Da6ed09",
    abi: PoolSwapTestAbi as Abi,
  },
};

export default contracts;
