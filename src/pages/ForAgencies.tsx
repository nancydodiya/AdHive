
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Users, BarChart4, DollarSign, Calendar, Search, Shield } from "lucide-react";

const ForAgencies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6">
              For Agencies
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grow Your Outdoor Media Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              HoardingSync connects your agency with qualified advertisers, streamlines operations, and maximizes your inventory potential.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Join as Agency <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits for Outdoor Media Agencies
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform helps you increase occupancy rates, find quality advertisers, and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Users className="h-6 w-6" />}
              title="Access Quality Advertisers"
              description="Connect with pre-qualified advertisers looking for exactly what you offer."
            />
            <BenefitCard 
              icon={<Search className="h-6 w-6" />}
              title="Increased Visibility"
              description="Showcase your inventory to a wider audience of potential advertisers."
            />
            <BenefitCard 
              icon={<Calendar className="h-6 w-6" />}
              title="Reduced Vacancies"
              description="Fill your advertising spaces more consistently with our matching algorithm."
            />
            <BenefitCard 
              icon={<BarChart4 className="h-6 w-6" />}
              title="Inventory Management"
              description="Manage all your advertising spaces efficiently in one dashboard."
            />
            <BenefitCard 
              icon={<DollarSign className="h-6 w-6" />}
              title="Simplified Payments"
              description="Receive payments securely and on time through our platform."
            />
            <BenefitCard 
              icon={<Shield className="h-6 w-6" />}
              title="Verified Advertisers"
              description="Work with pre-vetted advertisers to reduce risk and ensure smooth transactions."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works for Agencies
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our platform in a few simple steps and start growing your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <StepCard 
                number="01" 
                title="Register Your Agency"
                description="Create an account and complete the verification process to join our network of trusted outdoor media providers."
              />
              <StepCard 
                number="02" 
                title="List Your Inventory"
                description="Add details about your advertising spaces including location, size, visibility, and pricing."
              />
              <StepCard 
                number="03" 
                title="Receive Matching Requests"
                description="Get notified when advertisers are looking for spaces that match your inventory."
              />
              <StepCard 
                number="04" 
                title="Submit Proposals"
                description="Respond to advertiser requests with customized proposals through our platform."
              />
              <StepCard 
                number="05" 
                title="Secure Bookings"
                description="When your proposal is accepted, receive secure payment and prepare for campaign launch."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Agency Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              See how other outdoor media agencies have grown with HoardingSync.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4 italic text-muted-foreground">
                "Since joining HoardingSync, we've increased our occupancy rate by 35% and reduced our sales team workload. The platform brings us qualified leads that convert at a much higher rate."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Robert Martinez</h4>
                  <p className="text-sm text-muted-foreground">CEO, CityView Media</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4 italic text-muted-foreground">
                "HoardingSync has transformed how we operate. The streamlined processes, from proposal to payment, have saved us countless hours and helped us scale our business across multiple cities."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-muted-foreground">Director, MetroAds Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Agency?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Join HoardingSync today and connect with advertisers looking for exactly what you offer.
            </p>
            <Link to="/register">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
              >
                Join as Agency <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const StepCard = ({ number, title, description }) => {
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

export default ForAgencies;
