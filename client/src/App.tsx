import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Home from "@/pages/Home";
import AuthPage from "@/pages/AuthPage";
import DriverDashboard from "@/pages/DriverDashboard";
import RiderDashboard from "@/pages/RiderDashboard";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function ProtectedRoute({
  component: Component,
  requiredRole,
}: {
  component: React.ComponentType;
  requiredRole?: "driver" | "rider";
}) {
  const { currentUser, userProfile, loading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading) {
      if (!currentUser) {
        setLocation("/auth");
      } else if (requiredRole && userProfile?.role !== requiredRole) {
        const redirectPath = userProfile?.role === "driver" ? "/driver/dashboard" : "/rider/dashboard";
        setLocation(redirectPath);
      }
    }
  }, [currentUser, userProfile, loading, requiredRole, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return null;
  }

  if (requiredRole && userProfile?.role !== requiredRole) {
    return null;
  }

  return <Component />;
}

function RoleBasedRedirect() {
  const { userProfile, loading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && userProfile) {
      const path = userProfile.role === "driver" ? "/driver/dashboard" : "/rider/dashboard";
      setLocation(path);
    }
  }, [userProfile, loading, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return null;
}

function Router() {
  const { currentUser, userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auth">
        {currentUser ? <RoleBasedRedirect /> : <AuthPage />}
      </Route>
      <Route path="/driver/dashboard">
        <ProtectedRoute component={DriverDashboard} requiredRole="driver" />
      </Route>
      <Route path="/rider/dashboard">
        <ProtectedRoute component={RiderDashboard} requiredRole="rider" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Router />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
