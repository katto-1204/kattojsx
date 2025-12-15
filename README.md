# katto.jsx

A creative full stack developer portfolio by Catherine Arnado. Built to showcase interactive web experiences and creative work with modern tech.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Environment Setup](#environment-setup)
- [Database Management](#database-management)
- [Scripts & Commands](#scripts--commands)
- [Deployment Guide](#deployment-guide)
- [Contributing](#contributing)

---

## Overview

This is katto.jsx - a full-stack portfolio application for Catherine Arnado. It's built to showcase creative work and interactive web experiences using React, TypeScript, Tailwind CSS, and Express.js. The project includes 3D elements, smooth animations, and a modern component library.

---

## Features

### Client-Side (React + Vite)
- Interactive Hero Section
- Visual Portfolio with project showcase
- Experience & Certifications display
- Digital Journal for blog content
- Travel Tours for Cebu & Bohol with day-by-day experiences
- Bento Grid Layout for flexible component arrangement
- Card Swap Interactions with smooth transitions
- 3D Elements using Three.js and React Three Fiber
- Laser Flow Effects with custom animations
- Fully Responsive design across all devices
- Dark Mode Support with theme provider
- Accessible Components using shadcn/ui

### Server-Side (Express.js)
- PostgreSQL Database with Drizzle ORM
- Static File Serving for optimized assets
- File Storage and management
- Production Ready for Vercel deployment

---

## Tech Stack

### Frontend
- React 18+
- TypeScript
- Vite 7+
- Tailwind CSS + PostCSS
- shadcn/ui with Radix UI
- Three.js, React Three Fiber, Rapier Physics
- React Hook Form + Zod
- TanStack React Query
- Framer Motion
- Sonner (Toast), Recharts (Charts)

### Backend
- Node.js 20
- Express.js
- TypeScript
- PostgreSQL
- Drizzle Kit
- tsx, esbuild

### DevTools & Infrastructure
- Vitest for testing
- ESLint and TypeScript strict mode
- npm
- Vercel for hosting
- Git for version control
- Drizzle Kit for migrations

---

## Project Structure

```
katto.jsx/
├── client/                          # React frontend application
│   ├── index.html                   # Entry HTML file
│   ├── public/
│   │   └── assets/                  # Static images & media
│   │       ├── backanim/            # Background animations
│   │       ├── cebubohol/           # Travel content (Cebu & Bohol)
│   │       ├── certificates/        # Certification images
│   │       ├── journals/            # Journal images
│   │       ├── logos/               # Brand logos
│   │       ├── merch/               # Merchandise assets
│   │       ├── projects/            # Project showcase images
│   │       └── sfx/                 # Sound effects
│   └── src/
│       ├── main.tsx                 # React entry point
│       ├── App.tsx                  # Root component
│       ├── index.css                # Global styles
│       ├── components/
│       │   ├── layout/              # Header, navbar, footer
│       │   ├── sections/            # Page sections (Hero, Experience, etc)
│       │   ├── ui/                  # Reusable UI components
│       │   ├── LaserFlow.tsx        # Custom animated effects
│       │   └── theme-provider.tsx   # Dark mode context
│       ├── pages/                   # Page components
│       ├── hooks/                   # Custom React hooks
│       └── lib/                     # Utilities and helpers
│
├── server/                          # Express.js backend
│   ├── index.ts                     # Server entry point
│   ├── routes.ts                    # API route definitions
│   ├── static.ts                    # Static file middleware
│   ├── storage.ts                   # File storage logic
│   └── vite.ts                      # Vite middleware integration
│
├── shared/                          # Shared code between client & server
│   └── schema.ts                    # Database schema (Drizzle)
│
├── script/                          # Build scripts
│   └── build.ts                     # Custom build configuration
│
├── dist/                            # Build output (generated)
│   ├── index.cjs                    # Bundled server
│   └── public/                      # Built React app
│
├── migrations/                      # Database migrations (generated)
│
├── Configuration Files
│   ├── vite.config.ts               # Vite build configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tailwind.config.ts           # Tailwind CSS setup
│   ├── drizzle.config.ts            # Database configuration
│   ├── vercel.json                  # Vercel deployment config
│   ├── .replit                      # Replit environment config
│   ├── components.json              # shadcn/ui configuration
│   └── postcss.config.js            # PostCSS plugins
│
└── Root Files
    ├── package.json                 # Dependencies & scripts
    ├── DEPLOYMENT.md                # Deployment documentation
    └── README.md                    # This file
```

---

## Quick Start

### Prerequisites
- Node.js v20 or higher
- npm v10 or higher
- PostgreSQL (optional for local development)
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/katto.jsx.git
   cd katto.jsx
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Setup environment variables (optional for basic development)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Start development server
   ```bash
   npm run dev
   ```

5. Open in browser
   - Client: http://localhost:5000
   - Server: http://localhost:3000

---

## Development

### Client-Side Development

Start the Vite dev server with hot module replacement:

```bash
npm run dev:client
```

Features:
- Fast refresh with HMR
- Clear error overlays
- Mobile preview support
- Component hot reloading

### Server-Side Development

Run the full-stack development server:

```bash
npm run dev
```

This starts:
- Express server on http://localhost:3000
- React client on http://localhost:5000
- Vite dev middleware for hot module replacement

### Code Quality

Perform type checking:

```bash
npm run check
```

---

## Building & Deployment

### Local Build

Build the entire project for production:

```bash
npm run build
```

Output structure:
```
dist/
├── index.cjs      # Bundled Node.js server
└── public/        # Optimized React build
```

### Start Production Build

Run the bundled application locally:

```bash
npm start
```

---

## Environment Setup

### Development Environment Variables

Create a .env.local file in the project root:

```env
NODE_ENV=development
```

### Production Environment Variables

Set these in Vercel Project Settings > Environment Variables:

```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3000
```

### Optional Variables
- REPLIT_INTERNAL_APP_DOMAIN - For Replit deployment
- REPLIT_DEV_DOMAIN - For Replit dev preview
- Custom API keys or service credentials

---

## Database Management

### Database Setup

The project uses Drizzle ORM with PostgreSQL.

#### Prerequisites
- PostgreSQL database provisioned
- Connection URL available as DATABASE_URL

### Schema Definition

Database schema is defined in shared/schema.ts

### Migrations

Generate and push schema changes:

```bash
npm run db:push
```

This creates tables and applies migrations to your PostgreSQL database.

### Drizzle Configuration

See drizzle.config.ts for database connection settings.

---

## Scripts & Commands

| Script | Purpose |
|--------|---------|
| npm run dev:client | Start Vite dev server (client only) |
| npm run dev | Start full-stack dev server |
| npm run build | Build for production |
| npm start | Run production build |
| npm run check | Type check with TypeScript |
| npm run db:push | Push database schema migrations |

---

## Deployment Guide

### Deploy to Vercel

1. Connect Repository
   - Push to GitHub/GitLab
   - Visit https://vercel.com
   - Import your repository

2. Configure Environment Variables
   - Project Settings > Environment Variables
   - Add NODE_ENV=production
   - Add DATABASE_URL=your_postgres_url

3. Deploy
   - Vercel automatically builds on every push to main
   - Build command: npm run build
   - Output directory: dist
   - Public directory: dist/public

4. Verify Deployment
   ```bash
   # View logs
   vercel logs
   
   # Check deployment status
   # Dashboard: https://vercel.com/dashboard
   ```

### Build Output Structure

```
dist/
├── index.cjs       # Auto-detected by Vercel as serverless function
└── public/         # Static React app (served by CDN)
```

### Debugging

- Build logs: Vercel Dashboard > Deployments
- Runtime logs: vercel logs
- Environment variables: Verify in Project Settings
- Cold starts: Check Edge Function performance

See DEPLOYMENT.md for detailed deployment documentation.

---

## Key Dependencies

### Frontend Essentials
- react - UI framework
- vite - Build tool
- typescript - Type safety
- tailwindcss - Styling
- @radix-ui/* - Accessible UI primitives
- react-hook-form - Form management
- @tanstack/react-query - Data fetching

### 3D & Graphics
- three - 3D graphics
- @react-three/fiber - React wrapper for Three.js
- @react-three/drei - Useful helpers for R3F
- @react-three/rapier - Physics engine

### Backend & Database
- express - Web server
- drizzle-orm - Type-safe ORM
- drizzle-kit - Database migrations

### Developer Tools
- tsx - TypeScript executor
- vite-plugin-runtime-error-modal - Error display
- cross-env - Cross-platform env vars

See package.json for complete dependency list.

---

## Design System

The project uses a comprehensive UI component library built with shadcn/ui and Radix UI primitives:

- Buttons - Multiple variants and sizes
- Cards - Flexible layout components
- Dialogs & Modals - Alert dialogs, drawers, sheets
- Forms - Input groups, text areas, select dropdowns
- Navigation - Navbar, breadcrumbs, pagination
- Feedback - Toast notifications, progress bars, spinners
- Accessibility - Full ARIA support, keyboard navigation

Customization via components.json and Tailwind configuration.

---

## Notable Features Deep Dive

### Travel Tours (Cebu & Bohol)
Interactive day-by-day travel experiences with:
- Daily itineraries and photos
- Roommate showcase
- Location-based content organization

### 3D Laser Flow Effects
Custom animated background effects with:
- Particle systems
- Smooth animations
- Performance optimized

### Bento Grid Layout
Modern, flexible grid system showcasing:
- Projects
- Skills
- Experiences
- Interactive cards

### Responsive Design
Fully responsive across all breakpoints with:
- Mobile-first approach
- Tablet optimization
- Desktop enhancement

---

## Security & Performance

- TypeScript strict mode for type safety
- Environment variables for sensitive data
- CORS and security headers configured
- Static asset optimization
- Code splitting and lazy loading
- Database query optimization with Drizzle
- Production bundle optimization

---

## Additional Resources

- DEPLOYMENT.md - Deployment documentation
- Vercel Docs - https://vercel.com/docs
- React Documentation - https://react.dev
- Vite Guide - https://vitejs.dev
- Tailwind CSS - https://tailwindcss.com
- shadcn/ui Components - https://ui.shadcn.com
- Drizzle ORM - https://orm.drizzle.team

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Make your changes
4. Commit with clear messages (git commit -m 'Add amazing feature')
5. Push to the branch (git push origin feature/amazing-feature)
6. Open a Pull Request

---

## License

This project is licensed under the MIT License - see LICENSE file for details.

---

## About

katto.jsx is a creative portfolio project by Catherine Arnado.

- Portfolio: https://katto.jsx/
- GitHub: github.com/yourprofile
- Email: contact@example.com

---

## Acknowledgments

- shadcn/ui - Beautiful component library
- Radix UI - Accessible primitives
- Three.js - 3D graphics library
- Vercel - Hosting platform
- Tailwind CSS - Utility-first CSS

---

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Reach out via email
- Join discussions

---

---

Made with care by Catherine Arnado

If you find this project helpful, consider giving it a star!
