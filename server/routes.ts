import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Crisis routes
  app.get("/api/crisis/active", async (req, res) => {
    const activeCrisis = await storage.getActiveCrisis();
    res.json(activeCrisis);
  });

  app.get("/api/crisis/map", async (req, res) => {
    const mapData = await storage.getCrisisMapData();
    res.json(mapData);
  });

  // Dashboard stats routes
  app.get("/api/dashboard/stats", async (req, res) => {
    const cityFilter = req.query.city as string;
    
    if (cityFilter && cityFilter.trim()) {
      const stats = await storage.getCityDashboardStats(cityFilter);
      res.json(stats);
    } else {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    }
  });

  // AI Systems routes
  app.get("/api/systems", async (req, res) => {
    const systems = await storage.getAISystems();
    res.json(systems);
  });

  app.get("/api/systems/exchanges", async (req, res) => {
    const exchanges = await storage.getSystemExchanges();
    res.json(exchanges);
  });

  // Resources routes
  app.get("/api/resources/units", async (req, res) => {
    const units = await storage.getResourceUnits();
    res.json(units);
  });

  app.get("/api/resources/distribution", async (req, res) => {
    const distribution = await storage.getResourceDistribution();
    res.json(distribution);
  });

  // Insights routes
  app.get("/api/insights", async (req, res) => {
    const insights = await storage.getInsights();
    res.json(insights);
  });

  // Documentation routes
  app.get("/api/documentation/guides", async (req, res) => {
    const guides = await storage.getDocumentationGuides();
    res.json(guides);
  });

  app.get("/api/documentation/updates", async (req, res) => {
    const updates = await storage.getDocumentationUpdates();
    res.json(updates);
  });

  // 911 Crisis Response routes
  app.get("/api/response-times/comparison", async (req, res) => {
    const comparison = await storage.getResponseTimeComparison();
    res.json(comparison);
  });

  app.get("/api/calls/live", async (req, res) => {
    const cityFilter = req.query.city as string;
    const liveCalls = await storage.getLiveCalls();
    
    if (cityFilter && cityFilter.trim()) {
      const normalizedFilter = cityFilter.split(',')[0].trim();
      const filteredCalls = liveCalls.filter(call => 
        call.city && call.city.toLowerCase().includes(normalizedFilter.toLowerCase())
      );
      res.json(filteredCalls);
    } else {
      res.json(liveCalls);
    }
  });

  app.get("/api/cities/performance", async (req, res) => {
    const performance = await storage.getCityPerformanceMetrics();
    res.json(performance);
  });

  const httpServer = createServer(app);

  return httpServer;
}
