import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Card Components
import type { ReactNode } from "react";
import type { HTMLAttributes } from "react";

const Card = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={`text-sm text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Input Component for Login
const Input = ({
  className = "",
  error = false,
  ...props
}: {
  className?: string;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${
        error ? "border-red-500 focus:ring-red-500" : ""
      } ${className}`}
      {...props}
    />
  );
};

// Button Component for Login
const Button = ({
  className = "",
  disabled,
  children,
  ...props
}: {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } text-white ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Checkbox Component for Login
const Checkbox = ({
  id,
  checked,
  onCheckedChange,
  ...props
}: {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      {...props}
    />
  );
};

// Demo Component showing usage
const CardDemo = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Card Component Demo
        </h1>
        <p className="text-gray-600">
          Various examples of the Card component in action
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Login Card */}
        <LoginCard />

        {/* Template Card */}
        <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
          <CardHeader>
            <CardTitle className="text-gray-700">Template Card</CardTitle>
            <CardDescription className="text-gray-500">
              A reusable template for your components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          </CardContent>
          <CardFooter>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm cursor-not-allowed"
              disabled
            >
              Template Action
            </button>
          </CardFooter>
        </Card>

        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>
              This is a simple card with a title and description.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              This is the main content area of the card. You can put any content
              here.
            </p>
          </CardContent>
        </Card>

        {/* Feature Card */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Feature Highlight</CardTitle>
            <CardDescription className="text-blue-700">
              Enhanced card with custom styling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-blue-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Premium feature enabled</span>
            </div>
          </CardContent>
          <CardFooter>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </CardFooter>
        </Card>

        {/* Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Your performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Views</span>
                <span className="text-2xl font-bold text-gray-900">12,543</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Clicks</span>
                <span className="text-2xl font-bold text-gray-900">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Conversion</span>
                <span className="text-2xl font-bold text-green-600">22.7%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Card */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Team Member</CardTitle>
            <CardDescription>
              Software Engineer & Design Enthusiast
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                JD
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  John Doe
                </h4>
                <p className="text-gray-600 mb-3">
                  Passionate about creating beautiful and functional user
                  interfaces. Experienced in React, TypeScript, and modern web
                  technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="space-x-2">
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
              View Profile
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors">
              Send Message
            </button>
          </CardFooter>
        </Card>

        {/* Usage Example */}
        <Card className="bg-gray-900 text-white border-gray-700 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-white">Usage Example</CardTitle>
            <CardDescription className="text-gray-300">
              How to use the Card component in your code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {`<Card>
  <CardHeader>
    <CardTitle>Your Title</CardTitle>
    <CardDescription>
      Your description here
    </CardDescription>
  </CardHeader>
  <CardContent>
    Your main content
  </CardContent>
  <CardFooter>
    <button>Action Button</button>
  </CardFooter>
</Card>`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Login Card Component
const LoginCard = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  interface ValidateEmailFn {
    (email: string): boolean;
  }

  const validateEmail: ValidateEmailFn = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  interface HandleEmailChangeFn {
    (e: React.ChangeEvent<HTMLInputElement>): void;
  }

  const handleEmailChange: HandleEmailChangeFn = (e) => {
    const email = e.target.value;
    setFormData((prev) => ({ ...prev, email }));

    if (errors.email) {
      if (email && validateEmail(email)) {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  interface HandlePasswordChangeFn {
    (e: React.ChangeEvent<HTMLInputElement>): void;
  }

  const handlePasswordChange: HandlePasswordChangeFn = (e) => {
    const password = e.target.value;
    setFormData((prev) => ({ ...prev, password }));

    if (errors.password && password.length >= 6) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  interface HandleRememberMeChangeFn {
    (checked: boolean): void;
  }

  const handleRememberMeChange: HandleRememberMeChangeFn = (checked) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    // Validation
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Simulate login
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Login successful! (This is a demo)");
      console.log("Login data:", formData);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
      <CardHeader className="text-center">
        <CardTitle className="text-blue-900">Login</CardTitle>
        <CardDescription className="text-blue-700">
          Sign in to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleEmailChange}
            className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
            error={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handlePasswordChange}
              className={`pr-10 ${
                errors.password ? "border-red-500 focus:ring-red-500" : ""
              }`}
              error={!!errors.password}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-600">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember-login"
              checked={formData.rememberMe}
              onCheckedChange={handleRememberMeChange}
            />
            <label
              htmlFor="remember-login"
              className="text-gray-600 cursor-pointer"
            >
              Remember
            </label>
          </div>
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => alert("Forgot password!")}
          >
            Forgot?
          </button>
        </div>

        <Button
          className="w-full text-sm"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Signing in..." : "Sign In"}
        </Button>

        <div className="text-center text-xs text-gray-600">
          Need an account?{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline font-medium"
            onClick={() => alert("Sign up!")}
          >
            Sign up
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDemo;
export {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  LoginCard,
  Input,
  Button,
  Checkbox,
};
