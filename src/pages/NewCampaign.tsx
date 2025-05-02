
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useCampaigns, Campaign } from "@/context/CampaignContext";

const NewCampaign = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addCampaign } = useCampaigns();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    
    // Create new campaign
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: formData.get('campaignName') as string,
      description: formData.get('description') as string,
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      budget: parseInt(formData.get('budget') as string, 10),
      location: formData.get('location') as string,
      targetAudience: formData.get('targetAudience') as string,
      status: "pending", // New campaigns start as pending
      createdAt: new Date().toISOString(),
    };
    
    // Simulate API call
    setTimeout(() => {
      // Add campaign to context
      addCampaign(newCampaign);
      
      toast({
        title: "Campaign Created",
        description: "Your campaign request has been submitted successfully.",
      });
      
      setIsSubmitting(false);
      
      // Navigate to dashboard after submission
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }, 1500);
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
          <h1 className="text-3xl font-bold">Create New Campaign</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Campaign Details</CardTitle>
            <CardDescription>
              Fill out the form below to create a new advertising campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="campaignName">Campaign Name</Label>
                  <Input id="campaignName" name="campaignName" placeholder="Summer Promotion 2024" required />
                </div>
                
                <div>
                  <Label htmlFor="description">Campaign Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    placeholder="Describe your campaign goals and requirements" 
                    rows={4}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" name="startDate" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" name="endDate" type="date" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget (₹)</Label>
                    <Input id="budget" name="budget" type="number" min="0" step="1000" placeholder="500000" required />
                  </div>
                  <div>
                    <Label htmlFor="location">Target Location</Label>
                    <Input id="location" name="location" placeholder="City, State or Region" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Textarea 
                    id="targetAudience" 
                    name="targetAudience"
                    placeholder="Describe your target audience (age, interests, demographics, etc.)" 
                    rows={3}
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  asChild
                >
                  <Link to="/dashboard">Cancel</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Campaign"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NewCampaign;
