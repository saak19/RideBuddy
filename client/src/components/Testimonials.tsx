import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      initials: "SJ",
      rating: 5,
      text: "RouteBuddy has completely changed my daily commute. I've saved so much money and met some amazing people along the way!",
    },
    {
      name: "Michael Chen",
      role: "Driver",
      initials: "MC",
      rating: 5,
      text: "As a driver, I love earning extra income on my regular route. The platform is easy to use and the riders are always respectful.",
    },
    {
      name: "Emma Williams",
      role: "Weekend Rider",
      initials: "EW",
      rating: 5,
      text: "Safe, reliable, and affordable. The real-time tracking gives me peace of mind, and the drivers are always professional.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Join thousands of happy riders and drivers who trust RouteBuddy every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6" data-testid={`text-testimonial-${index}`}>
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
