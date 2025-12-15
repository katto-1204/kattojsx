# Vivid Canvas 🎨

> A Creative Full Stack Developer Portfolio - Showcasing innovative web experiences with cutting-edge technologies

![Katto.jsx - Creative Full Stack Developer](https://img.shields.io/badge/Portfolio-Katto.jsx-orange?style=for-the-badge)
![Built with React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Built with TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)
![Hosted on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)

---

## 📋 Table of Contents

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

## 🎯 Overview

**Vivid Canvas** is a full-stack portfolio application showcasing Catherine Arnado's work as a creative developer. The project combines stunning UI/UX with immersive 3D experiences, interactive components, and a modern tech stack. Built with React, TypeScript, Tailwind CSS, and Express.js, it demonstrates professional-grade development practices and creative design implementation.

**Live Demo:** https://kattojsx.vercel.app/

---

## ✨ Features

### Client-Side (React + Vite)
- 🎪 **Interactive Hero Section** - Captivating landing experience
- 🖼️ **Visual Portfolio** - Showcase of creative work and projects
- 📚 **Experience & Certifications** - Professional background display
- 📔 **Digital Journal** - Personal blog and insights
- 🌏 **Travel Tours** - Interactive Cebu & Bohol experience with day-by-day content
- 🎯 **Bento Grid Layout** - Modern, flexible component arrangement
- 🔄 **Card Swap Interactions** - Smooth, engaging card transitions
- 🎮 **3D Elements** - Three.js/React Three Fiber for immersive experiences
- ✨ **Laser Flow Effects** - Custom animated visual effects
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎨 **Dark Mode Support** - Theme provider with Radix UI components
- ♿ **Accessible Components** - shadcn/ui component library

### Server-Side (Express.js)
- 🗄️ **PostgreSQL Database** - Drizzle ORM for type-safe queries
- 🔒 **Static File Serving** - Optimized asset delivery
- 📤 **File Storage** - Server-side storage management
- 🚀 **Production Ready** - Bundled and optimized for Vercel

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18+
- **Language:** TypeScript
- **Build Tool:** Vite 7+
- **Styling:** Tailwind CSS + PostCSS
- **Component Library:** shadcn/ui with Radix UI
- **3D Graphics:** Three.js, React Three Fiber, Rapier Physics
- **Forms:** React Hook Form + Zod
- **State Management:** TanStack React Query
- **Animations:** Framer Motion, Custom CSS animations
- **UI Utilities:** Sonner (Toast), Recharts (Charts)

### Backend
- **Runtime:** Node.js 20
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Drizzle Kit
- **Build/Bundle:** tsx, esbuild
- **Utilities:** cross-env, dotenv

### DevTools & Infrastructure
- **Testing:** Vitest
- **Code Quality:** ESLint, TypeScript strict mode
- **Package Manager:** npm
- **Deployment:** Vercel
- **Version Control:** Git
- **Database Migrations:** Drizzle Kit

---

## 📂 Project Structure

```
vivid-canvas/
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

## 🚀 Quick Start

### Prerequisites
- **Node.js:** v20 or higher
- **npm:** v10 or higher
- **PostgreSQL:** For database (optional for local development)
- **Git:** For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vivid-canvas.git
   cd vivid-canvas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables** (optional for basic development)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Client: http://localhost:5000
   - Server (if running): http://localhost:3000

---

## 💻 Development

### Client-Side Development

Start the Vite dev server with hot module replacement:

```bash
npm run dev:client
```

Features:
- ⚡ Fast refresh with HMR
- 🎯 Clear error overlays
- 📱 Mobile preview support
- 🔧 Component hot reloading

### Server-Side Development

Run the full-stack development server:

```bash
npm run dev
```

This starts:
- Express server on `http://localhost:3000`
- React client on `http://localhost:5000`
- Vite dev middleware for hot module replacement

### Code Quality

Perform type checking:

```bash
npm run check
```

This runs TypeScript compiler in strict mode to catch type errors.

---

## 🔨 Building & Deployment

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

## ⚙️ Environment Setup

### Development Environment Variables

Create a `.env.local` file in the project root:

```env
NODE_ENV=development
```

### Production Environment Variables

Set these in Vercel Project Settings → Environment Variables:

```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3000
```

### Optional Variables
- `REPLIT_INTERNAL_APP_DOMAIN` - For Replit deployment
- `REPLIT_DEV_DOMAIN` - For Replit dev preview
- Any custom API keys or service credentials

---

## 🗄️ Database Management

### Database Setup

The project uses **Drizzle ORM** with **PostgreSQL**.

#### Prerequisites
- PostgreSQL database provisioned
- Connection URL available as `DATABASE_URL`

### Schema Definition

Database schema is defined in [shared/schema.ts](shared/schema.ts)

### Migrations

Generate and push schema changes:

```bash
npm run db:push
```

This creates tables and applies migrations to your PostgreSQL database.

### Drizzle Configuration

See [drizzle.config.ts](drizzle.config.ts) for database connection settings.

---

## 📝 Scripts & Commands

| Script | Purpose |
|--------|---------|
| `npm run dev:client` | Start Vite dev server (client only) |
| `npm run dev` | Start full-stack dev server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run check` | Type check with TypeScript |
| `npm run db:push` | Push database schema migrations |

---

## 🌐 Deployment Guide

### Deploy to Vercel

1. **Connect Repository**
   - Push to GitHub/GitLab
   - Visit https://vercel.com
   - Import your repository

2. **Configure Environment Variables**
   - Project Settings → Environment Variables
   - Add `NODE_ENV=production`
   - Add `DATABASE_URL=your_postgres_url`

3. **Deploy**
   - Vercel automatically builds on every push to `main`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Public directory: `dist/public`

4. **Verify Deployment**
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

- **Build logs:** Vercel Dashboard → Deployments
- **Runtime logs:** `vercel logs`
- **Environment variables:** Verify in Project Settings
- **Cold starts:** Check Edge Function performance

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment documentation.

---

## 📦 Key Dependencies

### Frontend Essentials
- `react` - UI framework
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - Styling
- `@radix-ui/*` - Accessible UI primitives
- `react-hook-form` - Form management
- `@tanstack/react-query` - Data fetching

### 3D & Graphics
- `three` - 3D graphics
- `@react-three/fiber` - React wrapper for Three.js
- `@react-three/drei` - Useful helpers for R3F
- `@react-three/rapier` - Physics engine

### Backend & Database
- `express` - Web server
- `drizzle-orm` - Type-safe ORM
- `drizzle-kit` - Database migrations

### Developer Tools
- `tsx` - TypeScript executor
- `vite-plugin-runtime-error-modal` - Error display
- `cross-env` - Cross-platform env vars

See [package.json](package.json) for complete dependency list.

---

## 🎨 Design System

The project uses a comprehensive UI component library built with shadcn/ui and Radix UI primitives:

- **Buttons** - Multiple variants and sizes
- **Cards** - Flexible layout components
- **Dialogs & Modals** - Alert dialogs, drawers, sheets
- **Forms** - Input groups, text areas, select dropdowns
- **Navigation** - Navbar, breadcrumbs, pagination
- **Feedback** - Toast notifications, progress bars, spinners
- **Accessibility** - Full ARIA support, keyboard navigation

Customization via [components.json](components.json) and Tailwind configuration.

---

## 🌟 Notable Features Deep Dive

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

## 🔒 Security & Performance

- ✅ TypeScript strict mode for type safety
- ✅ Environment variables for sensitive data
- ✅ CORS and security headers configured
- ✅ Static asset optimization
- ✅ Code splitting and lazy loading
- ✅ Database query optimization with Drizzle
- ✅ Production bundle optimization

---

## 📚 Additional Resources

- [Deployment Documentation](DEPLOYMENT.md)
- [Vercel Docs](https://vercel.com/docs)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Drizzle ORM](https://orm.drizzle.team)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit with clear messages** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👤 About

**Vivid Canvas** is a creative portfolio project by **Catherine Arnado** (Katto.jsx).

- 🌐 Portfolio: https://vividcanvas.vercel.app/
- 💼 LinkedIn: [Your LinkedIn]
- 🐙 GitHub: [Your GitHub]
- 📧 Email: [Your Email]

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - Beautiful component library
- [Radix UI](https://www.radix-ui.com) - Accessible primitives
- [Three.js](https://threejs.org) - 3D graphics library
- [Vercel](https://vercel.com) - Hosting platform
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS

---

## 📞 Support

For issues, questions, or suggestions:
- 📝 Open an issue on GitHub
- 💬 Reach out via email
- 🤝 Join discussions

---

<div align="center">

**Made with ❤️ by Catherine Arnado**

⭐ If you find this project helpful, please consider giving it a star!

</div>
