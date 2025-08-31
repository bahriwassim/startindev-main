# Overview

This is a modern React + Express fullstack application built with TypeScript that showcases StartInDev Groupe's digital solutions across three main verticals: Hospitality, E-Commerce, and Entertainment. The application features a landing page with service cards and dedicated pages for E-Commerce and Entertainment solutions, all designed with a modern, minimalist aesthetic inspired by startindev.com.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and design tokens
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Build**: ESBuild for production bundling
- **API Structure**: RESTful API with `/api` prefix routing

## Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definitions in TypeScript
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Development Tools
- **Hot Reload**: Vite HMR with Express middleware integration
- **Type Safety**: Strict TypeScript configuration across client/server/shared code
- **Path Mapping**: Organized imports with `@/` for client, `@shared/` for shared code
- **Code Quality**: Configured for modern ES features with proper module resolution

## Design System
- **Theme**: Custom CSS variables supporting light/dark modes
- **Colors**: Professional palette with primary blue, secondary cyan, and accent yellow
- **Typography**: Modern font stack with Google Fonts integration
- **Components**: Reusable UI components with consistent spacing and styling
- **Responsive**: Mobile-first responsive design with Tailwind breakpoints

## Project Structure
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory  
- **Shared**: Common types and schemas in `/shared` directory
- **Components**: Organized UI components with separation of concerns
- **Pages**: Route-based page components for each main section

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant API for component styling

## Database and Backend
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **Connect PG Simple**: PostgreSQL session store for Express sessions

## Development and Build
- **Vite**: Fast build tool and development server
- **ESBuild**: JavaScript bundler for production builds
- **Replit Integration**: Development environment plugins and error handling

## Data Fetching and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation

## Utility Libraries
- **Date-fns**: Modern date utility library
- **clsx/twMerge**: Conditional className utilities
- **Nanoid**: URL-safe unique ID generator