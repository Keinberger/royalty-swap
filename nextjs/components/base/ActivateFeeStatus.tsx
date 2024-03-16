import { MouseEventHandler } from "react";

export default function ActivateFeeStatus({
  fee,
  symbol,
  onClick,
  loading,
}: {
  fee: number;
  symbol: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}): JSX.Element {
  return (
    <div className="flex flex-col rounded-2xl bg-[#F9F6F9] p-1 gap-4">
      <div className="rounded-2xl bg-white py-3 px-4 flex flex-row justify-between text-sm font-semibold tracking-normal">
        <div>
          <span className="text-[#868386]">Fee</span>
        </div>
        <div>
          <span className="text-black">
            {fee} {symbol}
          </span>
        </div>
      </div>
      <div className="px-4 mb-4 flex flex-row justify-between">
        <div className="w-[70%] flex justify-center">
          <span className="text-black text-normal font-semibold">
            Enjoy <span className="text-[#FF73FF]">20% fee</span> reduction by activating your Premium plan via Axiom.
          </span>
        </div>
        <div className="w-[30%] flex justify-center">
          <button
            className="py-2 px-5 font-semibold bg-[#FBDFFA] hover:bg-[#ffc4fd] text-[#FF73FF] hover:text-[#ff59ff] rounded-2xl transition-all"
            onClick={onClick}
          >
            {loading ? "Activating..." : "Activate VIP"}
          </button>
        </div>
      </div>
    </div>
  );
}
