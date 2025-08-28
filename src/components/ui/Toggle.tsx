type ToggleProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  [key: string]: any;
};

export const Toggle = ({
  label,
  checked,
  onChange,
  disabled,
  size = "medium",
  ...props
}: ToggleProps) => {
  const sizes = {
    small: "w-8 h-5",
    medium: "w-11 h-6",
    large: "w-14 h-8",
  };

  const dotSizes = {
    small: "w-3 h-3",
    medium: "w-4 h-4",
    large: "w-6 h-6",
  };

  return (
    <div className="flex items-center mb-3">
      <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`${
          sizes[size]
        } relative inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
          checked ? "bg-blue-500" : "bg-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        {...props}
      >
        <span
          className={`${
            dotSizes[size]
          } bg-white rounded-full shadow transform transition-transform duration-200 ${
            checked
              ? size === "small"
                ? "translate-x-3"
                : size === "medium"
                ? "translate-x-5"
                : "translate-x-6"
              : "translate-x-1"
          }`}
        />
      </button>
      {label && (
        <span
          className={`ml-3 text-sm ${
            disabled ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};
