import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  size?: "small" | "medium" | "large";
  className?: string;
}

export const Badge = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
  ...props
}: BadgeProps) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-1 text-sm",
    large: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
