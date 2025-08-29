import { useState } from "react";
// import StorybookPreview from "./pages/Utility";
// import AbolajiShowcase from "./pages/AbolajiShowcase";
import { Button } from "./components/ui/Button";
import Testing from "./pages/Testing";
import AbolajiShowcase from "./pages/AbolajiShowcase";
import StorybookPreview from "./pages/Utility";
import ComponentTest from "./ComponentTest";

const App = () => {
  const [currentView, setCurrentView] = useState<
    "showcase" | "utility" | "test"
  >("test");

  return (
    <div>
      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <Button
          variant={currentView === "showcase" ? "primary" : "secondary"}
          size="small"
          onClick={() => setCurrentView("showcase")}
        >
          🚀 Showcase
        </Button>
        <Button
          variant={currentView === "utility" ? "primary" : "secondary"}
          size="small"
          onClick={() => setCurrentView("utility")}
        >
          🛠️ Utility
        </Button>
        <Button
          variant={currentView === "test" ? "primary" : "secondary"}
          size="small"
          onClick={() => setCurrentView("test")}
        >
          🧪 Test
        </Button>
      </div>

      <Testing />

      {/* Content */}
      {currentView === "showcase" ? (
        <AbolajiShowcase />
      ) : currentView === "utility" ? (
        <StorybookPreview />
      ) : (
        <ComponentTest />
      )}
    </div>
  );
};

export default App;
