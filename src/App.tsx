import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CateringPage from "./pages/CateringPage";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

// Function to scroll to element by ID when hash changes
const scrollToHashElement = () => {
  const { hash } = window.location;
  if (hash) {
    // Remove the leading hash character
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const App = () => {
  // Add event listener for hash changes
  window.addEventListener('hashchange', scrollToHashElement);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catering" element={<CateringPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <ChatBot />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
