# IRIS Platform - Interoperable Response & Intelligence System

## Overview

IRIS (Interoperable Response & Intelligence System) is a comprehensive crisis response and emergency management platform designed for managing humanoid robots and drones in logistics, transportation, mobility, and emergency response scenarios. The system provides a unified dashboard for monitoring AI systems, allocating resources, and coordinating crisis response activities with real-time interoperability between different emergency response agencies and AI systems.

The platform serves as a central command center for crisis management, featuring real-time crisis monitoring, AI-powered insights and predictions, resource allocation management, and comprehensive system interoperability monitoring. It enables emergency response teams to make data-driven decisions through AI-generated recommendations and maintain situational awareness across multiple connected systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system supporting light/dark themes
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for REST API endpoints
- **API Structure**: RESTful endpoints organized by domain (crisis, dashboard, systems, resources, insights)
- **Data Layer**: Abstracted storage interface (IStorage) with in-memory implementation for development
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development**: Hot module replacement with Vite integration for seamless development experience

### Component Architecture
- **Layout System**: Responsive layout with collapsible sidebar and mobile-first design
- **Dashboard Components**: Modular crisis alerts, interactive maps, system status monitors, and resource allocation interfaces
- **Design System**: Consistent styling with brand colors (red and black theme), custom logo integration, and comprehensive UI component library

### Data Models
- **Crisis Management**: Crisis entities with status tracking, severity levels, and location data
- **AI Systems**: System monitoring with status, performance metrics, and capability tracking
- **Resource Allocation**: Resource units, distribution tracking, and AI-powered allocation recommendations
- **Interoperability**: System connection monitoring and data exchange status tracking

## External Dependencies

### Database & ORM
- **Drizzle ORM**: Type-safe database queries and schema management
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Neon Database**: Serverless PostgreSQL hosting solution

### UI & Styling
- **Radix UI**: Comprehensive collection of accessible UI primitives for dialogs, menus, forms, and navigation
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for the design system
- **Lucide React**: Icon library for consistent iconography across the application

### Development & Build
- **TypeScript**: Type safety across frontend, backend, and shared code
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development server
- **Replit Integration**: Development environment integration with error overlays and cartographer plugin

### Form & Validation
- **React Hook Form**: Performant form handling with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: Runtime type validation and schema parsing
- **Drizzle-Zod**: Integration between Drizzle schema and Zod validation

### State Management & HTTP
- **TanStack React Query**: Server state management, caching, and synchronization
- **Date-fns**: Date manipulation and formatting utilities

The system is designed for scalability and maintainability, with clear separation between frontend components, backend services, and data models. The architecture supports real-time updates, responsive design, and comprehensive crisis management workflows.