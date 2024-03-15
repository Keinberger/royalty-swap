import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export function NumericInput({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col justify-end">
      <label className="label text-left  flex justify-between">
        <span className="label-text">{placeholder}</span>
      </label>
      <input
        type={type}
        className="input input-bordered w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
