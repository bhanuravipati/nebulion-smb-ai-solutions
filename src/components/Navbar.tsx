import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/")}
          >
            nebulionAI
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className={`text-base hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/contact")}
              className={`text-base hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Button>
          </div>

          <Button 
            variant="hero" 
            size="sm"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;