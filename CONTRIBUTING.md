# Contributing to AJ Story UI Components

Thank you for your interest in contributing to AJ Story UI Components! We welcome contributions from the community.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm, yarn, or pnpm
- Git

### Development Setup

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/abolajii/abolaji-ui-library.git
   cd abolaji-ui-library
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the component preview

## 🛠️ Development Workflow

### Project Structure

```
src/
├── components/
│   └── ui/              # All UI components
│       ├── Button.tsx   # Individual components
│       ├── Input.tsx
│       └── ...
├── pages/
│   └── Utility.tsx      # Component preview/demo page
└── index.ts             # Main export file
```

### Creating a New Component

1. **Create the component file**

   ```bash
   # Create in src/components/ui/
   touch src/components/ui/YourComponent.tsx
   ```

2. **Component structure**

   ```tsx
   // YourComponent.tsx
   import React from "react";

   interface YourComponentProps {
     // Define props with TypeScript
     variant?: "primary" | "secondary";
     children: React.ReactNode;
     className?: string;
   }

   export const YourComponent: React.FC<YourComponentProps> = ({
     variant = "primary",
     children,
     className,
     ...props
   }) => {
     return (
       <div className={`base-styles ${variant} ${className}`} {...props}>
         {children}
       </div>
     );
   };
   ```

3. **Export the component**
   Add to `src/index.ts`:

   ```tsx
   export { YourComponent } from "./components/ui/YourComponent";
   ```

4. **Add to preview page**
   Include your component in `src/pages/Utility.tsx` for testing

### Styling Guidelines

- **Use Tailwind CSS** for all styling
- **Follow existing patterns** for consistency
- **Responsive design** - mobile-first approach
- **Accessibility** - ensure components are accessible
- **Dark mode** support where applicable

### Component Standards

1. **TypeScript interfaces** for all props
2. **Default props** where appropriate
3. **Responsive design** considerations
4. **Accessibility** attributes (ARIA labels, roles, etc.)
5. **Error states** and validation
6. **Loading states** where applicable
7. **Consistent naming** conventions

## 🧪 Testing

### Manual Testing

- Test all component variants
- Verify responsive behavior
- Check accessibility with screen readers
- Test keyboard navigation

### Browser Testing

Test in:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📋 Pull Request Process

### Before Submitting

1. **Check existing issues** and PRs
2. **Run linting**
   ```bash
   npm run lint
   ```
3. **Build successfully**
   ```bash
   npm run build
   ```
4. **Test your changes** thoroughly

### PR Guidelines

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   - Follow coding standards
   - Add/update documentation
   - Test thoroughly

3. **Commit with clear messages**

   ```bash
   git commit -m "feat: add new Button variant"
   git commit -m "fix: resolve Input validation issue"
   git commit -m "docs: update Button component examples"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### PR Requirements

- [ ] Clear description of changes
- [ ] Screenshots for UI changes
- [ ] Tests added/updated if applicable
- [ ] Documentation updated
- [ ] No breaking changes (or clearly marked)
- [ ] Follows existing code style

## 🐛 Bug Reports

### Before Reporting

- Search existing issues
- Try to reproduce the bug
- Check if it's already fixed in main branch

### Bug Report Template

```markdown
**Bug Description**
Clear description of the issue

**Steps to Reproduce**

1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**

- OS: [e.g. macOS]
- Browser: [e.g. Chrome]
- Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

### Before Requesting

- Check existing issues and roadmap
- Consider if it fits the project scope
- Think about implementation approach

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should this be implemented?

**Alternatives Considered**
Other approaches you've thought about
```

## 📝 Documentation

### Component Documentation

Each component should include:

- Clear prop descriptions
- Usage examples
- Accessibility notes
- Styling customization info

### README Updates

- Keep examples up to date
- Update component lists
- Include migration guides for breaking changes

## 🎨 Design System

### Colors

Follow the existing color palette:

- Primary: Blue scale
- Success: Green scale
- Warning: Yellow scale
- Error: Red scale
- Neutral: Gray scale

### Typography

- Use consistent font sizes
- Follow hierarchy (h1-h6)
- Maintain readable line heights

### Spacing

- Use Tailwind spacing scale
- Consistent margins and padding
- Proper component spacing

## 📄 Code Style

### TypeScript

- Strict mode enabled
- Proper type definitions
- No `any` types unless absolutely necessary
- Interface over type aliases for props

### React

- Functional components with hooks
- Proper prop destructuring
- Forward refs where needed
- Memoization for performance when needed

### CSS/Tailwind

- Utility-first approach
- Avoid custom CSS unless necessary
- Responsive classes
- Consistent naming

## 🚀 Release Process

### Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Steps

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create release notes
4. Publish to npm
5. Create GitHub release

## 📞 Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Report bugs and request features
- **Discord/Slack**: [Link if available]
- **Email**: [Contact email if preferred]

## 📋 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

### Enforcement

Violations of the code of conduct should be reported to [contact email].

---

Thank you for contributing to AJ Story UI Components! 🎉
