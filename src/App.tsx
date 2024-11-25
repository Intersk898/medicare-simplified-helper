import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MedicareBasics from "./pages/MedicareBasics";
import CoverageOptions from "./pages/CoverageOptions";
import EnrollmentHelp from "./pages/EnrollmentHelp";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/medicare-basics" element={<MedicareBasics />} />
          <Route path="/coverage-options" element={<CoverageOptions />} />
          <Route path="/enrollment-help" element={<EnrollmentHelp />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;