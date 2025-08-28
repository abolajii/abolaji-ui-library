// Textarea Component
type TextareaProps = {
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
  [key: string]: any;
};

export const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  required,
  disabled,
  rows = 4,
  maxLength,
  ...props
}: TextareaProps) => {
  return (
    <div className="mb-5 max-w-md">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border-2 rounded-lg text-sm transition-colors duration-200 resize-y min-h-20 focus:outline-none focus:border-blue-500 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 hover:border-gray-400"
        } ${
          disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "bg-white"
        }`}
        required={required}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        {...props}
      />
      {maxLength && value && (
        <div className="text-xs text-gray-500 text-right mt-1">
          {value.length}/{maxLength}
        </div>
      )}
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
