import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ECommerce from "@/pages/ECommerce";
import Entertainment from "@/pages/Entertainment";
import NotFound from "@/pages/not-found";
import EBusinessStrategy from "@/pages/ebusiness/Strategy";
import EBusinessContent from "@/pages/ebusiness/Content";
import EBusinessTech from "@/pages/ebusiness/Tech";
import EntertainmentCreation from "@/pages/entertainment/Creation";
import EntertainmentCommunication from "@/pages/entertainment/Communication";
import EntertainmentDigital from "@/pages/entertainment/Digital";
import EBusinessContact from "@/pages/ebusiness/Contact";
import EntertainmentContact from "@/pages/entertainment/Contact";

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ebusiness" component={ECommerce} />
        <Route path="/ebusiness/strategie" component={EBusinessStrategy} />
        <Route path="/ebusiness/contenu" component={EBusinessContent} />
        <Route path="/ebusiness/tech" component={EBusinessTech} />
        <Route path="/ebusiness/contact" component={EBusinessContact} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/entertainment/creation" component={EntertainmentCreation} />
        <Route path="/entertainment/communication" component={EntertainmentCommunication} />
        <Route path="/entertainment/digital" component={EntertainmentDigital} />
        <Route path="/entertainment/contact" component={EntertainmentContact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
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
