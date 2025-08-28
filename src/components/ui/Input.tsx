// Input Component
type InputProps = {
  label?: string;
  type?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  [key: string]: any;
};

export const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required,
  disabled,
  ...props
}: InputProps) => {
  return (
    <div className="mb-5 max-w-md">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border-2 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:border-blue-500 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 hover:border-gray-400"
        } ${
          disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "bg-white"
        }`}
        required={required}
        disabled={disabled}
        {...props}
      />
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
