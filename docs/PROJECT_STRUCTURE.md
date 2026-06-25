# BookFlow Project Structure

This document outlines the high-level Next.js 15 (App Router) architecture for BookFlow.

## Directory Tree

```
Book-Flow/
├── .next/                   # Next.js build output (Git ignored)
├── docs/                    # Project documentation & specs
│   ├── design-system/       # Design tokens and visual guidelines
│   ├── product/             # UI/UX and product flow specifications
│   ├── screens/             # Reference UI screens (HTML, PNG)
│   └── ...                  # Architecture, DB, Case study docs
├── prisma/                  # Database ORM Layer
│   └── schema.prisma        # Models, relations, and soft-delete/history patterns
├── public/                  # Static assets (images, icons, svgs)
├── src/                     # Core Application Code
│   ├── actions/             # Server Actions (Domain Layer)
│   │   ├── booking.actions.ts
│   │   └── provider.actions.ts
│   ├── app/                 # Next.js App Router root
│   │   ├── globals.css      # Tailwind 4 theme, design tokens, and global styles
│   │   ├── layout.tsx       # Root layout with ClerkProvider & global fonts
│   │   └── page.tsx         # Main Landing Page
│   ├── components/          # Reusable UI Components
│   │   ├── landing/         # Landing page specific components (Hero, Nav, etc.)
│   │   └── ui/              # Generic ShadCN UI components (Button, Dialog, Input, etc.)
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Tailwind/clsx merge utilities
│   ├── types/               # Global TypeScript declarations
│   │   └── globals.d.ts     # Clerk custom session claims augmentation
│   └── middleware.ts        # Clerk Role-based routing middleware
├── .env                     # Environment variables (DB Connection, Clerk Keys)
├── components.json          # ShadCN UI configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # NPM dependencies & scripts
└── tsconfig.json            # TypeScript configuration
```

## Architectural Notes
- **App Router First**: We utilize the `src/app/` directory as the definitive source for routing.
- **Server Actions**: Business logic and database operations are strictly isolated in `src/actions/` to enforce the server-first mentality and minimize client bundle size.
- **UI Modularization**: Page sections (like those in the Landing Page) are extracted into `src/components/[feature-name]/` to keep `page.tsx` strictly as a composition root.
