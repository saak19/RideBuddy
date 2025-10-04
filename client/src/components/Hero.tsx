import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
            Ride Smarter,{" "}
            <span className="text-primary">Share Better</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-description">
            Connect with trusted drivers and riders in your community. Save money, reduce traffic, and make your commute more enjoyable with RouteBuddy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/auth">
              <a>
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-get-started-hero">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-background/60 backdrop-blur-sm"
              onClick={() => {
                const element = document.getElementById("how-it-works");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
