# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Dhamner Grampanchayat
**Generated:** 2026-05-21
**Category:** Government / Public Service & Agriculture

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#15803D` | `--color-primary` (Earth Green) |
| Secondary | `#CA8A04` | `--color-secondary` (Saffron / Harvest Gold) |
| CTA/Accent | `#F97316` | `--color-cta` (Saffron Orange) |
| Background | `#F8FAFC` | `--color-background` (Light Slate / Clean White) |
| Text | `#0F172A` | `--color-text` (Deep Slate / Dark Navy) |
| Border | `#E2E8F0` | `--color-border` (Light Slate border) |

**Color Notes:** Combined institutional public service trust with regional agricultural green and saffron heritage to build a premium local government aesthetic.

### Typography

- **Heading Font:** Inter / Noto Sans Devanagari
- **Body Font:** Inter / Noto Sans Devanagari
- **Mood:** Clean, Professional, Biophilic, Heritage, Institutional

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--color-cta);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: var(--color-background);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 3px var(--color-primary)20;
}
```

---

## Style Guidelines

**Style:** Modern Heritage Biophilic

**Key Effects:**
- Glassmorphic desktop dropdown panels.
- Smooth transition states on hover (200ms).
- Sticky header with dynamic backdrop blur.
- Consistent scale-up and fade-in states on cards and interactions.

---

## Anti-Patterns (Do NOT Use)

- ❌ **Emojis as icons** — Use SVG/Lucide icons.
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer.
- ❌ **Layout-shifting hovers** — Avoid size/padding changes that shift neighboring layout.
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio.
- ❌ **Instant state changes** — Always use transition-colors / duration-200.
- ❌ **Invisible focus states** — Keep outlines visible for accessibility.

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
