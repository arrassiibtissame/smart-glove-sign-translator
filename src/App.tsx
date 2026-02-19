import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SideBar } from "./components/Layout/SideBar";

function App() {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <SideBar />

        <SidebarInset>
          <header className="flex items-center gap-4 border-b p-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </header>

          <div className="p-6">Content here</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default App;
