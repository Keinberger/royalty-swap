export default function Fee({ fee, symbol }: { fee: number; symbol: string }): JSX.Element {
  return (
    <div className="flex flex-col rounded-2xl bg-[#AAE7DC] p-1 gap-4">
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
      <div className="px-4 mb-4 flex justify-center">
        <span className="text-black text-normal font-semibold">
          You may enjoy a fee reduction next time by activating the VIP status.
        </span>
      </div>
    </div>
  );
}
