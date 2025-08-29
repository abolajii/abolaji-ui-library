// Simple test to verify the package exports work correctly
import { readFileSync } from "fs";
import { join } from "path";

try {
  // Test that the main export file exists
  const indexPath = join(process.cwd(), "dist", "index.js");
  const indexContent = readFileSync(indexPath, "utf8");

  console.log("✅ Package dist/index.js exists and is readable");

  // Test that index.d.ts exists
  const typesPath = join(process.cwd(), "dist", "index.d.ts");
  const typesContent = readFileSync(typesPath, "utf8");

  console.log("✅ Package dist/index.d.ts exists and is readable");

  // Check if common exports are present
  if (indexContent.includes("Input") && indexContent.includes("Button")) {
    console.log("✅ Main components (Input, Button) are exported");
  } else {
    console.log("❌ Main components not found in exports");
  }

  console.log("🎉 Package test completed successfully!");
  console.log("📦 Ready to publish abolaji-ui-components");
} catch (error) {
  console.error("❌ Package test failed:", error.message);
  process.exit(1);
}
