import { ERC20Abi, PoolSwapTestAbi } from "./abis";
import { Abi } from "viem";

export const contracts = {
  Token0: {
    address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    abi: ERC20Abi as Abi,
  },
  Token1: {
    address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    abi: ERC20Abi as Abi,
  },
  PoolSwapTest: {
    address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    abi: PoolSwapTestAbi as Abi,
  },
  RoyaltyPool: {
    address: "0x0304dB7e57e2F6e5fE39Aa498c0bE815374F1859",
    abi: PoolSwapTestAbi as Abi,
  },
};

export default contracts;
