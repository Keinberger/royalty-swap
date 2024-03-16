import React, { useEffect, useState } from "react";
import ActivateFeeStatus from "../base/ActivateFeeStatus";
import Fee from "../base/Fee";
import SuccessBox from "../base/SuccessBox";
import { NumericSwapInput } from "../base/numeric-swap-input";
import { parseEther } from "viem";
import { encodeAbiParameters } from "viem";
import { useAccount, useChainId, useContractWrite, useToken, useWaitForTransaction } from "wagmi";
import contracts from "~~/config/contracts";
import { counterAddress, useErc20Allowance, useErc20Approve } from "~~/generated/generated";
import { TOKEN_ADDRESSES } from "~~/utils/config";
import { BLANK_TOKEN, MAX_SQRT_PRICE_LIMIT, MAX_UINT, MIN_SQRT_PRICE_LIMIT, ZERO_ADDR } from "~~/utils/constants";

function SwapComponent() {
  const { address } = useAccount();
  const chainId = useChainId();

  const tokens = TOKEN_ADDRESSES.map(address => useToken({ address: address[chainId as keyof typeof address] }));
  console.log("🚀 ~ file: swapComponent.tsx:22 ~ SwapComponent ~ tokens:", tokens);

  const swapRouterAddress = contracts.PoolSwapTest.address; // poolSwapTestAddress[chainId as keyof typeof poolSwapTestAddress];

  const [fromCurrency, setFromCurrency] = useState(BLANK_TOKEN.address);
  const [toCurrency, setToCurrency] = useState(BLANK_TOKEN.address);
  const [fromAmount, setFromAmount] = useState("");

  const [swapFee, setSwapFee] = useState(3000n);
  const [tickSpacing, setTickSpacing] = useState(60n);
  const [hookData, setHookData] = useState<string>(""); // New state for custom hook data
  const [hookAddress, setHookAddress] = useState<`0x${string}`>(
    counterAddress[chainId as keyof typeof counterAddress] ?? ZERO_ADDR,
  );

  //swap status
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapError, setSwapError] = useState("");
  const [swapSuccess, setSwapSuccess] = useState(false);

  // CUSTOM
  const [approveSuccess, setApproveSuccess] = useState(false);

  // TODO: delete once useEligibleForPremiumPlan is implemented
  const [isEligibleForPremium, setIsEligibleForPremiumPlan] = useState(false);

  const [isActivatingPremium, setIsActivatingPremium] = useState(false);
  const [isPremiumActivated, setIsPremiumActivated] = useState(true);

  const [showPremiumActivated, setShowPremiumActivated] = useState(false);
  const [showSwapSuccess, setShowSwapSuccess] = useState(false);
  const [showApproveSuccess, setShowApproveSuccess] = useState(false);

  // const poolAddress = deployedContracts[chainId as keyof typeof deployedContracts][0].contracts.PoolSwapTest.address;
  // TODO: CUSTOM COMPONENTS TO BUILD
  // const isEligibleForPremium = useEligibleForPremiumPlan(walletAddress)
  // const toAmount = useToAmount();
  // const generateZkProof = () => {};

  useEffect(() => {
    if (isPremiumActivated) {
      setShowPremiumActivated(true);
      const timer = setTimeout(() => {
        setShowPremiumActivated(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isPremiumActivated]);

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
        currency0: fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? fromCurrency : toCurrency,
        currency1: fromCurrency.toLowerCase() < toCurrency.toLowerCase() ? toCurrency : fromCurrency,
        fee: Number(swapFee),
        tickSpacing: Number(tickSpacing),
        hooks: hookAddress,
      },
      {
        zeroForOne: fromCurrency.toLowerCase() < toCurrency.toLowerCase(),
        amountSpecified: parseEther(fromAmount), // TODO: assumes tokens are always 18 decimals
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
    setHookAddress(counterAddress[chainId as keyof typeof counterAddress] ?? ZERO_ADDR);
  }, [chainId]);

  useEffect(() => {
    if (swapIsSuccess && swapData) {
      setTxHash(swapData.hash);
    }
  }, [swapIsSuccess, swapData]);

  useEffect(() => {
    if (isTxConfirmed && !swapIsError) {
      setSwapSuccess(true);
      setIsSwapping(false);
    }
  }, [isTxConfirmed, swapIsError]);

  useEffect(() => {
    if (swapIsError && swapTxError) {
      setIsSwapping(false);
      setSwapError(swapTxError.message);
    }
  }, [swapIsError, swapTxError]);

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

        {fromTokenIsApproved && !isTxConfirmed && (
          <>
            {!isPremiumActivated ? (
              !isEligibleForPremium ? (
                <Fee
                  fee={Number(swapFee)}
                  symbol={tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol ?? "N/A"}
                  isPremium={false}
                />
              ) : (
                <ActivateFeeStatus
                  fee={Number(swapFee)}
                  symbol={tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol ?? "N/A"}
                  loading={isActivatingPremium}
                  onClick={() => {
                    // TODO: implement premium plan activation here

                    setIsActivatingPremium(true);
                    setIsPremiumActivated(true);
                  }}
                />
              )
            ) : (
              <Fee
                fee={Number(swapFee)}
                symbol={tokens.find(token => token.data?.address === fromCurrency)?.data?.symbol ?? "N/A"}
                isPremium={true}
              />
            )}

            {showPremiumActivated && <SuccessBox header="Premium Plan Activated" subText={""} />}
            {showSwapSuccess && <SuccessBox header="Swap Successful" subText={""} />}

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
          </>
        )}
      </div>
    </div>
  );
}

export default SwapComponent;
