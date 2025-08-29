# Abolaji UI Library

A comprehensive React UI component library with TypeScript support, featuring form controls, navigation, feedback components, and more.

## Installation

```bash
npm install abolaji-ui-library
```

## Usage

```tsx
import { Button, Input, Card } from "abolaji-ui-library";

function App() {
  return (
    <div>
      <Card>
        <Input
          label="Email"
          value={email}
          onChange={setEmail}
          helperText="Enter your email address"
        />
        <Button variant="primary">Submit</Button>
      </Card>
    </div>
  );
}
```

## What's New in v1.0.1

- **Enhanced Input Component**: Added default border styling so you don't need to add borders manually
- **Improved Helper Text**: Better visibility and styling for helper text in all variants
- **Better Accessibility**: Enhanced focus states and screen reader support
- **Icon Integration**: Full lucide-react icon support with proper positioning

## Components

- **Form Controls**: Input, Textarea, Select, MultiSelect, Checkbox, RadioGroup, Toggle, DatePicker, FileUpload, Password
- **Buttons & Actions**: Button with multiple variants and sizes
- **Layout**: Card components for content organization
- **Feedback**: Alert, Toast, LoadingSpinner, ProgressBar, Badge
- **Navigation**: Tabs for content switching
- **Overlays**: Modal, Tooltip
- **Data Entry**: RangeSlider for numeric input

## Features

- 🎨 **Beautiful Design**: Modern, clean, and professional appearance
- 📱 **Responsive**: Works perfectly on all device sizes
- ♿ **Accessible**: ARIA compliant and keyboard navigable
- 🎯 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎭 **Themeable**: Multiple variants and customizable styling
- 🧩 **Modular**: Import only what you need
- 🚀 **Performance**: Optimized for speed and bundle size

## License

MIT

## Repository

[GitHub](https://github.com/abolajii/abolaji-ui-library)
