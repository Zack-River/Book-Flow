# BookFlow — Sequential Screen Prompts for Stitch
> بعد ما الـ Landing Page اتعملت، ابعت الـ prompts دي واحد واحد بالترتيب.
> كل prompt = conversation turn جديد في Stitch.
> لا تبعت أكتر من prompt في نفس الوقت.

---

## PROMPT 2 — Provider Directory Page

```
Continue building BookFlow using the exact same design system already established (warm off-white #F7F6F3 background, #0F1117 ink text, #2563EB booking blue, Plus Jakarta Sans display, Inter body, JetBrains Mono for times/prices).

Build the **Provider Directory page** at `/providers`.

Layout:
- Same sticky navbar from the landing page at top
- Two-column layout below: filter sidebar (280px fixed left) + results grid (flex-1 right)

Filter Sidebar (sticky, top-20):
- Search input: "Search providers..." with search icon, debounced
- Section "Category" — checkboxes for all 8 categories with count badges:
  Medical (42), Dental (38), Beauty (67), Fitness (51), Consulting (29), Education (18), Home Services (34), Wellness (23)
- Section "Minimum rating" — 5-star clickable star filter (show 4★ as default selected)
- Section "Sort by" — radio group: Most Rated / Most Booked / Newest
- "Clear all filters" link at bottom in blue

Results area:
- Results count header: "Showing 302 providers" in text-sm text-muted
- 3-column card grid (gap-6)

Provider Card component (use this exact structure for all 6 cards shown):
- Top thumbnail area (h-48): colored gradient background, no real photos
  - Category pill badge top-right: white bg, text-xs, rounded-full, shadow-sm
  - Provider avatar circle (h-12 w-12) overlapping bottom edge of thumbnail by 50%, border-2 border-white
- Card body (p-4 pt-8):
  - Business name: font-semibold text-base text-ink, truncate
  - Location row: MapPin icon (12px) + city text, text-caption text-muted
  - Rating row: filled star icon (amber) + "4.9" font-medium + "(124 reviews)" text-caption text-muted
  - Service tags row: max 3 pills, bg-subtle text-xs rounded-full px-2 py-0.5
  - Divider line border-border
  - Bottom row: "From EGP 150" text-sm font-mono text-ink left + "Book now →" primary blue button right (text-sm)
- Card hover: shadow-lifted, -translate-y-0.5, border-blue/30, transition-all duration-150

Show exactly 6 provider cards with this seed data:
1. SmileCare Dental Clinic | Maadi, Cairo | 4.9★ (124) | gradient: from-sky-400 to-blue-600 | tags: Checkup, Cleaning, Whitening | From EGP 200
2. Glow Beauty Studio | Zamalek, Cairo | 4.7★ (89) | gradient: from-rose-400 to-pink-500 | tags: Hair, Facial, Nails | From EGP 150
3. FitZone Personal Coaching | Heliopolis, Cairo | 4.9★ (201) | gradient: from-emerald-400 to-green-600 | tags: Training, Nutrition, HIIT | From EGP 300
4. LexConsult Legal | Downtown Cairo | 4.7★ (56) | gradient: from-violet-400 to-purple-600 | tags: Consultation, Contracts | From EGP 600
5. HomeFixPro Services | Giza | 4.5★ (43) | gradient: from-orange-400 to-amber-500 | tags: Plumbing, Electrical, AC | From EGP 200
6. ZenWellness Studio | New Cairo | 4.8★ (77) | gradient: from-teal-400 to-cyan-600 | tags: Massage, Yoga, Therapy | From EGP 250

Below the grid: pagination — "← Previous | Page 1 of 26 | Next →" centered, ghost buttons
```

---

## PROMPT 3 — Provider Profile Page

