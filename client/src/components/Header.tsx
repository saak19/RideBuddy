import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 -ml-2 pl-2 pr-3 py-2 rounded-md" data-testid="link-home">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">RouteBuddy</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
              data-testid="button-nav-features"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("how-it-works")}
              data-testid="button-nav-how-it-works"
            >
              How It Works
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              data-testid="button-nav-about"
            >
              About
            </Button>
          </nav>

          <Link href="/auth">
            <a>
              <Button data-testid="button-get-started-header">Get Started</Button>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
