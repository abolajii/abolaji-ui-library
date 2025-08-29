import { useEffect, useState } from "react";
import { Input } from "../components/ui/Input";
import { Checkbox } from "../components/ui/Checkbox";
import { Toggle } from "../components/ui/Toggle";
import { RadioGroup } from "../components/ui/RadioGroup";
import { Select } from "../components/ui/Select";
import { PasswordInput } from "../components/ui/Password";
import { RangeSlider } from "../components/ui/RangeSlider";
import { MultiSelect } from "../components/ui/MultiSelect";
import { Badge } from "../components/ui/Badge";
import { ProgressBar } from "../components/ui/ProgressBar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { Tooltip } from "../components/ui/Tooltip";
import { Button } from "../components/ui/Button";
import { FileUpload } from "../components/ui/Fileupload";
import { Alert } from "../components/ui/Alert";
import { DatePicker } from "../components/ui/DatePicker";
import { Textarea } from "../components/ui/TextArea";
import { Modal } from "../components/ui/Modal";
import { Toast } from "../components/ui/Toast";
import { Tabs } from "../components/ui/Tabs";
import { Card } from "../components/ui/Card";

export default function StorybookPreview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    birthDate: "",
    message: "",
  });

  type FormErrors = {
    name?: string;
    email?: string;
    country?: string;
    birthDate?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showComponentStates, setShowComponentStates] = useState(true);
  const [showAlert, setShowAlert] = useState<
    "success" | "error" | "warning" | "info" | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState("components");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [rangeValue, setRangeValue] = useState(50);
  const [multiSelectValue, setMultiSelectValue] = useState<(string | number)[]>(
    []
  );
  const [passwordValue, setPasswordValue] = useState("");
  const [progressValue, setProgressValue] = useState(0);

  const countryOptions = [
    { value: "us", label: "🇺🇸 United States" },
    { value: "ca", label: "🇨🇦 Canada" },
    { value: "uk", label: "🇬🇧 United Kingdom" },
    { value: "de", label: "🇩🇪 Germany" },
    { value: "fr", label: "🇫🇷 France" },
  ];

  const radioOptions = [
    { value: "beginner", label: "🌱 Beginner" },
    { value: "intermediate", label: "⚡ Intermediate" },
    { value: "advanced", label: "🚀 Advanced" },
  ];

  const skillsOptions = [
    { value: "js", label: "🟨 JavaScript" },
    { value: "react", label: "⚛️ React" },
    { value: "vue", label: "💚 Vue.js" },
    { value: "angular", label: "🅰️ Angular" },
    { value: "node", label: "🟢 Node.js" },
    { value: "python", label: "🐍 Python" },
    { value: "java", label: "☕ Java" },
  ];

  const tabData = [
    {
      id: "components",
      label: "🔧 Form Components",
      content: (
        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              📝 Interactive Form Elements
            </h3>
            <p className="text-gray-600 mb-4">
              Explore all form components with real-time validation and various
              states.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  label="Sample Input"
                  placeholder="Enter text here..."
                  value=""
                  onChange={() => {}}
                  icon="👤"
                />
                <Input
                  label="Input with Error"
                  value="invalid-email"
                  error="Please enter a valid email address"
                  onChange={() => {}}
                  icon="📧"
                />
                <PasswordInput
                  label="Password"
                  placeholder="Create a secure password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  showStrength={true}
                />
              </div>
              <div className="space-y-4">
                <Select
                  label="Country"
                  placeholder="Select your country"
                  options={countryOptions}
                  value=""
                  onChange={() => {}}
                />
                <DatePicker
                  label="Date of Birth"
                  placeholder="Select your birth date"
                  value=""
                  onChange={() => {}}
                />
                <MultiSelect
                  label="Skills & Technologies"
                  placeholder="Choose your skills..."
                  options={skillsOptions}
                  value={multiSelectValue}
                  onChange={(e) => setMultiSelectValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "controls",
      label: "🎛️ Interactive Controls",
      badge: `${skillsOptions.length}`,
      content: (
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4">
                ✅ Selection Controls
              </h4>
              <div className="space-y-4">
                <Checkbox
                  label="I agree to the terms and conditions"
                  checked={checkboxValue}
                  onChange={(e) => setCheckboxValue(e.target.checked)}
                />
                <Toggle
                  label="Enable email notifications"
                  checked={toggleValue}
                  onChange={setToggleValue}
                />
                <RadioGroup
                  label="Experience Level"
                  options={radioOptions}
                  value={radioValue}
                  onChange={(e) => setRadioValue(e.target.value)}
                  orientation="vertical"
                />
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4">
                🎚️ Range & Progress
              </h4>
              <div className="space-y-4">
                <RangeSlider
                  label={`Completion: ${rangeValue}%`}
                  min={0}
                  max={100}
                  value={rangeValue}
                  onChange={(e) => setRangeValue(parseInt(e.target.value))}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🚀 Loading Progress
                  </label>
                  <ProgressBar value={progressValue} showLabel={true} />
                </div>
                <div className="flex items-center gap-2">
                  <LoadingSpinner size="small" />
                  <span className="text-sm text-gray-600">Processing...</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4">
                🏷️ Status Indicators
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Badge Examples:</p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="primary">Active</Badge>
                    <Badge variant="success">Verified</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="error">Failed</Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">With Tooltips:</p>
                  <div className="flex gap-2">
                    <Tooltip content="This is a helpful tooltip!">
                      <Button variant="secondary" size="small">
                        Hover me
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "advanced",
      label: "⚡ Advanced Features",
      content: (
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4">
                📎 File Upload
              </h4>
              <FileUpload
                label="Upload Documents"
                onFileSelect={(file: File) =>
                  console.log("File selected:", file.name)
                }
                accept=".pdf,.doc,.docx,.txt"
                maxSize={10}
              />
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4">💬 Text Area</h4>
              <Textarea
                label="Project Description"
                placeholder="Tell us about your project..."
                value=""
                onChange={() => {}}
                rows={4}
              />
            </Card>
          </div>

          <Card className="p-6">
            <h4 className="font-semibold text-gray-800 mb-4">
              🔔 Notifications & Alerts
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 flex-wrap">
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => setShowAlert("success")}
                >
                  ✅ Success Alert
                </Button>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setShowAlert("warning")}
                >
                  ⚠️ Warning Alert
                </Button>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setShowAlert("error")}
                >
                  ❌ Error Alert
                </Button>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setShowModal(true)}
                >
                  🪟 Open Modal
                </Button>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setShowToast(true)}
                >
                  🍞 Show Toast
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "Birth date is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setShowAlert("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        country: "",
        birthDate: "",
        message: "",
      });
      setErrors({});
      setTimeout(() => setShowAlert(null), 5000);
    }, 2000);
  };

  type FormField = keyof typeof formData;

  const handleInputChange =
    (field: FormField) => (e: { target: { value: string | number } }) => {
      setFormData({
        ...formData,
        [field]:
          typeof e.target.value === "number"
            ? String(e.target.value)
            : e.target.value,
      });
      if (errors[field]) {
        setErrors({
          ...errors,
          [field]: "",
        });
      }
    };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      country: "",
      birthDate: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            🧪 Component Utility Lab
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive testing ground for all UI components. Experiment with
            different states, configurations, and real-time form validation in a
            comprehensive environment.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="primary"
              onClick={() => setShowComponentStates(!showComponentStates)}
            >
              {showComponentStates
                ? "📦 Hide Components"
                : "🔬 Show Components"}
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              🔄 Reset All
            </Button>
          </div>
        </div>

        {/* Component States Section */}
        {showComponentStates && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              🎛️ Interactive Component Playground
            </h2>

            <Tabs
              tabs={tabData}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </Card>
        )}

        {/* Main Form Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📝 Complete Form Example
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              🚀 Real-time Form Validation
            </h3>
            <p className="text-gray-600">
              Experience comprehensive form validation with instant feedback and
              error handling.
            </p>
          </div>

          {showAlert && (
            <Alert
              variant={showAlert}
              title="Form Submitted!"
              dismissible
              onClose={() => setShowAlert(null)}
            >
              Your form has been successfully submitted and processed.
            </Alert>
          )}

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name *"
                placeholder="Enter your full name..."
                value={formData.name}
                onChange={handleInputChange("name")}
                error={errors.name}
                icon="👤"
              />

              <Input
                label="Email Address *"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange("email")}
                error={errors.email}
                icon="📧"
              />

              <Select
                label="Country *"
                placeholder="Select your country"
                options={countryOptions}
                value={formData.country}
                onChange={handleInputChange("country")}
                error={errors.country}
              />

              <DatePicker
                label="Date of Birth *"
                placeholder="Select your birth date"
                value={formData.birthDate}
                onChange={handleInputChange("birthDate")}
                error={errors.birthDate}
              />
            </div>

            <Textarea
              label="Project Description *"
              placeholder="Tell us about your project (minimum 20 characters)..."
              value={formData.message}
              onChange={handleInputChange("message")}
              error={errors.message}
              rows={4}
            />

            <div className="flex gap-4 pt-4">
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "⏳ Submitting..." : "🚀 Submit Form"}
              </Button>
              <Button
                variant="secondary"
                onClick={handleReset}
                disabled={isSubmitting}
              >
                🔄 Reset Form
              </Button>
            </div>
          </form>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
            <div className="text-purple-600 text-2xl mb-2">22+</div>
            <div className="font-semibold text-purple-800">Components</div>
            <div className="text-sm text-purple-600">
              Interactive UI Elements
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <div className="text-green-600 text-2xl mb-2">100%</div>
            <div className="font-semibold text-green-800">Responsive</div>
            <div className="text-sm text-green-600">Mobile-first Design</div>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
            <div className="text-orange-600 text-2xl mb-2">⚡</div>
            <div className="font-semibold text-orange-800">Real-time</div>
            <div className="text-sm text-orange-600">Live Validation</div>
          </div>
        </div>

        {/* Modals and Notifications */}
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title="🎉 Sample Modal"
          >
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                This is a sample modal dialog. You can include any content here
                including forms, images, or other components.
              </p>
              <div className="flex gap-2 justify-end">
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                  Confirm
                </Button>
              </div>
            </div>
          </Modal>
        )}

        {showToast && (
          <Toast
            message="🎉 This is a sample toast notification!"
            variant="success"
            isVisible={showToast}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  );
}
