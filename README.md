# Spruce Mobile Detailing Website

Professional mobile detailing website built with Next.js for Spruce Mobile Detailing, serving Mississauga and the Greater Toronto Area.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Modern UI**: Built with Next.js, Tailwind CSS, and shadcn/ui components
- **Mobile-First**: Optimized for mobile viewing and performance
- **Before & After Gallery**: Interactive showcase of detailing work
- **Service Pages**: Dedicated pages for Car, RV, and Boat detailing
- **Contact Integration**: Phone and email contact links throughout
- **Social Media**: Instagram integration with placeholders for other platforms

## 📄 Pages

- **Home** (`/`): Hero section, services overview, FAQ, contact form
- **About** (`/about`): Company story, values, team information
- **Car Detailing** (`/car-detailing`): Interior, exterior, luxury car services
- **RV Detailing** (`/rv-detailing`): RV wash, wax, interior/exterior detailing
- **Boat Detailing** (`/boat-detailing`): Boat, yacht, and jet ski services

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Node.js**: v20.x

## 📦 Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Environment Variables

No environment variables are required for the basic deployment. All content is static.

## 📱 Contact Information

- **Phone**: +1-800-123-4567
- **Email**: support@example.com
- **Service Area**: Mississauga, Port Credit, Lorne Park, Greater Toronto Area
- **Instagram**: [@sprucemobiledetailing](https://www.instagram.com/sprucemobiledetailing/)

## 🎨 Brand Colors

- **Primary Green**: #0F4C3A (Deep evergreen)
- **Secondary**: Lighter greens and teals
- **Accent**: White and light gray

## 📝 Project Structure

```
/app
  /about           # About page
  /car-detailing   # Car detailing service page
  /rv-detailing    # RV detailing service page
  /boat-detailing  # Boat detailing service page
  layout.js        # Root layout with navigation and footer
  page.js          # Home page
  globals.css      # Global styles
/components
  Navigation.js    # Header navigation component
  Footer.js        # Footer component
  BeforeAfter.js   # Before/After gallery component
  /ui              # shadcn/ui components
/lib
  utils.js         # Utility functions
```

## 🔧 Customization

### Updating Content

All content is in the respective page files:
- Home: `/app/page.js`
- About: `/app/about/page.js`
- Services: `/app/[service]/page.js`

### Updating Contact Info

Update contact information in:
- `/components/Navigation.js` (header)
- `/components/Footer.js` (footer)
- Each page file for service-specific CTAs

### Updating Images

Replace Unsplash image URLs with your own images:
- Service images
- Before/After gallery images
- Hero section backgrounds

## 📊 SEO Features

- Semantic HTML structure
- Proper heading hierarchy (h1 → h6)
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Mobile-friendly responsive design
- Fast loading times
- Alt text on all images

## 🚀 Performance

- Optimized images with Next.js Image component where applicable
- Lazy loading of images
- Minimal JavaScript bundle size
- CSS optimization with Tailwind

## 📄 License

© 2025 Spruce Mobile Detailing. All rights reserved.

## 🤝 Support

For questions or support, contact support@example.com
