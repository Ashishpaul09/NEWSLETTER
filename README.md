# Discovery Creative Newsletter

A modern web application for the Discovery Creative newsletter, built with React, Express, and TypeScript.

## Features

- Responsive newsletter design
- Article sections (Work, Ideas, Stuff)
- Newsletter archives
- Subscription management
- About and Contact pages

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: Drizzle ORM
- **Build Tools**: Vite, esbuild

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up database
npm run db:push
```

### Development

```bash
# Start development server
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend Express API
- `/shared` - Shared types and utilities
- `/attached_assets` - Static assets and content

## License

MIT