import { pgTable, text, serial, integer, boolean, timestamp, jsonb, real, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  role: text("role").notNull(),
  agencyId: integer("agency_id"),
  email: text("email"),
  phone: text("phone"),
  lastLogin: timestamp("last_login"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  fullName: true,
  role: true,
  agencyId: true,
  email: true,
  phone: true,
});

// Agencies table
export const agencies = pgTable("agencies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  jurisdiction: text("jurisdiction").notNull(),
  contactInfo: text("contact_info"),
});

export const insertAgencySchema = createInsertSchema(agencies).pick({
  name: true,
  type: true,
  jurisdiction: true,
  contactInfo: true,
});

// Crises table
export const crises = pgTable("crises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  location: text("location").notNull(),
  status: text("status").notNull(),
  severity: text("severity").notNull(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time"),
  affectedArea: text("affected_area"),
  population: integer("population"),
  description: text("description"),
  coordinates: jsonb("coordinates"),
});

export const insertCrisisSchema = createInsertSchema(crises).pick({
  name: true,
  type: true,
  location: true,
  status: true,
  severity: true,
  startTime: true,
  affectedArea: true,
  population: true,
  description: true,
  coordinates: true,
});

// AI Systems table
export const aiSystems = pgTable("ai_systems", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  version: text("version").notNull(),
  status: text("status").notNull(),
  lastUpdate: timestamp("last_update").notNull(),
  description: text("description"),
  provider: text("provider"),
  capabilities: jsonb("capabilities"),
});

export const insertAISystemSchema = createInsertSchema(aiSystems).pick({
  name: true,
  type: true,
  version: true,
  status: true,
  lastUpdate: true,
  description: true,
  provider: true,
  capabilities: true,
});

// System Connections table
export const systemConnections = pgTable("system_connections", {
  id: serial("id").primaryKey(),
  sourceSystemId: integer("source_system_id").notNull(),
  targetSystemId: integer("target_system_id").notNull(),
  status: text("status").notNull(),
  lastCommunication: timestamp("last_communication"),
  dataExchangeRate: integer("data_exchange_rate"),
});

export const insertSystemConnectionSchema = createInsertSchema(systemConnections).pick({
  sourceSystemId: true,
  targetSystemId: true,
  status: true,
  lastCommunication: true,
  dataExchangeRate: true,
});

// Resources table
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  count: integer("count").notNull(),
  location: text("location").notNull(),
  status: text("status").notNull(),
  priority: text("priority").notNull(),
  agencyId: integer("agency_id"),
});

export const insertResourceSchema = createInsertSchema(resources).pick({
  type: true,
  count: true,
  location: true,
  status: true,
  priority: true,
  agencyId: true,
});

// Resource Allocations table
export const resourceAllocations = pgTable("resource_allocations", {
  id: serial("id").primaryKey(),
  crisisId: integer("crisis_id").notNull(),
  resourceId: integer("resource_id").notNull(),
  quantity: integer("quantity").notNull(),
  assignedTime: timestamp("assigned_time").notNull(),
  status: text("status").notNull(),
});

export const insertResourceAllocationSchema = createInsertSchema(resourceAllocations).pick({
  crisisId: true,
  resourceId: true,
  quantity: true,
  assignedTime: true,
  status: true,
});

// Insights table
export const insights = pgTable("insights", {
  id: serial("id").primaryKey(),
  crisisId: integer("crisis_id").notNull(),
  systemId: integer("system_id").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  timestamp: timestamp("timestamp").notNull(),
  type: text("type").notNull(),
  confidence: integer("confidence"),
  actionRequired: boolean("action_required").default(false),
});

export const insertInsightSchema = createInsertSchema(insights).pick({
  crisisId: true,
  systemId: true,
  title: true,
  content: true,
  timestamp: true,
  type: true,
  confidence: true,
  actionRequired: true,
});

// Documentation table
export const documentation = pgTable("documentation", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  content: text("content").notNull(),
  lastUpdated: timestamp("last_updated").notNull(),
  version: text("version"),
});

export const insertDocumentationSchema = createInsertSchema(documentation).pick({
  title: true,
  category: true,
  content: true,
  lastUpdated: true,
  version: true,
});

// Cities table for crisis response analysis
export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  state: text("state").notNull(),
  population: integer("population"),
  area: real("area"), // square miles
  density: real("density"), // people per square mile
  emergencyServices: jsonb("emergency_services"), // Available services data
  coordinates: jsonb("coordinates"),
});

export const insertCitySchema = createInsertSchema(cities).pick({
  name: true,
  state: true,
  population: true,
  area: true,
  density: true,
  emergencyServices: true,
  coordinates: true,
});

// 911 Calls table
export const calls911 = pgTable("calls_911", {
  id: serial("id").primaryKey(),
  cityId: integer("city_id").notNull(),
  callId: text("call_id"), // External call ID from data source
  callType: text("call_type").notNull(), // Fire, Medical, Police, etc.
  priority: integer("priority"), // Call priority level (1-5)
  receivedAt: timestamp("received_at").notNull(),
  dispatchedAt: timestamp("dispatched_at"),
  arrivedAt: timestamp("arrived_at"),
  resolvedAt: timestamp("resolved_at"),
  location: text("location"),
  coordinates: jsonb("coordinates"),
  description: text("description"),
  sourceDataset: text("source_dataset"), // Which government dataset this came from
});

