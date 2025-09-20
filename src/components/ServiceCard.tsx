import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="glass-card group hover:glow-primary transition-all duration-500 transform hover:scale-105">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-primary transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="glass" className="w-full mt-6">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;