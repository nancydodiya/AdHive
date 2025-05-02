
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import HowItWorks from "./pages/HowItWorks";
import ForAdvertisers from "./pages/ForAdvertisers";
import ForAgencies from "./pages/ForAgencies";
import NotFound from "./pages/NotFound";
import Campaigns from "./pages/Campaigns";
import Requests from "./pages/Requests";
import Transactions from "./pages/Transactions";
import NewCampaign from "./pages/NewCampaign";
import Analytics from "./pages/Analytics";
import AccountSettings from "./pages/AccountSettings";
import { CampaignProvider } from "./context/CampaignContext";

const App = () => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CampaignProvider>
          <div className="bg-gradient-to-b from-pastel-blue/10 to-pastel-purple/10 min-h-screen">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/for-advertisers" element={<ForAdvertisers />} />
                <Route path="/for-agencies" element={<ForAgencies />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/new-campaign" element={<NewCampaign />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/account-settings" element={<AccountSettings />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </CampaignProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
