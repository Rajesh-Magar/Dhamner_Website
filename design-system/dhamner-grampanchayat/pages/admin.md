# Design System Override: Admin Panel

> **LOGIC:** This page override applies specifically to files within the `Admin/` sub-repository.

---

## Colors

While the primary public-facing site utilizes biophilic greens and gold, the admin panel should have a highly professional, operational aesthetic, keeping green as positive status indicators, but using deep slate as primary control elements.

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#0F172A` | `--color-primary` (Deep Slate) |
| Secondary | `#334155` | `--color-secondary` (Slate) |
| CTA/Accent | `#F97316` | `--color-cta` (Saffron Orange) |
| Success | `#16A34A` | `--color-success` (Green 600) |
| Background | `#F8FAFC` | `--color-background` (Light Slate) |

## Layout

- **Login Page:** Clean, modern split-screen or centered card with saffron/green accents rather than solid blue gradients, using subtle glassmorphism on form inputs and premium shadow elevation.
- **Admin Dashboard & Tables:** Sleek structured rows, clean visual dividers (`#E2E8F0`), distinct states for certificates, and interactive edit/view options.
