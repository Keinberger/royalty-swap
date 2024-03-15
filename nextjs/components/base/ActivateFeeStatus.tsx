export default function ActivateFeeStatus({ fee, symbol }: { fee: number; symbol: string }): JSX.Element {
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
          <button className="px-2 py-3 font-semibold bg-[#FBDFFA] text-[#FF73FF] rounded-2xl">Activate VIP</button>
        </div>
      </div>
    </div>
  );
}
