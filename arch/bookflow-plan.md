# BookFlow — Full Project Plan
> Generic Booking Platform for Portfolio · 5-Day Build

---

## 1. Stack Decision

| Layer | Tech | Why |
|---|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript | SSR for landing/SEO, familiar stack |
| Styling | Tailwind CSS + shadcn/ui | Fast, consistent, professional |
| Backend | Next.js API Routes (or separate Express) | Keep it mono-repo for speed |
| Database | PostgreSQL via Neon (serverless free tier) | Production-grade, no Docker needed for demo |
| ORM | Prisma | Type-safe, fits your stack |
| Auth | NextAuth.js (credentials + Google) | Multi-role support out of the box |
| Calendar UI | react-big-calendar or @fullcalendar/react | Provider dashboard |
| Charts | Recharts | Admin + provider analytics |
| Deployment | Vercel (frontend) + Neon (DB) | Free, fast, professional |
| Domain | Subdomain on zack-river.vercel.app → redirect to custom | demo.bookflow.app feel |

**Mono-repo structure:**
```
bookflow/
├── app/
│   ├── (public)/           # Landing, providers, services
│   ├── (customer)/         # My bookings
│   ├── (provider)/         # Calendar, availability
│   ├── (admin)/            # Dashboard
│   └── api/                # All API routes
├── prisma/
│   └── schema.prisma
├── components/
├── lib/
└── middleware.ts           # Role-based route protection
```

---

## 2. Database Schema (Prisma)

```prisma
// schema.prisma

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  password      String
  role          Role      @default(CUSTOMER)
  avatar        String?
  phone         String?
  createdAt     DateTime  @default(now())

  bookings      Booking[]
  provider      Provider?
}

enum Role {
  CUSTOMER
  PROVIDER
  ADMIN
}

model Provider {
  id            String    @id @default(cuid())
  userId        String    @unique
  user          User      @relation(fields: [userId], references: [id])
  businessName  String
  category      String    // "clinic" | "salon" | "gym" | "consulting" etc.
  bio           String?
  location      String?
  avatar        String?
  rating        Float     @default(0)
  totalBookings Int       @default(0)
  isActive      Boolean   @default(true)
  createdAt     DateTime  @default(now())

  services      Service[]
  slots         AvailabilitySlot[]
  bookings      Booking[]
}

model Service {
  id            String    @id @default(cuid())
  providerId    String
  provider      Provider  @relation(fields: [providerId], references: [id])
  name          String
  description   String?
  duration      Int       // minutes
  price         Float
  currency      String    @default("EGP")
  isActive      Boolean   @default(true)

  bookings      Booking[]
}

model AvailabilitySlot {
  id            String    @id @default(cuid())
  providerId    String
  provider      Provider  @relation(fields: [providerId], references: [id])
  date          DateTime
  startTime     String    // "09:00"
  endTime       String    // "09:30"
  isBooked      Boolean   @default(false)

  booking       Booking?
}

model Booking {
  id            String        @id @default(cuid())
  customerId    String
  customer      User          @relation(fields: [customerId], references: [id])
  providerId    String
  provider      Provider      @relation(fields: [providerId], references: [id])
  serviceId     String
  service       Service       @relation(fields: [serviceId], references: [id])
  slotId        String        @unique
  slot          AvailabilitySlot @relation(fields: [slotId], references: [id])
  status        BookingStatus @default(PENDING)
  notes         String?
  totalPrice    Float
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

enum BookingStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
  RESCHEDULED
}
```

**Why only 5 tables:** Clean, explainable in interviews, covers all features without over-engineering. Extendable later with `reviews`, `payments`, `notifications`.

---

## 3. API Reference

### Auth
```
POST   /api/auth/[...nextauth]     # NextAuth handler (login, register, Google)
POST   /api/auth/register          # Custom register endpoint
```

### Providers (Public)
```
GET    /api/providers              # List with filters: category, location, rating
GET    /api/providers/:id          # Full profile + services
GET    /api/providers/:id/slots    # Available slots for a date range
```

### Bookings
```
POST   /api/bookings               # Create booking (auth: customer)
GET    /api/bookings               # My bookings (auth: customer)
PATCH  /api/bookings/:id           # Reschedule or update status
DELETE /api/bookings/:id           # Cancel booking
```

### Provider Dashboard
```
GET    /api/provider/bookings      # All bookings for this provider
GET    /api/provider/availability  # Their slot schedule
POST   /api/provider/availability  # Add slots (bulk or single)
DELETE /api/provider/availability/:slotId
GET    /api/provider/revenue       # Revenue overview
```

### Admin
```
GET    /api/admin/stats            # Total users, bookings, revenue, active providers
GET    /api/admin/users            # All users with role filter
GET    /api/admin/providers        # Manage + approve providers
GET    /api/admin/bookings         # All bookings with status filter
PATCH  /api/admin/providers/:id    # Activate/deactivate provider
```

