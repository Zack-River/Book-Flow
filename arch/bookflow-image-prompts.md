# BookFlow — Full Image Generation Brief
> Use with: Midjourney v6, DALL·E 3, Stable Diffusion XL, or Figma AI
> One prompt per image. Order = priority for portfolio impact.

---

## DESIGN SYSTEM (generate these first — everything else references them)

---

### [IMG-00] Design Token Sheet
**Purpose:** Master reference for the entire visual system

```
A clean flat-lay design token sheet on a warm off-white background (#F7F6F3).
Left column shows color swatches in a vertical strip: deep ink (#0F1117), paper white (#F7F6F3),
booking blue (#2563EB), confirmed green (#10B981), pending amber (#F59E0B), cancelled red (#EF4444),
warm border grey (#E8E6E1). Each swatch is a rounded rectangle 80x40px with its hex code below in
JetBrains Mono font. Center column shows typography scale: "Book your next session" in Plus Jakarta
Sans 800 weight at 48px, "Find providers near you" at 24px medium, body copy at 16px Inter regular,
and a time label "09:30 AM" in JetBrains Mono 14px. Right column shows spacing scale as horizontal
bars (4px, 8px, 16px, 24px, 32px, 48px, 64px) labeled. Bottom row shows component states: a primary
blue button (default, hover, disabled), an input field (empty, focused, error), and a status badge
in each of the 3 states (Confirmed green, Pending amber, Cancelled red). Clean, clinical, professional.
No shadows. Minimal. White label "BookFlow Design System v1.0" in top left corner.
```

---

## LANDING PAGE SCREENS

---

### [IMG-01] Landing Page — Full Hero (Above the Fold)
**Purpose:** Hero section, the most important image in the portfolio

```
A high-fidelity UI screenshot of a SaaS booking platform landing page hero section, displayed in a
modern browser frame on a warm off-white background (#F7F6F3). Light mode.

Navigation bar at top: logo "BookFlow" in Plus Jakarta Sans bold on the left, nav links
(Features, Providers, Pricing) in the center in Inter medium grey, and two buttons on the right:
"Log in" as ghost text button, "Get started" as a solid booking blue (#2563EB) rounded button.

Hero section: large asymmetric two-column layout. Left column takes 55% of width.
Eyebrow label: small pill badge in light blue tint with text "Booking infrastructure for service businesses"
in Inter 13px. Main headline in Plus Jakarta Sans 800 weight, 56px, dark ink (#0F1117):
"Every appointment, perfectly placed." Subheadline below in Inter 18px medium grey (#6B7280):
"One platform for clinics, salons, gyms, consultants and more. Clients book. You focus."
Below: two CTA buttons side by side — "Start booking free" in solid blue (#2563EB) and
"See live demo" in ghost/outline style. Below buttons: a row of social proof logos in greyscale —
5 fictional business icons labeled "SmileCare", "GlowStudio", "FitZone", "LexConsult", "HomeFixPro"
with caption "Trusted by 500+ service businesses".

Right column (45%): A stacked UI card mockup floating with subtle shadow. The card shows a
"Booking Confirmation" widget: provider avatar circle, provider name "Dr. Sarah Ahmed", service
"Dental Checkup · 45 min", date and time in JetBrains Mono "Thu 27 Jun · 10:30 AM", price
"EGP 350", and a large green confirmed badge. Behind it, slightly offset and at an angle, a second
card showing a weekly calendar mini-view with colored slot blocks. The cards cast clean drop shadows,
no glow, no blur excess. Subtle decorative element behind both cards: ultra-thin horizontal lines
spaced 8px apart covering the right side, like invisible calendar grid lines, in #E8E6E1.

Bottom of screen: a thin warm divider line, then partial view of the next section.
Overall mood: professional, warm precision. Not a tech startup. A real tool for real businesses.
```

---

### [IMG-02] Landing Page — Categories Section
**Purpose:** Show the generic/multi-vertical nature of the product

