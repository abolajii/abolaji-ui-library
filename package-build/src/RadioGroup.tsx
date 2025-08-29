// Radio Group Component
type RadioOption = {
  value: string | number;
  label: string;
};

type RadioGroupProps = {
  label?: string;
  options: RadioOption[];
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  orientation?: "vertical" | "horizontal";
  [key: string]: any;
};

export const RadioGroup = ({
  label,
  options,
  value,
  onChange,
  error,
  required,
  disabled,
  orientation = "vertical",
  ...props
}: RadioGroupProps) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-3 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className={`${
          orientation === "horizontal" ? "flex flex-wrap gap-4" : "space-y-2"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e)}
              disabled={disabled}
              className={`w-4 h-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                error
                  ? "border-red-500 text-red-500"
                  : "border-gray-300 text-blue-500"
              } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              {...props}
            />
            <span
              className={`ml-2 text-sm ${
                disabled ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
