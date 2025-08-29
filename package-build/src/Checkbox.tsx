// Checkbox Component
type CheckboxProps = {
  label: React.ReactNode;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  [key: string]: any;
};

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled,
  error,
  required,
  ...props
}: CheckboxProps) => {
  return (
    <div className="mb-3">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`w-4 h-4 rounded border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
            error
              ? "border-red-500 text-red-500"
              : "border-gray-300 text-blue-500"
          } ${
            disabled ? "opacity-50 cursor-not-allowed" : "hover:border-gray-400"
          }`}
          {...props}
        />
        <span
          className={`ml-2 text-sm ${
            disabled ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
