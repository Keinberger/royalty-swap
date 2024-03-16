import { MouseEventHandler } from "react";

export default function ActivateFeeStatus({
  onClick,
  loading,
  isOnPublishProofStep,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  isOnPublishProofStep: boolean;
}): JSX.Element {
  return (
    <div className="flex flex-col rounded-2xl bg-[#F9F6F9] p-1 gap-4">
      <div className="rounded-2xl bg-white py-3 px-4 flex flex-row justify-between text-sm font-semibold tracking-normal">
        <div>
          <span className="font-bold text-[#868386]">Current Fee</span>
        </div>
        <div>
          <span className="font-bold text-[#868386]">0.01%</span>
        </div>
      </div>
      <div className="px-4 mb-4 flex flex-row justify-between">
        <div className="w-[70%] flex items-center">
          <span className="text-black text-normal font-semibold">
            {isOnPublishProofStep ? (
              <>
                One more step. <span className="text-green-600">You are almost there!</span>
              </>
            ) : (
              <>
                Enjoy <span className="text-[#FF73FF]">20% fee</span> reduction by activating your Premium plan via
                Axiom.
              </>
            )}
          </span>
        </div>
        <div className="w-[30%] flex justify-center">
          <button
            className={`py-2 px-5 font-semibold  ${
              isOnPublishProofStep
                ? "bg-green-200 hover:bg-green-300 text-green-600 hover:text-green-800"
                : "bg-[#FBDFFA] hover:bg-[#ffc4fd] text-[#FF73FF] hover:text-[#ff59ff]"
            } rounded-2xl transition-all`}
            onClick={onClick}
          >
            {isOnPublishProofStep
              ? loading
                ? "Publishing ZK Proof..."
                : "Publish ZK Proof"
              : loading
              ? "Generating ZK Proof..."
              : "Activate VIP"}
          </button>
        </div>
      </div>
    </div>
  );
}
