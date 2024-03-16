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
    address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    abi: PoolSwapTestAbi as Abi,
  },
  RoyaltyPool: {
    address: "0x0300e9C16b3F11F7C0337a5C8674323a161e38D0",
    abi: PoolSwapTestAbi as Abi,
  }
};

export default contracts;
