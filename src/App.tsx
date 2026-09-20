import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import { useLoading } from "./hooks/useLoading";
import { ThemeProvider } from "./hooks/useTheme";

const queryClient = new QueryClient();

const AppContent = () => {
  const isLoading = useLoading(2200); // 2.2 second loading time for snappy feel

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen w-full font-sans relative bg-background text-foreground transition-colors duration-300">
      {/* Dynamic Theme Base Layer */}
      <div
        className="fixed inset-0 z-0 bg-background transition-colors duration-300 pointer-events-none"
      />
      <div className="relative z-10">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
