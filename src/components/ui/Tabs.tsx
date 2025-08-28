import { Badge } from "./Badge";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
}

// Tabs Component Props Interface
interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: "default" | "pills" | "underline";
  className?: string;
}

// Tabs Component
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = "default",
  className = "",
}) => {
  const variants = {
    default: "border-b border-gray-200",
    pills: "bg-gray-100 p-1 rounded-lg",
    underline: "",
  };

  return (
    <div className={className}>
      <div
        className={`flex ${variants[variant]} ${
          variant === "pills" ? "space-x-1" : "space-x-8"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`py-2 px-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              variant === "pills"
                ? `rounded-md ${
                    activeTab === tab.id
                      ? "bg-white text-blue-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                : variant === "underline"
                ? `border-b-2 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`
                : `border-b-2 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`
            }`}
            disabled={tab.disabled}
            type="button"
          >
            {tab.label}
            {tab.badge && (
              <Badge variant="primary" size="small" className="ml-2">
                {tab.badge}
              </Badge>
            )}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
