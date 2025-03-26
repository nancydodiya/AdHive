
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { CheckCircle, ArrowRight, Target, Zap, BarChart, Clock, Users, Shield } from "lucide-react";

const ForAdvertisers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6">
              For Advertisers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Maximize Your Outdoor Advertising Impact
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              HoardingSync helps businesses of all sizes leverage the power of outdoor advertising with simplicity, precision, and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight size={16} className="ml-2" />
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
              Why Advertisers Choose HoardingSync
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform offers unique advantages that make outdoor advertising more accessible, efficient, and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Target className="h-6 w-6" />}
              title="Precise Targeting"
              description="Target specific demographics and locations to ensure your message reaches the right audience."
            />
            <BenefitCard 
              icon={<Zap className="h-6 w-6" />}
              title="Streamlined Process"
              description="From selection to display, our platform handles every step with efficiency and transparency."
            />
            <BenefitCard 
              icon={<BarChart className="h-6 w-6" />}
              title="Performance Analytics"
              description="Track impressions, engagement, and ROI with our comprehensive analytics dashboard."
            />
            <BenefitCard 
              icon={<Clock className="h-6 w-6" />}
              title="Time Savings"
              description="Reduce the time spent on finding and negotiating with multiple agencies and vendors."
            />
            <BenefitCard 
              icon={<Users className="h-6 w-6" />}
              title="Verified Agencies"
              description="Work only with pre-vetted, reliable agencies with proven track records."
            />
            <BenefitCard 
              icon={<Shield className="h-6 w-6" />}
              title="Secure Transactions"
              description="All payments and contracts are protected through our secure platform."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              See how other businesses have transformed their advertising strategies with HoardingSync.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4 italic text-muted-foreground">
                "HoardingSync made it incredibly easy to launch our nationwide campaign. We saved time, money, and saw a 40% increase in brand awareness."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Marketing Director, TechVision</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4 italic text-muted-foreground">
                "As a small business, we never thought outdoor advertising was within our reach. HoardingSync changed that with their flexible options and guided approach."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Owner, Urban Eats</p>
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
              Ready to Amplify Your Brand Presence?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of businesses already using HoardingSync to transform their outdoor advertising strategy.
            </p>
            <Link to="/register">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
              >
                Get Started <ArrowRight size={16} className="ml-2" />
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

export default ForAdvertisers;
