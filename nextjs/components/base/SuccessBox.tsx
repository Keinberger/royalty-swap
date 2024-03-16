export default function SuccessBox({ header, subText }: { header: string; subText: string }): JSX.Element {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-green-100 rounded-full border border-green-200 mt-1">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-md font-semibold text-green-600">{header}</span>
      </div>
      <div className="flex items-center">
        <span className="text-md font-semibold text-green-600">{subText}</span>
      </div>
    </div>
  );
}