```
A UI section from the BookFlow landing page, isolated on warm off-white background. Light mode.
Section header centered: eyebrow text "BUILT FOR YOUR INDUSTRY" in Inter 11px uppercase tracking-widest
grey, below it headline "One platform, any service business" in Plus Jakarta Sans 700 32px dark ink.

Below: a 4x2 grid of category cards. Each card is a rounded rectangle (border-radius 16px) with a
warm white background and a thin warm border (#E8E6E1). Each card contains: a simple line-art icon
at top (NOT filled, just strokes), a category name in Plus Jakarta Sans 600, and 2-3 example use
cases in Inter 13px grey below.

The 8 categories:
1. Medical & Dental — stethoscope icon — "Checkups, cleanings, consultations"
2. Beauty & Salons — scissors icon — "Haircuts, facials, nail care"
3. Fitness & Coaching — dumbbell icon — "Personal training, classes, nutrition"
4. Legal & Consulting — briefcase icon — "Business, legal, financial advice"
5. Home Services — wrench icon — "Plumbing, electrical, cleaning"
6. Education & Tutoring — book icon — "1-on-1 lessons, workshops, courses"
7. Wellness & Therapy — leaf icon — "Massage, counseling, yoga"
8. Real Estate — key icon — "Property tours, agent meetings"

The booking blue card (first one, Medical) is highlighted in a light blue tint background (#EFF6FF)
with a blue icon and blue category name to show active/featured state. All others are neutral white.
Clean grid, good whitespace. Professional and versatile feeling.
```

---

### [IMG-03] Landing Page — How It Works + Stats Bar
**Purpose:** Trust + process clarity

```
Two stacked sections of the BookFlow landing page. Light mode, warm off-white background.

Top section "How it works":
Three columns, no numbered badges (the steps are connected by a thin dashed horizontal line between
them instead, which is more honest to the flow). Each column has:
- A small square icon container in light blue tint
- A step title in Plus Jakarta Sans 600 20px
- A short description in Inter 15px grey

Step 1: "Set your availability" — calendar icon — "Define when you're open. Set recurring schedules or
custom hours per day."
Step 2: "Clients book online" — cursor-click icon — "Share your profile link. Clients pick a slot and
confirm in under 2 minutes."
Step 3: "Show up, get paid" — checkmark icon — "You get notified. They get reminded. No-shows drop."

Bottom section (dark band #0F1117):
Four stat columns on dark background with warm white text:
"12,000+" — "Bookings managed monthly"
"500+" — "Active service providers"  
"3 min" — "Average time to book"
"98%" — "Booking completion rate"
Stats in Plus Jakarta Sans 800 48px booking blue (#2563EB). Labels below in Inter 14px #9CA3AF.
Thin vertical dividers in #1F2937 between stats.
```

---

### [IMG-04] Landing Page — Provider Card Grid (Featured Providers)
**Purpose:** Show the marketplace feel

```
A section of the BookFlow landing page showing a 3-column grid of provider profile cards.
Background: warm off-white. Section title: "Top-rated providers near you" in Plus Jakarta Sans 700.

Each provider card has:
- Top: a wide thumbnail image area (abstract colored gradient representing the business type,
  no real photos — use geometric color blocks) with a category pill badge overlaid
- Provider avatar: circle photo placeholder in bottom-left of thumbnail, overlapping the edge
- Card body: provider business name in Plus Jakarta Sans 600, location in Inter 13px grey with
  pin icon, star rating (4.8 ★) with review count "(124 reviews)", a row of 3 service tags as
  small pills, price range "From EGP 150", and a "Book now" button in booking blue full width.

Three providers shown:
Card 1: "SmileCare Dental Clinic" · Cairo, Maadi · 4.9★ · Dental, Checkup, Whitening · From EGP 200
  Thumbnail: soft blue-to-teal gradient
Card 2: "Glow Beauty Studio" · Cairo, Zamalek · 4.7★ · Hair, Facial, Nails · From EGP 150
  Thumbnail: soft rose-to-peach gradient  
Card 3: "FitZone Personal Coaching" · Cairo, Heliopolis · 4.9★ · Training, Nutrition, HIIT · From EGP 300
  Thumbnail: soft slate-to-indigo gradient

Cards have subtle hover state shown on Card 2: slight scale-up (1.02), blue border ring, shadow lift.
Clean spacing. No clutter. The "Book now" button on Card 2 is in solid blue (hover state).
```

