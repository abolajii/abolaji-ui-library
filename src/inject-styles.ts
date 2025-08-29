// Auto-inject CSS styles when components are imported
let stylesInjected = false;

export const injectStyles = () => {
  if (stylesInjected || typeof document === 'undefined') {
    return;
  }

  // Check if styles are already injected (avoid duplicates)
  if (document.getElementById('abolaji-ui-styles')) {
    stylesInjected = true;
    return;
  }

  // Try to load CSS from CDN first
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = 'https://cdn.jsdelivr.net/npm/abolaji-ui-components@latest/dist/index.css';
  linkElement.id = 'abolaji-ui-styles';
  
  linkElement.onload = () => {
    console.log('✅ Abolaji UI Components styles loaded from CDN');
  };
  
  linkElement.onerror = () => {
    console.warn('⚠️ Failed to load styles from CDN, using embedded CSS fallback');
    // Fallback to embedded styles
    loadEmbeddedStyles();
  };
  
  document.head.appendChild(linkElement);
  stylesInjected = true;
};

const loadEmbeddedStyles = () => {
  // If CDN fails, inject essential embedded styles
  const essentialCSS = `
/* Abolaji UI Components - Essential Fallback Styles */
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
html{line-height:1.5;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif}
body{margin:0;line-height:inherit}
button,input,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
button{cursor:pointer}
input,textarea{outline:none}

/* Essential layout utilities */
.relative{position:relative}
.absolute{position:absolute}
.block{display:block}
.inline-block{display:inline-block}
.flex{display:flex}
.grid{display:grid}
.hidden{display:none}
.flex-col{flex-direction:column}
.items-center{align-items:center}
.justify-center{justify-content:center}
.justify-between{justify-content:space-between}
.gap-1{gap:0.25rem}
.gap-2{gap:0.5rem}
.gap-3{gap:0.75rem}
.gap-4{gap:1rem}

/* Spacing utilities */
.p-1{padding:0.25rem}
.p-2{padding:0.5rem}
.p-3{padding:0.75rem}
.p-4{padding:1rem}
.px-3{padding-left:0.75rem;padding-right:0.75rem}
.px-4{padding-left:1rem;padding-right:1rem}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem}
.mt-1{margin-top:0.25rem}
.mt-2{margin-top:0.5rem}
.mb-2{margin-bottom:0.5rem}
.mb-4{margin-bottom:1rem}
.mr-2{margin-right:0.5rem}
.ml-2{margin-left:0.5rem}

/* Border and rounded utilities */
.rounded{border-radius:0.25rem}
.rounded-md{border-radius:0.375rem}
.rounded-lg{border-radius:0.5rem}
.rounded-full{border-radius:9999px}
.border{border-width:1px}
.border-gray-200{border-color:#e5e7eb}
.border-gray-300{border-color:#d1d5db}
.border-blue-200{border-color:#dbeafe}
.border-blue-500{border-color:#3b82f6}
.border-green-200{border-color:#bbf7d0}
.border-red-200{border-color:#fecaca}
.border-yellow-200{border-color:#fef3c7}

/* Background colors */
.bg-white{background-color:#fff}
.bg-gray-50{background-color:#f9fafb}
.bg-gray-100{background-color:#f3f4f6}
.bg-blue-50{background-color:#eff6ff}
.bg-blue-100{background-color:#dbeafe}
.bg-blue-500{background-color:#3b82f6}
.bg-blue-600{background-color:#2563eb}
.bg-green-50{background-color:#f0fdf4}
.bg-green-100{background-color:#dcfce7}
.bg-red-50{background-color:#fef2f2}
.bg-red-100{background-color:#fee2e2}
.bg-yellow-50{background-color:#fefce8}
.bg-yellow-100{background-color:#fef3c7}

/* Text colors */
.text-gray-500{color:#6b7280}
.text-gray-600{color:#4b5563}
.text-gray-700{color:#374151}
.text-gray-800{color:#1f2937}
.text-blue-600{color:#2563eb}
.text-blue-700{color:#1d4ed8}
.text-blue-800{color:#1e40af}
.text-green-600{color:#16a34a}
.text-green-700{color:#15803d}
.text-green-800{color:#166534}
.text-red-600{color:#dc2626}
.text-red-700{color:#b91c1c}
.text-red-800{color:#991b1b}
.text-yellow-700{color:#a16207}
.text-yellow-800{color:#854d0e}
.text-white{color:#fff}

/* Typography */
.text-xs{font-size:0.75rem;line-height:1rem}
.text-sm{font-size:0.875rem;line-height:1.25rem}
.text-base{font-size:1rem;line-height:1.5rem}
.text-lg{font-size:1.125rem;line-height:1.75rem}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-2xl{font-size:1.5rem;line-height:2rem}
.font-medium{font-weight:500}
.font-semibold{font-weight:600}
.font-bold{font-weight:700}

/* Interactive states */
.hover\\:bg-blue-700:hover{background-color:#1d4ed8}
.hover\\:bg-gray-50:hover{background-color:#f9fafb}
.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}
.focus\\:ring-2:focus{box-shadow:0 0 0 2px rgba(59, 130, 246, 0.5)}
.focus\\:border-blue-500:focus{border-color:#3b82f6}
.transition{transition-property:color,background-color,border-color,transform;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.duration-200{transition-duration:200ms}

/* Effects */
.shadow{box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)}
.shadow-md{box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)}
.opacity-50{opacity:0.5}

/* Animation */
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{50%{opacity:0.5}}
.animate-spin{animation:spin 1s linear infinite}
.animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}

/* Grid system */
.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.col-span-1{grid-column:span 1/span 1}
.col-span-2{grid-column:span 2/span 2}
.col-span-3{grid-column:span 3/span 3}

/* Responsive */
@media(min-width:768px){
.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.md\\:col-span-2{grid-column:span 2/span 2}
}
@media(min-width:1024px){
.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.lg\\:col-span-3{grid-column:span 3/span 3}
}

/* Sizing */
.w-4{width:1rem}
.w-5{width:1.25rem}
.w-full{width:100%}
.h-4{height:1rem}
.h-5{height:1.25rem}

/* Position utilities */
.top-1{top:0.25rem}
.right-3{right:0.75rem}
.left-3{left:0.75rem}
.space-y-4>:not([hidden])~:not([hidden]){margin-top:1rem}
`;

  const fallbackStyleElement = document.createElement('style');
  fallbackStyleElement.id = 'abolaji-ui-styles-fallback';
  fallbackStyleElement.textContent = essentialCSS;
  document.head.appendChild(fallbackStyleElement);
};

// Auto-inject styles when this module is imported
if (typeof window !== 'undefined') {
  injectStyles();
}
