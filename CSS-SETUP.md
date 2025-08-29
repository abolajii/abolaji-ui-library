# Abolaji UI Components - CSS Setup Guide

## 🎨 Including Styles in Your Project

When you install `abolaji-ui-library` in your project, you need to include the CSS file to get the proper styling.

### Method 1: Import CSS in your main application file

```javascript
```js
// Import the CSS first
import "abolaji-ui-library/styles.css";
import { Button, Input, Alert } from "abolaji-ui-library";

function App() {
  return (
    <div>
      <Input placeholder="Styled input" icon={SearchIcon} />
      <Button variant="primary">Styled button</Button>
    </div>
  );
}
```

### Method 2: Import in your CSS file

```css
/* In your main CSS file (e.g., index.css or App.css) */
@import "abolaji-ui-library/styles.css";
```

### Method 3: Include in HTML (if using CDN or build tools)

```html
<!-- In your HTML head -->
<link
  rel="stylesheet"
  href="node_modules/abolaji-ui-library/dist/index.css"
/>
```

## ⚠️ Important Notes

1. **The CSS must be imported** - Without it, components will look like unstyled HTML elements
2. **Import CSS before your custom styles** - This allows you to override component styles if needed
3. **The CSS includes Tailwind utilities** - All necessary Tailwind classes are included in the bundle

## 🚀 Complete Example

```jsx
// App.jsx
import "abolaji-ui-library/styles.css"; // <- Essential!
import { Input, Button, Alert, Card } from "abolaji-ui-library";
import { Search, Mail } from "lucide-react";

function App() {
  return (
    <div className="p-8">
      <Card className="p-4">
        <h2>Contact Form</h2>
        <Input
          label="Email"
          placeholder="Enter your email"
          icon={Mail}
          iconPosition="left"
        />
        <Input
          label="Search"
          placeholder="Search..."
          icon={Search}
          iconPosition="left"
        />
        <Button variant="primary">Submit</Button>
      </Card>

      <Alert variant="success">Styles are working correctly! 🎉</Alert>
    </div>
  );
}
```

## 🎯 Troubleshooting

**Problem**: Components look like plain HTML (no colors, borders, spacing)
**Solution**: Make sure you've imported the CSS file: `import 'abolaji-ui-library/styles.css';`

**Problem**: Build tools complain about CSS imports
**Solution**: Ensure your bundler supports CSS imports (Vite, Webpack, etc. support this by default)
