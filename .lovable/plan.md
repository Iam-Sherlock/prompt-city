

# PromptVault — Design Prompt Showcase

A dark, minimal showcase website that displays 21+ UI design prompts alongside fully rendered mock landing pages for each theme.

## Layout
- **Left sidebar**: Scrollable list of all design themes (Terminal/CLI, Neo-Brutalism, Cyberpunk/Neon, etc.) — each item is a clickable card with the theme name and a small color indicator
- **Right panel**: A realistic **browser chrome frame** (address bar, traffic light dots, tabs) containing the fully rendered mock landing page for the selected theme
- **Top-right overlay/drawer**: Shows the theme name, a brief definition, and the full prompt with a **one-click copy button**

## Design Themes (21+)
Each theme gets a unique mini landing page rendered inside the browser frame:
1. Terminal/CLI (Hacker Aesthetic)
2. Neo-Brutalism
3. Cyberpunk/Neon
4. Constructivism
5. Swiss Style (International Typographic Style)
6. Modern Minimalism
7. Bento Grid
8. Monochrome
9. Luxury/Editorial
10. Nature Distilled (Organic)
11. Vaporwave
12. Glassmorphism
13. Neumorphism
14. Claymorphism
15. Tactile Maximalism
16. Liquid/WebGL Experimental
17. Kinetic Typography
18. Scrapbook/Collage
19. Y2K/Retro-Modern
20. Corporate SaaS
21. E-commerce Immersive

## Each Theme Preview Includes
- A **hero section** with heading, subtext, and CTA button
- **Feature cards** (2-3 cards)
- All styled authentically to that design system (colors, typography, borders, shadows, effects)

## Shell/Wrapper Style
- Dark background (#0a0a0a) with subtle grid or noise texture
- Sidebar with muted text, active theme highlighted with accent glow
- Smooth transitions when switching themes
- Browser frame with realistic chrome styling

## Features
- One-click copy of the full prompt for each theme
- Collapsible prompt panel (so the preview can be viewed fullscreen)
- Responsive: on mobile, sidebar becomes a dropdown selector
- Smooth animated transitions between themes

## Implementation Approach
- Build themes as data-driven config (prompt text, color tokens, component styles)
- Each theme's landing page is a React component that reads its config
- Start with 5-6 themes in the first pass, then add the rest incrementally

