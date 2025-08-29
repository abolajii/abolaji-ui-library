// Auto-inject comprehensive CSS styles when components are imported
let stylesInjected = false;

export const injectStyles = () => {
  if (stylesInjected || typeof document === "undefined") {
    return;
  }

  // Check if styles are already injected (avoid duplicates)
  if (document.getElementById("abolaji-ui-styles")) {
    stylesInjected = true;
    return;
  }

  // Inject comprehensive CSS styles directly
  const comprehensiveCSS = `
/* Abolaji UI Components - Comprehensive Auto-injected Styles */
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
html{line-height:1.5;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif}
body{margin:0;line-height:inherit}
button,input,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
button{cursor:pointer}
input,textarea{outline:none}

/* Reset and normalize */
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
a{color:inherit;text-decoration:inherit}
button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}
input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}
:disabled{cursor:default}
img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}
img,video{max-width:100%;height:auto}
[hidden]{display:none}

/* Layout utilities */
.relative{position:relative}
.absolute{position:absolute}
.fixed{position:fixed}
.block{display:block}
.inline-block{display:inline-block}
.inline{display:inline}
.flex{display:flex}
.inline-flex{display:inline-flex}
.grid{display:grid}
.hidden{display:none}
.flex-col{flex-direction:column}
.flex-row{flex-direction:row}
.items-start{align-items:flex-start}
.items-center{align-items:center}
.items-end{align-items:flex-end}
.justify-start{justify-content:flex-start}
.justify-center{justify-content:center}
.justify-end{justify-content:flex-end}
.justify-between{justify-content:space-between}
.justify-around{justify-content:space-around}
.gap-1{gap:0.25rem}
.gap-2{gap:0.5rem}
.gap-3{gap:0.75rem}
.gap-4{gap:1rem}
.gap-6{gap:1.5rem}
.gap-8{gap:2rem}

/* Spacing utilities */
.p-0{padding:0}
.p-1{padding:0.25rem}
.p-2{padding:0.5rem}
.p-3{padding:0.75rem}
.p-4{padding:1rem}
.p-6{padding:1.5rem}
.p-8{padding:2rem}
.px-1{padding-left:0.25rem;padding-right:0.25rem}
.px-2{padding-left:0.5rem;padding-right:0.5rem}
.px-3{padding-left:0.75rem;padding-right:0.75rem}
.px-4{padding-left:1rem;padding-right:1rem}
.px-6{padding-left:1.5rem;padding-right:1.5rem}
.px-8{padding-left:2rem;padding-right:2rem}
.py-1{padding-top:0.25rem;padding-bottom:0.25rem}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem}
.py-4{padding-top:1rem;padding-bottom:1rem}
.py-6{padding-top:1.5rem;padding-bottom:1.5rem}
.pt-2{padding-top:0.5rem}
.pr-3{padding-right:0.75rem}
.pr-8{padding-right:2rem}
.pr-10{padding-right:2.5rem}
.pr-12{padding-right:3rem}
.pb-2{padding-bottom:0.5rem}
.pl-3{padding-left:0.75rem}
.pl-8{padding-left:2rem}
.pl-10{padding-left:2.5rem}
.pl-12{padding-left:3rem}
.m-0{margin:0}
.m-1{margin:0.25rem}
.m-2{margin:0.5rem}
.m-3{margin:0.75rem}
.m-4{margin:1rem}
.mt-1{margin-top:0.25rem}
.mt-2{margin-top:0.5rem}
.mt-3{margin-top:0.75rem}
.mt-4{margin-top:1rem}
.mt-6{margin-top:1.5rem}
.mt-8{margin-top:2rem}
.mb-1{margin-bottom:0.25rem}
.mb-2{margin-bottom:0.5rem}
.mb-3{margin-bottom:0.75rem}
.mb-4{margin-bottom:1rem}
.mb-6{margin-bottom:1.5rem}
.mb-8{margin-bottom:2rem}
.mr-1{margin-right:0.25rem}
.mr-2{margin-right:0.5rem}
.mr-3{margin-right:0.75rem}
.ml-1{margin-left:0.25rem}
.ml-2{margin-left:0.5rem}
.ml-3{margin-left:0.75rem}

/* Space between utilities */
.space-y-1>:not([hidden])~:not([hidden]){margin-top:0.25rem}
.space-y-2>:not([hidden])~:not([hidden]){margin-top:0.5rem}
.space-y-3>:not([hidden])~:not([hidden]){margin-top:0.75rem}
.space-y-4>:not([hidden])~:not([hidden]){margin-top:1rem}
.space-y-6>:not([hidden])~:not([hidden]){margin-top:1.5rem}
.space-x-1>:not([hidden])~:not([hidden]){margin-left:0.25rem}
.space-x-2>:not([hidden])~:not([hidden]){margin-left:0.5rem}
.space-x-3>:not([hidden])~:not([hidden]){margin-left:0.75rem}
.space-x-4>:not([hidden])~:not([hidden]){margin-left:1rem}

/* Border and rounded utilities */
.rounded{border-radius:0.25rem}
.rounded-md{border-radius:0.375rem}
.rounded-lg{border-radius:0.5rem}
.rounded-xl{border-radius:0.75rem}
.rounded-full{border-radius:9999px}
.border{border-width:1px}
.border-0{border-width:0}
.border-2{border-width:2px}
.border-t{border-top-width:1px}
.border-r{border-right-width:1px}
.border-b{border-bottom-width:1px}
.border-l{border-left-width:1px}
.border-transparent{border-color:transparent}
.border-gray-100{border-color:#f3f4f6}
.border-gray-200{border-color:#e5e7eb}
.border-gray-300{border-color:#d1d5db}
.border-gray-400{border-color:#9ca3af}
.border-blue-100{border-color:#dbeafe}
.border-blue-200{border-color:#dbeafe}
.border-blue-300{border-color:#93c5fd}
.border-blue-500{border-color:#3b82f6}
.border-green-100{border-color:#dcfce7}
.border-green-200{border-color:#bbf7d0}
.border-green-300{border-color:#86efac}
.border-red-100{border-color:#fee2e2}
.border-red-200{border-color:#fecaca}
.border-red-300{border-color:#fca5a5}
.border-yellow-100{border-color:#fef3c7}
.border-yellow-200{border-color:#fef3c7}
.border-yellow-300{border-color:#fde047}

/* Background colors */
.bg-transparent{background-color:transparent}
.bg-white{background-color:#fff}
.bg-gray-50{background-color:#f9fafb}
.bg-gray-100{background-color:#f3f4f6}
.bg-gray-200{background-color:#e5e7eb}
.bg-gray-500{background-color:#6b7280}
.bg-gray-800{background-color:#1f2937}
.bg-blue-50{background-color:#eff6ff}
.bg-blue-100{background-color:#dbeafe}
.bg-blue-500{background-color:#3b82f6}
.bg-blue-600{background-color:#2563eb}
.bg-blue-700{background-color:#1d4ed8}
.bg-green-50{background-color:#f0fdf4}
.bg-green-100{background-color:#dcfce7}
.bg-green-500{background-color:#22c55e}
.bg-green-600{background-color:#16a34a}
.bg-red-50{background-color:#fef2f2}
.bg-red-100{background-color:#fee2e2}
.bg-red-500{background-color:#ef4444}
.bg-red-600{background-color:#dc2626}
.bg-yellow-50{background-color:#fefce8}
.bg-yellow-100{background-color:#fef3c7}
.bg-yellow-500{background-color:#eab308}
.bg-yellow-600{background-color:#ca8a04}
.bg-purple-50{background-color:#faf5ff}
.bg-purple-100{background-color:#f3e8ff}
.bg-purple-500{background-color:#a855f7}
.bg-purple-600{background-color:#9333ea}

/* Text colors */
.text-inherit{color:inherit}
.text-current{color:currentColor}
.text-transparent{color:transparent}
.text-black{color:#000}
.text-white{color:#fff}
.text-gray-400{color:#9ca3af}
.text-gray-500{color:#6b7280}
.text-gray-600{color:#4b5563}
.text-gray-700{color:#374151}
.text-gray-800{color:#1f2937}
.text-gray-900{color:#111827}
.text-blue-400{color:#60a5fa}
.text-blue-500{color:#3b82f6}
.text-blue-600{color:#2563eb}
.text-blue-700{color:#1d4ed8}
.text-blue-800{color:#1e40af}
.text-green-400{color:#4ade80}
.text-green-500{color:#22c55e}
.text-green-600{color:#16a34a}
.text-green-700{color:#15803d}
.text-green-800{color:#166534}
.text-red-400{color:#f87171}
.text-red-500{color:#ef4444}
.text-red-600{color:#dc2626}
.text-red-700{color:#b91c1c}
.text-red-800{color:#991b1b}
.text-yellow-400{color:#facc15}
.text-yellow-500{color:#eab308}
.text-yellow-600{color:#ca8a04}
.text-yellow-700{color:#a16207}
.text-yellow-800{color:#854d0e}
.text-purple-400{color:#c084fc}
.text-purple-500{color:#a855f7}
.text-purple-600{color:#9333ea}
.text-purple-700{color:#7c3aed}
.text-purple-800{color:#6b21a8}

/* Typography */
.text-xs{font-size:0.75rem;line-height:1rem}
.text-sm{font-size:0.875rem;line-height:1.25rem}
.text-base{font-size:1rem;line-height:1.5rem}
.text-lg{font-size:1.125rem;line-height:1.75rem}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-2xl{font-size:1.5rem;line-height:2rem}
.text-3xl{font-size:1.875rem;line-height:2.25rem}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.font-light{font-weight:300}
.font-normal{font-weight:400}
.font-medium{font-weight:500}
.font-semibold{font-weight:600}
.font-bold{font-weight:700}
.font-extrabold{font-weight:800}
.text-left{text-align:left}
.text-center{text-align:center}
.text-right{text-align:right}
.uppercase{text-transform:uppercase}
.lowercase{text-transform:lowercase}
.capitalize{text-transform:capitalize}

/* Sizing */
.w-0{width:0}
.w-4{width:1rem}
.w-5{width:1.25rem}
.w-6{width:1.5rem}
.w-8{width:2rem}
.w-10{width:2.5rem}
.w-12{width:3rem}
.w-16{width:4rem}
.w-20{width:5rem}
.w-24{width:6rem}
.w-32{width:8rem}
.w-auto{width:auto}
.w-full{width:100%}
.w-screen{width:100vw}
.min-w-0{min-width:0}
.min-w-full{min-width:100%}
.max-w-none{max-width:none}
.max-w-xs{max-width:20rem}
.max-w-sm{max-width:24rem}
.max-w-md{max-width:28rem}
.max-w-lg{max-width:32rem}
.max-w-xl{max-width:36rem}
.max-w-2xl{max-width:42rem}
.max-w-3xl{max-width:48rem}
.max-w-4xl{max-width:56rem}
.max-w-5xl{max-width:64rem}
.max-w-6xl{max-width:72rem}
.max-w-7xl{max-width:80rem}
.max-w-full{max-width:100%}
.h-0{height:0}
.h-4{height:1rem}
.h-5{height:1.25rem}
.h-6{height:1.5rem}
.h-8{height:2rem}
.h-10{height:2.5rem}
.h-12{height:3rem}
.h-16{height:4rem}
.h-20{height:5rem}
.h-24{height:6rem}
.h-32{height:8rem}
.h-auto{height:auto}
.h-full{height:100%}
.h-screen{height:100vh}
.min-h-0{min-height:0}
.min-h-full{min-height:100%}
.min-h-screen{min-height:100vh}

/* Position utilities */
.inset-0{top:0;right:0;bottom:0;left:0}
.top-0{top:0}
.top-1{top:0.25rem}
.top-2{top:0.5rem}
.top-3{top:0.75rem}
.right-0{right:0}
.right-1{right:0.25rem}
.right-2{right:0.5rem}
.right-3{right:0.75rem}
.bottom-0{bottom:0}
.bottom-1{bottom:0.25rem}
.bottom-2{bottom:0.5rem}
.bottom-3{bottom:0.75rem}
.left-0{left:0}
.left-1{left:0.25rem}
.left-2{left:0.5rem}
.left-3{left:0.75rem}

/* Z-index */
.z-0{z-index:0}
.z-10{z-index:10}
.z-20{z-index:20}
.z-30{z-index:30}
.z-40{z-index:40}
.z-50{z-index:50}
.z-auto{z-index:auto}

/* Opacity */
.opacity-0{opacity:0}
.opacity-25{opacity:0.25}
.opacity-50{opacity:0.5}
.opacity-75{opacity:0.75}
.opacity-100{opacity:1}

/* Effects */
.shadow{box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)}
.shadow-sm{box-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05)}
.shadow-md{box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)}
.shadow-lg{box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)}
.shadow-xl{box-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)}
.shadow-2xl{box-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25)}
.shadow-none{box-shadow:0 0 #0000}

/* Transitions */
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.transition-none{transition-property:none}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.duration-75{transition-duration:75ms}
.duration-100{transition-duration:100ms}
.duration-150{transition-duration:150ms}
.duration-200{transition-duration:200ms}
.duration-300{transition-duration:300ms}
.duration-500{transition-duration:500ms}
.duration-700{transition-duration:700ms}
.duration-1000{transition-duration:1000ms}
.ease-linear{transition-timing-function:linear}
.ease-in{transition-timing-function:cubic-bezier(0.4,0,1,1)}
.ease-out{transition-timing-function:cubic-bezier(0,0,0.2,1)}
.ease-in-out{transition-timing-function:cubic-bezier(0.4,0,0.2,1)}

/* Interactive states */
.hover\\:bg-gray-50:hover{background-color:#f9fafb}
.hover\\:bg-gray-100:hover{background-color:#f3f4f6}
.hover\\:bg-blue-50:hover{background-color:#eff6ff}
.hover\\:bg-blue-600:hover{background-color:#2563eb}
.hover\\:bg-blue-700:hover{background-color:#1d4ed8}
.hover\\:bg-green-600:hover{background-color:#16a34a}
.hover\\:bg-red-600:hover{background-color:#dc2626}
.hover\\:bg-yellow-600:hover{background-color:#ca8a04}
.hover\\:text-blue-600:hover{color:#2563eb}
.hover\\:text-blue-700:hover{color:#1d4ed8}
.hover\\:border-gray-300:hover{border-color:#d1d5db}
.hover\\:border-blue-500:hover{border-color:#3b82f6}
.hover\\:shadow-md:hover{box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)}
.hover\\:shadow-lg:hover{box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)}
.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}
.focus\\:ring-1:focus{box-shadow:0 0 0 1px rgba(59, 130, 246, 0.5)}
.focus\\:ring-2:focus{box-shadow:0 0 0 2px rgba(59, 130, 246, 0.5)}
.focus\\:ring-blue-500:focus{box-shadow:0 0 0 2px rgba(59, 130, 246, 0.5)}
.focus\\:border-blue-500:focus{border-color:#3b82f6}
.focus\\:border-transparent:focus{border-color:transparent}
.active\\:bg-blue-800:active{background-color:#1e40af}
.disabled\\:opacity-50:disabled{opacity:0.5}
.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}
.disabled\\:bg-gray-300:disabled{background-color:#d1d5db}

/* Cursor */
.cursor-auto{cursor:auto}
.cursor-default{cursor:default}
.cursor-pointer{cursor:pointer}
.cursor-wait{cursor:wait}
.cursor-text{cursor:text}
.cursor-move{cursor:move}
.cursor-help{cursor:help}
.cursor-not-allowed{cursor:not-allowed}

/* User select */
.select-none{user-select:none}
.select-text{user-select:text}
.select-all{user-select:all}
.select-auto{user-select:auto}

/* Pointer events */
.pointer-events-none{pointer-events:none}
.pointer-events-auto{pointer-events:auto}

/* Resize */
.resize-none{resize:none}
.resize{resize:both}
.resize-y{resize:vertical}
.resize-x{resize:horizontal}

/* List style */
.list-none{list-style-type:none}
.list-disc{list-style-type:disc}
.list-decimal{list-style-type:decimal}

/* Overflow */
.overflow-auto{overflow:auto}
.overflow-hidden{overflow:hidden}
.overflow-visible{overflow:visible}
.overflow-scroll{overflow:scroll}
.overflow-x-auto{overflow-x:auto}
.overflow-y-auto{overflow-y:auto}
.overflow-x-hidden{overflow-x:hidden}
.overflow-y-hidden{overflow-y:hidden}

/* Object fit */
.object-contain{object-fit:contain}
.object-cover{object-fit:cover}
.object-fill{object-fit:fill}
.object-none{object-fit:none}
.object-scale-down{object-fit:scale-down}

/* Animation */
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes ping{75%,100%{transform:scale(2);opacity:0}}
@keyframes pulse{50%{opacity:0.5}}
@keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1)}}
.animate-none{animation:none}
.animate-spin{animation:spin 1s linear infinite}
.animate-ping{animation:ping 1s cubic-bezier(0,0,0.2,1) infinite}
.animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
.animate-bounce{animation:bounce 1s infinite}

/* Grid system */
.col-auto{grid-column:auto}
.col-span-1{grid-column:span 1/span 1}
.col-span-2{grid-column:span 2/span 2}
.col-span-3{grid-column:span 3/span 3}
.col-span-4{grid-column:span 4/span 4}
.col-span-5{grid-column:span 5/span 5}
.col-span-6{grid-column:span 6/span 6}
.col-span-7{grid-column:span 7/span 7}
.col-span-8{grid-column:span 8/span 8}
.col-span-9{grid-column:span 9/span 9}
.col-span-10{grid-column:span 10/span 10}
.col-span-11{grid-column:span 11/span 11}
.col-span-12{grid-column:span 12/span 12}
.col-span-full{grid-column:1/-1}
.row-auto{grid-row:auto}
.row-span-1{grid-row:span 1/span 1}
.row-span-2{grid-row:span 2/span 2}
.row-span-3{grid-row:span 3/span 3}
.row-span-4{grid-row:span 4/span 4}
.row-span-5{grid-row:span 5/span 5}
.row-span-6{grid-row:span 6/span 6}
.row-span-full{grid-row:1/-1}
.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}
.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}
.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}
.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}
.grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}
.grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}
.grid-cols-11{grid-template-columns:repeat(11,minmax(0,1fr))}
.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}
.grid-cols-none{grid-template-columns:none}
.grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}
.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}
.grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}
.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}
.grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr))}
.grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}
.grid-rows-none{grid-template-rows:none}
.auto-cols-auto{grid-auto-columns:auto}
.auto-cols-min{grid-auto-columns:min-content}
.auto-cols-max{grid-auto-columns:max-content}
.auto-cols-fr{grid-auto-columns:minmax(0,1fr)}
.auto-rows-auto{grid-auto-rows:auto}
.auto-rows-min{grid-auto-rows:min-content}
.auto-rows-max{grid-auto-rows:max-content}
.auto-rows-fr{grid-auto-rows:minmax(0,1fr)}
.gap-0{gap:0}
.gap-px{gap:1px}
.gap-0\\.5{gap:0.125rem}
.gap-1{gap:0.25rem}
.gap-1\\.5{gap:0.375rem}
.gap-2{gap:0.5rem}
.gap-2\\.5{gap:0.625rem}
.gap-3{gap:0.75rem}
.gap-3\\.5{gap:0.875rem}
.gap-4{gap:1rem}
.gap-5{gap:1.25rem}
.gap-6{gap:1.5rem}
.gap-7{gap:1.75rem}
.gap-8{gap:2rem}
.gap-9{gap:2.25rem}
.gap-10{gap:2.5rem}
.gap-11{gap:2.75rem}
.gap-12{gap:3rem}
.gap-14{gap:3.5rem}
.gap-16{gap:4rem}
.gap-20{gap:5rem}
.gap-24{gap:6rem}
.gap-28{gap:7rem}
.gap-32{gap:8rem}
.gap-36{gap:9rem}
.gap-40{gap:10rem}
.gap-44{gap:11rem}
.gap-48{gap:12rem}
.gap-52{gap:13rem}
.gap-56{gap:14rem}
.gap-60{gap:15rem}
.gap-64{gap:16rem}
.gap-72{gap:18rem}
.gap-80{gap:20rem}
.gap-96{gap:24rem}

/* Responsive breakpoints */
@media(min-width:640px){
.sm\\:block{display:block}
.sm\\:flex{display:flex}
.sm\\:grid{display:grid}
.sm\\:hidden{display:none}
.sm\\:flex-col{flex-direction:column}
.sm\\:flex-row{flex-direction:row}
.sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.sm\\:col-span-1{grid-column:span 1/span 1}
.sm\\:col-span-2{grid-column:span 2/span 2}
.sm\\:col-span-3{grid-column:span 3/span 3}
.sm\\:col-span-4{grid-column:span 4/span 4}
.sm\\:gap-2{gap:0.5rem}
.sm\\:gap-4{gap:1rem}
.sm\\:gap-6{gap:1.5rem}
.sm\\:p-4{padding:1rem}
.sm\\:p-6{padding:1.5rem}
.sm\\:px-4{padding-left:1rem;padding-right:1rem}
.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}
.sm\\:py-2{padding-top:0.5rem;padding-bottom:0.5rem}
.sm\\:py-4{padding-top:1rem;padding-bottom:1rem}
.sm\\:text-sm{font-size:0.875rem;line-height:1.25rem}
.sm\\:text-base{font-size:1rem;line-height:1.5rem}
.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}
.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem}
}
@media(min-width:768px){
.md\\:block{display:block}
.md\\:flex{display:flex}
.md\\:grid{display:grid}
.md\\:hidden{display:none}
.md\\:flex-col{flex-direction:column}
.md\\:flex-row{flex-direction:row}
.md\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.md\\:col-span-1{grid-column:span 1/span 1}
.md\\:col-span-2{grid-column:span 2/span 2}
.md\\:col-span-3{grid-column:span 3/span 3}
.md\\:col-span-4{grid-column:span 4/span 4}
.md\\:gap-4{gap:1rem}
.md\\:gap-6{gap:1.5rem}
.md\\:gap-8{gap:2rem}
.md\\:p-6{padding:1.5rem}
.md\\:p-8{padding:2rem}
.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}
.md\\:px-8{padding-left:2rem;padding-right:2rem}
.md\\:py-4{padding-top:1rem;padding-bottom:1rem}
.md\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}
.md\\:text-base{font-size:1rem;line-height:1.5rem}
.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}
.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}
.md\\:text-2xl{font-size:1.5rem;line-height:2rem}
}
@media(min-width:1024px){
.lg\\:block{display:block}
.lg\\:flex{display:flex}
.lg\\:grid{display:grid}
.lg\\:hidden{display:none}
.lg\\:flex-col{flex-direction:column}
.lg\\:flex-row{flex-direction:row}
.lg\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}
.lg\\:col-span-1{grid-column:span 1/span 1}
.lg\\:col-span-2{grid-column:span 2/span 2}
.lg\\:col-span-3{grid-column:span 3/span 3}
.lg\\:col-span-4{grid-column:span 4/span 4}
.lg\\:col-span-5{grid-column:span 5/span 5}
.lg\\:gap-6{gap:1.5rem}
.lg\\:gap-8{gap:2rem}
.lg\\:gap-10{gap:2.5rem}
.lg\\:p-8{padding:2rem}
.lg\\:p-10{padding:2.5rem}
.lg\\:px-8{padding-left:2rem;padding-right:2rem}
.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}
.lg\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}
.lg\\:py-8{padding-top:2rem;padding-bottom:2rem}
.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem}
.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}
.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}
.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}
}
@media(min-width:1280px){
.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}
.xl\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}
.xl\\:col-span-4{grid-column:span 4/span 4}
.xl\\:col-span-5{grid-column:span 5/span 5}
.xl\\:col-span-6{grid-column:span 6/span 6}
.xl\\:gap-8{gap:2rem}
.xl\\:gap-10{gap:2.5rem}
.xl\\:gap-12{gap:3rem}
.xl\\:p-10{padding:2.5rem}
.xl\\:p-12{padding:3rem}
.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}
.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}
.xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem}
.xl\\:text-4xl{font-size:2.25rem;line-height:2.5rem}
}
`;

  const styleElement = document.createElement("style");
  styleElement.id = "abolaji-ui-styles";
  styleElement.textContent = comprehensiveCSS;
  document.head.appendChild(styleElement);

  stylesInjected = true;

  // Log success for debugging
  console.log("✅ Abolaji UI Components styles auto-injected (v1.0.7+)");
};

// Auto-inject styles when this module is imported
if (typeof window !== "undefined") {
  injectStyles();
}
