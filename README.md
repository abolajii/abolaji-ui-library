# 🚀 AJ Story UI Components

A comprehensive, modern React UI component library built with TypeScript and Tailwind CSS. Features a complete set of form controls, navigation elements, feedback components, and interactive utilities designed for modern web applications.

[![npm version](https://badge.fury.io/js/@ajstory%2Fui-components.svg)](https://badge.fury.io/js/@ajstory%2Fui-components)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styled-38B2AC.svg)](https://tailwindcss.com/)

## 📦 Installation

```bash
npm install @ajstory/ui-components
# or
yarn add @ajstory/ui-components
# or
pnpm add @ajstory/ui-components
```

## 🎯 Features

- ✅ **Fully TypeScript**: Complete type safety and IntelliSense support
- 🎨 **Tailwind CSS**: Modern, utility-first styling
- 📱 **Responsive**: Mobile-first design approach
- ♿ **Accessible**: ARIA-compliant components
- 🔧 **Customizable**: Flexible theming and styling options
- 📚 **Well-documented**: Comprehensive examples and API docs
- 🚀 **Performance**: Optimized for modern React applications
- 🔄 **Form Validation**: Built-in validation states and error handling

## 🧩 Components

### Form Controls

- **Input** - Text inputs with validation states
- **Textarea** - Multi-line text input with character counting
- **Select** - Searchable dropdown with custom options
- **MultiSelect** - Multiple selection with tag display
- **Checkbox** - Standard and custom styled checkboxes
- **RadioGroup** - Radio button groups with flexible layouts
- **Toggle** - Switch-style toggle controls
- **PasswordInput** - Password field with strength indicator
- **RangeSlider** - Numeric range selection with live feedback
- **DatePicker** - Date selection with validation
- **FileUpload** - Drag-and-drop file upload with preview

### Navigation & Layout

- **Button** - Primary, secondary, and custom styled buttons
- **Tabs** - Tabbed navigation with badge support
- **Card** - Content containers with flexible layouts
- **Modal** - Overlay dialogs with customizable footers
- **Tooltip** - Contextual help and information display

### Feedback & Status

- **Alert** - Success, error, warning, and info notifications
- **Toast** - Auto-dismissing notifications with positioning
- **Badge** - Status indicators and labels
- **ProgressBar** - Progress indication with multiple variants
- **LoadingSpinner** - Loading states in various sizes

## 🚀 Quick Start

```tsx
import React, { useState } from "react";
import { Input, Button, Alert, Select } from "@ajstory/ui-components";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

  const handleSubmit = () => {
    // Form submission logic
    setShowSuccess(true);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {showSuccess && (
        <Alert
          variant="success"
          title="Success!"
          dismissible
          onClose={() => setShowSuccess(false)}
        >
          Form submitted successfully!
        </Alert>
      )}

      <Input
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />

      <Select
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        options={countries}
        placeholder="Select your country"
        required
      />

      <Button variant="primary" onClick={handleSubmit} fullWidth>
        Submit Form
      </Button>
    </div>
  );
}
```

## 📖 Component Documentation

### Input Component

```tsx
<Input
  label="Label Text"
  value={value}
  onChange={handleChange}
  placeholder="Placeholder text"
  error="Error message"
  required
  disabled={false}
  type="text" // text, email, password, number, etc.
/>
```

**Props:**

- `label?: string` - Field label
- `value?: string | number` - Current value
- `onChange?: (e: ChangeEvent) => void` - Change handler
- `placeholder?: string` - Placeholder text
- `error?: string` - Error message to display
- `required?: boolean` - Mark field as required
- `disabled?: boolean` - Disable the input
- `type?: string` - HTML input type

### Button Component

```tsx
<Button
  variant="primary" // primary | secondary
  size="medium" // small | medium | large
  fullWidth={false}
  disabled={false}
  onClick={handleClick}
>
  Button Text
</Button>
```

### Select Component

```tsx
<Select
  label="Choose Option"
  value={selectedValue}
  onChange={handleChange}
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ]}
  placeholder="Select an option"
  error="Error message"
  required
/>
```

### Alert Component

```tsx
<Alert
  variant="success" // success | error | warning | info
  title="Alert Title"
  dismissible={true}
  onClose={handleClose}
>
  Alert message content
</Alert>
```

### Modal Component

```tsx
<Modal
  isOpen={isModalOpen}
  onClose={handleClose}
  title="Modal Title"
  size="medium" // small | medium | large
  footer={
    <>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </>
  }
>
  Modal content goes here
</Modal>
```

## 🎨 Styling & Customization

This library uses Tailwind CSS for styling. You can customize the appearance by:

1. **Override default classes**: All components accept a `className` prop
2. **Tailwind configuration**: Extend your Tailwind config for custom colors/spacing
3. **CSS custom properties**: Use CSS variables for dynamic theming

```tsx
// Custom styling example
<Button className="bg-purple-500 hover:bg-purple-600" variant="primary">
  Custom Styled Button
</Button>
```

## 🔧 Advanced Usage

### Form Validation Example

```tsx
import { useState } from "react";
import { Input, Button, Alert } from "@ajstory/ui-components";

function ValidatedForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit form
    }
  };

  return (
    <form>
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        required
      />

      <Input
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        error={errors.password}
        required
      />

      <Button onClick={handleSubmit} variant="primary">
        Submit
      </Button>
    </form>
  );
}
```

## 📱 Responsive Design

All components are designed with mobile-first responsive principles:

```tsx
// Components automatically adapt to screen sizes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Input label="Field 1" />
  <Input label="Field 2" />
  <Input label="Field 3" />
</div>
```

## 🛠️ Development

### Prerequisites

- Node.js 16+
- React 18+
- TypeScript 4.5+

### Building from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/ajstory-ui-components.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build library package
npm run build:lib
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/yourusername/ajstory-ui-components)
- [NPM Package](https://www.npmjs.com/package/@ajstory/ui-components)
- [Documentation](https://github.com/yourusername/ajstory-ui-components#readme)
- [Issues](https://github.com/yourusername/ajstory-ui-components/issues)

## 📞 Support

If you have any questions or need help, please:

- Check the [documentation](https://github.com/yourusername/ajstory-ui-components#readme)
- Search [existing issues](https://github.com/yourusername/ajstory-ui-components/issues)
- Create a [new issue](https://github.com/yourusername/ajstory-ui-components/issues/new)

---

Made with ❤️ by AJ Story
