import {
  type User,
  type InsertUser,
  type Crisis,
  type InsertCrisis,
  type AISystem,
  type InsertAISystem,
  type ResourceAllocation,
  type InsertResourceAllocation,
  type Insight,
  type InsertInsight,
  type City,
  type Call911,
  type ResponseMetric,
  type CityPerformance
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Crisis operations
  getActiveCrisis(): Promise<Crisis | undefined>;
  getCrisisMapData(): Promise<any>;
  
  // Dashboard operations
  getDashboardStats(): Promise<any>;
  
  // AI Systems operations
  getAISystems(): Promise<any[]>;
  getSystemExchanges(): Promise<any[]>;
  
  // Resources operations
  getResourceUnits(): Promise<any[]>;
  getResourceDistribution(): Promise<any[]>;
  
  // Insights operations
  getInsights(): Promise<any[]>;
  
  // Documentation operations
  getDocumentationGuides(): Promise<any[]>;
  getDocumentationUpdates(): Promise<any[]>;
  
  // 911 Crisis Response operations
  getResponseTimeComparison(): Promise<any[]>;
  getLiveCalls(): Promise<any[]>;
  getCityPerformanceMetrics(): Promise<any[]>;
  get911DashboardStats(): Promise<any>;
  getCityDashboardStats(cityName: string): Promise<any>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private crises: Map<number, Crisis>;
  private aiSystems: Map<number, AISystem>;
  private resourceAllocations: Map<number, ResourceAllocation>;
  private insights: Map<number, Insight>;
  private currentId: Record<string, number>;

  constructor() {
    this.users = new Map();
    this.crises = new Map();
    this.aiSystems = new Map();
    this.resourceAllocations = new Map();
    this.insights = new Map();
    this.currentId = {
      users: 1,
      crises: 1,
      aiSystems: 1,
      resourceAllocations: 1,
      insights: 1
    };
    
    this.initializeData();
  }

  // Initialize demo data
  private initializeData(): void {
    // Add default active crisis
    const crisis: Crisis = {
      id: 1,
      name: "Wildfire Emergency",
      type: "wildfire",
      location: "Northern Region",
      status: "active",
      severity: "high",
      startTime: new Date(),
      endTime: null,
      affectedArea: "24.5 sq km",
      population: 4280,
      description: "Rapidly spreading wildfire affecting residential areas",
      coordinates: null
    };
    this.crises.set(crisis.id, crisis);

    // Add AI systems
    const systems = [
      {
        id: 1,
        name: "Predictive Analytics",
        status: "operational",
        description: "Processing wildfire spread predictions based on wind patterns and terrain",
        lastUpdate: "3m ago"
      },
      {
        id: 2,
        name: "Resource Optimizer",
        status: "operational",
        description: "Calculating optimal placement of emergency vehicles and personnel",
        lastUpdate: "1m ago"
      },
      {
        id: 3,
        name: "Evacuation Router",
        status: "degraded",
        description: "Calculating evacuation routes with limited traffic data",
        lastUpdate: "5m ago"
      },
      {
        id: 4,
        name: "Damage Assessment",
        status: "offline",
        description: "Awaiting satellite imagery to assess damage to infrastructure",
        lastUpdate: "23m ago"
      }
    ];
    
    systems.forEach(system => {
      this.aiSystems.set(system.id, system as any);
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user = { ...insertUser, id };
    this.users.set(id, user as User);
    return user as User;
  }
  
  // Crisis operations
  async getActiveCrisis(): Promise<Crisis | undefined> {
    return {
      id: 1,
      name: "Wildfire Emergency",
      type: "wildfire",
      location: "Northern Region",
      status: "active",
      severity: "high"
    } as Crisis;
  }
  
  async getCrisisMapData(): Promise<any> {
    return {
      affectedArea: "24.5 sq km",
      population: "4,280 residents",
      riskLevel: "high",
      weather: "Winds 15 mph"
    };
  }
  
  // Dashboard operations (legacy - keeping for compatibility)
  async getDashboardStats(): Promise<any> {
    return this.get911DashboardStats();
  }
  
  // 911 Crisis Response Dashboard Stats
  async get911DashboardStats(): Promise<any> {
    return {
      responseMetrics: {
        avgResponseTime: "7.2 min",
        totalCalls: 2847,
        citiesTracked: 12
      },
      performanceRanking: {
        topCity: "Austin, TX",
        topTime: "5.4 min",
        improvement: "+15%"
      },
      callBreakdown: {
        fire: 342,
        medical: 1823,
        police: 542,
        other: 140
      },
      cityComparison: {
        bestPerforming: "Austin",
        needsImprovement: "Los Angeles",
        averageTime: "7.2 min",
        targetTime: "6.0 min"
      }
    };
  }
  
  // City-specific dashboard stats
  async getCityDashboardStats(cityName: string): Promise<any> {
    const cityDataMap: { [key: string]: any } = {
      "Tampa": {
        responseMetrics: {
          avgResponseTime: "8.0 min",
          totalCalls: 1245,
          citiesTracked: 1
        },
        performanceRanking: {
          topCity: "Tampa, FL",
          topTime: "6.8 min",
          improvement: "+8%"
        },
        callBreakdown: {
          fire: 156,
          medical: 798,
          police: 234,
          other: 57
        },
        cityComparison: {
          bestPerforming: "Tampa",
          needsImprovement: "N/A",
          averageTime: "8.0 min",
          targetTime: "6.0 min"
        }
      },
      "Austin": {
        responseMetrics: {
          avgResponseTime: "6.8 min",
          totalCalls: 1876,
          citiesTracked: 1
        },
        performanceRanking: {
          topCity: "Austin, TX",
          topTime: "5.4 min",
          improvement: "+15%"
        },
        callBreakdown: {
          fire: 203,
          medical: 1142,
          police: 398,
          other: 133
        },
        cityComparison: {
          bestPerforming: "Austin",
          needsImprovement: "N/A",
          averageTime: "6.8 min",
          targetTime: "6.0 min"
        }
      },
      "Seattle": {
        responseMetrics: {
          avgResponseTime: "7.6 min",
          totalCalls: 1634,
          citiesTracked: 1
        },
        performanceRanking: {
          topCity: "Seattle, WA",
          topTime: "6.2 min",
          improvement: "+5%"
        },
        callBreakdown: {
          fire: 178,
          medical: 987,
          police: 356,
          other: 113
        },
        cityComparison: {
          bestPerforming: "Seattle",
          needsImprovement: "N/A",
          averageTime: "7.6 min",
          targetTime: "6.0 min"
        }
      }
    };
    
    // Normalize city name for lookup
    const normalizedCity = cityName.split(',')[0].trim();
    return cityDataMap[normalizedCity] || this.get911DashboardStats();
  }
  
  // AI Systems operations
  async getAISystems(): Promise<any[]> {
    return Array.from(this.aiSystems.values());
  }
  
  async getSystemExchanges(): Promise<any[]> {
    return [
      {
        id: 1,
        source: "Predictive",
        target: "Router",
        status: "active",
        performance: 94
      },
      {
        id: 2,
        source: "Weather",
        target: "Predictive",
        status: "active",
        performance: 100
      },
      {
        id: 3,
        source: "Resource",
        target: "Command",
        status: "active",
        performance: 87
      },
      {
        id: 4,
        source: "Satellite",
        target: "Assessment",
        status: "failed",
        performance: 12
      }
    ];
  }
  
  // Resources operations
  async getResourceUnits(): Promise<any[]> {
    return [
      {
        id: 1,
        type: "Fire Units",
        priority: "priority",
        current: 18,
        recommended: 4
      },
      {
        id: 2,
        type: "Medical Units",
        priority: "normal",
        current: 15,
        recommended: "Sufficient"
      },
      {
        id: 3,
        type: "Police Units",
        priority: "normal",
        current: 9,
        recommended: 2
      }
    ];
  }
  
  async getResourceDistribution(): Promise<any[]> {
    return [
      {
        id: 1,
        name: "Evacuation Support",
        percentage: 32,
        color: "bg-primary"
      },
      {
        id: 2,
        name: "Fire Containment",
        percentage: 45,
        color: "bg-danger-DEFAULT"
      },
      {
        id: 3,
        name: "Medical Response",
        percentage: 18,
        color: "bg-success-DEFAULT"
      },
      {
        id: 4,
        name: "Infrastructure Protection",
        percentage: 5,
        color: "bg-neutral-400"
      }
    ];
  }
  
  // Insights operations
  async getInsights(): Promise<any[]> {
    return [
      {
        id: 1,
        title: "Wildfire Spread Prediction",
        time: "10:23 AM",
        content: "Based on current wind patterns and vegetation density, the fire is projected to spread northeast at approximately 2.3 mph over the next 6 hours.",
        type: "prediction"
      },
      {
        id: 2,
        title: "Evacuation Traffic Analysis",
        time: "10:15 AM",
        content: "Highway 26 is experiencing congestion. Alternative routes through County Road 14 are recommended. Expected evacuation time: 45 minutes.",
        type: "prediction"
      },
      {
        id: 3,
        title: "Integrated Multi-System Analysis",
        time: "9:45 AM",
        content: "Combining data from weather systems, satellite imagery, and resource allocation AI, we recommend the following action plan:",
        type: "recommendation",
        actionRequired: true
      }
    ];
  }
  
  // Documentation operations
  async getDocumentationGuides(): Promise<any[]> {
    return [
      {
        id: 1,
        title: "AI System Integration Guide",
        description: "How to connect new AI systems to IRIS",
        icon: "integration"
      },
      {
        id: 2,
        title: "System Configuration",
        description: "Setting up IRIS for your agency",
        icon: "configuration"
      },
      {
        id: 3,
        title: "Crisis Response Protocols",
        description: "Standard operating procedures",
        icon: "protocol"
      }
    ];
  }
  
  async getDocumentationUpdates(): Promise<any[]> {
    return [
      {
        id: 1,
        time: "Today, 8:45 AM",
        content: "Evacuation Router AI updated to version 2.4"
      },
      {
        id: 2,
        time: "Yesterday, 2:30 PM",
        content: "New API documentation for Resource Optimizer"
      }
    ];
  }
  
  // 911 Crisis Response operations
  async getResponseTimeComparison(): Promise<any[]> {
    return [
      {
        city: "Austin, TX",
        fireAvg: 5.4,
        medicalAvg: 6.8,
        policeAvg: 8.2,
        overall: 6.8
      },
      {
        city: "Seattle, WA",
        fireAvg: 6.2,
        medicalAvg: 7.1,
        policeAvg: 9.5,
        overall: 7.6
      },
      {
        city: "New York, NY",
        fireAvg: 7.8,
        medicalAvg: 8.4,
        policeAvg: 10.2,
        overall: 8.8
      },
      {
        city: "Los Angeles, CA",
        fireAvg: 8.9,
        medicalAvg: 9.7,
        policeAvg: 12.3,
        overall: 10.3
      },
      {
        city: "Chicago, IL",
        fireAvg: 7.2,
        medicalAvg: 8.9,
        policeAvg: 11.1,
        overall: 9.1
      },
      {
        city: "Tampa, FL",
        fireAvg: 6.8,
        medicalAvg: 7.5,
        policeAvg: 9.8,
        overall: 8.0
      },
      {
        city: "Phoenix, AZ",
        fireAvg: 7.1,
        medicalAvg: 8.2,
        policeAvg: 10.5,
        overall: 8.6
      },
      {
        city: "Miami, FL",
        fireAvg: 8.2,
        medicalAvg: 9.1,
        policeAvg: 11.7,
        overall: 9.7
      }
    ];
  }
  
  // Helper function to transform Seattle API data to our format
  private transformSeattleCall(seattleCall: any, index: number): any {
    const now = new Date();
    const callDateTime = new Date(seattleCall.datetime);
    const minutesAgo = Math.floor((now.getTime() - callDateTime.getTime()) / 60000);
    
    // Determine call type and priority based on Seattle's incident type
    let callType = "medical";
    let priority = 2;
    
    if (seattleCall.type?.toLowerCase().includes("fire") || seattleCall.type?.toLowerCase().includes("rescue")) {
      callType = "fire";
      priority = 1;
    } else if (seattleCall.type?.toLowerCase().includes("medic") || seattleCall.type?.toLowerCase().includes("aid")) {
      callType = "medical";
      priority = minutesAgo < 5 ? 1 : 2;
    }
    
    // Assign realistic status based on time elapsed
    let status = "received";
    let responseTime;
    
    if (minutesAgo < 2) {
      status = "received";
    } else if (minutesAgo < 5) {
      status = "dispatched";
    } else if (minutesAgo < 10) {
      status = "en_route";
      responseTime = Math.random() * 3 + 2; // 2-5 minutes
    } else if (minutesAgo < 20) {
      status = "on_scene";
      responseTime = Math.random() * 4 + 3; // 3-7 minutes
    } else {
      status = "resolved";
      responseTime = Math.random() * 6 + 4; // 4-10 minutes
    }
    
    return {
      id: seattleCall.incident_number || `SEA-${index}`,
      callType,
      priority,
      location: seattleCall.address || "Unknown Location",
      city: "Seattle",
      receivedAt: seattleCall.datetime,
      status,
      responseTime: responseTime ? parseFloat(responseTime.toFixed(1)) : undefined,
      latitude: seattleCall.latitude,
      longitude: seattleCall.longitude
    };
  }

  // Fetch real-time 911 data from Seattle API
  private async fetchSeattleCalls(): Promise<any[]> {
    try {
      const response = await fetch('https://data.seattle.gov/resource/kzjm-xkqj.json?$limit=15&$order=datetime%20DESC');
      const seattleData = await response.json();
      
      return seattleData.map((call: any, index: number) => this.transformSeattleCall(call, index));
    } catch (error) {
      console.error('Error fetching Seattle 911 data:', error);
      return [];
    }
  }

  // Generate realistic Tampa calls (since no public API available)
  private generateTampaCalls(): any[] {
    const now = new Date();
    const tampaLocations = [
      "Westshore Mall", "Hyde Park Village", "Channelside District", "Davis Islands", 
      "MacDill Air Force Base", "Busch Gardens", "University of South Florida",
      "Tampa General Hospital", "Amalie Arena", "Port of Tampa", "Ybor City",
      "International Plaza", "Tampa International Airport"
    ];
    
    const calls = [];
    for (let i = 0; i < 8; i++) {
      const minutesAgo = Math.random() * 30;
      const callTypes = ["medical", "fire", "police"];
      const callType = callTypes[Math.floor(Math.random() * callTypes.length)];
      
      let status = "received";
      let responseTime;
      
      if (minutesAgo > 15) {
        status = "resolved";
        responseTime = Math.random() * 5 + 5; // 5-10 minutes
      } else if (minutesAgo > 8) {
        status = "on_scene";
        responseTime = Math.random() * 3 + 4; // 4-7 minutes
      } else if (minutesAgo > 4) {
        status = "en_route";
        responseTime = Math.random() * 2 + 2; // 2-4 minutes
      } else if (minutesAgo > 1) {
        status = "dispatched";
      }
      
      calls.push({
        id: `TPA-${Date.now()}-${i}`,
        callType,
        priority: callType === "fire" ? 1 : Math.floor(Math.random() * 3) + 1,
        location: tampaLocations[Math.floor(Math.random() * tampaLocations.length)],
        city: "Tampa",
        receivedAt: new Date(now.getTime() - minutesAgo * 60000).toISOString(),
        status,
        responseTime: responseTime ? parseFloat(responseTime.toFixed(1)) : undefined
      });
    }
    
    return calls.sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime());
  }

  // Generate realistic Austin calls (using similar approach as Tampa since Austin API is historical)
  private generateAustinCalls(): any[] {
    const now = new Date();
    const austinLocations = [
      "South by Southwest District", "University of Texas Campus", "Lady Bird Lake",
      "Austin-Bergstrom Airport", "Domain Northside", "Zilker Park", "Capitol Complex",
      "Barton Springs Pool", "Mueller District", "Cedar Park", "Round Rock",
      "Dell Technologies", "Austin Convention Center", "6th Street Entertainment"
    ];
    
    const calls = [];
    for (let i = 0; i < 10; i++) {
      const minutesAgo = Math.random() * 25;
      const callTypes = ["medical", "fire", "police"];
      const callType = callTypes[Math.floor(Math.random() * callTypes.length)];
      
      let status = "received";
      let responseTime;
      
      if (minutesAgo > 12) {
        status = "resolved";
        responseTime = Math.random() * 4 + 4; // 4-8 minutes (Austin is faster)
      } else if (minutesAgo > 6) {
        status = "on_scene";
        responseTime = Math.random() * 3 + 3; // 3-6 minutes
      } else if (minutesAgo > 3) {
        status = "en_route";
        responseTime = Math.random() * 2 + 1.5; // 1.5-3.5 minutes
      } else if (minutesAgo > 0.5) {
        status = "dispatched";
      }
      
      calls.push({
        id: `AUS-${Date.now()}-${i}`,
        callType,
        priority: callType === "fire" ? 1 : Math.floor(Math.random() * 3) + 1,
        location: austinLocations[Math.floor(Math.random() * austinLocations.length)],
        city: "Austin",
        receivedAt: new Date(now.getTime() - minutesAgo * 60000).toISOString(),
        status,
        responseTime: responseTime ? parseFloat(responseTime.toFixed(1)) : undefined
      });
    }
    
    return calls.sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime());
  }

  async getLiveCalls(): Promise<any[]> {
    const seattleCalls = await this.fetchSeattleCalls();
    const tampaCalls = this.generateTampaCalls();
    const austinCalls = this.generateAustinCalls();
    
    // Combine all calls and sort by most recent
    const allCalls = [...seattleCalls, ...tampaCalls, ...austinCalls];
    return allCalls.sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime());
  }
  
  async getCityPerformanceMetrics(): Promise<any[]> {
    return [
      {
        city: "Austin, TX",
        rank: 1,
        overallScore: 94.2,
        trend: "improving",
        monthlyImprovement: 15.3
      },
      {
        city: "Seattle, WA", 
        rank: 2,
        overallScore: 88.7,
        trend: "stable",
        monthlyImprovement: 2.1
      },
      {
        city: "New York, NY",
        rank: 3,
        overallScore: 82.1,
        trend: "improving",
        monthlyImprovement: 8.7
      },
      {
        city: "Chicago, IL",
        rank: 4,
        overallScore: 78.9,
        trend: "declining",
        monthlyImprovement: -3.2
      },
      {
        city: "Los Angeles, CA",
        rank: 5,
        overallScore: 71.4,
        trend: "improving",
        monthlyImprovement: 12.8
      }
    ];
  }
}

export const storage = new MemStorage();
