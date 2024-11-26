import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessHeader from "./components/BusinessHeader";
import Index from "./pages/Index";
import MedicareBasics from "./pages/MedicareBasics";
import CoverageOptions from "./pages/CoverageOptions";
import EnrollmentHelp from "./pages/EnrollmentHelp";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Accessibility from "./pages/Accessibility";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BusinessHeader />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/medicare-basics" element={<MedicareBasics />} />
            <Route path="/coverage-options" element={<CoverageOptions />} />
            <Route path="/enrollment-help" element={<EnrollmentHelp />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;