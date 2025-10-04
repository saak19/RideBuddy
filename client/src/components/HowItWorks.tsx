import { UserPlus, Search, CheckCircle, MapPin, Calendar, Users } from "lucide-react";

export default function HowItWorks() {
  const riderSteps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in seconds",
    },
    {
      icon: Search,
      title: "Find a Ride",
      description: "Search for rides going your way",
    },
    {
      icon: CheckCircle,
      title: "Book & Go",
      description: "Confirm your ride and hit the road",
    },
  ];

  const driverSteps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Register as a driver with verification",
    },
    {
      icon: Calendar,
      title: "Post Your Route",
      description: "Share your regular routes and schedule",
    },
    {
      icon: Users,
      title: "Pick Up Riders",
      description: "Accept bookings and earn money",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-it-works-description">
            Get started in three simple steps, whether you're a rider or a driver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div data-testid="section-rider-steps">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left" data-testid="text-rider-steps-title">
              For Riders
            </h3>
            <div className="space-y-8">
              {riderSteps.map((step, index) => (
                <div key={index} className="flex gap-4" data-testid={`rider-step-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h4 className="text-xl font-semibold" data-testid={`rider-step-title-${index}`}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground" data-testid={`rider-step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-testid="section-driver-steps">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left" data-testid="text-driver-steps-title">
              For Drivers
            </h3>
            <div className="space-y-8">
              {driverSteps.map((step, index) => (
                <div key={index} className="flex gap-4" data-testid={`driver-step-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-chart-2 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-chart-2" />
                      <h4 className="text-xl font-semibold" data-testid={`driver-step-title-${index}`}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground" data-testid={`driver-step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