```
Continue BookFlow with the same design system. Build the **Provider Profile page** for SmileCare Dental Clinic at `/providers/smilecare-dental`.

Layout: Full-width dark header + two-column content below (65% left, 35% right sticky widget)

DARK HEADER (bg-ink #0F1117, py-12):
- Left side:
  - Small breadcrumb: "Providers / Dental" text-muted text-sm
  - Business name: "SmileCare Dental Clinic" in Plus Jakarta Sans 800 40px white
  - Row below: category pill "Dental" (blue tint bg, blue text) + "📍 Maadi, Cairo" text-muted-300 + "4.9 ★" in amber + "(124 reviews)" text-muted + "· Member since 2023" text-muted
  - Two buttons: "Book appointment" primary blue + "♡ Save" ghost white border
- Right side: provider avatar circle 80px (sky-to-blue gradient) with white border-4

MAIN CONTENT (bg-paper, max-w-6xl mx-auto, two-column):

LEFT COLUMN:
1. "About" card (bg-white border border-border rounded-xl p-6 shadow-card):
   Bio text: "Modern dental care with state-of-the-art equipment and a gentle approach. Dr. Sarah Ahmed and her team provide comprehensive dental services for the whole family in a comfortable, anxiety-free environment."

2. "Services" card (same card style):
   Title "Services" font-semibold text-lg mb-4
   Four service rows, each:
   - Service name font-medium text-ink
   - Description text-sm text-muted below name
   - Duration badge right: "45 min" bg-subtle text-xs font-mono rounded-full px-2 py-0.5
   - Price right: "EGP 350" font-mono font-semibold text-ink
   - "Select →" ghost button right (text-sm)
   - Divider between rows
   Services:
   a. Dental Checkup | Full oral examination and X-ray assessment | 45 min | EGP 350
   b. Teeth Cleaning | Professional scaling and polishing | 30 min | EGP 250
   c. Teeth Whitening | Laser whitening for a brighter smile | 90 min | EGP 800
   d. Root Canal | Single root canal treatment | 90 min | EGP 1,500

3. "Opening Hours" card:
   Mon–Thu: 09:00 – 18:00
   Fri: 09:00 – 13:00
   Sat: 10:00 – 16:00
   Sun: Closed (show in red text)
   Times in JetBrains Mono

4. "Reviews" card:
   Three review rows with: initial-avatar circle (colored bg) + customer name + star rating + date + review text
   a. "L" (blue) | Layla M. | ★★★★★ | 2 weeks ago | "Professional and gentle. The whitening results were amazing!"
   b. "O" (green) | Omar F. | ★★★★★ | 1 month ago | "Best dental experience I've had. Highly recommend Dr. Sarah."
   c. "N" (purple) | Nour H. | ★★★★☆ | 1 month ago | "Very clean clinic, friendly staff. Will definitely come back."

RIGHT COLUMN (sticky top-24):
Booking Widget card (bg-white border border-border rounded-xl shadow-lifted p-6):
- Header: "Book a session" Plus Jakarta Sans 600 text-lg
- Selected service row (blue tint bg-blue-light rounded-lg p-3): "Dental Checkup · 45 min · EGP 350" with checkmark icon — shows when service selected from left
- Label "Select a date" text-sm font-medium mt-4
- Mini calendar: June 2025, compact grid, available days have small blue dot under number, past days greyed, selected day "27" has solid blue circle white text
- Label "Available times" text-sm font-medium mt-4 (shows after date selected)
- Time grid 3 columns: "09:00" "09:30" "10:00" "10:30" "11:00" "11:30" "14:00" "14:30" "15:00"
  "10:30" is selected (solid blue bg white text), "09:00" and "09:30" are strikethrough text-muted (already booked)
- Divider
- "Continue →" primary blue button full width mt-4 (active, not disabled)
- Fine print below: "Free cancellation up to 24 hours before your appointment" text-caption text-muted text-center
```

---

## PROMPT 4 — Booking Wizard (3 Steps)

