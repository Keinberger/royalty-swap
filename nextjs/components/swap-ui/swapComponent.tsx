import React, { useEffect, useState } from "react";
import compiledCircuit from "../../../axiom/data/compiled.json";
import { CircuitInputs, circuit } from "../../../axiom/volume.circuit";
import ActivateFeeStatus from "../base/ActivateFeeStatus";
import Fee from "../base/Fee";
import SuccessBox from "../base/SuccessBox";
import { NumericSwapInput } from "../base/numeric-swap-input";
import { Axiom, UserInput } from "@axiom-crypto/client";
import { parseEther } from "viem";
import { encodeAbiParameters } from "viem";
import { useAccount, useChainId, useContractWrite, useToken, useWaitForTransaction } from "wagmi";
import { useBlockNumber } from "wagmi";
import contracts from "~~/config/contracts";
import { useErc20Allowance, useErc20Approve } from "~~/generated/generated";
import { TOKEN_ADDRESSES } from "~~/utils/config";
import { BLANK_TOKEN, MAX_SQRT_PRICE_LIMIT, MAX_UINT, MIN_SQRT_PRICE_LIMIT } from "~~/utils/constants";

const generateProof = async (input: UserInput<CircuitInputs>) => {
  const axiom = new Axiom({
    circuit: circuit,
    compiledCircuit: compiledCircuit,
    chainId: "31337",
    provider: "http://localhost:8545",
    privateKey: "2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",
    callback: {
      target: contracts.RoyaltyPool.address,
    },
  });
  console.log("after declaring axiom");
  await axiom.init();
  const args = await axiom.prove(input);
  console.log("ZK proof generated successfully.");
  return args;
};

