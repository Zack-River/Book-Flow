---
name: Warm Precision SaaS
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434655'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#5d5e65'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2eb'
  on-secondary-container: '#63646c'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#e2e2eb'
  secondary-fixed-dim: '#c5c6ce'
  on-secondary-fixed: '#191b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is anchored in **Warm Precision**, a design philosophy that balances the rigid efficiency of a SaaS booking engine with the welcoming tactility of high-end editorial paper. It is crafted for a professional, funded product environment where reliability is paramount, but approachable "human" touches differentiate the experience from sterile enterprise competitors.

The style is **Corporate / Modern** with a **Tactile** lean. It leverages a "Paper and Ink" foundation—using warm off-whites instead of cold grays—to reduce eye strain and evoke a sense of physical quality. The interface feels production-ready, featuring high-density information displays that remain legible through generous whitespace and a disciplined 4px grid.

## Colors

The palette is designed for high-contrast legibility and functional signaling. 

- **The Canvas:** We avoid pure white (#FFFFFF). Use `Paper` (#F7F6F3) for the global background and `Subtle` (#F3F4F6) for secondary sections or input fields to create a soft layered effect.
- **The Ink:** `Ink` (#0F1117) provides a deep, authoritative weight for all primary headings and heavy UI elements.
- **Action & Status:** `Blue` drives the primary action lifecycle. Status colors (`Green`, `Amber`, `Red`) are used exclusively for semantic state indication, ensuring the user can scan scheduling dashboards instantly for urgency.
- **The Signature Texture:** Use `Border-warm` (#E8E6E1) for the `.calendar-texture` (horizontal lines 8px apart), applying it to sidebar backgrounds or empty states to reinforce the "scheduling" metaphor.

## Typography

This design system utilizes a tri-font strategy to separate intent:

1.  **Plus Jakarta Sans** is the voice of the brand. Use it for all headings and large display text. Its soft, rounded terminals provide the "Warmth" in our precision.
2.  **Inter** is the workhorse for all body copy, form labels, and UI controls. It ensures maximum legibility at small sizes across all browsers.
3.  **JetBrains Mono** is reserved for tabular data, time slots, and booking references. This monospaced font signals "Data Precision" and helps users compare times and dates in the calendar view quickly.

## Layout & Spacing

The layout is built on a strict **4px base unit**. All padding, margins, and heights must be multiples of 4.

- **Grid:** Use a 12-column fluid grid for desktop with 24px gutters. For mobile, shift to a single-column layout with 16px side margins.
- **Rhythm:** Use `md` (16px) for standard component spacing and `xl` (32px) to separate logical sections of a page.
- **Containers:** Dashboard content should be contained within a maximum width of 1440px to prevent excessive line lengths in data tables.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and three specific shadow levels:

- **Surface Layering:** The primary page background is `Paper`. Content cards and containers use white (#FFFFFF) to pop against the warm background.
- **Shadow-Card (Subtle):** Use `0 2px 4px rgba(15, 17, 23, 0.04)` for standard cards. This defines the edge without creating a heavy "floating" effect.
- **Shadow-Lifted (Elevated):** Use `0 8px 16px rgba(15, 17, 23, 0.08)` for cards on hover or active dropdown menus.
- **Shadow-Modal (Deep):** Use `0 20px 40px rgba(15, 17, 23, 0.12)` for modals and centered dialogs to pull them to the top of the stack.
- **Borders:** Dividers and static card borders use `Border-warm`. Use 1px solid for a crisp, professional look.

## Shapes

The design system uses a progressive rounding scale to reflect the size of the container:

- **Interactive Elements:** Buttons and Input fields use a **Soft (8px)** radius to feel modern but structured.
- **Content Containers:** Standard cards use **12px** to provide a distinct "package" feel.
- **Structural Overlays:** Modals use **16px** for a friendly, approachable appearance when interrupting the user flow.
- **Status Tags:** Always use **Full/Pill** rounding to differentiate them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid `Blue-primary` with White text. Height 40px, 8px radius.
- **Ghost:** `Ink` text with a 1px `Border-warm` stroke. No background fill unless hovered (then `Subtle`).
- **States:** Hovering a primary button should trigger `Blue-dark`. All transitions are 200ms ease-in-out.

### Status Badges
- Small text (12px), bold, all-caps.
- Background: 10% opacity of the status color (e.g., `Green` for Confirmed).
- Border: 1px solid at 20% opacity of the status color.
- Text: Full saturation status color.

### Provider Card
An asymmetric card layout:
- **Header:** A category pill (e.g., "Medical") top-left.
- **Visuals:** An overlapping 48px circular avatar that breaks the top border of the main content area.
- **Body:** Business Name in `Headline-md`, followed by location (with icon) and rating (star icon in `Amber`).
- **Footer:** Separated by a 1px `Border-warm` line, containing the "Book Now" CTA.

### Input Fields
- Height 44px, background `Subtle`, 1px `Border-warm`.
- On Focus: Border changes to `Blue-primary` with a 2px outer glow of `Blue-tint`.

### Calendar Grid
- Background features the `.calendar-texture` (horizontal lines 8px apart in `Border-warm`).
- Time slots should be rendered in `JetBrains Mono` for vertical alignment across different rows.