```
Continue BookFlow with the same design system. Build the **Booking Wizard** — show all 3 steps as separate screens in one view, displayed as a horizontal triptych (3 browser-frame-like panels side by side at 75% scale) for design review purposes. Clean white background behind the panels.

GLOBAL WIZARD LAYOUT (each step):
- No sidebar. Centered max-w-2xl. White bg-white content area with rounded-2xl shadow-modal.
- Progress indicator at top: 3 circles connected by a line. Circle = 32px, number inside, completed = solid blue with white checkmark, current = solid blue with white number, upcoming = border-border bg-white grey number.
- Step label below each circle: "Service", "Date & Time", "Confirm"

STEP 1 — "Choose a service":
- Title: "What do you need?" Plus Jakarta Sans 700 28px
- Subtitle: "SmileCare Dental Clinic" text-muted text-sm
- 4 service option cards (full width, border rounded-xl p-4 cursor-pointer):
  - Service name font-semibold
  - Description text-sm text-muted
  - Right side: duration badge mono + price font-mono font-semibold text-ink
  - "Dental Checkup" card: selected state (border-blue bg-blue-light, blue checkmark circle right)
  - Other 3: default white border-border hover state shown on "Teeth Cleaning" (border-blue/50 shadow-sm)
- "Continue →" primary blue button full width at bottom

STEP 2 — "When works for you?":
- Title: "Pick a date and time"
- Two-column layout:
  Left: mini calendar for June 2025. Selected date 27 has solid blue circle.
  Right: "Thursday, 27 June" label, then time grid 4 columns, JetBrains Mono:
  "09:00"(strikethrough grey) "09:30"(strikethrough grey) "10:00"(outline) "10:30"(solid blue selected) "11:00"(outline) "11:30"(outline) "14:00"(outline) "14:30"(outline)
- Bottom summary bar: bg-blue-light rounded-lg p-3: "Dental Checkup · Thu 27 Jun · 10:30 AM · 45 min" text-sm font-mono
- "Continue →" primary blue full width

STEP 3 — "Almost there":
- Title: "Confirm your booking"
- Summary card (bg-blue-light rounded-xl p-5):
  - Provider row: sky-blue gradient avatar 40px + "SmileCare Dental Clinic" font-semibold + "Maadi, Cairo" text-sm text-muted
  - Divider
  - Service: "Dental Checkup" with clock icon "45 min" mono
  - Date/Time: calendar icon "Thursday, 27 June 2025" + clock icon "10:30 AM – 11:15 AM" mono
  - Divider
  - Price breakdown: "Service fee: EGP 350" right-aligned text-sm / "Booking fee: Free" text-muted / "Total: EGP 350" font-semibold font-mono text-ink
- Notes textarea: placeholder "Anything the provider should know? (optional)" border-border rounded-lg p-3 w-full text-sm h-24
- Reminder checkbox: "Send me a reminder 1 hour before" text-sm
- "Confirm booking" primary blue button full width (large, py-3)
- Fine print: "By confirming, you agree to the cancellation policy" text-caption text-muted text-center

STEP 3b (SUCCESS — show as 4th mini panel):
- Large green checkmark circle (64px, #10B981 bg, white checkmark inside)
- "You're all booked." Plus Jakarta Sans 800 32px text-ink centered
- "BF-2024-00847" font-mono text-muted text-sm centered
- Compact summary card: provider + service + "Thu 27 Jun · 10:30 AM" mono + "CONFIRMED" green badge
- Two buttons: "Add to calendar" ghost + "View my bookings" primary blue
```

---

## PROMPT 5 — Customer Dashboard

```
Continue BookFlow with the same design system. Build the **Customer Dashboard — My Bookings** page.

LAYOUT:
- Left sidebar 220px (bg-white border-r border-border):
  - BookFlow logo top-left
  - User info: "Mohamed Ali" avatar circle (initials "MA", blue bg) + name + "customer@bookflow.app" text-caption
  - Nav items (py-2.5 px-4 rounded-lg, gap-2, icon + label):
    LayoutDashboard "Overview" (text-muted)
    CalendarDays "My Bookings" (ACTIVE: bg-blue-light text-blue font-medium)
    User "Profile" (text-muted)
    Settings "Settings" (text-muted)
  - Active item has blue left border (border-l-2 border-blue)
- Top bar: "My Bookings" page title Plus Jakarta Sans 700 24px + user avatar top-right with dropdown arrow

MAIN CONTENT (bg-paper, p-8):

Next appointment highlight card (bg-white border border-blue/30 rounded-xl shadow-lifted p-5 mb-6):
- Left: small label "YOUR NEXT APPOINTMENT" text-xs font-medium tracking-widest text-blue
- Provider: "SmileCare Dental Clinic" font-semibold + "Dental Checkup" text-muted
- Date/time: "Thursday, 27 June 2025 · 10:30 AM" font-mono text-blue text-sm
- Right: "in 2 days" countdown badge (blue tint, blue text, rounded-full)
- Two ghost buttons: "Reschedule" + "Cancel" text-sm

Tab bar (mb-6): three tabs with bottom border indicator:
"Upcoming (3)" | "Past (12)" | "Cancelled (1)"
Active tab "Upcoming": text-ink font-medium border-b-2 border-blue

BOOKING CARDS (3 cards, vertical stack, gap-3):

Card 1 (CONFIRMED):
- bg-white rounded-xl border border-border shadow-card overflow-hidden
- Left stripe 4px wide bg-green (#10B981)
- Content p-5:
  Row 1: "SmileCare Dental Clinic" font-semibold text-ink + "CONFIRMED" badge right (green)
  Row 2: "Dental Checkup" text-muted text-sm + "Thu 27 Jun · 10:30 AM" font-mono text-blue text-sm right
  Row 3: "📍 Maadi, Cairo" text-caption text-muted + "EGP 350" font-mono text-sm text-ink right
  Row 4 (action row, border-t border-border pt-3 mt-3): "Reschedule" ghost-sm button + "Cancel" ghost-sm red-text button both text-sm

Card 2 (PENDING):
- Left stripe bg-amber (#F59E0B)
- "Glow Beauty Studio" + "PENDING" amber badge
- "Hair Treatment · Sat 29 Jun · 14:00" mono
- "📍 Zamalek, Cairo" + "EGP 200"
- Action buttons same

Card 3 (CONFIRMED):
- Left stripe bg-green
- "FitZone Personal Coaching" + "CONFIRMED" green badge
- "Personal Training · Mon 1 Jul · 07:30" mono
- "📍 Heliopolis, Cairo" + "EGP 300"
- Action buttons

Below cards: "View all 12 past bookings →" text-blue text-sm link
```