---

## BOOKING FLOW SCREENS

---

### [IMG-05] Provider Profile Page
**Purpose:** The key conversion page

```
Full-page UI screenshot of the BookFlow provider profile page in a browser frame. Light mode.

Top section (full width, dark #0F1117 background):
Left side: large provider business name "SmileCare Dental Clinic" in Plus Jakarta Sans 800 white 40px.
Below: category tag pill "Medical & Dental" in blue tint, location "Maadi, Cairo" with pin icon grey,
"4.9 ★ · 124 reviews · Member since 2023" in Inter 14px grey.
Right side: a circle avatar/logo placeholder in a white circle. Two action buttons: "Book appointment"
in solid blue, "Save" with heart icon outline.

Below the dark header: two-column layout on white/warm background.
Left column (65%): 
  - "About" section: 3 lines of bio text
  - "Services" section: vertical list of service cards, each showing service name, duration badge
    (e.g., "45 min" in mono font), price ("EGP 350"), and "Select" button ghost style
    Services: Dental Checkup · Teeth Cleaning · Teeth Whitening · Root Canal
  - "Reviews" section: 3 review cards with star rating, customer name initial avatar, review text,
    and date

Right column (35%): sticky booking widget card with white background and border.
  Widget header: "Book a session" in Plus Jakarta Sans 600.
  Selected service: "Dental Checkup · 45 min · EGP 350" in a blue tint row.
  Mini calendar for June 2025 with available dates highlighted in blue, past dates greyed.
  Selected date "Thursday, 27 Jun" highlighted.
  Below: "Available times" label, then a grid of time pill buttons in 3 columns:
  "09:00" "09:30" "10:00" "10:30" "11:00" — "10:30" is selected (solid blue), others are ghost outline.
  Below: "Continue" button in solid blue, full width.
  Small text below: "Free cancellation up to 24 hours before"
```

---

### [IMG-06] Booking Wizard — 3-Step Flow
**Purpose:** Show the core UX, the most important interaction

```
A triptych showing the 3 steps of the BookFlow booking wizard side by side at reduced scale,
connected by arrow indicators. Clean white background behind all 3 screens. Browser frames shown.

Step 1 — "Choose a service":
Clean modal/page with progress indicator at top: 3 dots connected by line, dot 1 is filled blue,
dots 2 and 3 are grey. Title "What do you need?" in Plus Jakarta Sans 700.
4 service option cards in vertical list, each with: service name bold, description grey small,
duration pill in JetBrains Mono "45 min", price right-aligned in blue "EGP 350".
"Dental Checkup" card has a blue border and blue checkmark — selected state.
"Continue →" button in solid blue at bottom.

Step 2 — "Pick a time":
Progress dot 2 filled. Title "When works for you?" 
Left half: mini calendar for June 2025. Available days highlighted with subtle blue dot below date.
Selected day "27" has solid blue circle background white text.
Right half: scrollable time grid. Times in JetBrains Mono. "10:30 AM" selected in solid blue.
Unavailable times shown as grey strikethrough.
Below: summary bar "Dental Checkup · Thu 27 Jun · 10:30 AM · 45 min"

Step 3 — "Confirm booking":
Progress dot 3 filled. Title "Almost there."
Summary card with soft blue background: provider info row (avatar + name), service + time + date,
price breakdown (Service: EGP 350, Booking fee: EGP 0, Total: EGP 350 bold).
"Notes for provider" textarea, empty with placeholder "Anything we should know? (optional)"
"Confirm booking" button solid blue full width.
Small checkbox below: "Send me a reminder 1 hour before"

Arrows between steps show the flow direction.
```

