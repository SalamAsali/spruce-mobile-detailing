# HelpBanner Component (Next.js + Tailwind)

This folder contains a drop-in **Help Banner** client component with:
- Intent chips (Request Quote / Schedule Service / Fleet Detailing / Emergency Detail)
- Dynamic CTA row + Back button
- Collapse/Expand toggle
- Smooth scroll for `#anchors`
- `lucide-react` icons (no CDN)

## Install dependency
```bash
npm i lucide-react
```

## Add file
Place:
- `HelpBanner.tsx` in `components/HelpBanner.tsx`

## Use it
```tsx
import HelpBanner from "@/components/HelpBanner";

export default function Page() {
  return (
    <>
      <HelpBanner />
      {/* rest of your page */}
    </>
  );
}
```

## Customize
In `HelpBanner.tsx` update:
- `PHONE` and `PHONE_TEL`
- `CTAS` routes and `#section` anchors

Make sure IDs exist on the page if you keep anchors:
- `#quote`, `#booking`, `#fleet`
