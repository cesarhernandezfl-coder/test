import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";
import Reports from "@/pages/Reports";
import Communication from "@/pages/Communication";
import AISystems from "@/pages/AISystems";
import ResourceAllocationPage from "@/pages/ResourceAllocationPage";
import DocumentationPage from "@/pages/DocumentationPage";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard">
        <Layout>
          <Dashboard />
        </Layout>
      </Route>
      <Route path="/analytics">
        <Layout>
          <Analytics />
        </Layout>
      </Route>
      <Route path="/reports">
        <Layout>
          <Reports />
        </Layout>
      </Route>
      <Route path="/communication">
        <Layout>
          <Communication />
        </Layout>
      </Route>
      <Route path="/ai-systems">
        <Layout>
          <AISystems />
        </Layout>
      </Route>
      <Route path="/resource-allocation">
        <Layout>
          <ResourceAllocationPage />
        </Layout>
      </Route>
      <Route path="/documentation">
        <Layout>
          <DocumentationPage />
        </Layout>
      </Route>
      <Route path="/settings">
        <Layout>
          <Settings />
        </Layout>
      </Route>
      <Route>
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="iris-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
