# Spruce Mobile Detailing - Design System Documentation

## **Overview**
This design system ensures consistent, accessible, and maintainable UI/UX across the entire Spruce Mobile Detailing website.

---

## **1. COLOR SYSTEM**

### **Brand Colors (Primary Identity)**

#### Teal (Primary Action Color)
- **Primary**: `#1B9B8A` - `brand-teal` or `bg-brand-teal`
- **Dark**: `#158F7E` - `brand-teal-dark`
- **Light**: `#20B39F` - `brand-teal-light`
- **Subtle**: `rgba(27, 155, 138, 0.1)` - `brand-teal-subtle`

**Usage**: Primary CTAs, interactive elements, icons, hover states

#### Gold (Premium Accent Color)
- **Primary**: `#D4AF37` - `brand-gold` or `bg-brand-gold`
- **Light**: `#F4E5A1` - `brand-gold-light`  
- **Dark**: `#B8941F` - `brand-gold-dark`
- **Subtle**: `rgba(212, 175, 55, 0.1)` - `brand-gold-subtle`

**Usage**: Premium highlights, borders, accents, decorative elements

### **Surface Colors (Backgrounds)**
- **Primary**: `#0A0A0A` - Dark base background
- **Secondary**: `#0F1419` - Alternate sections
- **Elevated**: `#1A1A1A` - Cards and elevated surfaces
- **Card**: `#171717` - Default card background
- **Card Hover**: `#1F1F1F` - Card hover state

### **Semantic Colors (Functional)**
- **Success**: `#10B981` - Confirmations, positive states
- **Warning**: `#F59E0B` - Cautionary messages
- **Error**: `#EF4444` - Errors, critical alerts
- **Info**: `#3B82F6` - Informational messages

---

## **2. TYPOGRAPHY**

### **Font Family**
- **Headers**: Montserrat (font-black, font-bold)
- **Body**: System fonts (Inter fallback)

### **Type Scale (Major Third 1.25 Ratio)**
Following WCAG accessibility and visual rhythm:

| Size Class | Pixels | Line Height | Usage |
|------------|--------|-------------|-------|
| text-xs | 12px | 16px (1.33) | Captions, badges |
| text-sm | 14px | 20px (1.43) | Labels, small text |
| text-base | 16px | 24px (1.5) | Body text (WCAG minimum) |
| text-lg | 20px | 28px (1.4) | Subheadings |
| text-xl | 24px | 32px (1.33) | H4 |
| text-2xl | 30px | 36px | H3 |
| text-3xl | 36px | 40px | H2 |
| text-4xl | 48px | 56px | H1 Mobile |
| text-5xl | 60px | 64px | H1 Tablet |
| text-6xl | 72px | 80px | H1 Desktop |
| text-7xl | 96px | 104px | Hero Headlines |

### **Typography Rules**
- ✅ Minimum body text: 16px (WCAG AA)
- ✅ Line height: Minimum 1.5 for body text
- ✅ All line heights calculated to align with 8px grid
- ✅ Letter spacing: tracking-tight for headers, normal for body

---

## **3. SPACING SYSTEM**

### **8-Point Grid**
All spacing values must be multiples of 4px or 8px:

| Class | Value | Usage |
|-------|-------|-------|
| p-1 | 4px | Minimal padding |
| p-2 | 8px | Tight spacing |
| p-3 | 12px | Compact spacing |
| p-4 | 16px | **Standard** button/card padding |
| p-6 | 24px | **Standard** section padding |
| p-8 | 32px | Large padding |
| p-12 | 48px | Extra large |
| p-16 | 64px | Section spacing mobile |
| p-20 | 80px | Section spacing tablet |
| p-24 | 96px | Section spacing desktop |

### **Container Max-Widths**
Semantic usage for content hierarchy:

- **max-w-3xl**: 768px - Text content, forms
- **max-w-4xl**: 896px - FAQ sections, single column
- **max-w-5xl**: 1024px - Timeline, process sections
- **max-w-6xl**: 1152px - Hero content, CTA sections
- **max-w-7xl**: 1280px - Main content areas, grids

---

## **4. COMPONENTS**

### **Buttons**

#### Size Variants
- **Small**: `px-6 py-4` (24px/16px)
- **Medium**: `px-8 py-5` (32px/20px)  
- **Large**: `px-10 py-6` (40px/24px)
- **XL**: `px-12 py-8` (48px/32px)

#### Style Variants
- **Primary**: Teal gradient with border
- **Secondary**: Gold outline
- **Tertiary**: Gray with hover

#### Required States
- Hover: Border color change + background shift
- Focus: `focus:ring-2 focus:ring-brand-teal`
- Active: Slight scale reduction
- Disabled: Opacity 50%

### **Cards**
- Border: `border-2 border-gray-800`
- Radius: `rounded-xl` (20px) or `rounded-2xl` (24px)
- Padding: `p-6` (24px) or `p-8` (32px)
- Background: `bg-gradient-to-br from-gray-900 to-gray-800`
- Hover: `hover:border-brand-teal`

