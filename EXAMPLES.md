# Quick Start Examples

## Basic Form Example

```tsx
import React, { useState } from "react";
import { Input, Button, Select, MultiSelect, Alert } from "abolaji-ui-components";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const subjects = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Support" },
    { value: "billing", label: "Billing" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      {showSuccess && (
        <Alert variant="success" title="Success!">
          Your message has been sent successfully.
        </Alert>
      )}

      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Select
        label="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        options={subjects}
        required
      />

      <Button type="submit" variant="primary" fullWidth>
        Send Message
      </Button>
    </form>
  );
}
```

## Modal Example

```tsx
import React, { useState } from "react";
import { Button, Modal, Input } from "abolaji-ui-components";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Enter Your Name"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                console.log("Name:", name);
                setIsOpen(false);
              }}
            >
              Save
            </Button>
          </>
        }
      >
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </Modal>
    </>
  );
}
```

## Complex Form with Validation

```tsx
import React, { useState } from "react";
import {
  Input,
  Select,
  Checkbox,
  Button,
  Alert,
  PasswordInput,
  MultiSelect,
} from "@ajstory/ui-components";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    skills: [],
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

  const skillsOptions = [
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "node", label: "Node.js" },
    { value: "python", label: "Python" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be 6+ characters";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Account</h2>

      <Input
        label="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        error={errors.username}
        required
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        required
      />

      <PasswordInput
        label="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        error={errors.password}
        showStrength
        required
      />

      <Select
        label="Country"
        value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        options={countries}
        error={errors.country}
        required
      />

      <MultiSelect
        label="Skills"
        value={formData.skills}
        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
        options={skillsOptions}
        placeholder="Select your skills"
      />

      <Checkbox
        label="I agree to the terms and conditions"
        checked={formData.agreeToTerms}
        onChange={(e) =>
          setFormData({ ...formData, agreeToTerms: e.target.checked })
        }
        error={errors.agreeToTerms}
      />

      <Button type="submit" variant="primary" fullWidth>
        Create Account
      </Button>
    </form>
  );
}
```

## Using Toast Notifications

```tsx
import React, { useState } from "react";
import { Button, Toast } from "abolaji-ui-components";

function NotificationExample() {
  const [toasts, setToasts] = useState([]);

  const showToast = (variant) => {
    const id = Date.now();
    const newToast = {
      id,
      variant,
      message: `This is a ${variant} notification!`,
      isVisible: true,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <>
      <div className="space-x-2">
        <Button onClick={() => showToast("success")}>Success</Button>
        <Button onClick={() => showToast("error")}>Error</Button>
        <Button onClick={() => showToast("warning")}>Warning</Button>
        <Button onClick={() => showToast("info")}>Info</Button>
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          isVisible={toast.isVisible}
          onClose={() =>
            setToasts((prev) => prev.filter((t) => t.id !== toast.id))
          }
          position="top-right"
        />
      ))}
    </>
  );
}
```