function SwapComponent() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { data: blockNumber } = useBlockNumber();

  const poolFee = "0x800000";

  const tokens = TOKEN_ADDRESSES.map(address => useToken({ address: address[chainId as keyof typeof address] }));
  console.log("🚀 ~ file: swapComponent.tsx:22 ~ SwapComponent ~ tokens:", tokens);

  const swapRouterAddress = contracts.PoolSwapTest.address; // poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress];

  const [fromCurrency, setFromCurrency] = useState(BLANK_TOKEN.address);
  const [toCurrency, setToCurrency] = useState(BLANK_TOKEN.address);
  const [fromAmount, setFromAmount] = useState("");

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);

  //swap status
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapError, setSwapError] = useState("");
  const [swapSuccess, setSwapSuccess] = useState(false);

  // CUSTOM
  const [approveSuccess, setApproveSuccess] = useState(false);
  const [isPublishingZkProof, setIsPublishingZkProof] = useState(false);
  const [zkPublishingSuccess, setZkPublishSuccess] = useState(false);

  // TODO: delete once useEligibleForPremiumPlan is implemented
  const [isEligibleForPremium, setIsEligibleForPremiumPlan] = useState(true);

  const [isGeneratingZkProof, setIsGeneratingZkProof] = useState(false);
  const [isZkProofGenerated, setIsZkProofGenerated] = useState(false);

  const [showZkPublishSuccess, setShowZkPublishSuccess] = useState(false);
  const [showSwapSuccess, setShowSwapSuccess] = useState(false);
  const [showApproveSuccess, setShowApproveSuccess] = useState(false);
  const [showZKProofGenerated, setShowZKProofGenerated] = useState(false);

  // const poolAddress = deployedContracts[chainId as keyof typeof deployedContracts][0].contracts.PoolSwapTest.address;
  // TODO: CUSTOM COMPONENTS TO BUILD
  // const isEligibleForPremium = useEligibleForPremiumPlan(walletAddress)
  // const toAmount = useToAmount();
  // const generateZkProof = () => {}                                  ;

  const handleGenerateZkProof = async (input: UserInput<CircuitInputs>) => {
    const timer = setTimeout(() => {
      setIsZkProofGenerated(true);
      setIsGeneratingZkProof(false);
    }, 10000);

    return () => clearTimeout(timer);
  };

  // Use state hook to hold the transaction hash
  const [txHash, setTxHash] = useState<`0x${string}`>("0x00");

  // Use the useWaitForTransaction hook from 'wagmi' to get the transaction receipt
  const { isSuccess: isTxConfirmed } = useWaitForTransaction({
    hash: txHash,
  });

  const fromTokenAllowance = useErc20Allowance({
    address: fromCurrency,
    args: [address ?? "0x0", swapRouterAddress],
  });

  const tokenApprove = useErc20Approve({
    address: fromCurrency,
    args: [swapRouterAddress, MAX_UINT],
  });

  const {
    data: swapData,
    isSuccess: swapIsSuccess,
    isError: swapIsError,
    write: executeSwap,
    error: swapTxError,
  } = useContractWrite({
    address: contracts.PoolSwapTest.address,
    abi: contracts.PoolSwapTest.abi,
    functionName: "swap",
    args: [
      {
        currency0: contracts.Token0.address,
        currency1: contracts.Token1.address,
        fee: poolFee,
        tickSpacing: Number(60),
        hooks: contracts.RoyaltyPool.address,
      },
      {
        zeroForOne: true,
        amountSpecified: -parseEther(fromAmount), // TODO: assumes tokens are always 18 decimals
        sqrtPriceLimitX96:
          fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? MIN_SQRT_PRICE_LIMIT : MAX_SQRT_PRICE_LIMIT, // unlimited impact
      },
      {
        withdrawTokens: true,
        settleUsingTransfer: true,
        currencyAlreadySent: false,
      },
      // msg.sender
      encodeAbiParameters([{ name: "x", type: "address" }], ["0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"]),
    ],
  });

  useEffect(() => {
    if (swapIsSuccess && swapData) {
      setTxHash(swapData.hash);
    }
  }, [swapIsSuccess, swapData]);

  useEffect(() => {
    if (isTxConfirmed) {
      setIsSwapping(false);
      setSwapSuccess(true);
    }
  }, [isTxConfirmed, swapIsError]);

  useEffect(() => {
    if (swapIsError && swapTxError) {
      setIsSwapping(false);
      setSwapError(swapTxError.message);
    }
  }, [swapIsError, swapTxError]);

  useEffect(() => {
    if (zkPublishingSuccess) {
      setShowZkPublishSuccess(true);
      const timer = setTimeout(() => {
        setShowZkPublishSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [zkPublishingSuccess]);

  useEffect(() => {
    if (approveSuccess) {
      setShowApproveSuccess(true);
      const timer = setTimeout(() => {
        setShowApproveSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [approveSuccess]);

  useEffect(() => {
    if (swapSuccess) {
      setShowSwapSuccess(true);
      const timer = setTimeout(() => {
        setShowSwapSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [swapSuccess]);

  // TODO: implement useEffect for after ZK proof published success (showZkPublishSuccess)

  const fromTokenIsApproved = fromTokenAllowance.data ? fromTokenAllowance.data > 0n : false;
  return (
    <div className="card shadow-2xl pt-6 pb-2 px-3 bg-white rounded-2xl border-2  min-w-[34rem] max-w-xl transition-shadow">
      <div className="mb-2 mx-4">
        <h2>Swap</h2>
        {/* <TokenDropdown
            label="From"
            tooltipText={"The token you are sending"}
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
            onChange={e => {
              setFromCurrency(e.target.value);
              console.log("🚀 ~ file: swapComponent.tsx:107 ~ SwapComponent ~ e:", e.target);
              fromTokenAllowance.refetch();
            }}
          />
          <TokenDropdown
            label="To"
            tooltipText="The token you are receiving"
            options={tokens.map(token => token.data ?? BLANK_TOKEN)}
            onChange={e => setToCurrency(e.target.value)}
          /> */}
      </div>

      <div className="w-full flex flex-col gap-1">
        <NumericSwapInput
          type="number"
          placeholder="You Pay"
          amountValue={fromAmount}
          options={tokens.map(token => token.data ?? BLANK_TOKEN)}
          amountValueOnChange={e => setFromAmount(e.target.value)}
          tokenOnChange={e => {
            setFromCurrency(e.target.value);
            console.log("🚀 ~ file: swapComponent.tsx:107 ~ SwapComponent ~ e:", e.target);
            fromTokenAllowance.refetch();
          }}
        />

        <NumericSwapInput
          type="number"
          placeholder="You Receive"
          amountValue={fromAmount}
          options={tokens.map(token => token.data ?? BLANK_TOKEN)}
          tokenOnChange={e => setToCurrency(e.target.value)}
        />

        {fromCurrency !== BLANK_TOKEN.address && fromTokenAllowance.data === 0n && (
          <button
            className="w-full py-3 rounded-2xl bg-[#FF73FF] text-[#FEFCFE] font-semibold text-lg focus:outline-none focus:ring-indigo-500 transition-all"
            onClick={() => {
              tokenApprove.writeAsync().then(() => {
                setApproveSuccess(true);
                fromTokenAllowance.refetch();
              });
            }}
          >
            Approve {tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol}
          </button>
        )}

        {showApproveSuccess && (
          <SuccessBox
            header="Approved"
            subText={tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol || ""}
          />
        )}

        {swapError && (
          <div className="mt-4">
            <div style={{ fontFamily: "monospace" }} className="alert alert-error overflow-auto">
              <div>
                <label>Error: {swapError}</label>
              </div>
            </div>
          </div>
        )}

        {fromTokenIsApproved && (
          <>
            {!zkPublishingSuccess ? (
              !isEligibleForPremium ? (
                <Fee isPremium={false} />
              ) : (
                <ActivateFeeStatus
                  // TODO: replace "false" with loading from ZK proof publishing TX
                  loading={isZkProofGenerated ? isPublishingZkProof : isGeneratingZkProof}
                  onClick={
                    isZkProofGenerated
                      ? () => {
                          // TODO: handle publishing ZK proof on-chain
                          setIsPublishingZkProof(true);
                        }
                      : async () => {
                          const input: UserInput<CircuitInputs> = {
                            blockNumber: blockNumber!,
                            userAddress: address!,
                            hookAddress: contracts.RoyaltyPool.address,
                            poolId: "0x4bc33d3648d3d594c33099a3c88705855d686b19e9e81d2e6406611823e1a6e1",
                          };
                          // TODO: handle generating ZK proof
                          setIsGeneratingZkProof(true);

                          handleGenerateZkProof(input);
                        }
                  }
                  isOnPublishProofStep={isZkProofGenerated}
                />
              )
            ) : (
              <Fee isPremium={true} />
            )}

            {showZKProofGenerated && <SuccessBox header="ZK Proof Generated" subText={""} />}
            {showZkPublishSuccess && <SuccessBox header="ZK Proof Published" subText={""} />}

            <button
              className="w-full py-3 rounded-2xl bg-[#FF73FF] text-[#FEFCFE] font-semibold text-lg focus:outline-none focus:ring-indigo-500 transition-all"
              onClick={() => {
                setIsSwapping(true);
                executeSwap();
              }}
              disabled={
                isSwapping ||
                fromCurrency === BLANK_TOKEN.address ||
                toCurrency === BLANK_TOKEN.address ||
                fromAmount === ""
              }
            >
              {isSwapping ? "Swapping..." : "Swap"}
            </button>

            {showSwapSuccess && <SuccessBox header="Swap Successful" subText={""} />}
          </>
        )}
      </div>
    </div>
  );
}

export default SwapComponent;
