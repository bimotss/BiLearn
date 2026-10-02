# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** BiLearn  
**Updated:** 2026-10-01  
**Category:** Interactive Coding & Language Learning Platform  
**Design Direction:** Dark OLED / Midnight Slate with Radiant Amber/Gold Accents ($100K-Grade Platform UX)  

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary Surface | `#030712` | `--color-background` | Deep OLED base background |
| Secondary Surface | `#0B0F19` | `--color-card` | Surface level 1, cards, panels |
| Elevated Surface | `#0F172A` | `--color-surface-elevated` | Dropdowns, modals, dialogs |
| Foreground | `#F8FAFC` | `--color-foreground` | Primary text, high contrast |
| Muted Foreground | `#94A3B8` | `--color-muted-foreground` | Secondary text, hints, captions |
| Border | `#1E293B` | `--color-border` | Subtle component & card borders |
| Border Strong | `#334155` | `--color-border-strong` | Inputs, separators, active edges |
| Accent / Primary CTA | `#F59E0B` | `--color-accent` | Radiant Amber primary action buttons & active states |
| Accent Hover | `#D97706` | `--color-accent-hover` | Amber-600 hover / active press |
| On Accent / CTA | `#030712` | `--color-on-accent` | Jet black text on amber for maximum contrast |
| Success / Pass | `#10B981` | `--color-success` | Test runner pass, completed badges |
| Destructive / Fail | `#EF4444` | `--color-destructive` | Test runner failure, errors, reset triggers |
| Code Mode Accent | `#A855F7` | `--color-mode-code` | "Susun Kode" interactive mode badge & aura |
| English Track | `#3B82F6` | `--color-track-en` | English vocabulary track theme |
| Japanese Track | `#F43F5E` | `--color-track-jp` | Japanese Kana & JLPT track theme |
| Ring / Focus | `#F59E0B` | `--color-ring` | High-visibility focus ring outline |

**Color Notes:**
- **Primary Accent is Radiant Amber (`#F59E0B`):** Conveys premium mastery, warmth, energy, and gamified progress.
- **Emerald Green (`#10B981`) is reserved for Semantic Success:** Used specifically for "Semua tes lolos!", step checkmarks, and streak verification.
- **WCAG Compliance:** All interactive text must achieve at least 4.5:1 contrast against its background. Text on Amber CTA buttons is black `#030712` (contrast ratio ~10.8:1).

---

### Typography

- **Heading Font:** Inter, system-ui, sans-serif
- **Body Font:** Inter, system-ui, sans-serif
- **Monospace Font:** JetBrains Mono, Fira Code, ui-monospace, monospace
- **Mood:** Dark OLED, precision engineering, clean typography, developer-first, responsive, accessible

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

---

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps, tag padding |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, button inline padding |
| `--space-md` | `16px` / `1rem` | Standard padding, card spacing |
| `--space-lg` | `24px` / `1.5rem` | Section padding, container gaps |
| `--space-xl` | `32px` / `2rem` | Large margins, modal padding |
| `--space-2xl` | `48px` / `3rem` | Section margins, hero padding |
| `--space-3xl` | `64px` / `4rem` | Large display containers |

---

### Shadow & Glow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.5)` | Subtle component lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.4), 0 0 1px rgba(255,255,255,0.05)` | Cards, panels |
| `--shadow-lg` | `0 10px 25px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.1)` | Modals, dropdowns |
| `--glow-amber` | `0 0 16px rgba(245,158,11,0.25)` | Primary CTA highlight & active step |
| `--glow-emerald` | `0 0 16px rgba(16,185,129,0.25)` | Success state / test passed |

---

## Component Specs

### Buttons

```css
/* Primary Action Button (Amber Glow) */
.btn-primary {
  background: #F59E0B;
  color: #030712;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover {
  background: #D97706;
  box-shadow: 0 0 16px rgba(245, 158, 11, 0.35);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary Button */
.btn-secondary {
  background: rgba(30, 41, 59, 0.6);
  color: #F8FAFC;
  border: 1px solid #334155;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 200ms ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-secondary:hover {
  background: #1E293B;
  border-color: #475569;
  color: #FFFFFF;
}

/* Success / Pass Button */
.btn-success {
  background: #10B981;
  color: #030712;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-success:hover {
  background: #059669;
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.35);
}
```

