import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@nebulionai.com",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 AI Street, Tech City",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We respond quickly"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your
            <span className="block gradient-text">AI Future Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Contact us today for a free consultation 
            and discover how our solutions can drive your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-muted/20 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-muted/20 border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-muted/20 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-muted/20 border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-muted/20 border border-border rounded-md text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="sales-ai">Sales AI Agent</option>
                      <option value="billing-dashboard">Billing Analysis Dashboard</option>
                      <option value="customer-service">Customer Service Bot</option>
                      <option value="custom-solution">Custom AI Solution</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-muted/20 border-border resize-none"
                      placeholder="Tell us about your business needs and how we can help..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card group hover:glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-primary transition-all duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional CTA */}
            <Card className="glass-card bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a free 30-minute consultation to discuss your AI needs.
                </p>
                <Button variant="hero" size="sm" className="w-full">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;