# BookFlow — Product & Engineering Specification

> This document defines the full system design, UI/UX rules, API contract, and architecture for BookFlow.
> It is the single source of truth for development.

---

# 1. Product Overview

BookFlow is a multi-tenant booking platform for service-based businesses (clinics, salons, gyms, consultants, etc.).

It connects:
- Customers → book services
- Providers → manage schedules & revenue
- Admins → manage platform

Core principle:
> Every booking must be real, stateful, and traceable end-to-end.

---

# 2. System Roles

## CUSTOMER
- Browse providers
- Book services
- Manage bookings

## PROVIDER
- Define services
- Manage availability
- Handle bookings
- Track revenue

## ADMIN
- Approve providers
- Manage users
- Monitor analytics

---

# 3. Tech Stack

- Next.js 14 (App Router + TypeScript)
- Tailwind CSS + shadcn/ui
- PostgreSQL (Neon)
- Prisma ORM
- NextAuth v5 (JWT + roles)
- react-big-calendar
- Recharts
- Framer Motion
- Vercel deployment

---

# 4. Design System

## 4.1 Colors
(Defined in tailwind.config.ts)

- ink: #0F1117
- paper: #F7F6F3
- blue: #2563EB
- border: #E8E6E1
- muted: #6B7280
- subtle: #F3F4F6
- green / amber / red: status colors

---

## 4.2 Typography

- Display: Plus Jakarta Sans
- Body: Inter
- Mono: JetBrains Mono

Use mono for:
- time
- booking refs
- prices in tables

---

## 4.3 UI Rules

- Cards: rounded-xl + shadow-card
- Buttons: rounded-lg
- Inputs: focus ring blue/20
- No heavy shadows or gradients
- Clean, product-first UI

---

## 4.4 Signature Element

Calendar texture background:

Used in:
- hero section
- provider calendar

---

# 5. Core Data Model

(See `/prisma/schema.prisma`)

Entities:

- User
- Provider
- Service
- AvailabilitySlot
- Booking

Key rules:
- Slot = atomic booking unit
- Booking always references a slot
- Slot cannot be double-booked
- Provider stats are denormalized (performance)

---

# 6. API Architecture

## Standard Response Format

```ts
{
  data: any,
  error: string | null,
  meta: any | null
}