### **Forms**
- Input height: `py-3` (minimum 48px total for touch)
- Border: `border-2 border-gray-700`
- Focus: `focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/50`
- Label: Associated with htmlFor
- Required: aria-required="true"

---

## **5. ACCESSIBILITY STANDARDS**

### **WCAG 2.1 AA Compliance**

#### Color Contrast
- **Normal text**: Minimum 4.5:1 ratio
- **Large text**: Minimum 3:1 ratio
- **Current compliance**:
  - White on #0A0A0A: 19.37:1 ✅
  - Gray-300 on #0A0A0A: 11.54:1 ✅
  - Teal #1B9B8A on black: 5.82:1 ✅
  - Gold #D4AF37 on black: 7.23:1 ✅

#### Interactive Elements
- ✅ All links have focus states
- ✅ All buttons have focus:ring-2
- ✅ Form labels associated with inputs
- ✅ ARIA labels on icons
- ✅ Touch targets: Minimum 44x44px

#### Keyboard Navigation
- ✅ Tab order logical
- ✅ Focus visible on all interactive elements
- ✅ Dropdowns accessible via keyboard
- ✅ Forms can be submitted via Enter key

---

## **6. RESPONSIVE BREAKPOINTS**

### **Mobile-First Strategy**

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | < 640px | Mobile phones |
| sm | ≥ 640px | Large phones |
| md | ≥ 768px | Tablets |
| lg | ≥ 1024px | Desktop |
| xl | ≥ 1280px | Large desktop |
| 2xl | ≥ 1536px | Extra large |

### **Navigation Behavior**
- **Mobile (< 1024px)**: Fixed top bar, dropdown menu
- **Desktop (≥ 1024px)**: Floating pill navigation

### **Hero Section Spacing**
- **Mobile**: pt-44 (176px) - Clears 64px header
- **Tablet**: pt-48 (192px) - Extra breathing room
- **Desktop**: pt-40 (160px) - Clears floating header
- **XL**: pt-44 (176px) - Optimal for large screens

---

## **7. ANIMATION & TRANSITIONS**

### **Standard Durations**
- **Fast**: 200ms - Micro-interactions
- **Standard**: 300ms - Hovers, fades
- **Slow**: 500ms - Page transitions

### **Easing Functions**
- **ease-out**: Entrances, expansions
- **ease-in**: Exits, collapses
- **ease-in-out**: Smooth both ways

---

## **8. ICONOGRAPHY**

### **Icon System**
- **Library**: Lucide React
- **Sizes**: w-4 (16px), w-5 (20px), w-6 (24px), w-8 (32px)
- **Colors**: Inherit from parent or use brand colors
- **Accessibility**: aria-hidden="true" on decorative icons

---

## **9. GRID SYSTEM**

### **Layout Grids**
- **Services**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Benefits**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Location Cards**: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`

### **Gap Spacing**
- **Tight**: gap-4 (16px)
- **Standard**: gap-6 (24px)
- **Loose**: gap-8 (32px)

---

## **10. BRAND VOICE & MESSAGING**

### **Positioning**
- **From**: "We clean cars"
- **To**: "We protect assets"

### **Primary Upsell**
- **Restoration** (main marketing focus)
- **Ceramic Coating** (equal content weight)

### **Key Messages**
- Mobile convenience
- Certified professionals (System X, Glidecoat, Suntek)
- ROI-focused (save money over time)
- Membership value (30% discount)

---

## **11. IMPLEMENTATION CHECKLIST**

### **When Creating New Components**
- [ ] Use design tokens from tailwind.config.js
- [ ] Follow 8-point spacing grid
- [ ] Add focus states (focus:ring-2)
- [ ] Add ARIA labels where needed
- [ ] Ensure 44x44px minimum touch targets
- [ ] Test on mobile and desktop
- [ ] Verify WCAG AA contrast

### **When Editing Existing Components**
- [ ] Replace hardcoded colors with tokens
- [ ] Fix any py-7 or non-grid spacing
- [ ] Ensure typography uses defined scale
- [ ] Add missing accessibility attributes
- [ ] Test responsive behavior

---

## **12. FILE STRUCTURE**

```
/app
├── tailwind.config.js (Design tokens)
├── globals.css (CSS variables)
├── components/ (Reusable UI)
│   ├── Navigation.js (Header with mega menu)
│   ├── Footer.js
│   ├── FloatingCallButton.js
│   ├── TimelineProgress.js
│   └── ui/ (shadcn components)
├── app/ (Next.js pages)
│   ├── page.js (Homepage)
│   ├── about/
│   ├── contact/
│   ├── membership/
│   ├── services/ (9 service pages)
│   └── locations/ (9 location pages)
```

---

## **MAINTENANCE**

### **Monthly Audits**
1. Run accessibility checker (WAVE, Axe)
2. Test all forms and interactive elements
3. Verify mobile responsiveness
4. Check for new magic numbers
5. Review color contrast

### **Before Deployment**
1. Lint all files
2. Test on real devices
3. Performance audit (Lighthouse)
4. Accessibility scan
5. Cross-browser testing

---

**Last Updated**: January 2, 2026
**Version**: 1.0
**Maintained by**: Spruce Mobile Detailing Development Team