---

### [IMG-07] Booking Confirmation Screen
**Purpose:** The success state, emotional payoff moment

```
Full-width UI screen showing BookFlow's post-booking confirmation page. Centered layout on warm
off-white background. Clean, spacious, minimal.

At top center: a large animated-looking checkmark circle in confirmed green (#10B981), radius 64px,
with a white checkmark inside. Below it: "You're all booked." in Plus Jakarta Sans 800 32px dark ink.
Subtext: "A confirmation has been sent to your email." in Inter 16px grey.

Below: a clean booking summary card with white background, rounded corners, subtle shadow:
  Header row: "Booking #BF-2024-00847" in JetBrains Mono 12px grey, right-aligned date.
  Provider row: avatar circle + "SmileCare Dental Clinic" bold + "Dr. Sarah Ahmed"
  Service row: icon + "Dental Checkup · 45 minutes"
  Date/time row: calendar icon + "Thursday, 27 June 2025" + clock icon + "10:30 AM" in JetBrains Mono
  Location row: pin icon + "15 Tahrir Street, Maadi, Cairo"
  Price row: "Total paid: EGP 350" right-aligned in dark ink bold.
  Divider line.
  Status: large "CONFIRMED" badge in green, centered.

Two action buttons below the card:
"Add to calendar" — ghost outline
"View my bookings" — solid blue

Bottom note: "Need to reschedule? You can change your booking up to 24 hours before the appointment."
in small grey italic.

Very clean. Confident. Not cluttered with noise.
```

---

## CUSTOMER DASHBOARD

---

### [IMG-08] Customer Dashboard — My Bookings
**Purpose:** Customer's home base

```
Full UI screenshot of the BookFlow customer dashboard "My Bookings" page. Light mode.
Sidebar navigation on left (64px wide, icon-only with tooltips): dashboard icon, bookings icon
(active, blue), profile icon, settings icon. Top right: user avatar circle with dropdown.

Main content area:
Page title "My Bookings" in Plus Jakarta Sans 700 28px.
Below: horizontal tab bar — "Upcoming (3)" | "Past (12)" | "Cancelled (1)" — "Upcoming" is active
with blue underline.

Booking cards in vertical list (3 cards shown):

Card 1 (closest appointment — visually prominent):
  Left: colored left border stripe in green (#10B981). White card background.
  Top row: "SmileCare Dental Clinic" in Plus Jakarta Sans 600, "CONFIRMED" pill badge in green.
  Middle row: "Dental Checkup" grey, "Thu 27 Jun · 10:30 AM" in JetBrains Mono blue.
  Bottom row: "EGP 350" right, two ghost buttons "Reschedule" and "Cancel" small.

Card 2:
  Left border in amber (#F59E0B). "PENDING" badge in amber.
  "Glow Beauty Studio · Hair Treatment · Sat 29 Jun · 14:00" in mono.

Card 3:
  Left border in blue. "CONFIRMED" badge in green.
  "FitZone Coaching · Personal Training · Mon 1 Jul · 07:30"

Below the list: "View past bookings →" link in blue.

Right side panel (300px): "Upcoming reminder" card with next appointment highlighted,
showing a countdown "in 2 days" and quick links.
```

---

## PROVIDER DASHBOARD

---

### [IMG-09] Provider Dashboard — Calendar View
**Purpose:** The most complex and impressive screen

