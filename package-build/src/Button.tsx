// Button Component
import type { ButtonHTMLAttributes } from "react";
import type { ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50";

  const variantClasses = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 disabled:bg-blue-300",
    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300 disabled:bg-gray-300",
  };

  const sizeClasses = {
    small: "px-4 py-2 text-xs",
    medium: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  // Conditional width and margin classes
  const widthClass = fullWidth ? "w-full" : "";
  const marginClass = fullWidth ? "mb-2" : "mr-3 mb-2";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${
        sizeClasses[size]
      } ${widthClass} ${marginClass} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