---

## PROMPT 6 — Provider Dashboard (Calendar + Overview)

```
Continue BookFlow with the same design system. Build the **Provider Dashboard** showing two screens side by side: the Overview page and the Calendar page.

PROVIDER SIDEBAR (shared, 220px, bg-paper border-r border-border):
- BookFlow logo top
- Nav items with icons:
  LayoutDashboard "Overview"
  CalendarDays "Calendar" 
  Clock "Availability"
  BookOpen "Bookings"
  BarChart2 "Revenue"
  Settings "Settings"
- Bottom: provider info "SmileCare Dental Clinic" font-semibold text-sm + "Dental" category badge small
- Active state: border-l-2 border-blue bg-blue-light text-blue

SCREEN A — OVERVIEW (left panel):
Top: "Good morning, Dr. Sarah 👋" Plus Jakarta Sans 700 22px + "Thursday, 27 June 2025" text-muted text-sm

4 stat cards row (grid-cols-4 gap-4 mb-8):
Card 1: "8" large text-display-md text-ink / "Today's bookings" text-caption / no change indicator
Card 2: "EGP 2,100" font-mono text-display-md text-ink / "Today's revenue" / "+EGP 450 vs yesterday" small green
Card 3: "3" with amber dot / "Pending confirmation" / "Needs action" text-amber text-xs
Card 4: "4.9 ★" / "Avg rating" / "124 reviews" text-caption

Today's schedule list (bg-white rounded-xl border p-5):
Title "Today's Schedule" font-semibold + "8 appointments" text-muted text-sm right
5 rows (each: time mono left + initial-circle middle + service + status badge right):
"09:00" | L (blue) Layla M. | Dental Checkup | CONFIRMED green
"10:00" | O (green) Omar F. | Teeth Cleaning | CONFIRMED green  
"10:30" | S (purple) Sara K. | Dental Checkup | PENDING amber
"13:00" | A (orange) Ahmed N. | Root Canal | CONFIRMED green
"15:00" | N (rose) Nour H. | Whitening | CONFIRMED green
"View full calendar →" blue link right

SCREEN B — CALENDAR (right panel, same sidebar highlighted on "Calendar"):
Top bar: "< June 2025 >" navigation + "Day | Week | Month" toggle pills (Week active) + "+ Add availability" primary button right

Calendar grid (Week view: Mon 23 – Sun 29 June):
- Left column: time labels in JetBrains Mono 11px text-muted, every 30min from 08:00 to 18:00
- 7 day columns with thin border-r border-border
- Thin horizontal lines every row (30min slots) in border-border

Booking events (blue cards inside cells, rounded-md):
Mon 23:
  09:00–09:45: blue card "L · Dental Checkup"
  11:00–11:30: blue card "O · Cleaning"
Tue 24:
  10:30–11:15: blue card "S · Checkup"
Wed 25 (TODAY — column has subtle blue-light tint bg):
  09:00–10:30: taller blue card "A · Root Canal · 90min"
  14:00–14:45: blue card "N · Whitening"
Thu 26:
  10:30–11:15: blue card "L · Checkup"
  15:00–15:45: blue card "M · Cleaning"
Fri 27:
  All slots: light grey striped pattern (day off/blocked)
Sat 28:
  09:00–09:45: blue card "K · Checkup"
  10:00–10:45: blue card "R · Whitening"

Available unbooked slots: very subtle bg-blue-light/30 tint (no border, no content)
Current time indicator on Wed 25: horizontal line 2px bg-blue across all columns at ~14:30 position
```

