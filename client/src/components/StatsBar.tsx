import { Users, Car, Star } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: Car, value: "10,000+", label: "Rides Completed" },
    { icon: Users, value: "500+", label: "Active Drivers" },
    { icon: Star, value: "4.8", label: "Average Rating" },
  ];

  return (
    <section className="py-12 md:py-16 bg-card border-y">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center" data-testid={`stat-${index}`}>
              <stat.icon className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl md:text-4xl font-bold mb-1" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
