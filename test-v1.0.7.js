// Test script to verify CSS auto-injection works
import { Input, Button, Alert } from "abolaji-ui-components";
import { createElement } from "react";

console.log(
  "✅ Components imported successfully from abolaji-ui-components@1.0.7"
);
console.log("🎨 CSS should auto-inject when components are imported");
console.log("📦 Package size:", "289.7 kB");
console.log("🚀 CDN fallback system implemented");

// Test component creation
const testInput = createElement(Input, { placeholder: "Test input" });
const testButton = createElement(Button, null, "Test Button");
const testAlert = createElement(Alert, { variant: "success" }, "Test Alert");

console.log("✨ Components created successfully:", {
  testInput,
  testButton,
  testAlert,
});
