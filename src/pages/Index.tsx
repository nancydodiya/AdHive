import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Layers, Clock, Shield, Award, BarChart4 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6 animate-fade-in">
              Revolutionizing Outdoor Advertising
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight animate-fade-in animate-delay-100">
              Connect, Advertise, <span className="text-gradient">Amplify</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto text-balance animate-fade-in animate-delay-200">
              The platform that connects advertisers with the perfect outdoor spaces, simplifying the process from request to display.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-300">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute -bottom-16 left-0 w-full overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative h-48 md:h-64 glass-panel rounded-t-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamline Your Outdoor Advertising
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform offers a seamless experience for both advertisers and agencies, making outdoor advertising more accessible than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="h-6 w-6" />}
              title="Worldwide Coverage"
              description="Access advertising spaces across cities, countries, and continents, all in one platform."
              delay={0}
            />
            <FeatureCard 
              icon={<Layers className="h-6 w-6" />}
              title="Smart Matching"
              description="Our algorithm connects you with the perfect advertising spaces based on your specific needs."
              delay={100}
            />
            <FeatureCard 
              icon={<Clock className="h-6 w-6" />}
              title="Time Efficient"
              description="Save time with our streamlined process from request to final booking and display."
              delay={200}
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6" />}
              title="Secure Transactions"
              description="All payments and contracts are handled securely within our platform."
              delay={300}
            />
            <FeatureCard 
              icon={<Award className="h-6 w-6" />}
              title="Quality Assurance"
              description="We verify all agencies and evaluate the quality of their services and hoardings."
              delay={400}
            />
            <FeatureCard 
              icon={<BarChart4 className="h-6 w-6" />}
              title="Performance Analytics"
              description="Track the performance of your advertisements with our advanced analytics dashboard."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How AdHive Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From request to display, our platform simplifies every step of the outdoor advertising process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <StepCard 
              number="01"
              title="Submit Your Request"
              description="Specify your requirements, budget, and timeline for your advertising needs."
            />
            <StepCard 
              number="02"
              title="Receive Proposals"
              description="Agencies will submit their best offers based on your requirements."
            />
            <StepCard 
              number="03"
              title="Confirm and Display"
              description="Select the best proposal, complete the payment, and see your ad go live."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Outdoor Advertising?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of businesses and agencies already using AdHive to simplify their outdoor advertising process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                >
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white/30 hover:bg-white/10"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all card-hover animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
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
    <div className="text-center md:text-left">
      <div className="inline-block bg-secondary rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-xl font-bold text-primary">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