---

## 4. Role-Based Access (middleware.ts)

```typescript
// middleware.ts
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("next-auth.session-token");

  if (pathname.startsWith("/customer") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (pathname.startsWith("/provider") && role !== "PROVIDER") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (pathname.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
```

---

## 5. UI Pages Map

### Public
| Page | Path | Notes |
|---|---|---|
| Landing | `/` | Hero, features, categories, testimonials, CTA |
| Providers List | `/providers` | Filter by category, search, sort by rating |
| Provider Profile | `/providers/[id]` | Services, reviews, booking CTA |
| Booking Wizard | `/book/[providerId]` | Step 1: Service → Step 2: Slot → Step 3: Confirm |
| Auth | `/login`, `/register` | Role selection on register |

### Customer (Protected)
| Page | Path |
|---|---|
| My Bookings | `/customer/bookings` |
| Booking Detail | `/customer/bookings/[id]` |
| Reschedule | `/customer/bookings/[id]/reschedule` |

### Provider (Protected)
| Page | Path |
|---|---|
| Calendar | `/provider/calendar` |
| Manage Availability | `/provider/availability` |
| Upcoming Bookings | `/provider/bookings` |
| Revenue Overview | `/provider/revenue` |

### Admin (Protected)
| Page | Path |
|---|---|
| Dashboard | `/admin` |
| Users | `/admin/users` |
| Providers | `/admin/providers` |
| Bookings | `/admin/bookings` |
| Analytics | `/admin/analytics` |

---

## 6. Day-by-Day Execution Plan

### Day 1 — Architecture + Database + Wireframes

**Morning (2–3h)**
- [ ] Init Next.js 14 project with TypeScript + Tailwind + shadcn
- [ ] Set up Neon DB → connect Prisma
- [ ] Write full `schema.prisma` (5 models above)
- [ ] Run `prisma migrate dev --name init`
- [ ] Set up NextAuth with credentials provider + role in JWT
- [ ] Create seed script: 1 admin, 3 providers (clinic, salon, gym), 5 services, slots for next 7 days

**Afternoon (2h)**
- [ ] Design system: pick colors, fonts, define in `tailwind.config.ts`
  - Suggestion: slate-900 base, violet-600 accent, clean sans-serif (Inter)
- [ ] Sketch wireframes for: Landing, Provider Profile, Booking Wizard
- [ ] Plan component structure: `BookingWizard`, `ProviderCard`, `SlotPicker`, `StatusBadge`

**Output of Day 1:** Working DB with real seed data, auth working, design tokens ready.

---

### Day 2 — Landing Page + Booking Flow

**Landing Page (`/`)**
- [ ] Hero: headline + subheadline + search bar (filter by category)
- [ ] Categories section: 8 categories with icons (clinic, salon, gym, etc.)
- [ ] How it works: 3 steps
- [ ] Featured providers: cards with rating, category, price range
- [ ] Testimonials (seed 3 fake ones)
- [ ] CTA footer section

**Providers List (`/providers`)**
- [ ] Grid of `ProviderCard` components
- [ ] Filter sidebar: category, rating, price
- [ ] Search by name/location

**Provider Profile (`/providers/[id]`)**
- [ ] Header: avatar, name, category, rating, location
- [ ] Services list with price + duration
- [ ] "Book Now" button → goes to wizard

**Booking Wizard (`/book/[providerId]`)**
- [ ] Step 1: Select Service (cards with price/duration)
- [ ] Step 2: Pick Date → show available slots (SlotPicker component)
- [ ] Step 3: Confirm + notes → submit → POST `/api/bookings`
- [ ] Success screen with booking ID + redirect to `/customer/bookings`

**Output of Day 2:** Complete public flow working end-to-end.

---

### Day 3 — Customer Dashboard

**My Bookings (`/customer/bookings`)**
- [ ] Tabs: Upcoming / Past / Cancelled
- [ ] Each booking card: provider name, service, date/time, status badge, actions
- [ ] Status badges: PENDING (yellow), CONFIRMED (green), CANCELLED (red), COMPLETED (grey)

**Booking Detail (`/customer/bookings/[id]`)**
- [ ] Full info: provider, service, slot, price, notes
- [ ] Action buttons: Reschedule / Cancel (conditional on status + time)

**Reschedule Flow**
- [ ] Reuse SlotPicker → PATCH `/api/bookings/:id` with new slot
- [ ] Old slot freed (isBooked → false), new slot marked booked

**UX polish:**
- [ ] Empty state for no bookings (illustration + CTA to browse providers)
- [ ] Toast notifications on success/error
- [ ] Optimistic UI on cancel

**Output of Day 3:** Customer can manage their full booking lifecycle.

---

### Day 4 — Provider Dashboard

**Calendar (`/provider/calendar`)**
- [ ] react-big-calendar or FullCalendar
- [ ] View: Week view with time slots
- [ ] Booked slots highlighted, available slots shown
- [ ] Click slot → see booking details

