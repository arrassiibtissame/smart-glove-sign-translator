import { TooltipProvider } from "@/components/ui/tooltip";
import { SideBar } from "./components/Layout/SideBar";

function App() {
  return (
    <TooltipProvider>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <header className="flex items-center gap-4 border-b p-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </header>
          <div className="p-6">Content here</div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;
