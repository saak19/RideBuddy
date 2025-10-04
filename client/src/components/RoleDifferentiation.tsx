import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCircle, Car, DollarSign, Clock, MapPin, Shield, Users } from "lucide-react";

export default function RoleDifferentiation() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-roles-title">
            Choose Your Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-roles-description">
            Whether you're looking for a ride or want to earn as a driver, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8" data-testid="card-rider">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-rider-title">For Riders</h3>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                { icon: DollarSign, text: "Save money on your daily commute" },
                { icon: MapPin, text: "Find rides to anywhere, anytime" },
                { icon: Shield, text: "Verified drivers for your safety" },
                { icon: Clock, text: "Flexible scheduling options" },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`rider-benefit-${index}`}>
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>

            <Link href="/auth">
              <a className="block">
                <Button className="w-full" data-testid="button-rider-get-started">
                  Find a Ride
                </Button>
              </a>
            </Link>
          </Card>

          <Card className="p-8" data-testid="card-driver">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-driver-title">For Drivers</h3>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                { icon: DollarSign, text: "Earn money on your daily route" },
                { icon: Clock, text: "Drive on your own schedule" },
                { icon: Users, text: "Meet interesting people" },
                { icon: Shield, text: "Verified riders for peace of mind" },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`driver-benefit-${index}`}>
                  <item.icon className="w-5 h-5 text-chart-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>

            <Link href="/auth">
              <a className="block">
                <Button className="w-full" variant="secondary" data-testid="button-driver-get-started">
                  Start Driving
                </Button>
              </a>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