```
Full UI screenshot of the BookFlow provider dashboard, Calendar view. Light mode.
Left sidebar: brand logo top, then vertical nav with icons and labels — Dashboard, Calendar (active),
Bookings, Availability, Revenue, Settings. Sidebar background #F7F6F3 warm. Active item has blue
left border and blue tint background.

Top bar: "June 2025" with left/right chevron arrows. View toggle pills: "Day | Week | Month" — Week is active.
Right side of top bar: "+ Add availability" button in solid blue.

Main area: a full weekly calendar grid (Mon 23 — Sun 29 June).
Columns = days. Rows = time slots from 08:00 to 18:00, each row 30 minutes.
Time labels on left in JetBrains Mono 12px grey: "08:00", "08:30", "09:00", etc.
Thin horizontal lines between every row in #E8E6E1.

Booked slots (booking cards inside the calendar):
- Mon 23, 09:00–09:45: blue card "Layla M. · Dental Checkup" with small avatar initial "L"
- Mon 23, 11:00–11:30: blue card "Omar F. · Teeth Cleaning"
- Tue 24, 10:30–11:15: blue card "Sara K. · Checkup"
- Wed 25, 09:00–10:00: blue card (taller) "Ahmed N. · Root Canal · 60 min"
- Thu 26, 14:00–14:45: blue card "Nour H. · Whitening Consultation"
- Fri 27, empty — light striped pattern across all slots (day off / unavailable)
- Sat 28: 3 cards in morning

Available but unbooked slots shown as very light blue (#EFF6FF) tint with no content.
Unavailable slots are white.
Currently hovered slot (Wed 25, 11:00): a soft blue tooltip "Available — click to add"
Very professional. Looks like a real medical/business scheduling tool.
```

---

### [IMG-10] Provider Dashboard — Revenue Overview
**Purpose:** The business value proof screen

```
Full UI screenshot of the BookFlow provider Revenue Overview page. Light mode. Same sidebar as IMG-09.

Top: page title "Revenue Overview" + date range selector showing "June 2025" as a dropdown/button.

Stats row (4 cards):
Card 1: "EGP 12,450" large in Plus Jakarta Sans 800 blue, label "This month" grey Inter below,
  "+18% vs last month" in small green with up arrow.
Card 2: "84" large dark ink, "Bookings completed", "+12% vs last month" green.
Card 3: "EGP 148" dark ink, "Avg. per booking", neutral (no change indicator).
Card 4: "6" dark ink, "Cancellations this month", "-3 vs last month" green (improvement).

Main chart section: a clean bar chart (Recharts style) showing "Daily revenue — June 2025".
X axis: dates 1–30 in Inter 12px. Y axis: EGP amounts. Bars in booking blue (#2563EB),
slightly transparent. Bars hover shows tooltip "EGP 850 · 3 bookings". Overall trend is upward.
Chart has clean white background, no border, minimal gridlines in #F3F4F6.

Below chart: two columns.
Left: "Top Services by Revenue" — horizontal bar chart showing:
  Dental Checkup · EGP 5,200 (longest bar, blue)
  Teeth Whitening · EGP 3,800
  Root Canal · EGP 2,100
  Teeth Cleaning · EGP 1,350
  
Right: "Recent Transactions" table — columns: Customer, Service, Date, Amount, Status.
5 rows of data. Last column has status badges (Completed green, Pending amber).
Table rows alternate between white and very light warm grey for readability.
```

---

## ADMIN DASHBOARD

---

### [IMG-11] Admin Dashboard — Main Overview
**Purpose:** Show the platform-level control

```
Full UI screenshot of the BookFlow admin dashboard main page. Light mode. Wider sidebar with
text labels: BookFlow logo + "Admin Panel" label, then nav items: Overview (active), Users,
Providers, Bookings, Analytics, Settings. Sidebar background: dark ink (#0F1117) with white icons
and text. Active item: blue left border + slightly lighter dark bg row. This creates a two-tone
layout: dark sidebar, light content area.

Content area top: "Good morning, Zack" greeting in Plus Jakarta Sans 700, date below in grey.

Top stats row (5 cards on white background with border):
"2,847" — Total users — +34 this week
"412" — Active providers — 8 pending approval
"1,203" — Bookings this month — +18% vs last month
"EGP 284,000" — Platform revenue — +22% vs last month
"98.2%" — Booking success rate — -0.3% (red small indicator)

Middle section: two columns.
Left (60%): "Recent Bookings" table with columns: ID (mono font), Customer, Provider, Service,
Date, Amount, Status. 6 rows. Status column uses color badges.

Right (40%): "Pending Approvals" card — 3 provider cards with avatar, business name, category,
and "Approve" (blue) / "Reject" (red ghost) buttons. Red dot badge on "Providers" in sidebar
showing "8".

Bottom section: two small cards.
"New users this week" — small line chart (sparkline).
"Top provider today" — provider name, bookings count, revenue.

Platform feels in control. Admin has full visibility.
```

