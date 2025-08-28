// Progress Bar Component
type ProgressBarProps = {
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: "primary" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  className?: string;
  [key: string]: any;
};

export const ProgressBar = ({
  value = 0,
  max = 100,
  label,
  showValue = true,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variants = {
    primary: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  const sizes = {
    small: "h-1",
    medium: "h-2",
    large: "h-4",
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-700">{label}</span>
          )}
          {showValue && (
            <span className="text-sm text-gray-600">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${sizes[size]}`}>
        <div
          className={`${sizes[size]} ${variants[variant]} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
