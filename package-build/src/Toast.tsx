import { useEffect } from "react";

// Toast Component
type ToastProps = {
  message: string;
  variant?: "success" | "error" | "warning" | "info";
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  duration?: number;
  isVisible: boolean;
  onClose: () => void;
  className?: string;
  standalone?: boolean; // Whether the toast handles its own positioning
};

export const Toast = ({
  message,
  variant = "info",
  position = "top-right",
  duration = 5000,
  isVisible,
  onClose,
  className = "",
  standalone = true,
}: ToastProps) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  const variants = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  if (!isVisible) return null;

  const containerClasses = standalone
    ? `fixed ${positions[position]} z-50`
    : "relative";

  return (
    <div
      className={`${containerClasses} transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } ${className} ${!standalone ? "w-full" : ""}`}
    >
      <div
        className={`${!standalone ? "w-full" : "min-w-80 max-w-md"} ${
          variants[variant]
        } shadow-lg rounded-lg pointer-events-auto border`}
      >
        <div className="p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium">{message}</p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={onClose}
                className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
