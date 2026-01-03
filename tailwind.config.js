/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // DESIGN TOKENS - Spruce Mobile Detailing
      colors: {
        // Brand Colors (Primary Identity)
        brand: {
          teal: {
            DEFAULT: '#1B9B8A',
            dark: '#158F7E',
            light: '#20B39F',
            subtle: 'rgba(27, 155, 138, 0.1)',
          },
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F4E5A1',
            dark: '#B8941F',
            subtle: 'rgba(212, 175, 55, 0.1)',
          },
        },
        
        // Surface Colors (Backgrounds)
        surface: {
          primary: '#0A0A0A',
          secondary: '#0F1419',
          elevated: '#1A1A1A',
          card: {
            DEFAULT: '#171717',
            hover: '#1F1F1F',
          },
        },
        
        // Semantic Colors (Functional)
        feedback: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
        
        // Grayscale (Neutral)
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Typography Scale (Major Third 1.25)
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],      // 12 * 1.33 = 16 (8px grid)
        sm: ['14px', { lineHeight: '20px' }],      // 14 * 1.43 = 20 (Accessibility)
        base: ['16px', { lineHeight: '24px' }],    // 16 * 1.5 = 24 (Perfect rhythm)
        lg: ['20px', { lineHeight: '28px' }],      // 20 * 1.4 = 28
        xl: ['24px', { lineHeight: '32px' }],      // 24 * 1.33 = 32
        '2xl': ['30px', { lineHeight: '36px' }],   // On grid
        '3xl': ['36px', { lineHeight: '40px' }],   // On grid
        '4xl': ['48px', { lineHeight: '56px' }],   // On grid
        '5xl': ['60px', { lineHeight: '64px' }],   // On grid
        '6xl': ['72px', { lineHeight: '80px' }],   // On grid
        '7xl': ['96px', { lineHeight: '104px' }],  // On grid
      },
      
      // Spacing (Already 8-point grid via Tailwind)
      spacing: {
        // Tailwind's default spacing is already on 4px grid
        // 0.5 = 2px, 1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px, etc.
      },
      
      // Border Radius (Standardized)
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        full: '9999px',
      },
      
      // Shadows (Elevation System)
      boxShadow: {
        'glow-teal': '0 0 20px rgba(27, 155, 138, 0.5)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
