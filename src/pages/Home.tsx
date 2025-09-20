import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Bot, TrendingUp, MessageSquare } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-ai-background.jpg";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Bot,
      title: "Sales AI Agent",
      description: "Intelligent sales automation that converts leads into customers 24/7",
      features: [
        "Automated lead qualification",
        "Personalized sales conversations", 
        "Real-time performance analytics",
        "CRM integration"
      ]
    },
    {
      icon: TrendingUp,
      title: "Billing Analysis Dashboard",
      description: "AI-powered insights that optimize your revenue and reduce costs",
      features: [
        "Revenue trend analysis",
        "Cost optimization recommendations",
        "Automated billing alerts",
        "Predictive financial modeling"
      ]
    },
    {
      icon: MessageSquare,
      title: "Customer Service Bot",
      description: "24/7 intelligent customer support that scales with your business",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Knowledge base integration",
        "Escalation management"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              🚀 Transforming Businesses with AI
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI Solutions for
              <span className="block gradient-text">
                Modern Businesses
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Empower your small to medium business with cutting-edge AI agents, 
              intelligent dashboards, and automated customer service solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/contact")}
                className="text-lg px-8 py-4 h-auto"
              >
                Start Your AI Journey
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Solutions
              <span className="block gradient-text">Tailored for Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business operations with our comprehensive AI solutions 
              designed specifically for small and medium enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using our AI solutions to increase 
              efficiency, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/contact")}
                className="text-lg px-8 py-4 h-auto"
              >
                Get Started Today
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;