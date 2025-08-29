// Card Component
import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  children: ReactNode;
  cardTitle?: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined" | "filled";
}

export const Card = ({
  children,
  cardTitle,
  subtitle,
  footer,
  className = "",
  variant = "default",
  ...props
}: CardProps) => {
  const variants = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white shadow-lg border border-gray-100",
    outlined: "bg-white border-2 border-gray-300",
    filled: "bg-gray-50 border border-gray-200",
  };

  return (
    <div
      className={`rounded-lg overflow-hidden ${variants[variant]} ${className}`}
      {...props}
    >
      {(cardTitle || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {cardTitle && (
            <h3 className="text-lg font-semibold text-gray-900">{cardTitle}</h3>
          )}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};
