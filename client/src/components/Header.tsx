import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Car, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { currentUser, userProfile, logout } = useAuth();
  const [, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    await logout();
    setLocation("/");
  };

  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
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

          {currentUser && userProfile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2" data-testid="button-user-menu">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {getInitials(userProfile.email)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden lg:flex flex-col items-start">
                    <span className="text-sm font-medium" data-testid="text-user-email">
                      {userProfile.email}
                    </span>
                    <Badge
                      variant={userProfile.role === "driver" ? "default" : "secondary"}
                      className="text-xs"
                      data-testid="badge-user-role"
                    >
                      {userProfile.role}
                    </Badge>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setLocation(userProfile.role === "driver" ? "/driver/dashboard" : "/rider/dashboard")}
                  data-testid="menu-dashboard"
                >
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} data-testid="button-logout">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth">
              <a>
                <Button data-testid="button-get-started-header">Get Started</Button>
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
