import { useState, useEffect } from "react";
import { Search, Mail } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/TextArea";
import { Select } from "../components/ui/Select";
import { MultiSelect } from "../components/ui/MultiSelect";
import { Checkbox } from "../components/ui/Checkbox";
import { RadioGroup } from "../components/ui/RadioGroup";
import { Toggle } from "../components/ui/Toggle";
import { PasswordInput } from "../components/ui/Password";
import { RangeSlider } from "../components/ui/RangeSlider";
import { DatePicker } from "../components/ui/DatePicker";
import { FileUpload } from "../components/ui/Fileupload";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Modal } from "../components/ui/Modal";
import { ProgressBar } from "../components/ui/ProgressBar";
import { Toast } from "../components/ui/Toast";

interface ToastNotification {
  id: number;
  variant: "success" | "error" | "warning" | "info";
  message: string;
  isVisible: boolean;
}

const AbolajiShowcase = () => {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [activeShowcaseTab, setActiveShowcaseTab] = useState("overview");

  // Options data
  const countryOptions = [
    { value: "us", label: "🇺🇸 United States" },
    { value: "ca", label: "🇨🇦 Canada" },
    { value: "uk", label: "🇬🇧 United Kingdom" },
    { value: "de", label: "🇩🇪 Germany" },
    { value: "fr", label: "🇫🇷 France" },
    { value: "au", label: "🇦🇺 Australia" },
    { value: "jp", label: "🇯🇵 Japan" },
    { value: "ng", label: "🇳🇬 Nigeria" },
  ];

  const skillsOptions = [
    { value: "javascript", label: "🟨 JavaScript" },
    { value: "typescript", label: "🔷 TypeScript" },
    { value: "react", label: "⚛️ React" },
    { value: "vue", label: "💚 Vue.js" },
    { value: "angular", label: "🅰️ Angular" },
    { value: "node", label: "🟢 Node.js" },
    { value: "python", label: "🐍 Python" },
    { value: "java", label: "☕ Java" },
    { value: "csharp", label: "💜 C#" },
    { value: "go", label: "🔵 Go" },
  ];

  const experienceOptions = [
    { value: "entry", label: "📚 Entry Level (0-2 years)" },
    { value: "junior", label: "🌱 Junior (2-4 years)" },
    { value: "intermediate", label: "⚡ Intermediate (4-6 years)" },
    { value: "senior", label: "🎯 Senior (6+ years)" },
    { value: "lead", label: "👑 Lead/Principal (8+ years)" },
  ];

  // Toast management
  const addToast = (message: string, variant: ToastNotification["variant"]) => {
    const newToast: ToastNotification = {
      id: Date.now(),
      message,
      variant,
      isVisible: true,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Auto-remove toasts after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 4000);

    return () => clearTimeout(timer);
  }, [toasts.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            🚀 Abolaji UI Kit Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of modern, accessible React components. This
            interactive demo showcases all components in action with real-time
            validation, progress tracking, and comprehensive documentation.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" onClick={() => setShowModal(true)}>
              📚 View Guide
            </Button>
            <Button
              variant="secondary"
              onClick={() => addToast("Welcome to Abolaji UI Kit! 👋", "info")}
            >
              🎯 Quick Demo
            </Button>
          </div>
        </div>

        {/* Component Showcase Documentation */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📚 Component Showcase & Documentation
          </h2>

          <div className="flex gap-6">
            {/* Sidebar Navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-4 sticky top-4">
                <h3 className="font-semibold text-gray-700 mb-4">Components</h3>
                <nav className="space-y-2">
                  {[
                    { id: "overview", label: "📋 Overview" },
                    { id: "alert", label: "⚠️ Alert" },
                    { id: "button", label: "🔘 Button" },
                    { id: "input", label: "📝 Input" },
                    { id: "fileupload", label: "📎 File Upload" },
                    { id: "badge", label: "🏷️ Badge" },
                    { id: "progress", label: "📊 Progress Bar" },
                    { id: "spinner", label: "⏳ Loading Spinner" },
                    { id: "card", label: "🃏 Card" },
                    { id: "select", label: "📋 Select" },
                    { id: "multiselect", label: "🏷️ MultiSelect" },
                    { id: "checkbox", label: "☑️ Checkbox" },
                    { id: "radio", label: "🔘 Radio Group" },
                    { id: "toggle", label: "🔄 Toggle" },
                    { id: "textarea", label: "📄 Textarea" },
                    { id: "password", label: "🔒 Password" },
                    { id: "range", label: "🎚️ Range Slider" },
                    { id: "datepicker", label: "📅 Date Picker" },
                    { id: "tabs", label: "📑 Tabs" },
                    { id: "modal", label: "🪟 Modal" },
                    { id: "tooltip", label: "💬 Tooltip" },
                    { id: "toast", label: "🍞 Toast" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveShowcaseTab(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeShowcaseTab === item.id
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-[600px]">
              {/* Overview Tab */}
              {activeShowcaseTab === "overview" && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      🚀 Welcome to Abolaji UI Components
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A comprehensive collection of modern, accessible React
                      components built with TypeScript and Tailwind CSS. Perfect
                      for building beautiful, responsive web applications with
                      zero dependencies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🎨 Design Philosophy
                        </h4>
                        <p className="text-sm text-gray-600">
                          Clean, modern aesthetics with focus on usability and
                          accessibility.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          ⚡ Performance
                        </h4>
                        <p className="text-sm text-gray-600">
                          Lightweight components optimized for speed and bundle
                          size.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          📱 Responsive
                        </h4>
                        <p className="text-sm text-gray-600">
                          Mobile-first design that works perfectly on all
                          devices.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          🔧 TypeScript
                        </h4>
                        <p className="text-sm text-gray-600">
                          Full TypeScript support with comprehensive type
                          definitions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4">
                      📦 Quick Installation
                    </h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-500">#</span>
                        <span>Install via npm</span>
                      </div>
                      <div className="text-white">
                        npm install abolaji-ui-library
                      </div>

                      <div className="flex items-center gap-2 mb-2 mt-4">
                        <span className="text-gray-500">#</span>
                        <span>Import components</span>
                      </div>
                      <div className="text-white">
                        {`import { Button, Input, Card } from "abolaji-ui-library";`}
                      </div>

                      <div className="flex items-center gap-2 mb-2 mt-4">
                        <span className="text-gray-500">#</span>
                        <span>Use in your app</span>
                      </div>
                      <div className="text-white">
                        {`<Button variant="primary">Get Started</Button>`}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-green-600 text-2xl mb-2">22+</div>
                      <div className="font-semibold text-green-800">
                        Components
                      </div>
                      <div className="text-sm text-green-600">Ready to use</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="text-blue-600 text-2xl mb-2">0</div>
                      <div className="font-semibold text-blue-800">
                        Dependencies
                      </div>
                      <div className="text-sm text-blue-600">Lightweight</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="text-purple-600 text-2xl mb-2">100%</div>
                      <div className="font-semibold text-purple-800">
                        TypeScript
                      </div>
                      <div className="text-sm text-purple-600">Type safe</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Alert Component Documentation */}
              {activeShowcaseTab === "alert" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      ⚠️ Alert Component
                    </h3>
                    <p className="text-gray-600">
                      Display contextual feedback messages to users with
                      different variants and styling options.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      {/* This would show Alert examples - placeholder for now */}
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-sm text-blue-700">
                              This is an info alert. Great for sharing
                              information!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-sm text-green-700">
                              Success! Your action was completed successfully.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                              Warning: Please review your input before
                              proceeding.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-sm text-red-700">
                              Error: Something went wrong. Please try again.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Alert } from "abolaji-ui-library";

function MyComponent() {
  return (
    <div>
      <Alert variant="info" title="Information">
        This is an informational message for the user.
      </Alert>
      
      <Alert variant="success" dismissible onDismiss={() => {}}>
        Operation completed successfully!
      </Alert>
      
      <Alert variant="warning" icon="⚠️">
        Please review your settings before continuing.
      </Alert>
      
      <Alert variant="error" className="mt-4">
        An error occurred while processing your request.
      </Alert>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              variant
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'info' | 'success' | 'warning' | 'error'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'info'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Visual style of the alert
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              title
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Optional title for the alert
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              dismissible
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Whether the alert can be dismissed
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onDismiss
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              () =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Callback when alert is dismissed
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              icon
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Custom icon for the alert
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              children
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Alert content
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Button Component Documentation */}
              {activeShowcaseTab === "button" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🔘 Button Component
                    </h3>
                    <p className="text-gray-600">
                      Versatile button component with multiple variants, sizes,
                      and states for user interactions.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-3">Variants</h5>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="primary">Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="secondary">Outline</Button>
                          <Button variant="secondary">Ghost</Button>
                          <Button variant="secondary">Danger</Button>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Sizes</h5>
                        <div className="flex flex-wrap items-center gap-3">
                          <Button size="small">Small</Button>
                          <Button size="medium">Medium</Button>
                          <Button size="large">Large</Button>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">States</h5>
                        <div className="flex flex-wrap gap-3">
                          <Button disabled>Disabled</Button>
                          <Button variant="primary">Loading...</Button>
                          <Button variant="primary">Normal</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Button } from "abolaji-ui-library";

function MyComponent() {
  return (
    <div className="space-x-2">
      <Button 
        variant="primary" 
        size="lg"
        onClick={() => console.log('Clicked!')}
      >
        Get Started
      </Button>
      
      <Button 
        variant="secondary" 
        disabled={isLoading}
        loading={isSubmitting}
      >
        Save Changes
      </Button>
      
      <Button 
        variant="danger"
        onClick={handleDelete}
        className="ml-auto"
      >
        Delete
      </Button>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              variant
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary' | 'secondary' | 'outline' | 'ghost' |
                              'danger'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Visual style of the button
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Size of the button
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              disabled
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Whether the button is disabled
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              loading
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Shows loading state with spinner
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              fullWidth
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Makes button full width
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onClick
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (e: MouseEvent) =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Click event handler
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Input Component Documentation */}
              {activeShowcaseTab === "input" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      📝 Input Component
                    </h3>
                    <p className="text-gray-600">
                      Flexible input field with validation, icons, and various
                      input types support.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Basic Input"
                          placeholder="Enter text..."
                          value=""
                          onChange={() => {}}
                        />
                        <Input
                          label="With Icon"
                          placeholder="Search..."
                          value=""
                          onChange={() => {}}
                          icon={Search}
                        />
                        <Input
                          label="Email"
                          type="email"
                          placeholder="user@example.com"
                          value=""
                          onChange={() => {}}
                          icon={Mail}
                          helperText="Please enter a valid email address."
                        />
                        <Input
                          label="Required Field"
                          placeholder="This field is required"
                          value=""
                          onChange={() => {}}
                          required
                        />
                        <Input
                          label="With Error"
                          placeholder="Invalid input"
                          value=""
                          onChange={() => {}}
                          error="This field is required"
                        />
                        <Input
                          label="Disabled"
                          placeholder="Disabled input"
                          value=""
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Input } from "abolaji-ui-library";
import { Mail, Search } from "lucide-react";

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="space-y-4">
      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        error={error}
        required
        icon={Mail}
      />
      
      <Input
        label="Search"
        placeholder="Search products..."
        value=""
        onChange={() => {}}
        icon={Search}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Label text for the input
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              type
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'text'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              HTML input type
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Input value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              placeholder
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Placeholder text
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              error
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Error message to display
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              helperText
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Helper text to display below the input
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              icon
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Icon to display in input
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              required
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Whether the field is required
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              disabled
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Whether the input is disabled
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* FileUpload Component Documentation */}
              {activeShowcaseTab === "fileupload" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      📎 File Upload Component
                    </h3>
                    <p className="text-gray-600">
                      Drag-and-drop file upload with validation, preview, and
                      progress tracking.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <FileUpload
                        label="Upload Profile Picture"
                        onFileSelect={(file: File) =>
                          console.log("File selected:", file)
                        }
                        accept="image/*"
                        maxSize={5}
                      />
                      <FileUpload
                        label="Upload Documents"
                        onFileSelect={(file: File) =>
                          console.log("File selected:", file)
                        }
                        accept=".pdf,.doc,.docx"
                        maxSize={10}
                        multiple
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { FileUpload } from "abolaji-ui-library";

function MyForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    // Upload logic here
  };

  return (
    <div className="space-y-4">
      <FileUpload
        label="Profile Picture"
        onFileSelect={handleFileSelect}
        accept="image/*"
        maxSize={5} // 5MB
        preview={true}
      />
      
      <FileUpload
        label="Multiple Documents"
        onFileSelect={handleFileSelect}
        accept=".pdf,.doc,.docx,.txt"
        maxSize={10} // 10MB
        multiple={true}
        dragDropText="Drag files here or click to browse"
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Label for the file upload
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onFileSelect
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (file: File) =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Callback when file is selected
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              accept
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Accepted file types
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              maxSize
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Maximum file size in MB
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              multiple
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Allow multiple file selection
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              preview
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show file preview
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              dragDropText
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'Drag files here or click to browse'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Text shown in drop zone
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Badge Component Documentation */}
              {activeShowcaseTab === "badge" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🏷️ Badge Component
                    </h3>
                    <p className="text-gray-600">
                      Small status indicators and labels with various styles and
                      colors.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-3">Variants</h5>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Default
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Success
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Warning
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Error
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Secondary
                          </span>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Sizes</h5>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Small
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                            Medium
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-lg text-base font-medium bg-blue-100 text-blue-800">
                            Large
                          </span>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">With Dots</h5>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                            Active
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-1"></span>
                            Offline
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Badge } from "abolaji-ui-library";

function UserProfile() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3>John Doe</h3>
        <Badge variant="success" size="sm">
          Active
        </Badge>
      </div>
      
      <div className="flex gap-2">
        <Badge variant="primary">Developer</Badge>
        <Badge variant="secondary">React</Badge>
        <Badge variant="warning">Premium</Badge>
      </div>
      
      <Badge variant="error" dot>
        🔴 Critical Issue
      </Badge>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              variant
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary' | 'secondary' | 'success' | 'warning' |
                              'error'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Visual style of the badge
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Size of the badge
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              dot
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show a colored dot indicator
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              children
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Badge content
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Progress Bar Component Documentation */}
              {activeShowcaseTab === "progress" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      📊 Progress Bar Component
                    </h3>
                    <p className="text-gray-600">
                      Visual progress indicators with customizable styles and
                      animations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-3">Basic Progress</h5>
                        <div className="space-y-3">
                          <ProgressBar value={25} showLabel={true} />
                          <ProgressBar value={50} showLabel={true} />
                          <ProgressBar value={75} showLabel={true} />
                          <ProgressBar value={100} showLabel={true} />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Different Variants</h5>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">
                              Success (75%)
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-600 h-2 rounded-full"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">
                              Warning (50%)
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-600 h-2 rounded-full"
                                style={{ width: "50%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">
                              Error (25%)
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-red-600 h-2 rounded-full"
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Sizes</h5>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Small</p>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div
                                className="bg-blue-600 h-1 rounded-full"
                                style={{ width: "60%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Medium</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: "60%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Large</p>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="bg-blue-600 h-3 rounded-full"
                                style={{ width: "60%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { ProgressBar } from "abolaji-ui-library";

function UploadProgress() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          Upload Progress
        </label>
        <ProgressBar 
          value={progress} 
          showLabel={true}
          variant="primary"
          size="md"
        />
      </div>
      
      <ProgressBar 
        value={85} 
        showLabel={true}
        variant="success"
        size="lg"
        animated={true}
      />
      
      <ProgressBar 
        value={45} 
        showLabel={false}
        variant="warning"
        className="mt-2"
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              0
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Progress value (0-100)
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showLabel
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show percentage label
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              variant
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary' | 'success' | 'warning' | 'error'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Color variant
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Size of the progress bar
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              animated
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Enable progress animation
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Loading Spinner Component Documentation */}
              {activeShowcaseTab === "spinner" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      ⏳ Loading Spinner Component
                    </h3>
                    <p className="text-gray-600">
                      Animated loading indicators for various loading states and
                      contexts.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-3">Sizes</h5>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">Small</p>
                          </div>
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">Medium</p>
                          </div>
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">Large</p>
                          </div>
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">
                              Extra Large
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Colors</h5>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">
                              Primary
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">
                              Success
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">
                              Warning
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600 mx-auto"></div>
                            <p className="text-sm text-gray-600 mt-2">Error</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">With Text</h5>
                        <div className="flex items-center gap-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                          <span className="text-gray-600">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { LoadingSpinner } from "abolaji-ui-library";

function DataTable() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner 
          size="lg" 
          color="primary" 
          text="Loading data..."
        />
      </div>
    );
  }

  return (
    <div>
      <Button disabled={submitting}>
        {submitting && <LoadingSpinner size="sm" className="mr-2" />}
        Submit Form
      </Button>
      
      <LoadingSpinner 
        size="md" 
        overlay={true}
        text="Processing..."
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg' | 'xl'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Size of the spinner
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              color
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary' | 'success' | 'warning' | 'error' |
                              'gray'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Color of the spinner
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              text
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Loading text to display
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              overlay
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show as overlay spinner
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              centered
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Center the spinner
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Component Documentation */}
              {activeShowcaseTab === "card" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🃏 Card Component
                    </h3>
                    <p className="text-gray-600">
                      Flexible container component for grouping related content
                      with various styling options.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-4">
                          <h5 className="font-semibold mb-2">Basic Card</h5>
                          <p className="text-gray-600 text-sm">
                            This is a basic card with simple content and default
                            styling.
                          </p>
                        </Card>
                        <Card className="p-4 hover:shadow-lg transition-shadow">
                          <h5 className="font-semibold mb-2">
                            Interactive Card
                          </h5>
                          <p className="text-gray-600 text-sm">
                            This card has hover effects and enhanced shadows.
                          </p>
                        </Card>
                      </div>
                      <Card className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-xl">👤</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">User Profile Card</h5>
                            <p className="text-gray-600 text-sm">
                              john@example.com
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Full-stack developer with 5+ years of experience in
                          React, Node.js, and cloud technologies.
                        </p>
                        <div className="flex gap-2">
                          <Button size="small" variant="primary">
                            Connect
                          </Button>
                          <Button size="small" variant="secondary">
                            Message
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Card } from "abolaji-ui-library";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
        <p className="text-3xl font-bold text-blue-600">1,234</p>
        <p className="text-sm text-gray-600">↗️ +12% from last month</p>
      </Card>
      
      <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h3 className="text-lg font-semibold mb-2">Revenue</h3>
        <p className="text-3xl font-bold">$45,678</p>
        <p className="text-sm opacity-90">📈 +8% growth</p>
      </Card>
      
      <Card className="p-0 overflow-hidden">
        <img src="/image.jpg" alt="Card image" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold">Image Card</h3>
          <p className="text-gray-600 text-sm">Card with image header</p>
        </div>
      </Card>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              children
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Card content
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              className
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Additional CSS classes
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              variant
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'default' | 'bordered' | 'shadow' | 'elevated'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'default'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Visual style variant
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              hoverable
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Enable hover effects
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              clickable
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Make card clickable
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Select Component Documentation */}
              {activeShowcaseTab === "select" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      📋 Select Component
                    </h3>
                    <p className="text-gray-600">
                      Dropdown selection component with search, validation, and
                      custom styling options.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                          label="Basic Select"
                          options={countryOptions.slice(0, 4)}
                          placeholder="Choose a country"
                          value=""
                          onChange={() => {}}
                        />
                        <Select
                          label="With Search"
                          options={skillsOptions}
                          placeholder="Select skill"
                          value=""
                          onChange={() => {}}
                        />
                        <Select
                          label="Required Field"
                          options={experienceOptions}
                          placeholder="Choose experience level"
                          required={true}
                          value=""
                          onChange={() => {}}
                        />
                        <Select
                          label="With Error"
                          options={countryOptions.slice(0, 3)}
                          placeholder="Select country"
                          error="This field is required"
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Select } from "abolaji-ui-library";

function SettingsForm() {
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const countryOptions = [
    { value: 'us', label: '🇺🇸 United States' },
    { value: 'ca', label: '🇨🇦 Canada' },
    { value: 'uk', label: '🇬🇧 United Kingdom' },
  ];

  return (
    <div className="space-y-4">
      <Select
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        options={countryOptions}
        placeholder="Select your country"
        error={error}
        required
        searchable
      />
      
      <Select
        label="Theme"
        options={[
          { value: 'light', label: '☀️ Light' },
          { value: 'dark', label: '🌙 Dark' },
          { value: 'auto', label: '🔄 Auto' }
        ]}
        defaultValue="light"
        disabled={loading}
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Label for the select
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              options
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Array&lt;{"{value: string, label: string}"}&gt;
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              []
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Array of option objects
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Selected value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              placeholder
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Placeholder text
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              searchable
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Enable search functionality
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              error
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Error message
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              required
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Required field indicator
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              disabled
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Disabled state
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* MultiSelect Component Documentation */}
              {activeShowcaseTab === "multiselect" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🏷️ MultiSelect Component
                    </h3>
                    <p className="text-gray-600">
                      Advanced multi-selection dropdown with tags, search, and
                      batch operations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <MultiSelect
                        label="Technical Skills"
                        options={skillsOptions}
                        placeholder="Select multiple skills"
                        value={[]}
                        onChange={() => {}}
                      />
                      <MultiSelect
                        label="Countries Visited"
                        options={countryOptions}
                        placeholder="Choose countries"
                        value={["us", "ca"]}
                        onChange={() => {}}
                        maxSelection={5}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { MultiSelect } from "abolaji-ui-library";

function SkillsForm() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillOptions = [
    { value: 'react', label: '⚛️ React' },
    { value: 'vue', label: '💚 Vue.js' },
    { value: 'angular', label: '🅰️ Angular' },
    { value: 'node', label: '🟢 Node.js' },
  ];

  return (
    <div className="space-y-4">
      <MultiSelect
        label="Technical Skills"
        value={selectedSkills}
        onChange={(e) => setSelectedSkills(e.target.value)}
        options={skillOptions}
        placeholder="Select your skills"
        searchable
        maxSelection={3}
        showSelectAll
      />
      
      <MultiSelect
        label="Languages"
        options={languageOptions}
        placeholder="Choose languages"
        allowCustomValues
        createText="Add new language"
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Label for the multiselect
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              options
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Array&lt;{"{value: string, label: string}"}&gt;
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              []
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Array of option objects
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (string | number)[]
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              []
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Array of selected values
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              maxSelection
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Maximum number of selections
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              searchable
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Enable search functionality
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showSelectAll
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show select all option
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              allowCustomValues
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Allow creating custom values
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              createText
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'Create'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Text for create option
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Checkbox Component Documentation */}
              {activeShowcaseTab === "checkbox" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      ☑️ Checkbox Component
                    </h3>
                    <p className="text-gray-600">
                      Customizable checkbox input with various states and
                      styling options.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="space-y-3">
                        <Checkbox
                          label="Basic checkbox"
                          checked={false}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="Checked by default"
                          checked={true}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="Disabled checkbox"
                          disabled={true}
                          checked={false}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="Disabled and checked"
                          checked={true}
                          disabled={true}
                          onChange={() => {}}
                        />
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium">Checkbox Group</h5>
                        <Checkbox
                          label="🎵 Music"
                          checked={false}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="📚 Reading"
                          checked={false}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="🏃‍♂️ Sports"
                          checked={false}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="🎨 Art"
                          checked={false}
                          onChange={() => {}}
                        />
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium">Terms and Conditions</h5>
                        <Checkbox
                          label="I agree to the terms and conditions"
                          required={true}
                          checked={false}
                          onChange={() => {}}
                        />
                        <Checkbox
                          label="Subscribe to newsletter (optional)"
                          checked={false}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Checkbox } from "abolaji-ui-library";

function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: true,
    marketing: false
  });

  const handleChange = (field, checked) => {
    setPreferences(prev => ({ ...prev, [field]: checked }));
  };

  return (
    <div className="space-y-4">
      <h3>Communication Preferences</h3>
      
      <Checkbox
        label="Email Newsletter"
        checked={preferences.newsletter}
        onChange={(e) => handleChange('newsletter', e.target.checked)}
        description="Weekly updates about new features"
      />
      
      <Checkbox
        label="Push Notifications"
        checked={preferences.notifications}
        onChange={(e) => handleChange('notifications', e.target.checked)}
        required
      />
      
      <Checkbox
        label="Marketing Communications"
        checked={preferences.marketing}
        onChange={(e) => handleChange('marketing', e.target.checked)}
        disabled={!preferences.newsletter}
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Checkbox label text
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              checked
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Checked state
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onChange
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (e: ChangeEvent) =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Change event handler
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              disabled
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Disabled state
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              required
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Required field indicator
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              description
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Help text description
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Size of the checkbox
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Radio Group Component Documentation */}
              {activeShowcaseTab === "radio" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🔘 Radio Group Component
                    </h3>
                    <p className="text-gray-600">
                      Grouped radio buttons for single-selection choices with
                      flexible layouts.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-3">Vertical Layout</h5>
                        <RadioGroup
                          label="Preferred Contact Method"
                          options={[
                            { value: "email", label: "📧 Email" },
                            { value: "phone", label: "📱 Phone" },
                            { value: "sms", label: "💬 SMS" },
                          ]}
                          value=""
                          onChange={() => {}}
                          orientation="vertical"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Horizontal Layout</h5>
                        <RadioGroup
                          label="Plan Type"
                          options={[
                            { value: "free", label: "🆓 Free" },
                            { value: "pro", label: "⭐ Pro" },
                            { value: "enterprise", label: "🏢 Enterprise" },
                          ]}
                          value="pro"
                          onChange={() => {}}
                          orientation="horizontal"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">With Descriptions</h5>
                        <div className="space-y-3">
                          <div className="border rounded-lg p-3">
                            <label className="flex items-start space-x-3">
                              <input
                                type="radio"
                                name="plan"
                                className="mt-1"
                              />
                              <div>
                                <div className="font-medium">🆓 Free Plan</div>
                                <div className="text-sm text-gray-600">
                                  Basic features for personal use
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="border rounded-lg p-3 bg-blue-50 border-blue-200">
                            <label className="flex items-start space-x-3">
                              <input
                                type="radio"
                                name="plan"
                                defaultChecked
                                className="mt-1"
                              />
                              <div>
                                <div className="font-medium">⭐ Pro Plan</div>
                                <div className="text-sm text-gray-600">
                                  Advanced features for professionals
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="border rounded-lg p-3">
                            <label className="flex items-start space-x-3">
                              <input
                                type="radio"
                                name="plan"
                                className="mt-1"
                              />
                              <div>
                                <div className="font-medium">
                                  🏢 Enterprise Plan
                                </div>
                                <div className="text-sm text-gray-600">
                                  Full features for teams
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { RadioGroup } from "abolaji-ui-library";

function SubscriptionForm() {
  const [plan, setPlan] = useState('pro');
  const [billing, setBilling] = useState('monthly');

  const planOptions = [
    { value: 'free', label: '🆓 Free', description: 'Basic features' },
    { value: 'pro', label: '⭐ Pro', description: 'Advanced features' },
    { value: 'enterprise', label: '🏢 Enterprise', description: 'Full features' }
  ];

  const billingOptions = [
    { value: 'monthly', label: '📅 Monthly' },
    { value: 'yearly', label: '💰 Yearly (Save 20%)' }
  ];

  return (
    <div className="space-y-6">
      <RadioGroup
        label="Choose Your Plan"
        options={planOptions}
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        orientation="vertical"
        required
      />
      
      <RadioGroup
        label="Billing Cycle"
        options={billingOptions}
        value={billing}
        onChange={(e) => setBilling(e.target.value)}
        orientation="horizontal"
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Group label
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                              options
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Array&lt;
                              {
                                "{value: string, label: string, description?: string}"
                              }
                              &gt;
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              []
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Array of radio options
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Selected value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              orientation
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'horizontal' | 'vertical'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'vertical'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Layout direction
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onChange
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (e: ChangeEvent) =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Change event handler
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              error
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Error message
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              required
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Required field indicator
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Toggle Component Documentation */}
              {activeShowcaseTab === "toggle" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🔄 Toggle Component
                    </h3>
                    <p className="text-gray-600">
                      Modern toggle switch for binary on/off states with smooth
                      animations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div className="space-y-4">
                        <h5 className="font-medium">Basic Toggles</h5>
                        <div className="space-y-3">
                          <Toggle
                            label="Enable notifications"
                            checked={false}
                            onChange={() => {}}
                          />
                          <Toggle
                            label="Dark mode"
                            checked={true}
                            onChange={() => {}}
                          />
                          <Toggle
                            label="Auto-save"
                            checked={false}
                            onChange={() => {}}
                            disabled
                          />
                          <Toggle
                            label="Premium features"
                            checked={true}
                            onChange={() => {}}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h5 className="font-medium">Different Sizes</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600 w-16">
                              Small:
                            </span>
                            <div className="relative inline-block w-10 h-5">
                              <input type="checkbox" className="sr-only" />
                              <div className="block bg-gray-300 w-10 h-5 rounded-full"></div>
                              <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600 w-16">
                              Medium:
                            </span>
                            <div className="relative inline-block w-12 h-6">
                              <input
                                type="checkbox"
                                className="sr-only"
                                defaultChecked
                              />
                              <div className="block bg-blue-500 w-12 h-6 rounded-full"></div>
                              <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600 w-16">
                              Large:
                            </span>
                            <div className="relative inline-block w-14 h-7">
                              <input type="checkbox" className="sr-only" />
                              <div className="block bg-gray-300 w-14 h-7 rounded-full"></div>
                              <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h5 className="font-medium">Settings Panel</h5>
                        <div className="bg-white p-4 rounded-lg border space-y-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Email Notifications
                              </div>
                              <div className="text-sm text-gray-600">
                                Receive updates via email
                              </div>
                            </div>
                            <Toggle checked={true} onChange={() => {}} />
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Push Notifications
                              </div>
                              <div className="text-sm text-gray-600">
                                Mobile push notifications
                              </div>
                            </div>
                            <Toggle checked={false} onChange={() => {}} />
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Marketing Communications
                              </div>
                              <div className="text-sm text-gray-600">
                                Promotional content
                              </div>
                            </div>
                            <Toggle checked={false} onChange={() => {}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Toggle } from "abolaji-ui-library";

function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    marketing: false
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <h2>Account Settings</h2>
      
      <div className="space-y-4">
        <Toggle
          label="Email Notifications"
          checked={settings.notifications}
          onChange={(checked) => updateSetting('notifications', checked)}
          description="Receive important updates via email"
        />
        
        <Toggle
          label="Dark Mode"
          checked={settings.darkMode}
          onChange={(checked) => updateSetting('darkMode', checked)}
          size="lg"
        />
        
        <Toggle
          label="Auto-save"
          checked={settings.autoSave}
          onChange={(checked) => updateSetting('autoSave', checked)}
          disabled={!settings.notifications}
        />
      </div>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Toggle label text
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              checked
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Toggle state
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onChange
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (checked: boolean) =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Change event handler
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              disabled
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Disabled state
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Size of the toggle
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              description
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Help text description
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              color
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary' | 'success' | 'warning' | 'error'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'primary'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Toggle color theme
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Textarea Component Documentation */}
              {activeShowcaseTab === "textarea" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      📄 Textarea Component
                    </h3>
                    <p className="text-gray-600">
                      Multi-line text input with auto-resize, character limits,
                      and validation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <Textarea
                          label="Basic Textarea"
                          placeholder="Enter your message..."
                          rows={3}
                          value=""
                          onChange={() => {}}
                        />
                        <Textarea
                          label="With Character Limit"
                          placeholder="Tell us about yourself (max 500 characters)..."
                          maxLength={500}
                          rows={4}
                          value=""
                          onChange={() => {}}
                        />
                        <Textarea
                          label="Required Field"
                          placeholder="This field is required..."
                          required={true}
                          rows={3}
                          value=""
                          onChange={() => {}}
                        />
                        <Textarea
                          label="Disabled"
                          value="This textarea is disabled"
                          disabled={true}
                          rows={2}
                          onChange={() => {}}
                        />
                        <Textarea
                          label="With Error"
                          placeholder="Invalid input..."
                          error="This field cannot be empty"
                          rows={3}
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Textarea } from "abolaji-ui-library";

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!feedback.trim()) {
      setError('Feedback is required');
      return;
    }
    // Submit logic here
  };

  return (
    <div className="space-y-4">
      <Textarea
        label="Feedback"
        value={feedback}
        onChange={(e) => {
          setFeedback(e.target.value);
          if (error) setError('');
        }}
        placeholder="Share your thoughts and suggestions..."
        rows={4}
        maxLength={1000}
        error={error}
        required
      />
      
      <Textarea
        label="Additional Details"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Any additional information (optional)..."
        rows={3}
        resize="vertical"
      />
      
      <Textarea
        label="Bug Report"
        placeholder="Describe the issue in detail..."
        rows={6}
        autoResize
        minRows={3}
        maxRows={10}
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Label text for the textarea
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Textarea value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              placeholder
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Placeholder text
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              rows
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              3
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Number of visible rows
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              maxLength
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Maximum character limit
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              autoResize
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Auto-resize with content
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              resize
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'none' | 'vertical' | 'horizontal' | 'both'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'vertical'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Resize behavior
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              error
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Error message to display
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Password Component Documentation */}
              {activeShowcaseTab === "password" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🔒 Password Component
                    </h3>
                    <p className="text-gray-600">
                      Secure password input with strength indicator, toggle
                      visibility, and validation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <PasswordInput
                          label="Password"
                          placeholder="Enter your password"
                          showStrength={true}
                          value=""
                          onChange={() => {}}
                        />
                        <PasswordInput
                          label="Confirm Password"
                          placeholder="Confirm your password"
                          value=""
                          onChange={() => {}}
                        />
                        <PasswordInput
                          label="Current Password"
                          placeholder="Enter current password"
                          required={true}
                          value=""
                          onChange={() => {}}
                        />
                        <PasswordInput
                          label="New Password"
                          placeholder="Create new password"
                          error="Password must be at least 8 characters"
                          showStrength={true}
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">
                          Password Strength Levels
                        </h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-20 h-2 bg-red-200 rounded-full">
                              <div className="w-1/4 h-2 bg-red-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-red-600">Weak</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-20 h-2 bg-yellow-200 rounded-full">
                              <div className="w-2/4 h-2 bg-yellow-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-yellow-600">
                              Fair
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-20 h-2 bg-blue-200 rounded-full">
                              <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-blue-600">Good</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-20 h-2 bg-green-200 rounded-full">
                              <div className="w-full h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-green-600">
                              Strong
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { PasswordInput } from "abolaji-ui-library";

function RegisterForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validatePassword = (value) => {
    if (value.length < 8) return 'Password must be at least 8 characters';
    if (!/(?=.*[a-z])/.test(value)) return 'Must contain lowercase letter';
    if (!/(?=.*[A-Z])/.test(value)) return 'Must contain uppercase letter';
    if (!/(?=.*\\d)/.test(value)) return 'Must contain number';
    return '';
  };

  return (
    <div className="space-y-4">
      <PasswordInput
        label="Create Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrors(prev => ({ ...prev, password: validatePassword(e.target.value) }));
        }}
        placeholder="Enter a secure password"
        error={errors.password}
        showStrength={true}
        required
      />
      
      <PasswordInput
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        error={password !== confirmPassword ? 'Passwords do not match' : ''}
        required
      />
      
      <PasswordInput
        label="Current Password"
        placeholder="Enter your current password"
        showToggle={false}
        autoComplete="current-password"
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Label for the password input
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Password value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showStrength
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show password strength indicator
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showToggle
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              true
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show visibility toggle button
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              minLength
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              8
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Minimum password length
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              strengthRules
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              object
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Custom strength validation rules
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              error
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Error message
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              autoComplete
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'new-password'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              HTML autocomplete attribute
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Range Slider Component Documentation */}
              {activeShowcaseTab === "range" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🎚️ Range Slider Component
                    </h3>
                    <p className="text-gray-600">
                      Interactive range slider for selecting numeric values with
                      customizable styling and labels.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-3">Basic Slider</h5>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Volume: 75%
                            </label>
                            <RangeSlider
                              value={75}
                              onChange={() => {}}
                              min={0}
                              max={100}
                              showValue={true}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Price Range: $250
                            </label>
                            <RangeSlider
                              value={250}
                              onChange={() => {}}
                              min={50}
                              max={500}
                              step={10}
                              showValue={true}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Different Sizes</h5>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Small
                            </label>
                            <input
                              type="range"
                              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                              min="0"
                              max="100"
                              defaultValue="40"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Medium
                            </label>
                            <input
                              type="range"
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                              min="0"
                              max="100"
                              defaultValue="60"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Large
                            </label>
                            <input
                              type="range"
                              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                              min="0"
                              max="100"
                              defaultValue="80"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">With Custom Labels</h5>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Beginner</span>
                              <span>Expert</span>
                            </div>
                            <input
                              type="range"
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                              min="1"
                              max="5"
                              defaultValue="3"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { RangeSlider } from "abolaji-ui-library";

function PricingSettings() {
  const [budget, setBudget] = useState(500);
  const [quality, setQuality] = useState(3);
  const [volume, setVolume] = useState(75);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Budget: \${budget.toLocaleString()}
        </label>
        <RangeSlider
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          min={100}
          max={2000}
          step={50}
          showValue={true}
          formatValue={(val) => \`\$\${val}\`}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">
          Quality Level: {['Poor', 'Fair', 'Good', 'Great', 'Excellent'][quality - 1]}
        </label>
        <RangeSlider
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          min={1}
          max={5}
          step={1}
          showMarks={true}
          marks={['Poor', 'Fair', 'Good', 'Great', 'Excellent']}
        />
      </div>
      
      <div>
        <RangeSlider
          label="Volume"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          min={0}
          max={100}
          step={5}
          showValue={true}
          suffix="%"
          color="primary"
        />
      </div>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              0
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Current slider value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              min
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              0
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Minimum value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              max
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              100
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Maximum value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              step
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              1
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Step increment
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showValue
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show current value
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showMarks
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show step marks
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              marks
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string[]
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Custom mark labels
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              formatValue
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (value: number) =&gt; string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Custom value formatter
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* DatePicker Component Documentation */}
              {activeShowcaseTab === "datepicker" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      📅 Date Picker Component
                    </h3>
                    <p className="text-gray-600">
                      Flexible date selection component with calendar view,
                      validation, and formatting options.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DatePicker
                          label="Birth Date"
                          placeholder="Select your birth date"
                          value=""
                          onChange={() => {}}
                        />
                        <DatePicker
                          label="Event Date"
                          placeholder="Choose event date"
                          required={true}
                          value=""
                          onChange={() => {}}
                        />
                        <DatePicker
                          label="Start Date"
                          placeholder="Select start date"
                          value=""
                          onChange={() => {}}
                        />
                        <DatePicker
                          label="End Date"
                          placeholder="Select end date"
                          disabled={true}
                          value=""
                          onChange={() => {}}
                        />
                      </div>
                      <div>
                        <h5 className="font-medium mb-3">Date Range Example</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Check-in Date
                            </label>
                            <input
                              type="date"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Check-out Date
                            </label>
                            <input
                              type="date"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { DatePicker } from "abolaji-ui-library";

function BookingForm() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const maxBirthDate = new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000)
    .toISOString().split('T')[0]; // 18 years ago

  return (
    <div className="space-y-4">
      <DatePicker
        label="Birth Date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        placeholder="Select your birth date"
        max={maxBirthDate}
        required
      />
      
      <div className="grid grid-cols-2 gap-4">
        <DatePicker
          label="Check-in Date"
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
            // Clear check-out if it's before new check-in
            if (checkOut && e.target.value > checkOut) {
              setCheckOut('');
            }
          }}
          min={today}
          placeholder="Select check-in"
          required
        />
        
        <DatePicker
          label="Check-out Date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn || today}
          placeholder="Select check-out"
          disabled={!checkIn}
          required
        />
      </div>
      
      <DatePicker
        label="Event Date"
        placeholder="Optional event date"
        format="MM/DD/YYYY"
        showCalendar={true}
        clearable={true}
        value=""
        onChange={() => {}}
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              label
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Label for the date picker
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              value
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Date value (YYYY-MM-DD format)
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              placeholder
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Placeholder text
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              min
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Minimum selectable date
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              max
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Maximum selectable date
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              format
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'YYYY-MM-DD'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Date format pattern
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showCalendar
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              true
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show calendar popup
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              clearable
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Allow clearing the date
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Tabs Component Documentation */}
              {activeShowcaseTab === "tabs" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      📑 Tabs Component
                    </h3>
                    <p className="text-gray-600">
                      Organized content navigation with multiple tab styles and
                      orientations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-3">Basic Tabs</h5>
                        <div className="bg-white rounded-lg border">
                          <div className="border-b">
                            <nav className="flex space-x-8 px-4">
                              <button className="py-3 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
                                Overview
                              </button>
                              <button className="py-3 px-1 text-gray-500 hover:text-gray-700 font-medium text-sm">
                                Features
                              </button>
                              <button className="py-3 px-1 text-gray-500 hover:text-gray-700 font-medium text-sm">
                                Pricing
                              </button>
                              <button className="py-3 px-1 text-gray-500 hover:text-gray-700 font-medium text-sm">
                                Support
                              </button>
                            </nav>
                          </div>
                          <div className="p-4">
                            <h6 className="font-medium mb-2">
                              Overview Content
                            </h6>
                            <p className="text-gray-600 text-sm">
                              This is the overview tab content. It contains
                              important information about the product.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Pill Style Tabs</h5>
                        <div className="bg-white rounded-lg border">
                          <div className="p-4 border-b">
                            <nav className="flex space-x-2">
                              <button className="px-3 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                                Dashboard
                              </button>
                              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
                                Analytics
                              </button>
                              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
                                Reports
                              </button>
                              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
                                Settings
                              </button>
                            </nav>
                          </div>
                          <div className="p-4">
                            <h6 className="font-medium mb-2">Dashboard</h6>
                            <p className="text-gray-600 text-sm">
                              Welcome to your dashboard. Here you can see an
                              overview of your account.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">Vertical Tabs</h5>
                        <div className="bg-white rounded-lg border flex">
                          <nav className="w-48 border-r">
                            <div className="p-2 space-y-1">
                              <button className="w-full text-left px-3 py-2 bg-blue-50 text-blue-700 border-r-2 border-blue-500 text-sm font-medium">
                                📊 Statistics
                              </button>
                              <button className="w-full text-left px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                👥 Users
                              </button>
                              <button className="w-full text-left px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                💰 Revenue
                              </button>
                              <button className="w-full text-left px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                ⚙️ Settings
                              </button>
                            </div>
                          </nav>
                          <div className="flex-1 p-4">
                            <h6 className="font-medium mb-2">📊 Statistics</h6>
                            <p className="text-gray-600 text-sm">
                              View detailed statistics and metrics for your
                              application.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Tabs } from "abolaji-ui-library";

function ProductDetails() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'reviews', label: 'Reviews', icon: '⭐', badge: '24' }
  ];

  const content = {
    overview: <div>Product overview content...</div>,
    features: <div>Features list and details...</div>,
    pricing: <div>Pricing plans and options...</div>,
    reviews: <div>Customer reviews and ratings...</div>
  };

  return (
    <div>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        variant="underline"
        size="md"
      />
      
      <div className="mt-6">
        {content[activeTab]}
      </div>
      
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        variant="pills"
        orientation="vertical"
        className="mt-8"
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              tabs
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Array&lt;
                              {
                                "{id: string, label: string, icon?: string, badge?: string}"
                              }
                              &gt;
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              []
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Array of tab objects
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              activeTab
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Currently active tab ID
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onChange
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              (tabId: string) =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Tab change handler
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              variant
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'underline' | 'pills' | 'bordered'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'underline'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Visual style variant
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              orientation
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'horizontal' | 'vertical'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'horizontal'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Tab layout direction
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Tab size
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              fullWidth
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Make tabs full width
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Component Documentation */}
              {activeShowcaseTab === "modal" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🪟 Modal Component
                    </h3>
                    <p className="text-gray-600">
                      Flexible dialog component for overlays, confirmations, and
                      complex forms.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button
                          onClick={() => setShowModal(true)}
                          variant="primary"
                        >
                          🪟 Open Modal
                        </Button>
                        <Button variant="secondary">❓ Confirmation</Button>
                        <Button variant="secondary">📝 Form Modal</Button>
                      </div>

                      <div className="bg-white border rounded-lg p-4">
                        <h5 className="font-medium mb-3">Modal Sizes</h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          <Button size="small" variant="secondary">
                            Small
                          </Button>
                          <Button size="small" variant="secondary">
                            Medium
                          </Button>
                          <Button size="small" variant="secondary">
                            Large
                          </Button>
                          <Button size="small" variant="secondary">
                            Full Screen
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg p-4">
                        <h5 className="font-medium mb-3">
                          Modal Preview Structure
                        </h5>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-center border-b pb-2">
                            <h6 className="font-semibold">Modal Title</h6>
                            <button className="text-gray-400 hover:text-gray-600">
                              ✕
                            </button>
                          </div>
                          <div className="py-4">
                            <p className="text-gray-600 text-sm">
                              Modal content goes here. This can include forms,
                              images, text, or any other React components.
                            </p>
                          </div>
                          <div className="flex justify-end gap-2 border-t pt-3">
                            <Button size="small" variant="secondary">
                              Cancel
                            </Button>
                            <Button size="small" variant="primary">
                              Confirm
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Modal, Button } from "abolaji-ui-library";

function UserManagement() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteUser = async () => {
    try {
      await deleteUser(selectedUser.id);
      setShowDeleteModal(false);
      // Refresh user list
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <Button 
        onClick={() => setShowEditModal(true)}
        variant="primary"
      >
        Add User
      </Button>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete User"
        size="sm"
        footer={
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteUser}>
              Delete
            </Button>
          </div>
        }
      >
        <p>Are you sure you want to delete {selectedUser?.name}? This action cannot be undone.</p>
      </Modal>

      {/* Edit User Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit User"
        size="lg"
        closeOnOverlayClick={false}
        showCloseButton={true}
      >
        <UserEditForm
          user={selectedUser}
          onSave={(userData) => {
            // Save user logic
            setShowEditModal(false);
          }}
          onCancel={() => setShowEditModal(false)}
        />
      </Modal>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              isOpen
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Whether modal is open
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onClose
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              () =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Close handler function
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              title
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Modal title
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              size
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'sm' | 'md' | 'lg' | 'xl' | 'full'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'md'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Modal size
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              footer
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Footer content
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              closeOnOverlayClick
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              true
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Close on backdrop click
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              showCloseButton
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              true
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show close button
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              children
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Modal content
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Tooltip Component Documentation */}
              {activeShowcaseTab === "tooltip" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      💬 Tooltip Component
                    </h3>
                    <p className="text-gray-600">
                      Contextual help and information display with flexible
                      positioning and styling.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-4">Basic Tooltips</h5>
                        <div className="flex flex-wrap gap-4">
                          <div className="relative group">
                            <Button variant="secondary">
                              Hover for tooltip
                            </Button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              This is a tooltip
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>

                          <div className="relative group">
                            <Button variant="primary">💡 Help</Button>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                              Click here for detailed help
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-4">
                          Different Positions
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                          <div className="relative group">
                            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded">
                              Top
                            </button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              Top tooltip
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="px-4 py-2 bg-green-100 text-green-700 rounded">
                              Right
                            </button>
                            <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              Right tooltip
                              <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded">
                              Bottom
                            </button>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              Bottom tooltip
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded">
                              Left
                            </button>
                            <div className="absolute top-1/2 right-full transform -translate-y-1/2 mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              Left tooltip
                              <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-4">
                          Rich Content Tooltips
                        </h5>
                        <div className="flex gap-4">
                          <div className="relative group">
                            <span className="text-blue-600 underline cursor-help">
                              User Profile
                            </span>
                            <div className="absolute bottom-full left-0 mb-2 p-3 bg-white border shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none min-w-48">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">
                                  👤
                                </div>
                                <div>
                                  <div className="font-medium text-sm">
                                    John Doe
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Senior Developer
                                  </div>
                                </div>
                              </div>
                              <div className="text-xs text-gray-600">
                                Last active: 2 hours ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Tooltip } from "abolaji-ui-library";

function HelpfulInterface() {
  return (
    <div className="space-y-4">
      <Tooltip content="Save your progress" position="top">
        <Button variant="primary">💾 Save</Button>
      </Tooltip>
      
      <div className="flex items-center gap-2">
        <label>Password Strength</label>
        <Tooltip 
          content="Password must contain at least 8 characters, including uppercase, lowercase, numbers, and symbols"
          position="right"
          maxWidth={200}
        >
          <span className="text-blue-500 cursor-help">ℹ️</span>
        </Tooltip>
      </div>
      
      <Tooltip
        trigger="click"
        content={
          <div>
            <h4 className="font-semibold mb-2">Advanced Options</h4>
            <ul className="text-sm space-y-1">
              <li>• Enable notifications</li>
              <li>• Auto-sync data</li>
              <li>• Advanced security</li>
            </ul>
          </div>
        }
        position="bottom"
        theme="light"
      >
        <Button variant="secondary">⚙️ Settings</Button>
      </Tooltip>
      
      <Tooltip
        content="This feature requires a premium subscription"
        position="top"
        disabled={!user.isPremium}
        theme="warning"
      >
        <Button variant="primary" disabled={!user.isPremium}>
          🔒 Premium Feature
        </Button>
      </Tooltip>
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              content
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Tooltip content
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              position
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'top' | 'right' | 'bottom' | 'left'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'top'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Tooltip position
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              trigger
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'hover' | 'click' | 'focus'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'hover'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Trigger event
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              theme
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'dark' | 'light' | 'warning' | 'error'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'dark'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Tooltip theme
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              delay
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              0
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Show delay in milliseconds
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              maxWidth
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              250
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Maximum tooltip width
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              disabled
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              false
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Disable tooltip
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              children
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Trigger element
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Toast Component Documentation */}
              {activeShowcaseTab === "toast" && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      🍞 Toast Component
                    </h3>
                    <p className="text-gray-600">
                      Non-intrusive notification system for user feedback and
                      status updates.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Live Preview</h4>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                      <div>
                        <h5 className="font-medium mb-4">Toast Variants</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <Button
                            variant="primary"
                            onClick={() =>
                              addToast(
                                "Task completed successfully! 🎉",
                                "success"
                              )
                            }
                          >
                            Success Toast
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() =>
                              addToast(
                                "Something went wrong. Please try again.",
                                "error"
                              )
                            }
                          >
                            Error Toast
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() =>
                              addToast(
                                "Please review your input before proceeding.",
                                "warning"
                              )
                            }
                          >
                            Warning Toast
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() =>
                              addToast(
                                "Here's some information for you to know.",
                                "info"
                              )
                            }
                          >
                            Info Toast
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-4">Toast Examples</h5>
                        <div className="space-y-3">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">✅</span>
                              <span className="text-green-800 text-sm">
                                File uploaded successfully!
                              </span>
                            </div>
                            <button className="text-green-600 hover:text-green-800">
                              ✕
                            </button>
                          </div>

                          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-red-600">❌</span>
                              <span className="text-red-800 text-sm">
                                Failed to save changes. Please try again.
                              </span>
                            </div>
                            <button className="text-red-600 hover:text-red-800">
                              ✕
                            </button>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-600">⚠️</span>
                              <span className="text-yellow-800 text-sm">
                                Your session will expire in 5 minutes.
                              </span>
                            </div>
                            <button className="text-yellow-600 hover:text-yellow-800">
                              ✕
                            </button>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600">ℹ️</span>
                              <span className="text-blue-800 text-sm">
                                New features are now available in settings.
                              </span>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800">
                              ✕
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-4">Advanced Toasts</h5>
                        <div className="space-y-3">
                          <div className="bg-white border shadow-sm rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-blue-600 text-sm">
                                  👤
                                </span>
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-sm">
                                  New message from Sarah
                                </div>
                                <div className="text-gray-600 text-xs mt-1">
                                  Hey! Are you available for a quick call?
                                </div>
                                <div className="flex gap-2 mt-2">
                                  <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                    Reply
                                  </button>
                                  <button className="text-xs text-gray-500">
                                    Dismiss
                                  </button>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-gray-600">
                                ✕
                              </button>
                            </div>
                          </div>

                          <div className="bg-white border shadow-sm rounded-lg p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-sm">
                                  ⬇️
                                </span>
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-sm">
                                  Download complete
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                  <div className="bg-green-600 h-1.5 rounded-full w-full"></div>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-gray-600">
                                ✕
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Usage Example</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{`import { Toast, useToast } from "abolaji-ui-library";

function App() {
  const { addToast, toasts, removeToast } = useToast();

  const handleSave = async () => {
    try {
      addToast("Saving changes...", "info", { loading: true });
      
      await saveData();
      
      addToast("Changes saved successfully! 🎉", "success", {
        duration: 5000,
        action: {
          label: "Undo",
          onClick: handleUndo
        }
      });
    } catch (error) {
      addToast("Failed to save changes", "error", {
        duration: 0, // Persistent until manually closed
        description: error.message
      });
    }
  };

  const handleBulkAction = (count) => {
    addToast(\`Processing \${count} items...\`, "info", {
      progress: true,
      onProgress: (progress) => {
        // Update progress
      }
    });
  };

  return (
    <div>
      <Button onClick={handleSave}>Save Changes</Button>
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      
      {/* Individual Toast Usage */}
      <Toast
        message="Welcome to our app!"
        variant="success"
        isVisible={showWelcome}
        onClose={() => setShowWelcome(false)}
        position="bottom-center"
        duration={3000}
        icon="👋"
      />
    </div>
  );
}`}</pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Props</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Prop
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Default
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              message
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              string
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Toast message content
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              variant
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'success' | 'error' | 'warning' | 'info'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'info'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Toast variant style
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              duration
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              number
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              4000
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Auto-close duration (0 = persistent)
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              position
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'top-right' | 'top-left' | 'bottom-right' |
                              'bottom-left' | 'top-center' | 'bottom-center'
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              'top-right'
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Toast position
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              isVisible
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              boolean
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              true
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Toast visibility
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              onClose
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              () =&gt; void
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Close callback
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              icon
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ReactNode
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Custom icon
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              action
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {"{ label: string, onClick: () => void }"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              -
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              Action button config
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Component tabs - show placeholder for any remaining components */}
              {![
                "overview",
                "alert",
                "button",
                "input",
                "fileupload",
                "badge",
                "progress",
                "spinner",
                "card",
                "select",
                "multiselect",
                "checkbox",
                "radio",
                "toggle",
                "textarea",
                "password",
                "range",
                "datepicker",
                "tabs",
                "modal",
                "tooltip",
                "toast",
              ].includes(activeShowcaseTab) && (
                <div className="text-center py-8">
                  <h3 className="text-xl mb-4">Component Documentation</h3>
                  <p className="text-gray-600">
                    Documentation for the {activeShowcaseTab} component is being
                    prepared. Please check back soon!
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => setActiveShowcaseTab("overview")}
                    className="mt-4"
                  >
                    Back to Overview
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Footer */}
        <Card className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">
            🎉 Ready to Use Abolaji UI Components?
          </h3>
          <p className="text-gray-600 mb-4">
            Install the package and start building beautiful React applications
            today!
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <code className="text-sm">npm install abolaji-ui-library</code>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              variant="primary"
              onClick={() =>
                window.open(
                  "https://www.npmjs.com/package/abolaji-ui-library",
                  "_blank"
                )
              }
            >
              📦 View on NPM
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                window.open(
                  "https://github.com/abolajii/abolaji-ui-library",
                  "_blank"
                )
              }
            >
              🔗 GitHub Repo
            </Button>
          </div>
        </Card>
      </div>

      {/* Help Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="📚 Abolaji UI Components Guide"
        size="large"
        footer={
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Got it!
          </Button>
        }
      >
        <div className="space-y-4">
          <p>Welcome to the comprehensive showcase of Abolaji UI Components!</p>

          <div className="space-y-3">
            <h4 className="font-semibold">🎯 What you're seeing:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Real-time validation</strong> - Try leaving fields empty
              </li>
              <li>
                <strong>Interactive components</strong> - All inputs are fully
                functional
              </li>
              <li>
                <strong>Toast notifications</strong> - Click the action buttons
              </li>
              <li>
                <strong>Progress tracking</strong> - Form completion updates
                live
              </li>
              <li>
                <strong>Responsive design</strong> - Resize your window
              </li>
              <li>
                <strong>Accessibility features</strong> - Full keyboard
                navigation
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-3 rounded">
            <p className="text-sm text-blue-800">
              💡 <strong>Pro tip:</strong> This entire page is built using only
              components from the abolaji-ui-library library!
            </p>
          </div>
        </div>
      </Modal>

      {/* Toast Notifications Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2 w-80 max-h-screen overflow-y-auto pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto w-full">
            <Toast
              message={toast.message}
              variant={toast.variant}
              isVisible={toast.isVisible}
              onClose={() => removeToast(toast.id)}
              position="top-right"
              duration={4000}
              standalone={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbolajiShowcase;
