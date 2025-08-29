// Password Input with Toggle
import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import type { ChangeEvent } from "react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  showStrength?: boolean;
}

export const PasswordInput = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  required,
  disabled,
  showStrength = false,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  interface PasswordStrength {
    score: number;
    label: string;
    color: string;
  }

  const getPasswordStrength = (password: string): PasswordStrength => {
    if (!password) return { score: 0, label: "", color: "gray" };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const levels: PasswordStrength[] = [
      { score: 0, label: "", color: "gray" },
      { score: 1, label: "Very Weak", color: "red" },
      { score: 2, label: "Weak", color: "orange" },
      { score: 3, label: "Fair", color: "yellow" },
      { score: 4, label: "Good", color: "blue" },
      { score: 5, label: "Strong", color: "green" },
    ];

    return levels[score];
  };

  const strength = showStrength ? getPasswordStrength(value) : null;

  return (
    <div className="mb-5 max-w-md">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 pr-10 border-2 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:border-blue-500 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 hover:border-gray-400"
          } ${
            disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "bg-white"
          }`}
          disabled={disabled}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>

      {showStrength && value && strength && strength.score > 0 && (
        <div className="mt-2">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-200 rounded-full h-1">
              <div
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${(strength.score / 5) * 100}%`,
                  backgroundColor:
                    strength.color === "green"
                      ? "#10b981"
                      : strength.color === "blue"
                      ? "#3b82f6"
                      : strength.color === "yellow"
                      ? "#f59e0b"
                      : strength.color === "orange"
                      ? "#f97316"
                      : strength.color === "red"
                      ? "#ef4444"
                      : "#6b7280",
                }}
              />
            </div>
            <span
              className="text-xs"
              style={{
                color:
                  strength.color === "green"
                    ? "#10b981"
                    : strength.color === "blue"
                    ? "#3b82f6"
                    : strength.color === "yellow"
                    ? "#f59e0b"
                    : strength.color === "orange"
                    ? "#f97316"
                    : strength.color === "red"
                    ? "#ef4444"
                    : "#6b7280",
              }}
            >
              {strength.label}
            </span>
          </div>
        </div>
      )}

      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
