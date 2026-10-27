# CrystaCode Styling Standards & Design System Tokens (Default)

These are the default design standards and token conventions. Apply them unless the user supplies or names their own design system, in which case use the user's system instead (map its fonts, colors, spacing and radii to CSS custom properties in the same way). In Browser Clone Mode, exact fidelity to the shared page takes priority over these defaults.

## 1. Decimal rem scaling engine (`1rem = 10px`)

- Always set `:root` / `html` base font size to `62.5%` so `1rem = 10px`.
- **ALWAYS** use `rem` for all layout dimensions, widths, heights, margins, padding, gaps, positioning, and radii.
- **NEVER** use `px` except for `0.1rem` / `1px` subtle borders.
- **Formula**: `rem = px / 10` (e.g., `16px` → `1.6rem`, `24px` → `2.4rem`, `8px` → `0.8rem`).

## 2. Typography token standards

- Use the CrystaCode shorthand token format: `font: var(--font-{size}-{weight});`
- Base font family: `'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
- Sizes: `8xl` (110px), `7xl` (80px), `6xl` (48px), `5xl` (40px), `4xl` (32px), `3xl` (28px), `2xl` (24px), `xl` (20px), `l` (18px), `m` (16px), `s` (14px), `xs` (12px), `2xs` (10px).
- Weights: `black` (900), `extrabold` (800), `bold` (700), `demibold`/`semibold` (600), `medium` (500), `regular` (400), `light` (300).
- Example:

```css
--font-m-regular: 400 1.6rem/2.4rem var(--font-family);
--font-xl-bold: 700 2.0rem/2.8rem var(--font-family);
--font-2xl-demibold: 600 2.4rem/3.2rem var(--font-family);
```

## 3. Color tokens & theming (`--crysta-*` & `--bit-clr-*`)

Include the standard theme CSS custom properties in `:root` (or `:root[bit-theme="dark"]` / `:root[bit-theme="light"]`) so the prototype is self-contained.

### Primary / Brand
- `--crysta-brand-primary`: `#872cd6`
- `--crysta-light-blue`: `#00d4ff`
- `--bit-clr-pri`: `#3bafda`
- `--bit-clr-pri-hover`: `#8ed0eb`

### Backgrounds
- Dark page background: `--bit-clr-bg-pri`: `#0f172a`
- Panel / Card background: `--crysta-panel-bg-clr`: `#1d2330`, `--crysta-clr-bg-card-pri`: `rgba(255, 255, 255, 0.05)`
- Card hover: `--crysta-clr-bg-hover-card`: `#1e2229`

### Text & Foreground
- Primary text: `--bit-clr-fg-pri`: `#ffffff`
- Secondary text / info: `--crysta-clr-txt-fg-sec` / `--bit-clr-fg-sec`: `#adadad` / `#e6e6e6`

### Borders & Dividers
- `--crysta-clr-brd-sec`: `#333333`
- `--bit-clr-brd-sec`: `rgba(243, 244, 246, 0.3)`

### Accents & Feedback
- Success: `--crysta-crct-stts-msg`: `#04dc08`
- Warning/Delete: `--crysta-warrn-clr` / `--crysta-delete-red-clr`: `#f84345` / `#d86060`

## 4. Radius & shadow tokens

### Radius
- `--radius-xs`: `0.4rem`
- `--radius-sm`: `0.8rem`
- `--radius-md`: `1.2rem`
- `--radius-lg`: `1.6rem`
- `--radius-xl`: `2.4rem`
- `--radius-full`: `9999px`

### Shadows
- `--crysta-shd-s`: `0 0.2rem 0.8rem rgba(0, 0, 0, 0.2)`
- `--crysta-shd-m`: `0 0.4rem 1.6rem rgba(0, 0, 0, 0.3)`

## Anti-patterns

- Hardcoding random hex colors instead of tokens.
- Raw `px` sizing (except `0.1rem`/`1px` subtle borders).
- Inline styles or `<script>` blocks inside HTML.