---

## PROMPT 7 — Provider Revenue Dashboard

```
Continue BookFlow with the same design system. Build the **Provider Revenue Overview** page using the same provider sidebar (Revenue nav item active).

LAYOUT: Same provider sidebar + main content area bg-paper

TOP BAR:
- "Revenue Overview" page title Plus Jakarta Sans 700 24px
- Period selector right: toggle pills "Week | Month | Year" — Month is active (bg-blue text-white, others ghost)
- Subtitle: "June 2025" text-muted text-sm

4 STAT CARDS (grid-cols-4 gap-4 mb-8):
Card 1: "EGP 12,450" font-mono text-display-md text-ink | "This month" text-caption | "+18% vs May" small green arrow up
Card 2: "84" text-display-md | "Completed bookings" | "+12 vs last month" green
Card 3: "EGP 148" font-mono text-display-md | "Avg per booking" | "Stable" text-muted small
Card 4: "6" text-display-md | "Cancellations" | "-3 vs last month" green (improvement)

MAIN CHART (bg-white rounded-xl border border-border p-6 mb-6):
Title "Daily Revenue — June 2025" font-semibold + "EGP 12,450 total" text-muted right
Recharts-style bar chart (draw as SVG bars):
- X axis: dates 1–28 labeled every 4 days (1, 5, 9, 13, 17, 21, 25), Inter 11px text-muted
- Y axis: EGP 0 to 800, labels every 200, Inter 11px text-muted
- Bars: fill #2563EB, width proportional, slight gap between bars
- Revenue trend: low start (~200/day) → peaks around day 15 (~700/day) → settles ~450
- Minimal horizontal gridlines in #F3F4F6
- One bar (day 15) shows a tooltip: "EGP 680 · 5 bookings · June 15" with shadow-modal

TWO COLUMNS BELOW (gap-6):

Left col — "Revenue by Service" (bg-white rounded-xl border p-6):
Title "By Service" font-semibold mb-4
4 horizontal bars with label left, bar center, amount right:
Dental Checkup | ████████████ 42% | EGP 5,200
Teeth Whitening | █████████ 31% | EGP 3,800  
Root Canal | ██████ 17% | EGP 2,100
Teeth Cleaning | ████ 11% | EGP 1,350
Bars: bg-blue varying opacity (100%, 80%, 60%, 40%), h-2 rounded-full, inside bg-subtle track

Right col — "Recent Transactions" (bg-white rounded-xl border p-6):
Title "Recent Transactions" font-semibold mb-4
Table with columns: Ref | Customer | Service | Date | Amount | Status
5 rows:
BF-0847 | Layla M. | Checkup | 27 Jun | EGP 350 | COMPLETED green
BF-0846 | Omar F. | Cleaning | 25 Jun | EGP 250 | COMPLETED green
BF-0845 | Sara K. | Whitening | 24 Jun | EGP 800 | COMPLETED green
BF-0844 | Ahmed N. | Root Canal | 22 Jun | EGP 1,500 | COMPLETED green
BF-0843 | Nour H. | Checkup | 20 Jun | EGP 350 | CANCELLED red
All refs in JetBrains Mono. Amounts in font-mono. Alternating row bg-white / bg-subtle.
```

---

## PROMPT 8 — Admin Dashboard

