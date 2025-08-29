import { useState, useEffect } from "react";
import {
  Input,
  Textarea,
  Select,
  MultiSelect,
  Checkbox,
  RadioGroup,
  Toggle,
  PasswordInput,
  RangeSlider,
  DatePicker,
  FileUpload,
  Button,
  Tabs,
  Card,
  Modal,
  Tooltip,
  Alert,
  Badge,
  ProgressBar,
  LoadingSpinner,
} from "abolaji-ui-library";
import { Toast } from "../components/ui/Toast";

// Type definitions
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  city: string;
  skills: (string | number)[];
  experience: string;
  birthDate: string;
  bio: string;
  salary: number;
  newsletter: boolean;
  theme: string;
  profilePicture: File | null;
}

interface FormErrors {
  [key: string]: string;
}

interface ToastNotification {
  id: number;
  variant: "success" | "error" | "warning" | "info";
  message: string;
  isVisible: boolean;
}

const AJStoryShowcase = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    skills: [],
    experience: "",
    birthDate: "",
    bio: "",
    salary: 50000,
    newsletter: false,
    theme: "",
    profilePicture: null,
  });

  // UI state
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [activeTab, setActiveTab] = useState("personal");
  const [showAlert, setShowAlert] = useState<
    "success" | "error" | "warning" | "info" | null
  >(null);
  const [progressValue, setProgressValue] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Options for selects
  const countryOptions = [
    { value: "us", label: "🇺🇸 United States" },
    { value: "ca", label: "🇨🇦 Canada" },
    { value: "uk", label: "🇬🇧 United Kingdom" },
    { value: "de", label: "🇩🇪 Germany" },
    { value: "fr", label: "🇫🇷 France" },
    { value: "jp", label: "🇯🇵 Japan" },
    { value: "au", label: "🇦🇺 Australia" },
    { value: "br", label: "🇧🇷 Brazil" },
    { value: "in", label: "🇮🇳 India" },
    { value: "ng", label: "🇳🇬 Nigeria" },
  ];

  const cityOptions: { [key: string]: { value: string; label: string }[] } = {
    us: [
      { value: "ny", label: "New York" },
      { value: "la", label: "Los Angeles" },
      { value: "chicago", label: "Chicago" },
      { value: "houston", label: "Houston" },
    ],
    ca: [
      { value: "toronto", label: "Toronto" },
      { value: "vancouver", label: "Vancouver" },
      { value: "montreal", label: "Montreal" },
    ],
    uk: [
      { value: "london", label: "London" },
      { value: "manchester", label: "Manchester" },
      { value: "birmingham", label: "Birmingham" },
    ],
  };

  const skillsOptions = [
    { value: "javascript", label: "🟨 JavaScript" },
    { value: "typescript", label: "🔷 TypeScript" },
    { value: "react", label: "⚛️ React" },
    { value: "vue", label: "💚 Vue.js" },
    { value: "angular", label: "🔴 Angular" },
    { value: "node", label: "🟢 Node.js" },
    { value: "python", label: "🐍 Python" },
    { value: "java", label: "☕ Java" },
    { value: "csharp", label: "🔵 C#" },
    { value: "php", label: "🐘 PHP" },
    { value: "go", label: "🐹 Go" },
    { value: "rust", label: "🦀 Rust" },
  ];

  const experienceOptions = [
    { value: "entry", label: "👶 Entry Level (0-2 years)" },
    { value: "junior", label: "🌱 Junior (2-4 years)" },
    { value: "mid", label: "🚀 Mid Level (4-7 years)" },
    { value: "senior", label: "⭐ Senior (7-10 years)" },
    { value: "lead", label: "👑 Lead (10+ years)" },
  ];

  const themeOptions = [
    { value: "light", label: "☀️ Light Theme" },
    { value: "dark", label: "🌙 Dark Theme" },
    { value: "auto", label: "🔄 Auto (System)" },
  ];

  // Auto-updating progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Form handlers
  const handleInputChange = (field: keyof FormData) => (e: any) => {
    const value = e.target ? e.target.value : e;
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Personal Info validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Location validation
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.birthDate) newErrors.birthDate = "Birth date is required";
    if (!formData.experience)
      newErrors.experience = "Please select your experience level";

    if (formData.bio.length < 50) {
      newErrors.bio = "Bio must be at least 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showToast("error", "Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setUploadProgress(0);
      setShowAlert("success");
      showToast("success", "Profile created successfully! 🎉");

      // Auto-hide alert after 5 seconds
      setTimeout(() => setShowAlert(null), 5000);
    }, 1000);
  };

  const showToast = (
    variant: "success" | "error" | "warning" | "info",
    message: string
  ) => {
    const id = Date.now();
    const newToast: ToastNotification = {
      id,
      variant,
      message,
      isVisible: true,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      city: "",
      skills: [],
      experience: "",
      birthDate: "",
      bio: "",
      salary: 50000,
      newsletter: false,
      theme: "",
      profilePicture: null,
    });
    setErrors({});
    showToast("info", "Form has been reset");
  };

  const getCurrentCities = () => {
    return cityOptions[formData.country] || [];
  };

  const tabData = [
    {
      id: "personal",
      label: "👤 Personal Info",
      badge:
        errors.firstName || errors.lastName || errors.email || errors.birthDate
          ? "!"
          : undefined,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange("firstName")}
              placeholder="Enter your first name"
              error={errors.firstName}
              required
            />
            <Input
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange("lastName")}
              placeholder="Enter your last name"
              error={errors.lastName}
              required
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="your.email@example.com"
            error={errors.email}
            required
          />

          <DatePicker
            label="Date of Birth"
            value={formData.birthDate}
            onChange={handleInputChange("birthDate")}
            error={errors.birthDate}
            required
            max="2010-01-01"
          />
        </div>
      ),
    },
    {
      id: "security",
      label: "🔒 Security",
      badge: errors.password || errors.confirmPassword ? "!" : undefined,
      content: (
        <div className="space-y-6">
          <PasswordInput
            label="Password"
            value={formData.password}
            onChange={handleInputChange("password")}
            placeholder="Create a strong password"
            error={errors.password}
            showStrength={true}
            required
          />

          <PasswordInput
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            placeholder="Confirm your password"
            error={errors.confirmPassword}
            required
          />

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">
              Password Requirements:
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• At least 8 characters long</li>
              <li>• Include uppercase and lowercase letters</li>
              <li>• Include at least one number</li>
              <li>• Include at least one special character</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "location",
      label: "🌍 Location",
      badge: errors.country ? "!" : undefined,
      content: (
        <div className="space-y-6">
          <Select
            label="Country"
            value={formData.country}
            onChange={handleInputChange("country")}
            options={countryOptions}
            placeholder="Select your country"
            error={errors.country}
            required
          />

          <Select
            label="City"
            value={formData.city}
            onChange={handleInputChange("city")}
            options={getCurrentCities()}
            placeholder={
              formData.country
                ? "Select your city"
                : "Please select a country first"
            }
            disabled={!formData.country}
          />
        </div>
      ),
    },
    {
      id: "professional",
      label: "💼 Professional",
      badge: errors.experience || errors.bio ? "!" : undefined,
      content: (
        <div className="space-y-6">
          <RadioGroup
            label="Experience Level"
            options={experienceOptions}
            value={formData.experience}
            onChange={handleInputChange("experience")}
            error={errors.experience}
            orientation="vertical"
          />

          <MultiSelect
            label="Technical Skills"
            value={formData.skills}
            onChange={handleInputChange("skills")}
            options={skillsOptions}
            placeholder="Select your skills (multiple)"
          />

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Expected Salary Range: ${formData.salary.toLocaleString()}
            </label>
            <RangeSlider
              value={formData.salary}
              onChange={handleInputChange("salary")}
              min={30000}
              max={200000}
              step={5000}
              showValue={true}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>$30,000</span>
              <span>$200,000</span>
            </div>
          </div>

          <Textarea
            label="Professional Bio"
            value={formData.bio}
            onChange={handleInputChange("bio")}
            placeholder="Tell us about your professional background, experience, and what makes you unique... (minimum 50 characters)"
            error={errors.bio}
            required
            maxLength={500}
            rows={5}
          />
        </div>
      ),
    },
    {
      id: "preferences",
      label: "⚙️ Preferences",
      content: (
        <div className="space-y-6">
          <RadioGroup
            label="Theme Preference"
            options={themeOptions}
            value={formData.theme}
            onChange={handleInputChange("theme")}
            orientation="horizontal"
          />

          <div className="space-y-4">
            <Checkbox
              label="Subscribe to newsletter and updates"
              checked={formData.newsletter}
              onChange={(e) =>
                handleInputChange("newsletter")(e.target.checked)
              }
            />

            <Toggle
              label="Enable notifications"
              checked={formData.newsletter}
              onChange={handleInputChange("newsletter")}
            />
          </div>

          <FileUpload
            label="Profile Picture"
            accept=".jpg,.jpeg,.png,.gif"
            onChange={handleInputChange("profilePicture")}
            placeholder="Drag & drop your profile picture here"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🚀 Abolaji UI Components
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Ultimate React Component Library Showcase
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-gray-600">Components</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">TypeScript</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-purple-600">A11Y</div>
              <div className="text-sm text-gray-600">Accessible</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-orange-600">0</div>
              <div className="text-sm text-gray-600">Dependencies</div>
            </Card>
          </div>
        </div>

        {/* Live Demo Progress */}
        <Card className="mb-6 p-6">
          <h3 className="text-lg font-semibold mb-4">🎯 Live Component Demo</h3>
          <div className="space-y-4">
            <ProgressBar
              label="Auto-updating Progress Bar"
              value={progressValue}
              variant="primary"
              size="medium"
            />

            {isSubmitting && (
              <ProgressBar
                label="Form Submission Progress"
                value={uploadProgress}
                variant="success"
                size="large"
              />
            )}

            <div className="flex items-center space-x-4">
              <LoadingSpinner size="small" variant="primary" />
              <span className="text-sm text-gray-600">
                Components updating in real-time
              </span>
              <Badge variant="success">Live</Badge>
            </div>
          </div>
        </Card>

        {/* Alerts */}
        {showAlert && (
          <Alert
            variant={showAlert}
            title="Success!"
            dismissible
            onClose={() => setShowAlert(null)}
            className="mb-6"
          >
            Your profile has been created successfully! All form validation
            passed.
          </Alert>
        )}

        {/* Main Form */}
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              📝 Complete User Registration Form
            </h2>
            <div className="flex space-x-2">
              <Tooltip content="Reset all form data">
                <Button variant="secondary" size="small" onClick={handleReset}>
                  🔄 Reset
                </Button>
              </Tooltip>
              <Tooltip content="Open help modal">
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setShowModal(true)}
                >
                  ❓ Help
                </Button>
              </Tooltip>
            </div>
          </div>

          <Tabs
            tabs={tabData}
            activeTab={activeTab}
            onChange={setActiveTab}
            variant="pills"
            className="mb-6"
          />

          {/* Submit Section */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Fill out all required fields to enable submission
              </div>
              <div className="flex space-x-3">
                <Button
                  variant="secondary"
                  onClick={handleReset}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  size="large"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="small" variant="primary" />
                      Creating Profile...
                    </>
                  ) : (
                    "🚀 Create Profile"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Component Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Badges Showcase */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">🏷️ Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success">Active</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">⚡ Quick Actions</h3>
            <div className="space-y-2">
              <Button
                variant="primary"
                size="small"
                fullWidth
                onClick={() => showToast("success", "Success toast! 🎉")}
              >
                Show Success Toast
              </Button>
              <Button
                variant="secondary"
                size="small"
                fullWidth
                onClick={() => showToast("error", "Error toast! ❌")}
              >
                Show Error Toast
              </Button>
              <Button
                variant="primary"
                size="small"
                fullWidth
                onClick={() => showToast("info", "Info toast! ℹ️")}
              >
                Show Info Toast
              </Button>
            </div>
          </Card>

          {/* Live Stats */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">📊 Live Stats</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Form Completion</span>
                  <span>
                    {Math.round(
                      (Object.values(formData).filter((v) => v && v !== "")
                        .length /
                        Object.keys(formData).length) *
                        100
                    )}
                    %
                  </span>
                </div>
                <ProgressBar
                  value={
                    (Object.values(formData).filter((v) => v && v !== "")
                      .length /
                      Object.keys(formData).length) *
                    100
                  }
                  variant="primary"
                  size="small"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Validation Errors</span>
                  <span>{Object.keys(errors).length}</span>
                </div>
                <ProgressBar
                  value={Object.keys(errors).length * 10}
                  variant="error"
                  size="small"
                />
              </div>
            </div>
          </Card>
        </div>

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

export default AJStoryShowcase;
