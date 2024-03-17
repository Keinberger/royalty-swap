# royalty-swap

## Install Dependencies

```bash
npm install
cd nextjs
npm install
cd contracts
forge install
```

## Define environment variables

```bash
cp .env.example .env
```

## Get Started

1. Build the contracts

```bash
cd contracts
forge build
```

2. Start the local network

```bash
cd contracts/
anvil --hardfork cancun
```

3. Deploy the local V4 pool (including hook)

```bash
cd contracts/
forge script script/Anvil.s.sol \
   --rpc-url http://localhost:8545 \
   --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \
   --broadcast
```

4. Start the frontend

```bash
cd nextjs/
npm run dev
```
