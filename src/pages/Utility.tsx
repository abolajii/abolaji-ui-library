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

// Main Preview Component
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
  const [showComponentStates, setShowComponentStates] = useState(false);

  const [showAlert, setShowAlert] = useState<
    "success" | "error" | "warning" | "info" | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
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
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
  ];

  const radioOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const skillsOptions = [
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "node", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  const tabData = [
    {
      id: "tab1",
      label: "Components",
      content: (
        <div className="p-4 text-gray-600">
          Form components and controls showcase
        </div>
      ),
    },
    {
      id: "tab2",
      label: "Advanced",
      badge: "12",
      content: (
        <div className="p-4 text-gray-600">Advanced interactive components</div>
      ),
    },
    {
      id: "tab3",
      label: "UI Elements",
      content: (
        <div className="p-4 text-gray-600">
          Cards, modals, and layout components
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
    <div className="bg-gray-50 min-h-screen p-5 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        🚀 Storybook Form Components Preview
      </h1>

      <button
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 mb-6 font-medium"
        onClick={() => setShowComponentStates(!showComponentStates)}
      >
        {showComponentStates ? "Hide" : "Show"} Component States Examples
      </button>

      {showComponentStates && (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Component States Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Form Controls
              </h3>
              <Input
                label="Sample Input"
                placeholder="Enter text here"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Input with Error"
                value="invalid-email"
                error="Please enter a valid email address"
                onChange={() => {}}
              />
              <Checkbox
                label="Accept Terms"
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.target.checked)}
              />
              <Toggle
                label="Enable Notifications"
                checked={toggleValue}
                onChange={setToggleValue}
              />
              <RadioGroup
                label="Choose Option"
                options={radioOptions}
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
                orientation="vertical"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Advanced Inputs
              </h3>
              <Select
                label="Searchable Select"
                options={countryOptions}
                placeholder="Type to search countries..."
                value=""
                onChange={() => {}}
              />
              <PasswordInput
                label="Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Enter password"
                showStrength={true}
              />
              <RangeSlider
                label="Volume Control"
                value={rangeValue}
                onChange={(e) => setRangeValue(Number(e.target.value))}
                min={0}
                max={100}
                showValue={true}
              />
              <MultiSelect
                label="Skills"
                options={skillsOptions}
                value={multiSelectValue}
                onChange={(e) => setMultiSelectValue(e.target.value)}
                placeholder="Select your skills"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                UI Components
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex space-x-2">
                  <Badge variant="success">Success</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              <ProgressBar
                label="Auto Progress"
                value={progressValue}
                variant="success"
                size="medium"
              />
              <ProgressBar
                label="Upload Progress"
                value={75}
                variant="primary"
                size="small"
                className="mt-3"
              />
              <div className="mt-4 flex items-center space-x-3">
                <LoadingSpinner size="small" variant="primary" />
                <LoadingSpinner size="medium" variant="primary" />
                <LoadingSpinner size="large" variant="primary" />
              </div>
              <div className="mt-4 space-y-2">
                <Tooltip content="This opens a sample modal dialog">
                  <Button
                    onClick={() => setShowModal(true)}
                    variant="primary"
                    size="small"
                  >
                    Open Modal
                  </Button>
                </Tooltip>
                <Button
                  onClick={() => setShowToast(true)}
                  variant="secondary"
                  size="small"
                >
                  Show Toast
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Layout & More
              </h3>

              <Tabs
                tabs={tabData}
                activeTab={activeTab}
                onChange={setActiveTab}
                variant="pills"
                className="mb-4"
              />
              <FileUpload
                label="Upload Files"
                accept=".pdf,.doc,.docx,.jpg,.png"
                multiple={true}
                onChange={() => {}}
                placeholder="Drag & drop files here"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 text-gray-700">
              Accordion Example
            </h3>
            {/* <Accordion
              items={accordionItems}
              allowMultiple={true}
              defaultOpen={["item1"]}
            /> */}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          📝 Complete Form with Validation
        </h2>
        <p className="text-gray-600 mb-6">
          Try submitting the form empty to see error states, or fill it out to
          see validation in action!
        </p>

        <div className="max-w-lg">
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

          <Input
            label="Full Name"
            value={formData.name}
            onChange={handleInputChange("name")}
            placeholder="Enter your full name"
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="Enter your email"
            error={errors.email}
            required
          />

          <Select
            label="Country"
            value={formData.country}
            onChange={handleInputChange("country")}
            options={countryOptions}
            placeholder="Select your country"
            error={errors.country}
            required
          />

          <DatePicker
            label="Birth Date"
            value={formData.birthDate}
            onChange={handleInputChange("birthDate")}
            error={errors.birthDate}
            required
            max="2010-01-01"
          />

          <Textarea
            label="Message"
            value={formData.message}
            onChange={handleInputChange("message")}
            placeholder="Enter your message (minimum 20 characters)"
            error={errors.message}
            required
            maxLength={500}
            rows={5}
          />

          <div className="mt-5">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? "Submitting..." : "Submit Form"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Reset Form
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          ✨ Features Included
        </h2>
        <ul className="text-gray-600 space-y-2 leading-relaxed">
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Error Validation:
            </span>
            Try submitting the form empty to see error messages
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Real-time Clearing:
            </span>
            Errors disappear as you start typing
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Required Field Indicators:
            </span>
            Red asterisks show required fields
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Character Limits:
            </span>
            Textarea shows character count
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Complete Form Library:
            </span>
            Input, Select, Textarea, Button, DatePicker, Checkbox, Radio,
            Toggle, Range Slider, File Upload, Multi-Select, Password with
            strength
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              UI Components:
            </span>
            Alert, Modal, Toast, Badge, Progress Bar, Loading Spinner, Tabs,
            Accordion, Card, Tooltip
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Interactive Features:
            </span>
            Drag & drop upload, searchable selects, password strength, real-time
            validation, smooth animations
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Advanced Controls:
            </span>
            Multi-select with tags, range slider with live feedback, file upload
            with preview
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Smooth Animations:
            </span>
            All components have polished transitions
          </li>
          <li className="flex items-start">
            <span className="font-semibold text-gray-800 mr-2">
              Tailwind Styled:
            </span>
            Clean, modern design with consistent spacing
          </li>
        </ul>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Sample Modal Dialog"
        size="medium"
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <p className="text-gray-600 mb-4">
          This is a sample modal with interactive content and form elements.
        </p>
        <div className="space-y-4">
          <Input
            label="Your Name"
            placeholder="Enter your name"
            onChange={() => {}}
          />
          <Select
            label="Preferred Contact Method"
            options={[
              { value: "email", label: "Email" },
              { value: "phone", label: "Phone" },
              { value: "sms", label: "SMS" },
            ]}
            placeholder="Choose method"
            onChange={() => {}}
          />
          <Checkbox
            label="I agree to the terms and conditions"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </Modal>

      <Toast
        message="This is a sample toast notification with auto-dismiss!"
        variant="success"
        position="top-right"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
      />
    </div>
  );
}