---

### [IMG-12] Admin — Providers Management Table
**Purpose:** Show the data management capabilities

```
Full UI screenshot of the BookFlow admin Providers page. Dark sidebar same as IMG-11.

Content area: page title "Providers" + subtitle "412 active · 8 pending approval"
Action row: search input "Search providers..." left, filter dropdowns "Category ▾" "Status ▾" center,
"+ Add provider" blue button right.

Tab bar: "All (420)" | "Active (412)" | "Pending (8)" | "Inactive (0)"
"Pending" tab has an orange dot indicator.

Main table, clean, striped rows:
Columns: Provider (avatar + name + email) | Category | Location | Bookings | Revenue | Status | Actions

5 rows:
1. SmileCare Dental · clinic@smilecare.eg | Medical | Cairo, Maadi | 284 bookings | EGP 42,600 | Active (green badge) | ··· menu
2. Glow Beauty Studio · glow@beauty.eg | Beauty | Cairo, Zamalek | 198 | EGP 29,700 | Active (green) | ···
3. FitZone Coaching · fit@zone.eg | Fitness | Cairo, Heliopolis | 312 | EGP 46,800 | Active (green) | ···
4. LexConsult Legal · lex@consult.eg | Consulting | Cairo, Downtown | 87 | EGP 52,200 | Active (green) | ···
5. HomeFixPro Services · fix@homepro.eg | Home Services | Giza | 23 | EGP 3,450 | Pending (amber badge) | Approve / Reject buttons visible

Table footer: "Showing 1–5 of 420" + pagination controls.
Column headers have sort arrows on hover (Revenue column currently sorted descending, arrow showing).
Row 5 (Pending) has very subtle amber-tinted background to draw attention.
Clean, dense, functional. This is real admin UI.
```

---

## MOBILE SCREENS

---

### [IMG-13] Mobile — Landing + Booking Flow (3-screen spread)
**Purpose:** Show responsiveness, crucial for client work

```
Three mobile phone mockups (iPhone 15 Pro style frames, no brand logo visible) displayed side by side
on a clean light grey background with subtle shadow beneath each phone.

Phone 1 — Mobile Landing Hero:
  Stacked layout. Full-width hero section. Logo and hamburger menu in top bar.
  Headline "Every appointment, perfectly placed." in Plus Jakarta Sans 800, 32px, 2 lines.
  Subtext 1 line. "Get started" blue button full width. Below: search bar full width
  "Search providers, services..." with blue search icon. Category chips scrollable horizontally:
  Medical | Beauty | Fitness | Consulting | Home | ...
  One provider card visible at bottom (partial), showing it's a scrollable list.

Phone 2 — Mobile Slot Picker:
  Top bar: back arrow + "Choose a time" title + step "2/3" right.
  Month calendar full width, compact. Selected date "27" in blue circle.
  Below: "Available times — Thursday 27 Jun" label.
  Time slot grid: 4 columns of time pill buttons.
  "10:30 AM" selected in solid blue. Others in outline.
  Bottom sticky bar: "Thu 27 Jun · 10:30 AM" summary + "Continue" blue button full width.

Phone 3 — Mobile My Bookings:
  Top: "My Bookings" title + avatar top right.
  Tab bar: Upcoming | Past | Cancelled (full width tabs, touch-friendly)
  Booking card full width: colored left stripe, provider name bold, service + time in mono,
  status badge, reschedule/cancel buttons stacked or side by side.
  Three booking cards visible, stacked.

Phones shown at slight angle (isometric/perspective view, very slight tilt) for visual appeal.
Each phone has a crisp, clean screen with no reflections or excessive glare.
```

