import { useState } from "react";
import StorybookPreview from "./pages/Utility";
import AbolajiShowcase from "./pages/AbolajiShowcase";
import { Button } from "./components/ui/Button";

const App = () => {
  const [currentView, setCurrentView] = useState<"showcase" | "utility">(
    "showcase"
  );

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
      </div>

      {/* Content */}
      {currentView === "showcase" ? <AbolajiShowcase /> : <StorybookPreview />}
    </div>
  );
};

export default App;
