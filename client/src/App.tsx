import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Cebu from "@/pages/Cebu";
import Bohol from "@/pages/Bohol";
import InCode from "@/pages/InCode";
import BeyondCode from "@/pages/BeyondCode";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cebu" component={Cebu} />
      <Route path="/bohol" component={Bohol} />
      <Route path="/incode" component={InCode} />
      <Route path="/beyondcode" component={BeyondCode} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