---

## MARKETING / CASE STUDY ASSETS

---

### [IMG-14] Full Product Overview — Hero Mockup (Portfolio Hero Image)
**Purpose:** The single image that represents the entire project in your portfolio

```
A wide-format product showcase image (16:9 ratio, no browser chrome) on a dark ink background (#0F1117).
Centered composition with a slight upward tilt/perspective.

Large laptop screen in center showing the Provider Calendar dashboard (IMG-09 layout).
To the left, slightly in front: an iPhone showing the Mobile Booking screen (IMG-13 Phone 2).
To the right, slightly in front: a second iPhone showing the Booking Confirmation screen (IMG-07).

All screens are crisp and detailed, no blur. Subtle ambient glow in booking blue (#2563EB) underneath
the screens, like a soft table reflection. No harsh lighting.

Bottom center: "BookFlow" wordmark in Plus Jakarta Sans 800 white, large. Below it: "Booking
infrastructure for service businesses" in Inter 16px light grey.
Bottom right corner: "bookflow.app" in JetBrains Mono 13px muted grey.

This is a premium SaaS product shot. Think Linear, Vercel, Clerk.dev landing page hero energy,
but warmer and more human.
```

---

### [IMG-15] Case Study Feature Highlight — Before/After
**Purpose:** Portfolio case study storytelling image

```
A split-screen comparison image. Clean white background. Center divider: thin vertical line
with a "VS" circle badge in the middle.

Left side (the BEFORE — messy, pain):
  A chaotic WhatsApp-style chat mockup showing a conversation about booking:
  Customer: "Hi is 10am available tomorrow?"
  Provider: "Let me check..." [long pause indicator]
  Customer: "Actually can we do 11?"
  Provider: "Sorry that's taken, how about 2pm?"
  Customer: "Fine"
  [next day] Customer: "Wait is it confirmed?"
  Top label above this: "Before BookFlow" in grey Inter.
  Emoji: 😩 shown subtly.
  Background of left side: very light warm red tint (#FEF2F2).

Right side (the AFTER — clean):
  The BookFlow booking confirmation card from IMG-07 in miniature.
  Clean, green confirmed badge, all info structured.
  One interaction: customer visited profile → picked slot → confirmed. Done.
  Top label: "With BookFlow" in booking blue.
  Emoji: ✓ as a green circle.
  Background of right side: very light green tint (#F0FDF4).

Bottom caption: "From 8 messages to 1 click. Your clients book in under 2 minutes."
in Plus Jakarta Sans 600 centered.
```

---

## USAGE NOTES

### For Midjourney
Add to every prompt: `--ar 16:9 --style raw --v 6 --q 2`
For mobile screens: `--ar 9:16`
For the design token sheet: `--ar 4:3`

### For DALL·E 3
Prefix every prompt with:
"Create a photorealistic high-fidelity UI screenshot mockup. No watermarks. Clean professional
design. Light mode web application. "

### For Figma AI / Galileo AI
These prompts work as design briefs — paste as the description and let the tool generate
the layout, then apply the color tokens manually.

### Render Order (priority if time is limited)
1. IMG-14 — Portfolio hero (most important)
2. IMG-06 — Booking wizard triptych
3. IMG-01 — Landing hero
4. IMG-09 — Provider calendar
5. IMG-11 — Admin dashboard
6. IMG-07 — Confirmation screen
7. IMG-13 — Mobile spread
8. IMG-05 — Provider profile
9. IMG-08 — Customer dashboard
10. IMG-10 — Revenue overview
11. IMG-04 — Provider cards
12. IMG-15 — Before/after
13. IMG-03 — How it works
14. IMG-02 — Categories
15. IMG-00 — Design tokens (reference only)
16. IMG-12 — Admin table
