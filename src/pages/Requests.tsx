
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, X } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCampaigns } from "@/context/CampaignContext";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Requests = () => {
  const { campaigns, addCampaign } = useCampaigns();
  const { toast } = useToast();
  const [processingId, setProcessingId] = useState<string | null>(null);
  
  // Get only pending requests
  const pendingRequests = campaigns.filter(campaign => campaign.status === "pending");
  
  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN');
  };
  
  // Handle approving a request
  const handleApprove = (id: string) => {
    setProcessingId(id);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      const updatedCampaigns = campaigns.map(campaign => 
        campaign.id === id ? { ...campaign, status: "active" } : campaign
      );
      
      // Save to localStorage
      localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
      
      // Force a refresh of the component
      window.location.reload();
      
      toast({
        title: "Request Approved",
        description: "The campaign request has been approved and is now active.",
      });
      
      setProcessingId(null);
    }, 1000);
  };
  
  // Handle rejecting a request
  const handleReject = (id: string) => {
    setProcessingId(id);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      const updatedCampaigns = campaigns.map(campaign => 
        campaign.id === id ? { ...campaign, status: "rejected" } : campaign
      );
      
      // Save to localStorage
      localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
      
      // Force a refresh of the component
      window.location.reload();
      
      toast({
        title: "Request Rejected",
        description: "The campaign request has been rejected.",
        variant: "destructive",
      });
      
      setProcessingId(null);
    }, 1000);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Pending Requests</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableCaption>
              {pendingRequests.length === 0 ? (
                "You don't have any pending requests."
              ) : (
                "A list of your pending requests."
              )}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Campaign</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingRequests.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <p className="text-muted-foreground mb-4">No pending requests found</p>
                    <Button asChild>
                      <Link to="/new-campaign">Create New Campaign</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                pendingRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id.slice(0, 8)}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{formatDate(request.createdAt)}</TableCell>
                    <TableCell>₹{request.budget.toLocaleString('en-IN')}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="sm" 
                          className="bg-green-500 hover:bg-green-600"
                          onClick={() => handleApprove(request.id)}
                          disabled={processingId === request.id}
                        >
                          <Check className="h-4 w-4 mr-1" /> Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleReject(request.id)}
                          disabled={processingId === request.id}
                        >
                          <X className="h-4 w-4 mr-1" /> Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Requests;
