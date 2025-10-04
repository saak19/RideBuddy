import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Car, LogOut, User as UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export default function AuthenticatedHeader() {
  const { userProfile, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogout = async () => {
    await logout();
    setLocation("/");
  };

  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  const getRoleBadgeVariant = (role: string) => {
    return role === "driver" ? "default" : "secondary";
  };

  return (
    <header className="border-b bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setLocation(userProfile?.role === "driver" ? "/driver/dashboard" : "/rider/dashboard")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 -ml-2 pl-2 pr-3 py-2 rounded-md"
            data-testid="link-home"
          >
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">RouteBuddy</span>
          </button>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2" data-testid="button-user-menu">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {userProfile?.email ? getInitials(userProfile.email) : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium" data-testid="text-user-email">
                      {userProfile?.email}
                    </span>
                    <Badge
                      variant={getRoleBadgeVariant(userProfile?.role || "rider")}
                      className="text-xs"
                      data-testid="badge-user-role"
                    >
                      {userProfile?.role}
                    </Badge>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  <div className="flex flex-col">
                    <span className="text-sm">{userProfile?.email}</span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {userProfile?.role}
                    </span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} data-testid="button-logout">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
