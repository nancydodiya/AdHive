
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6">
              Our Process
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-gradient">HoardingSync</span> Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From selecting the perfect location to launching your campaign,
              our streamlined process makes outdoor advertising simple and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              <ProcessStep 
                number="01" 
                title="Submit Your Requirements"
                description="Describe your campaign goals, target audience, budget, and timeline. Our intuitive platform makes it easy to specify exactly what you need."
              />
              <ProcessStep 
                number="02" 
                title="AI-Powered Matching"
                description="Our algorithm matches your requirements with available hoarding spaces, considering location, visibility, audience demographics, and more."
              />
              <ProcessStep 
                number="03" 
                title="Review Proposals"
                description="Receive proposals from verified agencies that match your criteria. Compare rates, locations, and expected audience reach."
              />
              <ProcessStep 
                number="04" 
                title="Secure Booking"
                description="Select the best proposal and complete the booking and payment process securely through our platform."
              />
              <ProcessStep 
                number="05" 
                title="Campaign Launch"
                description="The agency handles the installation of your advertisement, and you can track the entire process through our dashboard."
              />
              <ProcessStep 
                number="06" 
                title="Performance Analytics"
                description="Access real-time data and analytics to measure the effectiveness of your campaign and make informed decisions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using HoardingSync to simplify their outdoor advertising campaigns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/for-advertisers">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More for Advertisers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex gap-6 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
          <span className="text-primary font-bold">{number}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
