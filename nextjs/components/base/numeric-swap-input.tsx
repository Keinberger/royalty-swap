import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { FetchTokenResult } from "wagmi/dist/actions";

export function NumericSwapInput({
  type,
  placeholder,
  amountValue,
  options,
  tokenOnChange,
  amountValueOnChange,
}: {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  amountValue: string | number;
  options: FetchTokenResult[];
  tokenOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  amountValueOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col justify-end bg-[#F9F6F9] px-4 py-2 pb-6 rounded-xl">
      <label className="label text-left flex justify-between">
        <span className="label-text text-[#9B999C]">{placeholder}</span>
      </label>
      <div className="flex w-auto flex-row h-[50px]">
        <div className="w-[70%] h-full flex items-center">
          <input
            type={type}
            className="bg-transparent w-full px-2 text-3xl text-black focus:outline-none font-semibold tracking-tight"
            placeholder="0"
            value={amountValue}
            onChange={amountValueOnChange}
            disabled={amountValueOnChange === undefined}
          />
        </div>
        <div className="w-[30%] h-full flex items-center">
          <Select
            onChange={tokenOnChange}
            placeholder="Select"
            variant="flat"
            css={{
              background: "transparent",
              "&:hover": {
                background: "transparent",
              },
              ".nextui-select-dropdown": {
                background: "yourDesiredDropdownBackgroundColor", // Optional: Customize dropdown background
              },
            }}
          >
            {options.map(option => (
              <SelectItem key={option.address} value={option.address} textValue={option.name}>
                <div>
                  {option.name} ({option.address.slice(0, 6)}...{option.address.slice(-4)})
                </div>
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
