import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary = mode === "library";

  if (isLibrary) {
    return {
      plugins: [react(), tailwindcss()],
      build: {
        lib: {
          entry: "./src/index.ts",
          name: "abolaji-ui-library",
          fileName: "index",
          formats: ["es", "cjs"],
        },
        rollupOptions: {
          external: ["react", "react-dom", "react/jsx-runtime"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "react/jsx-runtime": "jsxRuntime",
            },
          },
        },
        sourcemap: true,
        emptyOutDir: false,
        cssCodeSplit: false,
      },
    };
  }

  return {
    plugins: [react(), tailwindcss()],
  };
});
