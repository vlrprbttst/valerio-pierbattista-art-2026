# Valerio Pierbattista Art — Design System

## Overview

This design system defines the visual language, brand identity, and UI component library for **Valerio Pierbattista Art** — a personal art portfolio website. The brand centers on an intimate, gallery-quality aesthetic: refined, quiet, and intentional. The work is the hero; the interface recedes gracefully.

**Sources provided:** No external codebase or Figma link was provided. This design system was built from scratch based on the brand brief: art website, cream and black palette, Noto + Montserrat typefaces.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Quiet authority.** Copy is spare and confident — never boastful, never breathless.
- **First-person singular.** "I paint," "My work explores," "This piece was made in…"
- **Minimal punctuation flourishes.** No exclamation marks. Ellipses used sparingly and intentionally.
- **Sentence case** throughout (not Title Case for body copy). Titles of artworks are in *italics*.
- **No emoji.** None. The work speaks without decoration.
- **Dates and dimensions** are written plainly: "2023 · Oil on linen · 120 × 90 cm"
- **Captions** are factual and brief. No hype. Example: *"Untitled No. 7, 2024. Oil on canvas. 80 × 100 cm."*
- **Bio copy** is restrained; first-person preferred.
- **Exhibition copy** lists venue, city, year — no hyperbole.

### Examples of good copy
> "I work in oil and charcoal, exploring the weight of light on still surfaces."
> "Available works. Inquiries welcome."
> "Represented in private collections across Europe and the United States."

---

## VISUAL FOUNDATIONS

### Colors
- **Cream** (`#F5F0E8`) — primary background; warm, paper-like, never pure white
- **Ink Black** (`#111111`) — primary foreground; almost-black for text and lines
- **Warm Mid** (`#C8BCA8`) — muted tone for borders, dividers, secondary text
- **Deep Charcoal** (`#2A2A2A`) — secondary foreground; used for captions, nav items
- **Accent Sand** (`#8C7B65`) — hover states, links, subtle accents
- **Pure Black** (`#000000`) — reserved for high-contrast moments

No saturated colors. No blues, greens, or reds in the base palette. Color temperature is always warm.

### Typography
- **Display / Headlines:** Montserrat (Light 300, Regular 400) — geometric, clean, modern gallery feel
- **Body / Captions:** Noto Serif (Regular 400, Italic 400) — humanist, literary, warm
- **Labels / UI:** Montserrat (Medium 500, SemiBold 600, uppercase tracking)
- **Minimum body size:** 16px; captions 13px; never smaller

### Spacing & Layout
- Generous whitespace is the primary design tool. Baseline grid: 8px unit.
- Max content width: 1200px, centered. Large section padding: 80–120px.
- Grid: 12-column, gutters 24px on desktop.

### Backgrounds
- Default: cream (`#F5F0E8`). Alternate section: `#EDE7D9`. No gradients. No patterns.

### Animation & Motion
- Minimal. Fade-in on load (400ms, ease-out). Image hover: scale 1→1.02 (300ms).
- No bounces, no springs. Stillness is the aesthetic.

### Hover & Press States
- Links: color shifts to `#8C7B65`. Buttons: darken background. Images: scale 1.02.

### Cards
- No box shadows. No rounded corners (0px radius — gallery aesthetic).
- Cards are image + caption below; no container chrome.

### Corner Radii
- **Zero.** Hard edges everywhere.

### Imagery
- Warm, slightly desaturated. No filters on artwork images. Portrait orientation preferred.

---

## ICONOGRAPHY

No proprietary icon set. Text over icons throughout. Directional cues use plain unicode arrows (`→`, `←`). No CDN icon library. No emoji.

---

## Files & Manifest

| Path | Description |
|------|-------------|
| `README.md` | This file — brand overview and design guidelines |
| `SKILL.md` | Agent skill invocation spec |
| `colors_and_type.css` | CSS custom properties for all tokens |
| `preview/colors-primary.html` | Primary color palette swatches |
| `preview/colors-semantic.html` | Semantic color token chips |
| `preview/type-display.html` | Display + headline specimens (Montserrat) |
| `preview/type-body.html` | Body, caption, quote specimens (Noto Serif) |
| `preview/type-scale.html` | Full type scale (xs → 5xl) |
| `preview/spacing-tokens.html` | Spacing scale (8px base) |
| `preview/spacing-layout.html` | Grid system + border radius |
| `preview/brand-motion.html` | Motion tokens + live demos |
| `preview/components-buttons.html` | Primary, outline, ghost buttons |
| `preview/components-nav.html` | Light + dark navigation bars |
| `preview/components-artwork-card.html` | Artwork card with hover state |
| `preview/components-form.html` | Inquiry/contact form |
| `preview/components-dividers.html` | Dividers, filter tags, labels |
| `preview/brand-logo.html` | Wordmark + monogram |
| `ui_kits/website/index.html` | Full art website UI kit (click-thru prototype) |
| `ui_kits/website/Nav.jsx` | Navigation component |
| `ui_kits/website/Footer.jsx` | Footer component |
| `ui_kits/website/ArtworkCard.jsx` | Artwork card + grid |
| `ui_kits/website/Pages.jsx` | All page screens (Home, Works, Detail, About, Exhibitions, Contact) |

---

*Design system built April 2026.*