```
Continue BookFlow with the same design system. Build the **Admin Dashboard Overview** page.

ADMIN SIDEBAR (240px, bg-ink #0F1117 text-white):
- BookFlow logo white text-white font-bold + small "Admin" pill badge bg-red-500 text-white text-xs rounded-full px-2 ml-2
- Nav items (icons white/muted, labels white/muted, py-3 px-4):
  LayoutDashboard "Overview" (ACTIVE: bg-white/10 text-white font-medium, blue left border)
  Users "Users"
  Building2 "Providers" — show "8" amber pill badge right (pending)
  Calendar "Bookings"
  BarChart3 "Analytics"
  Settings "Settings"
- All inactive: text-white/60, hover bg-white/5
- Bottom: admin avatar circle "ZR" (blue bg) + "Zack River" + "Admin" text-white/60 text-xs

CONTENT AREA (bg-paper):

TOP BAR: "Good morning, Zack" Plus Jakarta Sans 700 22px + "Thursday, 27 June 2025" text-muted | user avatar top-right

5 STAT CARDS (grid-cols-5 gap-4 mb-8):
1: "2,847" text-display-md | "Total Users" | "+34 this week" green small
2: "412" | "Active Providers" | "8 pending approval" text-amber small (clickable look)
3: "1,203" | "Bookings this month" | "+18% vs last month" green
4: "EGP 284K" font-mono | "Platform revenue" | "+22% vs last month" green
5: "98.2%" | "Success rate" | "-0.3% vs last month" text-red small (slight regression)

TWO COLUMNS (grid-cols-5 gap-6):

Left (col-span-3) — "Recent Bookings" (bg-white rounded-xl border p-6):
Title "Recent Bookings" font-semibold + "View all →" blue link right
Table (6 rows):
Cols: Ref | Customer | Provider | Service | Date | Amount | Status
BF-0847 | Mohamed Ali | SmileCare | Checkup | 27 Jun 10:30 | EGP 350 | CONFIRMED green
BF-0846 | Layla Hassan | Glow Studio | Hair | 27 Jun 14:00 | EGP 200 | PENDING amber
BF-0845 | Omar Farid | FitZone | Training | 26 Jun 07:30 | EGP 300 | COMPLETED grey
BF-0844 | Sara Khaled | LexConsult | Consultation | 25 Jun 11:00 | EGP 600 | COMPLETED grey
BF-0843 | Ahmed Nour | SmileCare | Root Canal | 24 Jun 09:00 | EGP 1,500 | COMPLETED grey
BF-0842 | Nour Hossam | HomeFixPro | AC Service | 23 Jun 13:00 | EGP 350 | CANCELLED red
Refs in mono. Amounts in mono. Alternating rows white/subtle.

Right (col-span-2) — "Pending Approvals" (bg-white rounded-xl border p-6):
Title "Pending Approvals" font-semibold + "8 waiting" amber badge right
3 provider cards (each: avatar circle gradient + name + category + location + Approve/Reject buttons):
1. "HealPoint Clinic" gradient sky-blue | Medical | Nasr City | [Approve green] [Reject red ghost]
2. "StyleCraft Salon" gradient rose | Beauty | Mohandessin | [Approve] [Reject]  
3. "MindCoach" gradient violet | Wellness | Sheikh Zayed | [Approve] [Reject]
"View all 8 pending →" blue link at bottom

BOTTOM ROW (grid-cols-3 gap-6 mt-6):
Card 1 — "New Users Today": "12" large + small sparkline (7-day trend going up) + "+3 vs yesterday" green
Card 2 — "Top Provider Today": SmileCare logo + "EGP 1,200 revenue today" + "4 bookings" text-muted
Card 3 — "Platform Health": 3 mini metrics: "Avg confirm time: 23 min" / "Mobile bookings: 67%" / "Repeat customers: 43%"
```

---

## PROMPT 9 — Admin Providers Table Page

