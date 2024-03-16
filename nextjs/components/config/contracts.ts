import { counterABI, hookMinerABI, poolManagerABI, poolModifyLiquidityTestABI, poolSwapTestABI } from "./abis";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

export const contracts: GenericContractsDeclaration = {
  31337: [
    {
      name: "Anvil",
      chainId: "31337",
      contracts: {
        PoolManager: {
          address: "0x876939152C56362e17D508B9DEA77a3fDF9e4083",
          abi: poolManagerABI,
        },
        Counter: {
          address: "0x2B02df32f5cC064a10381DC7b8F09171097133f6",
          abi: counterABI,
        },
        HookMiner: {
          address: "0x24EcC5E6EaA700368B8FAC259d3fBD045f695A08",
          abi: hookMinerABI,
        },
        PoolModifyLiquityTest: {
          address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
          abi: poolModifyLiquidityTestABI,
        },
        PoolSwapTest: {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
          abi: poolSwapTestABI,
        },
      },
    },
  ],
};

export default contracts;
