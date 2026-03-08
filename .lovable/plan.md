# New Section: Mobile UI Trends

## What We're Building

A new **"Mobile UI Trends"** category in the sidebar containing 15 mobile design themes. The key differentiator: previews render inside a **realistic iPhone frame** (notch, dynamic island, rounded corners, status bar) instead of the browser chrome frame used for desktop themes.

## Architecture Changes

### 1. Data Layer (`src/data/themes.ts`)

- Add a `category` field to `ThemeConfig`: `"desktop" | "mobile"`
- Add 15 new mobile theme entries with full design-system prompts:
  - AI-Native (Generative UI)
  - Predictive Navigation (Zero-Click)
  - Hyper-Personalized Adaptive UI
  - Bento Grid (Mobile)
  - Bottom-Heavy Design
  - Dynamic Island Evolution
  - Layered Depth (Z-Axis Design)
  - Glassmorphism 2.0
  - Modern Skeuomorphism (Tactile UI)
  - Kinetic Typography (Mobile)
  - Dark-First Design
  - Haptic-First UX
  - Micro-Interactions (The "Pulse")
  - Spatial Design Prep
  - (one duplicate in the user list — will use 14 unique themes)

### 2. iPhone Frame Component (`src/components/IPhoneFrame.tsx`)

A premium iPhone 17 Pro-style frame:

- Rounded rectangle shell with titanium-like border
- Dynamic Island notch at top
- Status bar (time, signal, battery icons)
- Home indicator bar at bottom
- Proper aspect ratio (~9:19.5) with scrollable content area
- Dark bezel aesthetic matching the app's dark theme

### 3. Mobile Preview Components (`src/components/previews/PreviewsMobile.tsx`)

15 mobile-specific landing page previews designed for phone viewport:

- Each styled to its respective mobile UI trend
- Vertical layouts, bottom navigation bars, swipe hints, card stacks
- Authentic mobile UI patterns (bottom sheets, floating action buttons, gesture indicators)

### 4. Sidebar Update (`src/components/ThemeSidebar.tsx`)

- Split into two sections with headers: **"Web Design"** and **"Mobile UI Trends"**
- Update subtitle count from "21" to "35 Design System Prompts"

### 5. Index Page Update (`src/pages/Index.tsx`)

- Conditionally render `<IPhoneFrame>` or `<BrowserFrame>` based on `selectedTheme.category`
- iPhone frame centered in the main content area (since it's narrower than full-width)

### 6. ThemePreview Update

- Add mobile preview mappings to the preview map

## File Changes Summary


| File                                          | Action                                       |
| --------------------------------------------- | -------------------------------------------- |
| `src/data/themes.ts`                          | Add `category` field, add 14 mobile themes   |
| `src/components/IPhoneFrame.tsx`              | New — realistic iPhone shell                 |
| `src/components/previews/PreviewsMobileA.tsx` | New — first 7 mobile previews                |
| `src/components/previews/PreviewsMobileB.tsx` | New — remaining 7 mobile previews            |
| `src/components/ThemePreview.tsx`             | Add mobile preview mappings                  |
| `src/components/ThemeSidebar.tsx`             | Add section headers, group by category       |
| `src/pages/Index.tsx`                         | Conditionally render iPhone vs Browser frame |
