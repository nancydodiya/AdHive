
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Campaign {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
  location: string;
  targetAudience: string;
  status: "active" | "pending" | "completed" | "rejected";
  createdAt: string;
}

interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Campaign) => void;
  getActiveCampaigns: () => Campaign[];
  getPendingRequests: () => Campaign[];
  getTotalSpend: () => number;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export const CampaignProvider = ({ children }: { children: ReactNode }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(() => {
    // Try to load campaigns from localStorage
    const savedCampaigns = localStorage.getItem("campaigns");
    return savedCampaigns ? JSON.parse(savedCampaigns) : [];
  });

  const addCampaign = (campaign: Campaign) => {
    const updatedCampaigns = [...campaigns, campaign];
    setCampaigns(updatedCampaigns);
    // Save to localStorage
    localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
  };

  const getActiveCampaigns = () => {
    return campaigns.filter(campaign => campaign.status === "active");
  };

  const getPendingRequests = () => {
    return campaigns.filter(campaign => campaign.status === "pending");
  };

  const getTotalSpend = () => {
    // For simplicity, we'll just sum up the budgets of active campaigns
    // In a real app, this would track actual spend
    return getActiveCampaigns().reduce((total, campaign) => total + campaign.budget, 0);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign, getActiveCampaigns, getPendingRequests, getTotalSpend }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = () => {
  const context = useContext(CampaignContext);
  if (context === undefined) {
    throw new Error("useCampaigns must be used within a CampaignProvider");
  }
  return context;
};
