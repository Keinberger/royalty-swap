export default function Fee({ isPremium }: { isPremium: boolean }): JSX.Element {
  return (
    <div className="flex flex-col rounded-2xl bg-[#AAE7DC] p-1 gap-4">
      <div className="rounded-2xl bg-white py-3 px-4 flex flex-row justify-between text-sm font-semibold tracking-normal">
        <div>
          <span className={`font-bold ${isPremium ? "text-black" : "text-[#868386]"}`}>{isPremium && "VIP"} Fee</span>
        </div>
        <div>
          <span className={`font-bold  ${isPremium ? "text-yellow-600" : "text-[#868386]"}`}>
            {isPremium ? "0.01%" : "0.3%"}
          </span>
        </div>
      </div>
      {!isPremium && (
        <div className="px-4 mb-4 flex justify-center">
          <span className="text-black text-normal font-semibold">
            You may enjoy a fee reduction next time using the VIP status. Become a frequent user and get reduced fees.
          </span>
        </div>
      )}
    </div>
  );
}
