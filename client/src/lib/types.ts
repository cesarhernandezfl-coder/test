// Crisis related types
export interface Crisis {
  id: number;
  name: string;
  type: string;
  location: string;
  status: "active" | "resolved" | "monitoring";
  severity: "low" | "medium" | "high" | "critical";
  startTime: string;
  affectedArea: number;
  population: number;
}

// AI System related types
export interface AISystem {
  id: number;
  name: string;
  type: string;
  version: string;
  status: "operational" | "degraded" | "offline" | "maintenance";
  lastUpdate: string;
  description: string;
  provider: string;
  capabilities: string[];
}

// Resource related types
export interface ResourceUnit {
  id: number;
  type: string;
  count: number;
  location: string;
  status: "available" | "deployed" | "maintenance";
  priority: "high" | "medium" | "low";
}

export interface ResourceAllocation {
  id: number;
  crisisId: number;
  resourceId: number;
  quantity: number;
  assignedTime: string;
  status: "pending" | "approved" | "rejected" | "completed";
}

// Interoperability related types
export interface SystemConnection {
  id: number;
  sourceSystemId: number;
  targetSystemId: number;
  status: "active" | "inactive" | "failed";
  lastCommunication: string;
  dataExchangeRate: number;
}

// Insight related types
export interface Insight {
  id: number;
  crisisId: number;
  systemId: number;
  title: string;
  content: string;
  timestamp: string;
  type: "prediction" | "analysis" | "recommendation";
  confidence: number;
  actionRequired: boolean;
}