```
Continue BookFlow with the same design system. Build the **Admin Providers Management** page. Same dark admin sidebar (Providers nav item active, blue left border).

TOP SECTION:
- "Providers" page title Plus Jakarta Sans 700 24px
- Stats bar below title: "412 Active · 8 Pending · 0 Inactive" text-sm text-muted (each number in its color: green, amber, red)

FILTER BAR (bg-white border border-border rounded-xl p-4 mb-6):
Row: [Search input "Search providers..."] [Category dropdown ▾ "All Categories"] [Status dropdown ▾ "All Status"] [Sort: "Revenue ↓"] [+ Add Provider" primary blue button right]

TAB BAR (mb-4):
"All (420)" | "Active (412)" | "Pending (8)" | "Inactive (0)"
Active tab underlined blue. "Pending" tab has amber dot before text.

PROVIDERS TABLE (bg-white rounded-xl border border-border overflow-hidden):
Table header (bg-subtle border-b border-border, text-xs font-medium uppercase tracking-wide text-muted py-3 px-4):
□ | Provider | Category | Location | Bookings | Revenue | Rating | Status | Actions

6 DATA ROWS (py-4 px-4, border-b border-border, hover bg-subtle/50):

Row 1: SmileCare Dental Clinic (sky gradient avatar 36px + "SmileCare Dental Clinic" font-medium + "clinic@smilecare.eg" text-caption text-muted) | DENTAL badge blue-light | Cairo, Maadi | 284 | EGP 42,600 mono | 4.9 ★ | Active green badge | ··· menu

Row 2: Glow Beauty Studio (rose gradient) | BEAUTY | Cairo, Zamalek | 198 | EGP 29,700 | 4.7 ★ | Active green | ···

Row 3: FitZone Coaching (green gradient) | FITNESS | Cairo, Heliopolis | 312 | EGP 46,800 | 4.9 ★ | Active green | ···

Row 4: LexConsult Legal (violet gradient) | LEGAL | Cairo, Downtown | 87 | EGP 52,200 | 4.7 ★ | Active green | ···

Row 5: HealPoint Clinic (sky gradient) | MEDICAL | Nasr City | 0 | EGP 0 | — | Pending amber badge | [Approve] [Reject] visible buttons (not ··· menu)

Row 6: StyleCraft Salon (rose gradient) | BEAUTY | Mohandessin | 0 | EGP 0 | — | Pending amber badge | [Approve] [Reject]

Row 5 and 6: very subtle amber-tinted row background (#FFFBEB) to stand out.

TABLE FOOTER (py-3 px-4 border-t border-border):
"Showing 1–6 of 420 providers" text-sm text-muted left
Pagination: "← Previous | 1 2 3 ... 70 | Next →" right, ghost buttons

APPROVE MODAL (show as overlay on the design, over row 5):
Rounded-2xl shadow-modal p-6 bg-white w-96:
Title "Approve Provider?" Plus Jakarta Sans 600
Body: "HealPoint Clinic will be visible to customers and can start accepting bookings."
Provider info row: avatar + name + email + category
Two buttons: "Approve" primary blue + "Cancel" ghost
```

---

## PROMPT 10 — Final Portfolio Composite

```
Create a final **portfolio showcase composite image** for BookFlow. This is a marketing/case study hero image, not a functional screen.

A wide dark canvas (bg-ink #0F1117, 1600×900px equivalent aspect ratio).

Center composition:
- Large laptop mockup (MacBook-style, no Apple logo, just the form factor) showing the Provider Calendar Dashboard (from the calendar screen built earlier — the weekly calendar grid with colored booking events, dark provider sidebar, "+ Add availability" button).
- Laptop screen has subtle warm glow/reflection on the dark background beneath it.

Left of laptop (slightly forward, overlapping laptop left edge):
- iPhone mockup showing the Booking Wizard Step 2 (date + time slot picker screen).
- Phone is slightly tilted ~8 degrees clockwise.

Right of laptop (slightly forward, overlapping laptop right edge):
- iPhone mockup showing the Booking Confirmation success screen (green checkmark + "You're all booked." + booking summary card).
- Phone is slightly tilted ~8 degrees counter-clockwise.

All screens are sharp, detailed, readable. No blur. No glow excess. Subtle shadows under each device.

Bottom of canvas:
- "BookFlow" wordmark centered, Plus Jakarta Sans 800, 48px, white
- "Booking infrastructure for service businesses" Inter 16px #6B7280 below
- "bookflow.app" JetBrains Mono 13px #374151 below that

Top-right corner: very small "Case Study — Portfolio 2025" text-caption text-white/30

Overall energy: calm, confident, premium. Think Linear.app or Vercel.com product shot.
No text overlays on screens. No badges or stickers. No rainbow gradients.
```

---

## USAGE NOTES

**الترتيب الصح:**
ابعت كل prompt وانتظر الـ output الكامل قبل ما تبعت اللي بعده.
لو الـ tool قالك "how would you like to proceed" — ابعت الـ prompt الجاي مباشرة بدون تعليق.

**لو حاجة اتعملت غلط:**
قوله: "Keep the exact same design system and fix only [X]. Do not change anything else."

**الـ prompts دي مرتبة بالأولوية:**
2 → 3 → 4 → 6 → 7 → 8 → 5 → 9 → 10
(Provider flow قبل Customer لأنه أكثر تأثيراً في الـ portfolio)
