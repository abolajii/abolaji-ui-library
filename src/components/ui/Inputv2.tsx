import {
  Eye,
  EyeOff,
  //   Mail,
  //   Lock,
  //   User,
  //   Search,
  //   Phone,
  //   Calendar,
} from "lucide-react";

import React, { useState } from "react";

// Input field variants
const inputVariants = {
  default: "bg-gray-50 border-gray-200",
  outlined: "bg-white border-gray-300",
  filled: "bg-gray-100 border-gray-300",
  underlined: "bg-transparent border-0 border-b-2 border-gray-200 rounded-none",
  glass: "bg-white/10 border-white/20 backdrop-blur-sm",
};

interface InputFieldProps {
  // Basic props
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Styling props
  variant?: "default" | "outlined" | "filled" | "underlined" | "glass";
  colorTheme?: "blue" | "purple" | "green" | "red" | "gray";
  size?: "sm" | "md" | "lg";

  // Icon props
  icon?: React.ElementType;
  iconPosition?: "left" | "right";

  // Label and helper text
  label?: string;
  helperText?: string;
  error?: string;

  // Special features
  showToggle?: boolean;
  required?: boolean;
  disabled?: boolean;

  // Custom styling
  className?: string;
  containerClassName?: string;

  // Event handlers
  onToggle?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
// Color theme configurations
const colorThemes = {
  blue: {
    border: "focus:border-blue-600",
    ring: "focus:ring-blue-500",
    text: "text-blue-600",
  },
  purple: {
    border: "focus:border-purple-600",
    ring: "focus:ring-purple-500",
    text: "text-purple-600",
  },
  green: {
    border: "focus:border-green-600",
    ring: "focus:ring-green-500",
    text: "text-green-600",
  },
  red: {
    border: "focus:border-red-100",
    ring: "focus:ring-red-100",
    text: "text-red-600",
  },
  gray: {
    border: "focus:border-gray-600",
    ring: "focus:ring-gray-500",
    text: "text-gray-600",
  },
};
export const InputField = React.memo<InputFieldProps>(
  ({
    type = "text",
    placeholder,
    value,
    onChange,
    variant = "default",
    colorTheme = "blue",
    size = "md",
    icon: Icon,
    iconPosition = "left",
    label,
    helperText,
    error,
    showToggle = false,
    required = false,
    disabled = false,
    className = "",
    containerClassName = "",
    onToggle,
    onFocus,
    onBlur,
  }) => {
    const [showPassword, setShowPassword] = useState(false);

    // Get color theme classes
    const colors = colorThemes[colorTheme];

    // Size configurations
    const sizeClasses = {
      sm: {
        input: "py-2 text-sm",
        icon: "h-4 w-4",
        padding:
          Icon && iconPosition === "left"
            ? "pl-8"
            : showToggle
            ? "pr-8"
            : "px-3",
      },
      md: {
        input: "py-3 text-sm",
        icon: "h-5 w-5",
        padding:
          Icon && iconPosition === "left"
            ? "pl-10"
            : showToggle
            ? "pr-10"
            : "px-3",
      },
      lg: {
        input: "py-4 text-base",
        icon: "h-6 w-6",
        padding:
          Icon && iconPosition === "left"
            ? "pl-12"
            : showToggle
            ? "pr-12"
            : "px-4",
      },
    };

    const sizeConfig = sizeClasses[size];

    // Build class names
    const baseInputClass = `
    block w-full rounded-xl transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-opacity-50
    disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
  `;

    const variantClass =
      variant === "glass"
        ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/50"
        : `${inputVariants[variant]} text-gray-900 placeholder-gray-500 ${colors.border} ${colors.ring}`;

    const errorClass = error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "";

    const inputClassName = `
    ${baseInputClass}
    ${sizeConfig.input}
    ${sizeConfig.padding}
    ${variantClass}
    ${errorClass}
    ${className}
  `
      .trim()
      .replace(/\s+/g, " ");

    // Icon styling
    const iconClass =
      variant === "glass"
        ? `${sizeConfig.icon} text-white/70`
        : `${sizeConfig.icon} text-gray-400`;

    const toggleIconClass =
      variant === "glass"
        ? `${sizeConfig.icon} text-white/70 hover:text-white transition-colors`
        : `${sizeConfig.icon} text-gray-400 hover:text-gray-600 transition-colors`;

    // Label styling
    const labelClass =
      variant === "glass"
        ? "block text-sm font-medium text-white/90 mb-2"
        : `block text-sm font-medium ${colors.text} mb-2`;

    // Helper text styling
    const helperTextClass =
      variant === "glass"
        ? "text-xs text-white/70 mt-1"
        : "text-xs text-gray-500 mt-1";

    // Error text styling
    const errorTextClass =
      variant === "glass"
        ? "text-xs text-white/90 mt-1"
        : "text-xs text-red-600 mt-1";

    // Handle password toggle
    const handleToggle = () => {
      setShowPassword(!showPassword);
      if (onToggle) onToggle();
    };

    // Handle focus events
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) onBlur(e);
    };

    // Determine input type
    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className={`space-y-1 ${containerClassName}`}>
        {/* Label */}
        {label && (
          <label className={labelClass}>
            {label}
            {required && (
              <span
                className={
                  variant === "glass"
                    ? "text-white/70 ml-1"
                    : "text-red-500 ml-1"
                }
              >
                *
              </span>
            )}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {Icon && iconPosition === "left" && (
            <div
              className={`absolute inset-y-0 left-0 ${
                size === "sm" ? "pl-2" : size === "lg" ? "pl-4" : "pl-3"
              } flex items-center pointer-events-none`}
            >
              <Icon className={iconClass} />
            </div>
          )}

          {/* Input Field */}
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            className={inputClassName}
          />

          {/* Right Icon or Toggle */}
          {(Icon && iconPosition === "right") ||
          (showToggle && type === "password") ? (
            <div
              className={`absolute inset-y-0 right-0 ${
                size === "sm" ? "pr-2" : size === "lg" ? "pr-4" : "pr-3"
              } flex items-center`}
            >
              {showToggle && type === "password" ? (
                <button
                  type="button"
                  onClick={handleToggle}
                  className="focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className={toggleIconClass} />
                  ) : (
                    <Eye className={toggleIconClass} />
                  )}
                </button>
              ) : Icon && iconPosition === "right" ? (
                <Icon className={iconClass} />
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Helper Text or Error */}
        {error ? (
          <p className={errorTextClass}>{error}</p>
        ) : helperText ? (
          <p className={helperTextClass}>{helperText}</p>
        ) : null}
      </div>
    );
  }
);
