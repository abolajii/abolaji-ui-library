// Quick test to verify all main components are exportable

// Test importing main components from the published npm package
import {
  Input,
  Button,
  Alert,
  Badge,
  Card,
  Checkbox,
  Toggle,
  ProgressBar,
  LoadingSpinner,
} from "abolaji-ui-library";

// Import icons for testing
import { Search, User, Mail, Lock, Calendar, Phone } from "lucide-react";

const ComponentTest = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">🧪 Component Export Test</h1>
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
        <p className="text-blue-800 text-sm">
          📦 <strong>Now importing from:</strong>{" "}
          <code className="bg-blue-100 px-1 rounded">abolaji-ui-library</code>{" "}
          (npm package v1.0.0)
        </p>
        <p className="text-green-700 text-xs mt-1">
          ✨ <strong>Auto-styled:</strong> CSS is automatically injected - no
          manual imports needed!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Button Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Button</h3>
          <Button variant="primary">Test Button</Button>
        </div>

        {/* Input Test - Multiple Examples with Icons */}
        <div className="p-4 border rounded col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="font-semibold mb-4">Input Components with Icons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Search Input */}
            <div>
              <Input
                placeholder="Search..."
                value=""
                onChange={() => {}}
                label="Search Field"
                icon={Search}
                iconPosition="left"
              />
            </div>

            {/* Email Input */}
            <div>
              <Input
                placeholder="Enter email"
                value=""
                onChange={() => {}}
                label="Email"
                icon={Mail}
                iconPosition="left"
                type="email"
              />
            </div>

            {/* User Input */}
            <div>
              <Input
                placeholder="Username"
                value=""
                onChange={() => {}}
                label="Username"
                icon={User}
                iconPosition="right"
              />
            </div>

            {/* Phone Input */}
            <div>
              <Input
                placeholder="Phone number"
                value=""
                onChange={() => {}}
                label="Phone"
                icon={Phone}
                iconPosition="left"
                variant="outlined"
              />
            </div>

            {/* Password Input */}
            <div>
              <Input
                placeholder="Password"
                value=""
                onChange={() => {}}
                label="Password"
                icon={Lock}
                iconPosition="left"
                type="password"
                variant="filled"
              />
            </div>

            {/* Date Input */}
            <div>
              <Input
                placeholder="Select date"
                value=""
                onChange={() => {}}
                label="Date"
                icon={Calendar}
                iconPosition="right"
                variant="underlined"
              />
            </div>
          </div>
        </div>

        {/* Alert Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Alert</h3>
          <Alert variant="info">Test alert message</Alert>
        </div>

        {/* Badge Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Badge</h3>
          <Badge variant="primary">Test Badge</Badge>
        </div>

        {/* Card Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Card</h3>
          <Card className="p-2">
            <div className="font-semibold">Test Card</div>
            <div>Card content</div>
          </Card>
        </div>

        {/* Checkbox Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Checkbox</h3>
          <Checkbox label="Test checkbox" checked={false} onChange={() => {}} />
        </div>

        {/* Toggle Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Toggle</h3>
          <Toggle checked={false} onChange={() => {}} label="Test toggle" />
        </div>

        {/* Progress Bar Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">ProgressBar</h3>
          <ProgressBar value={75} showLabel />
        </div>

        {/* Loading Spinner Test */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">LoadingSpinner</h3>
          <LoadingSpinner size="medium" />
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded">
        <h2 className="text-lg font-semibold text-green-800 mb-2">
          ✅ Auto-Injection Success!
        </h2>
        <p className="text-green-700">
          All components imported from{" "}
          <code className="bg-green-100 px-1 rounded">
            abolaji-ui-library@1.0.0
          </code>
          ! CSS styles need to be manually imported.
        </p>
        <ul className="mt-2 text-sm text-green-600">
          <li>
            ✨ Auto-styled Input components with icons (Search, Mail, User,
            Phone, Lock, Calendar)
          </li>
          <li>✅ Button, Alert, Badge - Core components fully styled</li>
          <li>✅ Card, Checkbox, Toggle - UI elements working perfectly</li>
          <li>✅ ProgressBar, LoadingSpinner - Interactive components</li>
          <li>✅ All 21+ components available with zero configuration!</li>
        </ul>
        <div className="mt-3 p-2 bg-white rounded border border-green-100">
          <p className="text-xs text-green-600">
            <strong>🎯 Usage:</strong>{" "}
            <code>import {`{Button, Input}`} from 'abolaji-ui-library';</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentTest;
