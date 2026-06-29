# @knp-org/liquid-glass-ui

A React component library implementing a dark, frosted **liquid glass** aesthetic — translucent surfaces, backdrop blur, and subtle borders. Ships 26 ready-to-use components with TypeScript types and a single CSS file of design tokens.

## Installation

```bash
npm install @knp-org/liquid-glass-ui
```

### Peer dependencies

This library expects the following to be installed in your app:

- `react` (^18 || ^19)
- `react-dom` (^18 || ^19)
- `react-router-dom` (^6 || ^7)

## Usage

Import the stylesheet once (e.g. in your app entry point), then use components anywhere:

```tsx
// main.tsx / App entry
import '@knp-org/liquid-glass-ui/dist/styles/glass-components.css';
```

```tsx
import { GlassCard, GlassButton } from '@knp-org/liquid-glass-ui';

export function Example() {
  return (
    <GlassCard width={320}>
      <GlassButton variant="primary" shape="pill" size="md">
        Continue
      </GlassButton>
    </GlassCard>
  );
}
```

The styles assume a dark background. Set your page background to something dark (the tokens default to `--bg-color: #050505`) so the glass surfaces read correctly.

## Components

| | | |
|---|---|---|
| `GlassAlert` | `GlassAvatar` | `GlassBadge` |
| `GlassBreadcrumbs` | `GlassButton` | `GlassCard` |
| `GlassCheckbox` | `GlassDivider` | `GlassDropdown` |
| `GlassDropZone` | `GlassEmptyState` | `GlassInput` |
| `GlassList` | `GlassModal` | `GlassNavbar` |
| `GlassPagination` | `GlassProgress` | `GlassSearch` |
| `GlassSkeleton` | `GlassSlider` | `GlassSpinner` |
| `GlassTable` | `GlassTabs` | `GlassTextarea` |
| `GlassToggle` | `GlassTooltip` | `SectionHeader` |

### Example: `GlassButton`

```tsx
<GlassButton
  variant="primary"   // 'primary' | 'secondary' | 'danger' | 'ghost'
  shape="pill"        // 'default' | 'pill' | 'circle' | 'square'
  size="md"           // 'sm' | 'md' | 'lg'
>
  Save
</GlassButton>
```

The `ghost` variant renders a surface-less button, leaving background, padding, and shape entirely to your own classes — handy for icon-only or window-control buttons.

All components extend their underlying HTML element props (e.g. `GlassButton` extends `<button>`, `GlassCard` extends `<div>`), so standard attributes like `onClick`, `className`, and `style` work as expected. Any `className` you pass is merged with the component's own glass classes.

## Theming

The stylesheet exposes CSS custom properties on `:root` that you can override to retheme the library:

```css
:root {
  --bg-color: #050505;
  --text-primary: #FFFFFF;
  --glass-surface: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  --backdrop-blur: blur(12px);
  --radius-md: 12px;
  /* …and more */
}
```

## Development

```bash
npm install
npm run build    # bundle with tsup (CJS + ESM + .d.ts)
npm run dev      # rebuild on change
```

Built with [tsup](https://tsup.egoist.dev/). Output (CommonJS, ESM, type declarations, and the CSS) is emitted to `dist/`.

## License

Private package (`@knp-org`).