### Cards

```css
.card {
  background: #0B0F19;
  border: 1px solid #1E293B;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
}

.card:hover {
  border-color: #334155;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  background: #030712;
  color: #F8FAFC;
  padding: 10px 14px;
  border: 1px solid #334155;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.input:focus {
  border-color: #F59E0B;
  outline: none;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}
```

### Modals & Dialogs

```css
.modal-overlay {
  background: rgba(3, 7, 18, 0.8);
  backdrop-filter: blur(8px);
}

.modal {
  background: #0F172A;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 28px;
  box-shadow: var(--shadow-lg);
  max-width: 520px;
  width: 92%;
  color: #F8FAFC;
}
```

---

## Iconography & Visual Assets Policy

BiLearn enforces a clear distinction between **System UI Chrome** and **Educational Domain Glyphs**:

1. **System UI Chrome & Controls — Strict SVG:**
   - All navigation controls, menu toggles, close buttons, disclosure chevrons, search icons, audio triggers, and modal actions **MUST use clean, scalable SVG icons** (Heroicons, Lucide, or inline SVG).
   - Never use emojis as buttons (e.g. ❌ for close, 🔍 for search, or ☰ for hamburger).

2. **Educational Domain & Curriculum Glyphs — Curated Emojis Permitted:**
   - Emojis are purposefully utilized in the educational track curriculum as immediate visual category anchors (e.g. 🌐 HTML, 🎨 CSS, ⚡ JS, 🇯🇵 Kana, 🇬🇧 Vocab, 🎴 Flashcards, 🏆 Achievement).
   - Emojis in curriculum contexts must always be paired with descriptive text labels for full accessibility and screen reader comprehension.

---

## Anti-Patterns (Do NOT Use)

- ❌ **Pure green CTA buttons** — Emerald green is reserved exclusively for successful test executions and pass verification. Action CTA is Radiant Amber (`#F59E0B`).
- ❌ **Light mode flashes or white dialog cards** — All surfaces maintain deep OLED contrast (`#030712` / `#0B0F19` / `#0F172A`).
- ❌ **Emojis as UI functional controls** — Close, back, menu, and search buttons must use accessible SVGs with proper `aria-label`.
- ❌ **Unresponsive desktop-only navbars** — Mobile viewports (< 768px) must collapse nav links into a responsive mobile drawer/menu.
- ❌ **Truncated step titles without wrapping** — Educational step titles must wrap gracefully (`break-words`, `leading-snug`) on compact screens (375px).
- ❌ **Trapped or backgrounded keyboard focus in modals** — Modals must trap focus, focus close button initially, and dismiss via Escape key.
- ❌ **Low contrast text** — Maintain at least 4.5:1 minimum contrast ratio across all text tokens.
- ❌ **Horizontal scrollbars on mobile (375px)** — All pages must be strictly contained within screen width.

---

## Pre-Delivery Checklist

Before delivering any UI code or feature in BiLearn, verify:

- [ ] Primary CTA uses Radiant Amber (`#F59E0B`), with dark on-accent text.
- [ ] Green (`#10B981`) is reserved only for success feedback / test runner pass.
- [ ] No emojis used as functional control buttons (SVGs used with accessible labels).
- [ ] Modals support full keyboard accessibility (`Escape` key, initial focus, focus trap).
- [ ] Responsive navigation works down to 375px mobile screens without horizontal overflow.
- [ ] Step titles and curriculum content wrap neatly on mobile viewports.
- [ ] `cursor-pointer` applied on all interactive items.
- [ ] Smooth transitions on interactive states (150–250ms).
- [ ] Text contrast meets WCAG AA (4.5:1+).
- [ ] `npm run verify:konten` passes with 0 violations.
