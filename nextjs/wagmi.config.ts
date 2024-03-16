import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { erc20ABI } from "wagmi";

export default defineConfig({
  out: "generated/generated.ts",
  plugins: [
    foundry({
      forge: {
        build: true, // disable build because we are using a custom solc
      },
      project: "../", // path to the project root (directory holding foundry.toml)
      deployments: {
        // --------------------------------------------------
        // 👉 Update the address with your deployed hook 👈
        // --------------------------------------------------
        Counter: {
          31337: "0x2b0bcF56b565F8526522F2Ea109ffF0Ede40E6B9",
        },

        // --------------------------------------------------
        // Do not change
        // --------------------------------------------------
        PoolManager: {
          31337: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
        },
        PoolInitializeTest: {
          31337: "0xFEB29bB43e36c0F8488F78bba2E8E94F0D829Fa1",
        },
        PoolSwapTest: {
          31337: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
        },
        PoolModifyLiquidityTest: {
          31337: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
        },
        PoolDonateTest: {
          31337: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
        },
      },
    }),
    react(),
  ],
  contracts: [
    // --------------------------------------------------
    // (Optional): Update to use your own deployed tokens
    // --------------------------------------------------
    {
      abi: erc20ABI,
      address: {
        31337: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      },
      name: "Token0",
    },
    {
      abi: erc20ABI,
      address: {
        31337: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      },
      name: "Token1",
    },
  ],
});
