import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-grid-white/10" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4" data-testid="text-cta-title">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8" data-testid="text-cta-description">
              Join thousands of riders and drivers making smarter, more sustainable travel choices every day.
            </p>
            
            <Link href="/auth">
              <a>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                  data-testid="button-cta-get-started"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