**Availability Manager (`/provider/availability`)**
- [ ] Select day → add time range → generates slots (e.g., 09:00–17:00 every 30min)
- [ ] Bulk add: "Apply to Mon–Fri this week"
- [ ] Delete individual slots

**Upcoming Bookings (`/provider/bookings`)**
- [ ] Table: customer name, service, date, status, price
- [ ] Actions: Confirm (PENDING→CONFIRMED), Mark Complete (CONFIRMED→COMPLETED)

**Revenue Overview (`/provider/revenue`)**
- [ ] Stats cards: This month revenue, Total bookings, Avg booking value
- [ ] Bar chart: Revenue per week (last 4 weeks) — Recharts
- [ ] Recent transactions list

**Output of Day 4:** Provider can fully manage their business.

---

### Day 5 — Admin Dashboard + Deployment

**Admin Dashboard (`/admin`)**
- [ ] Stats: Total users, Total providers, Total bookings today/month, Revenue
- [ ] Recent bookings table
- [ ] Recent registrations list

**Users Management (`/admin/users`)**
- [ ] Table with search: name, email, role, joined date
- [ ] Actions: View, Change role, Deactivate

**Providers Management (`/admin/providers`)**
- [ ] Pending approval queue (if you add isApproved to schema)
- [ ] Active/inactive toggle
- [ ] View provider profile inline

**Bookings Management (`/admin/bookings`)**
- [ ] Full table: all bookings across all providers
- [ ] Filter by status, date range, provider

**Analytics (`/admin/analytics`)**
- [ ] Line chart: bookings per day (last 30 days)
- [ ] Pie chart: bookings by category
- [ ] Top 5 providers by revenue

**Deployment**
- [ ] Push to GitHub
- [ ] Connect to Vercel → set env vars (DATABASE_URL, NEXTAUTH_SECRET, etc.)
- [ ] Run `prisma migrate deploy` in Vercel build
- [ ] Set up custom subdomain: `demo.bookflow.app` or `bookflow.zack-river.vercel.app`
- [ ] Final smoke test all 3 roles

**Output of Day 5:** Live, production-quality demo.

---

## 7. Seed Data Strategy (make it look real)

```typescript
// prisma/seed.ts
const providers = [
  { businessName: "SmileCare Dental", category: "clinic", rating: 4.8 },
  { businessName: "Glow Beauty Studio", category: "salon", rating: 4.6 },
  { businessName: "FitZone Coaching", category: "gym", rating: 4.9 },
  { businessName: "Dr. Ahmed Legal Consulting", category: "consulting", rating: 4.7 },
  { businessName: "HomeFixPro", category: "home-services", rating: 4.5 },
];

// Generate slots: next 14 days, 09:00–18:00, every 30 mins
// Pre-book 30–40% of slots so it looks active
```

Real business names + real-looking data = demo that convinces clients.

---

## 8. Case Study (Post-Launch)

Write this as if it was a real client project. Frame:

> "A SaaS booking platform built for a regional service marketplace. Handles multi-vendor provider management, real-time slot availability, and role-based dashboards for customers, providers, and admins."

**Case Study Sections:**
1. **The Problem** — service businesses lose bookings to WhatsApp chaos
2. **The Solution** — BookFlow: one platform, any service category
3. **Tech Decisions** — why Next.js + Prisma + Neon (scalability, cost, DX)
4. **Key Features** — Booking Wizard, Provider Calendar, Admin Analytics
5. **Challenges Solved** — slot conflict prevention, multi-role auth, timezone handling
6. **Results** — "Reduced booking management time by 70%" (SaaS copy, stated as designed outcome)
7. **Screenshots** — all 4 dashboards + mobile booking flow

**Publish on:** Portfolio site, Mostaql profile, LinkedIn post (Arabic).

---

## 9. Demo Account Setup

| Role | Email | Password |
|---|---|---|
| Admin | admin@bookflow.app | demo1234 |
| Provider | clinic@bookflow.app | demo1234 |
| Customer | customer@bookflow.app | demo1234 |

Put these on the landing page or login page directly. Clients will appreciate the instant access.

---

## 10. What to Skip (for now)

- ❌ Real payments (Stripe) — add "Pay at venue" or "Pay later" label
- ❌ Email notifications — add console.log or skip entirely
- ❌ Real-time updates — no WebSockets needed, polling is fine
- ❌ Reviews system — show hardcoded ratings from seed
- ❌ Mobile app — responsive web is enough

These are all "v2" upsell features you can mention to clients.

---

## Quick Reference — Environment Variables

```env
DATABASE_URL="postgresql://..."         # Neon
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="https://demo.bookflow.app"
GOOGLE_CLIENT_ID=""                     # Optional OAuth
GOOGLE_CLIENT_SECRET=""
```
