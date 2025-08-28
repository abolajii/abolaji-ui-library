# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-08-28

### Documentation

- Complete documentation consistency update
- Verified all import examples use correct package name "ajstory-ui-kit"
- Updated installation commands and quick start guides
- Ensured complete alignment between NPM package and GitHub repository

## [1.0.1] - 2025-08-28

### Fixed

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-08-28

### Changed

- **Package Name**: Renamed from "ajstory-ui-kit" to "abolaji-ui-kit"
- **Author**: Updated to "Abolaji"
- **Repository**: All URLs updated to reflect new package name
- **Documentation**: Complete rebranding across all files

### Added

- Fresh start with "abolaji-ui-kit" package name
- Updated import statements throughout documentation
- New repository structure and branding

### Technical

- Updated package.json with new package name and repository URLs
- Updated all documentation files (README, EXAMPLES, CHANGELOG)
- Corrected all import examples to use "abolaji-ui-kit"
- **Package Links**: Corrected NPM package links and repository URLs in package.json
- **Documentation**: Updated README, CHANGELOG, and all documentation to reflect correct package name
- **Import Examples**: Fixed all import examples in documentation to use `abolaji-ui-kit`

### Technical

- Updated package.json repository, homepage, and bugs URLs to match GitHub repository name
- Corrected NPM badge links in README
- Synchronized package name across all documentation files

## [1.0.0] - 2025-08-28

### 🎉 Initial Release

#### **Complete React UI Component Library**

- **20+ Production-Ready Components**: Comprehensive set of UI components for modern React applications
- **100% TypeScript Support**: Full type safety with IntelliSense and auto-completion
- **Zero Runtime Dependencies**: Only peer dependency on React for maximum compatibility
- **Accessibility First**: Full keyboard navigation and screen reader support

#### **Form Components**

- **Input**: Text inputs with validation, error states, and multiple variants
- **Textarea**: Multi-line text inputs with auto-resize and character counting
- **Select**: Dropdown selects with search, custom options, and disabled states
- **MultiSelect**: Multiple selection with tags and search functionality
- **PasswordInput**: Password fields with strength indicators and show/hide toggle
- **DatePicker**: Date selection with validation and constraints
- **FileUpload**: Drag & drop file uploads with progress indicators
- **Checkbox**: Single and grouped checkboxes with custom styling
- **RadioGroup**: Radio button groups with horizontal/vertical orientation
- **Toggle**: Modern toggle switches with smooth animations
- **RangeSlider**: Value sliders with min/max constraints and step control

#### **Navigation & Layout**

- **Tabs**: Tabbed interfaces with pills and underline variants
- **Card**: Flexible card containers with headers, footers, and variants
- **Modal**: Overlay modals with customizable sizes and actions

#### **Feedback Components**

- **Toast**: Notification toasts with multiple variants and flexible positioning
  - Support for both standalone and container-based positioning
  - Enhanced width handling for responsive design
  - Proper stacking for multiple notifications
- **Alert**: Inline alerts with dismissible actions and variants
- **LoadingSpinner**: Loading indicators with multiple sizes and colors
- **ProgressBar**: Progress indicators with labels and variants
- **Badge**: Status badges with color variants
- **Tooltip**: Contextual tooltips with flexible positioning

#### **Features**

- **Responsive Design**: Mobile-first approach with breakpoint-aware components
- **Dark Mode Ready**: Components designed for theme switching
- **Customizable Styling**: Tailwind CSS classes with easy customization
- **Form Validation**: Built-in validation support with error handling
- **Animation Support**: Smooth transitions and micro-interactions
- **Bundle Optimized**: Tree-shakeable exports for optimal bundle size

#### **Developer Experience**

- **Complete TypeScript Definitions**: Full type coverage for all components
- **Comprehensive Documentation**: Examples and usage patterns included
- **Live Showcase**: Interactive demo application showing all components
- **Easy Integration**: Simple npm install with immediate usage

#### **Technical Specifications**

- **React 18+**: Compatible with modern React features
- **TypeScript 5.8+**: Latest TypeScript support
- **Vite Build System**: Fast development and optimized production builds
- **ESM/CJS Support**: Dual package format for maximum compatibility

### Package Information

- **Installation**: `npm install abolaji-ui-kit`
- **Bundle Size**: ~62KB (11.8KB gzipped)
- **License**: MIT
- **Repository**: https://github.com/abolajii/abolaji-ui-kit

### Fixed

- **TypeScript Support**: Fixed TypeScript declaration files (.d.ts) now properly included in published package
- **Build Process**: Updated Vite configuration to preserve TypeScript files during build
- **Package Structure**: Ensured all component type definitions are available for consumers

### Technical

- Set `emptyOutDir: false` in Vite config to preserve TypeScript declarations
- Verified complete TypeScript support with proper type exports

## [1.0.1] - 2025-08-28

### Fixed

- **TypeScript Declarations**: Added proper TypeScript declaration files (.d.ts) generation for full type support
- **Build Process**: Created dedicated `tsconfig.lib.json` for library builds with proper type generation
- **Component Types**: Fixed unused variable issues in `Inputv2.tsx` component
- **Package Exports**: Ensured `dist/index.d.ts` is properly generated and exported

### Technical

- Added `tsconfig.lib.json` for library-specific TypeScript configuration
- Updated build script to use dedicated TypeScript config
- Fixed TypeScript compilation errors for clean builds

## [1.0.0] - 2025-08-28

### Added

- **Initial release** of AJ Story UI Components library
- **Form Controls**:

  - Input component with validation states
  - Textarea with character counting
  - Select with search functionality
  - MultiSelect with tag display
  - Checkbox with custom styling
  - RadioGroup with flexible layouts
  - Toggle switch controls
  - PasswordInput with strength indicator
  - RangeSlider with live feedback
  - DatePicker with validation
  - FileUpload with drag-and-drop

- **Navigation & Layout**:

  - Button with multiple variants and sizes
  - Tabs with badge support
  - Card containers
  - Modal dialogs with customizable footers
  - Tooltip for contextual help

- **Feedback & Status**:

  - Alert notifications (success, error, warning, info)
  - Toast notifications with auto-dismiss
  - Badge indicators
  - ProgressBar with multiple variants
  - LoadingSpinner in various sizes

- **Features**:
  - Full TypeScript support
  - Tailwind CSS styling
  - Responsive design
  - Accessibility compliance
  - Form validation support
  - Modern React hooks implementation
  - Comprehensive documentation
  - Live demo/preview component

### Technical

- Built with React 19+ and TypeScript 5.8+
- Vite for build tooling
- ESLint for code quality
- Tailwind CSS for styling
- Lucide React for icons
- Proper peer dependency configuration
- NPM package ready for publishing

## [Unreleased]

### Planned

- Dark mode support
- Additional component variants
- Animation improvements
- Accessibility enhancements
- Performance optimizations

---

## Template for future releases:

## [X.Y.Z] - YYYY-MM-DD

### Added

- New features

### Changed

- Changes in existing functionality

### Deprecated

- Soon-to-be removed features

### Removed

- Now removed features

### Fixed

- Bug fixes

### Security

- Vulnerability fixes
