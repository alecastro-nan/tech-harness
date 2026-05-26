---
name: Cyber-Performance Core
colors:
  surface: '#0c160c'
  surface-dim: '#0c160c'
  surface-bright: '#313c30'
  surface-container-lowest: '#071007'
  surface-container-low: '#141e14'
  surface-container: '#182218'
  surface-container-high: '#222d22'
  surface-container-highest: '#2d372c'
  on-surface: '#dae6d5'
  on-surface-variant: '#b9ccb5'
  inverse-surface: '#dae6d5'
  inverse-on-surface: '#293328'
  outline: '#849581'
  outline-variant: '#3b4b3a'
  surface-tint: '#00e55b'
  primary: '#edffe8'
  on-primary: '#003911'
  primary-container: '#00ff66'
  on-primary-container: '#007128'
  inverse-primary: '#006e27'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#fafaf9'
  on-tertiary: '#2f3131'
  tertiary-container: '#dddddd'
  on-tertiary-container: '#606161'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff83'
  primary-fixed-dim: '#00e55b'
  on-primary-fixed: '#002107'
  on-primary-fixed-variant: '#00531b'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#0c160c'
  on-background: '#dae6d5'
  surface-variant: '#2d372c'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  metric-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 64px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is engineered for high-end running technology, targeting elite athletes and tech-enthusiasts. The aesthetic is "Cybernetic Performance"—a fusion of high-contrast futurism and technical precision. The UI should feel like a high-performance heads-up display (HUD), evoking an emotional response of speed, precision, and cutting-edge capability.

The style leverages **High-Contrast / Bold** elements integrated with **Minimalism**. It utilizes deep blacks to create infinite depth, allowing neon accents to pop with maximum vibrance. The visual language is unapologetically digital, prioritizing legibility of performance metrics and the sleek silhouettes of high-end gear.

## Colors

The palette is built on a foundation of absolute darkness to ensure the highest possible contrast ratio for the accent colors. 

- **Primary (Electric Lime):** Reserved for primary action buttons, success states, and critical brand moments. It represents energy and go-signals.
- **Secondary (Cyber Cyan):** Used for data visualization, technical metrics, and secondary interactive elements. It represents the "intelligence" of the gear.
- **Neutrals:** A range of deep obsidians and graphites provide structural layering. A metallic silver (#C0C0C0) is used sparingly for thin borders to define edges without adding visual bulk.
- **Backgrounds:** Use pure OLED black (#000000) for main canvas areas to save power and create depth, transitioning to Deep Obsidian (#0B0C10) for sectional differentiation.

## Typography

The typography strategy balances technical character with high-readability functionalism.

- **Headlines:** Space Grotesk provides a geometric, futuristic feel with its distinct apertures. Use tight letter-spacing for large displays to create a high-fashion, technical look.
- **Body:** Inter is the workhorse for all long-form content and descriptions, ensuring clarity against dark backgrounds.
- **Metrics:** Use Space Grotesk with tabular figures enabled for data points (e.g., pace, heart rate, distance) to ensure alignment in dashboards.
- **Case Usage:** Labels and small eyebrow text should be set in Uppercase with wide tracking to emulate technical schematics.

## Layout & Spacing

The system uses a **12-column Fluid Grid** for desktop and a **4-column Fluid Grid** for mobile. 

- **The 4px Baseline:** All spacing increments must be multiples of 4px to maintain mathematical harmony.
- **Rhythm:** Use generous vertical spacing (80px+) between major sections to allow the product photography to breathe and appear premium.
- **Data Density:** Within cards and dashboards, use tighter spacing (8px-16px) to maintain the "HUD" aesthetic and keep metrics grouped logically.
- **Margins:** Desktop layouts should maintain significant side margins (64px) to center the focus on the high-performance gear.

## Elevation & Depth

In this dark-mode system, depth is conveyed through **Tonal Layers** and **Neon Glows** rather than traditional shadows.

- **Layering:** Level 0 is Pure Black (#000000). Level 1 (Cards/Surfaces) is Dark Graphite (#15181F). 
- **Borders:** All elevated surfaces must feature a 1px solid border using Metallic Silver at 20% opacity. This creates a "machined" edge.
- **Active State Glow:** High-priority elements use a soft, 8px-12px outer glow (drop-shadow with 0 offset) using the Primary Electric Lime color at 30% opacity to simulate light emission.
- **Interaction:** On hover, surfaces can increase in brightness slightly (to #1E2129) and border opacity increases to 50%.

## Shapes

The shape language is **Sharp (0)**. 

To reinforce the technical, aggressive nature of high-performance running tech, all corners are kept at 0px. This creates a precise, architectural feel. The only exception to the sharp rule is for data-plotting points in graphs which may be circular to distinguish them from structural UI elements.

## Components

- **Primary Buttons:** Sharp edges, Electric Lime background, Black text. Hover state triggers a 0.3s ease-in-out expansion of a subtle outer glow.
- **Secondary Buttons:** Sharp edges, 1px Cyan border, transparent background, Cyan text.
- **Technical Cards:** Dark Graphite (#15181F) background, 1px Silver-transparency border. Top-right corners can feature a small "sensor" icon or technical ID number in Cyan.
- **Input Fields:** Bottom-border only (2px), starting as Silver and transitioning to Cyan on focus. Label floats above in Label-Caps style.
- **Data Chips:** Small, rectangular containers with Cyber Cyan text and a 10% Cyan opacity fill.
- **Performance Meters:** Horizontal bars using a segmented "cell" style rather than a smooth fill, representing digital precision.
- **Transitions:** All color and glow changes must use a `0.3s cubic-bezier(0.4, 0, 0.2, 1)` transition to feel responsive yet smooth.