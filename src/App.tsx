import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, Navigate } from "react-router-dom";
import { SideBar } from "./components/Layout/SideBar";
import { Header } from "./components/Layout/Header";
import { DashboardPage } from "./features/dashboard/components/dashboardPage";
import { LearnPage } from "./features/learningsP/learnPage";

function App() {
  return (
    <TooltipProvider>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <header className="flex items-center gap-4 p-4">
            <Header />
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              {/* dashboard route */}
              <Route path="/dashboard" element={<DashboardPage />} />
              {/* learning route */}
              <Route path="/learning" element={<LearnPage />} />

              {/* Add more routes here as you build them */}
              {/* <Route path="/history" element={<HistoryPage />} /> */}
              {/* <Route path="/settings" element={<SettingsPage />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;
