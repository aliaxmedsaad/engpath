# EngPath Design System — V2

This document defines the visual and interaction language for EngPath V2. It is a reference for all UI decisions during the V2 polish sprint.

> **Scope:** Design direction only. No code changes are made here. Implementation begins after this document is agreed.

---

## Design Philosophy

EngPath V2 is inspired by Apple-style web design — but is not a copy of it. The goal is a calm, premium, minimal interface that puts the engineer's content first and removes everything that does not need to be there.

**Principles:**

- Minimal interface — remove everything that does not earn its place
- Lots of whitespace — let content breathe
- Large, confident typography — hierarchy through scale, not decoration
- Calm, premium feeling — no flashy elements, no visual noise
- Strong visual hierarchy — one clear purpose per section
- Smooth, subtle motion — interactions feel considered, not distracting
- Consistent spacing — predictable rhythm throughout
- Fewer components, better executed — depth over breadth

---

## Brand Palette

| Name | Hex | Usage |
|---|---|---|
| Primary Navy | `#0F172A` | Headings, navigation, footer, primary buttons, brand elements |
| Warm Beige Background | `#F5F1E8` | Main page background |
| White Surface | `#FFFFFF` | Cards, panels, modals, content surfaces |
| Dark Text | `#1F2937` | Body copy, labels, secondary headings |
| Secondary Text | `#64748B` | Captions, metadata, placeholder text, supporting copy |
| Subtle Blue Accent | `#3B82F6` | Links, active states, focus rings, small highlights |

### Usage guidance

- **Beige** is the page background. It gives the app a warm, premium feel that distinguishes it from generic white SaaS products.
- **White** surfaces (cards, modals, panels) sit on top of the beige background to create clear depth without heavy shadows.
- **Navy** anchors the brand. Use it for headings, primary buttons, the navigation bar, and any element that needs to feel authoritative.
- **Blue accent** is used sparingly. It draws the eye to interactive elements — links, active sidebar items, focus rings, and small state indicators. Do not use it as a background or fill colour.
- **Avoid:** gradients, bright accent colours beyond the accent blue, heavy drop shadows, cluttered layouts, and more than two font weights in a single view.

---

## Typography

### Principles

- Use large hero headings — scale communicates hierarchy
- Prefer short, confident headings over long descriptive ones
- Clean sans-serif fonts throughout (system stack or Inter)
- Keep paragraph line lengths readable (60–75 characters)
- Avoid too many font weights — use regular and medium only for most contexts, semibold or bold only for key headings

### Scale (reference)

| Level | Usage | Approximate size |
|---|---|---|
| Display | Hero section heading | 48–64px |
| H1 | Page title | 32–40px |
| H2 | Section heading | 24–28px |
| H3 | Card title, sub-section | 18–20px |
| Body | Standard paragraph text | 15–16px |
| Small | Captions, metadata, labels | 12–13px |

### Colour in typography

- Headings: `#0F172A` (Navy)
- Body copy: `#1F2937` (Dark Text)
- Supporting / secondary copy: `#64748B` (Secondary Text)
- Links: `#3B82F6` (Accent Blue)

---

## Whitespace

Generous spacing is one of the most important things V2 can add. The current app feels cramped in places. V2 should feel like there is room to think.

- Increase vertical spacing between sections
- Use generous padding inside cards and panels (at minimum 24px, prefer 32px)
- Do not pack multiple content areas side by side unless the layout genuinely benefits from it
- Avoid tight spacing between labels and their values
- Let list items breathe — do not compress project cards

---

## Layout

- Each page section should have one clear purpose — do not mix concerns in a single block
- Use centred hero sections for landing/intro areas
- Use simple, clean grids — two columns maximum for most views
- Avoid dense dashboards for now — surface the most important information only
- Sidebar navigation should be clean and uncluttered
- Content should have a maximum readable width (approximately 720–800px for text-heavy views)

---

## Buttons

| Type | Background | Text | Border |
|---|---|---|---|
| Primary | `#0F172A` Navy | White | None |
| Secondary | White or transparent | `#0F172A` Navy | 1px Navy |
| Accent / link-style | Transparent | `#3B82F6` Blue | None |
| Destructive | White or transparent | Red tone | 1px red tone |

- All buttons use rounded corners (8px minimum, 12px preferred)
- Hover state: subtle upward movement (2px translate) or slight background shift — no heavy colour changes
- Active state: slight scale down (0.97)
- Disabled state: reduced opacity, no pointer

---

## Cards

Cards are the primary container for project content.

- Background: White (`#FFFFFF`) on Beige (`#F5F1E8`) background
- Border radius: 12px
- Shadow: soft, low-contrast (`box-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)`)
- Padding: 24–32px
- Each card should have: a clear title, short supporting text or metadata, and one clear action
- Avoid overcrowding project cards with too many tags, counters, and inline controls simultaneously
- ICE attribute tags should be small and restrained — not the dominant element

---

## Motion

Motion should feel calm and intentional. It signals state change, not decoration.

| Interaction | Effect |
|---|---|
| Page / view transition | Fade in, 200ms, ease-out |
| Card hover | Subtle lift — `translateY(-2px)`, shadow deepens slightly |
| Button hover | Slight translate or background shift, 150ms |
| Modal open | Fade + scale from 0.96 to 1, 200ms |
| Toast / notification | Slide up from bottom, fade in, 180ms |
| Accordion / expand | Smooth height transition, 200ms |

- No bouncing, spinning, or sliding elements across the screen
- No animations that delay the user from reaching their content
- Reduced motion: all animations should respect `prefers-reduced-motion`

---

## Responsive Design

- Mobile should feel as polished as desktop — it is not an afterthought
- Cards stack to a single column on narrow viewports
- Navigation collapses or simplifies on small screens (sidebar hidden, replaced by a minimal top bar or bottom nav)
- Touch targets: minimum 44×44px
- Text remains readable at all screen sizes — no truncation without ellipsis
- Padding scales down gracefully on small screens but never disappears entirely

---

## Accessibility

- Colour contrast: WCAG AA minimum throughout (4.5:1 for body text, 3:1 for large text)
- All interactive elements have visible focus rings — use the accent blue (`#3B82F6`) at 2px offset
- Keyboard navigation: all actions reachable via keyboard
- Do not use colour as the sole indicator of state (e.g. error states need an icon or text, not just a red border)
- Screen reader friendly: use semantic HTML and ARIA labels where the visual design is insufficient
- All form inputs have associated labels

---

## V2 UI Checklist

Work through these in order during V2 implementation. Each item should be reviewed visually before being marked complete.

- [ ] Logo — create and apply a professional EngPath logo
- [ ] Favicon — create and apply a matching favicon
- [ ] Navigation redesign — sidebar and top bar using navy palette
- [ ] Hero redesign — clean centred heading for dashboard / landing view
- [ ] Project card redesign — white on beige, rounded, uncluttered
- [ ] Typography polish — apply scale, weights, and colours consistently
- [ ] Spacing polish — audit all padding/margin and increase where cramped
- [ ] Mobile polish — test and refine all views on narrow viewports
- [ ] Loading states — skeleton loaders or subtle spinners during async operations
- [ ] Error states — clear, friendly error messages with guidance (not just red text)
- [ ] Accessibility pass — contrast check, focus states, keyboard navigation

---

## What V2 Is Not

To keep scope clear:

- V2 does not add new AI features
- V2 does not add new data fields or evidence types
- V2 does not change the ICE attribute structure
- V2 does not add mentor or team accounts
- V2 does not require a backend change

If a UI improvement requires a backend change, it is deferred to V3.
