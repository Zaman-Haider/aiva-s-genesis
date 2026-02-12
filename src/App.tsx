import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Index import karne ki zaroorat nahi agar aap usey use nahi kar rahe
import TheStory from "./pages/TheStory";
import PartnerProgramme from "./pages/PartnerProgramme";
import Subscriptions from "./pages/Subscriptions";
import Clawdbot from "./pages/Clawdbot";
import Merchants from "./pages/Merchants";
import DataUsage from "./pages/DataUsage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Ab default path "/" par TheStory page khulega */}
          <Route path="/" element={<TheStory />} />
          
          {/* Baqi routes wese hi rahen ge */}
          <Route path="/the-story" element={<TheStory />} />
          <Route path="/partner-programme" element={<PartnerProgramme />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/clawdbot" element={<Clawdbot />} />
          <Route path="/merchants" element={<Merchants />} />
          <Route path="/data-usage" element={<DataUsage />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 handler */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;