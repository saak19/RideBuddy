import { Card } from "@/components/ui/card";
import { MapPin, Users, Navigation, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Easy Ride Matching",
      description: "Find rides going your way with our smart matching algorithm. Quick, simple, and efficient.",
    },
    {
      icon: Users,
      title: "Driver & Rider Roles",
      description: "Switch seamlessly between driving and riding. Flexible options for your lifestyle.",
    },
    {
      icon: Navigation,
      title: "Real-Time Tracking",
      description: "Track your ride in real-time for peace of mind. Always know where your driver is.",
    },
    {
      icon: Shield,
      title: "Safe and Secure",
      description: "Verified drivers, secure payments, and 24/7 support. Your safety is our priority.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">
            Why Choose RouteBuddy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
            Everything you need for a safe, convenient, and affordable ride-sharing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-feature-${index}`}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
