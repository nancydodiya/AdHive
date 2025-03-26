
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if user is on dashboard (very simple auth check for demo)
  const isLoggedIn = location.pathname === "/dashboard";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary font-bold text-xl"
          >
            <span className="text-gradient">HoardingSync</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/for-advertisers" className="text-foreground/80 hover:text-primary transition-colors">
              For Advertisers
            </Link>
            <Link to="/for-agencies" className="text-foreground/80 hover:text-primary transition-colors">
              For Agencies
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="border-primary/20 hover:border-primary">
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-primary/20 hover:border-primary">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/how-it-works" 
              className="block text-foreground/80 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/for-advertisers" 
              className="block text-foreground/80 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Advertisers
            </Link>
            <Link 
              to="/for-agencies" 
              className="block text-foreground/80 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Agencies
            </Link>
            
            {isLoggedIn ? (
              <div className="pt-2 flex flex-col space-y-3">
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Dashboard</Button>
                </Link>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-primary/20">
                    Logout
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="pt-2 flex flex-col space-y-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-primary/20">
                    Log In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