export const insertCall911Schema = createInsertSchema(calls911).pick({
  cityId: true,
  callId: true,
  callType: true,
  priority: true,
  receivedAt: true,
  dispatchedAt: true,
  arrivedAt: true,
  resolvedAt: true,
  location: true,
  coordinates: true,
  description: true,
  sourceDataset: true,
});

// Response Time Metrics table
export const responseMetrics = pgTable("response_metrics", {
  id: serial("id").primaryKey(),
  cityId: integer("city_id").notNull(),
  callType: text("call_type").notNull(),
  reportDate: date("report_date").notNull(),
  avgResponseTime: real("avg_response_time"), // minutes
  medianResponseTime: real("median_response_time"), // minutes
  percentile90ResponseTime: real("percentile_90_response_time"), // minutes
  totalCalls: integer("total_calls"),
  successfulResponses: integer("successful_responses"),
  responseRate: real("response_rate"), // percentage
  targetResponseTime: real("target_response_time"), // minutes (city's target)
  metTargetPercentage: real("met_target_percentage"), // percentage meeting target
});

export const insertResponseMetricSchema = createInsertSchema(responseMetrics).pick({
  cityId: true,
  callType: true,
  reportDate: true,
  avgResponseTime: true,
  medianResponseTime: true,
  percentile90ResponseTime: true,
  totalCalls: true,
  successfulResponses: true,
  responseRate: true,
  targetResponseTime: true,
  metTargetPercentage: true,
});

// City Performance Rankings table
export const cityPerformance = pgTable("city_performance", {
  id: serial("id").primaryKey(),
  cityId: integer("city_id").notNull(),
  rankingDate: date("ranking_date").notNull(),
  overallRank: integer("overall_rank"),
  overallScore: real("overall_score"), // Composite score 0-100
  fireResponseRank: integer("fire_response_rank"),
  medicalResponseRank: integer("medical_response_rank"),
  policeResponseRank: integer("police_response_rank"),
  fireAvgTime: real("fire_avg_time"),
  medicalAvgTime: real("medical_avg_time"),
  policeAvgTime: real("police_avg_time"),
  improvementTrend: text("improvement_trend"), // improving, declining, stable
});

export const insertCityPerformanceSchema = createInsertSchema(cityPerformance).pick({
  cityId: true,
  rankingDate: true,
  overallRank: true,
  overallScore: true,
  fireResponseRank: true,
  medicalResponseRank: true,
  policeResponseRank: true,
  fireAvgTime: true,
  medicalAvgTime: true,
  policeAvgTime: true,
  improvementTrend: true,
});

// Data Sources table to track where our 911 data comes from
export const dataSources = pgTable("data_sources", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url"),
  cityId: integer("city_id"),
  dataType: text("data_type").notNull(), // API, CSV, JSON, etc.
  updateFrequency: text("update_frequency"), // daily, weekly, monthly, etc.
  lastUpdated: timestamp("last_updated"),
  isActive: boolean("is_active").default(true),
  description: text("description"),
});

export const insertDataSourceSchema = createInsertSchema(dataSources).pick({
  name: true,
  url: true,
  cityId: true,
  dataType: true,
  updateFrequency: true,
  lastUpdated: true,
  isActive: true,
  description: true,
});

// Type exports
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Agency = typeof agencies.$inferSelect;
export type InsertAgency = z.infer<typeof insertAgencySchema>;

export type Crisis = typeof crises.$inferSelect;
export type InsertCrisis = z.infer<typeof insertCrisisSchema>;

export type AISystem = typeof aiSystems.$inferSelect;
export type InsertAISystem = z.infer<typeof insertAISystemSchema>;

export type SystemConnection = typeof systemConnections.$inferSelect;
export type InsertSystemConnection = z.infer<typeof insertSystemConnectionSchema>;

export type Resource = typeof resources.$inferSelect;
export type InsertResource = z.infer<typeof insertResourceSchema>;

export type ResourceAllocation = typeof resourceAllocations.$inferSelect;
export type InsertResourceAllocation = z.infer<typeof insertResourceAllocationSchema>;

export type Insight = typeof insights.$inferSelect;
export type InsertInsight = z.infer<typeof insertInsightSchema>;

export type Documentation = typeof documentation.$inferSelect;
export type InsertDocumentation = z.infer<typeof insertDocumentationSchema>;

// New 911 and crisis response types
export type City = typeof cities.$inferSelect;
export type InsertCity = z.infer<typeof insertCitySchema>;

export type Call911 = typeof calls911.$inferSelect;
export type InsertCall911 = z.infer<typeof insertCall911Schema>;

export type ResponseMetric = typeof responseMetrics.$inferSelect;
export type InsertResponseMetric = z.infer<typeof insertResponseMetricSchema>;

export type CityPerformance = typeof cityPerformance.$inferSelect;
export type InsertCityPerformance = z.infer<typeof insertCityPerformanceSchema>;

export type DataSource = typeof dataSources.$inferSelect;
export type InsertDataSource = z.infer<typeof insertDataSourceSchema>;
