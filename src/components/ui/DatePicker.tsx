// DatePicker Component
import React from "react";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  min?: string;
  max?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  error,
  required,
  disabled,
  min,
  max,
  ...props
}) => {
  return (
    <div className="mb-5 max-w-md">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type="date"
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border-2 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:border-blue-500 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 hover:border-gray-400"
        } ${
          disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "bg-white"
        }`}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        {...props}
      />
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
