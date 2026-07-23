/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}", "./src/index.css"],
  safelist: [
    'animate-shiny-sparkle',
    'animate-shine-skew',
    'animate-shine-sweep',
    'animate-sparkle',
    'animate-rainbow-hue',
    'animate-rainbow-border',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        obsidian: {
          base: '#070708',
          surface: '#121214',
          raised: '#1a1a1f',
          edge: '#26262e'
        },
        violet: {
          glow: '#7C3AED'
        },
        cobalt: {
          glow: '#2563EB'
        },
        auric: '#FBBF24',
        emerald: {
          glow: '#10B981'
        },
        crimson: '#EF4444',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(124, 58, 237, 0.4)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 0 6px rgba(124, 58, 237, 0)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'rainbow-hue': {
          '0%': { filter: 'hue-rotate(0deg) saturate(1.4)' },
          '100%': { filter: 'hue-rotate(360deg) saturate(1.4)' }
        },
        'rainbow-border': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        },
        'shine-sweep': {
          '0%': { transform: 'translateX(-100%) skewX(-20deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(200%) skewX(-20deg)', opacity: '0' }
        },
        'shine-skew': {
          '0%': { transform: 'translateX(-100%) skewX(-20deg)', opacity: '0' },
          '10%': { opacity: '0.4' },
          '90%': { opacity: '0.4' },
          '100%': { transform: 'translateX(200%) skewX(-20deg)', opacity: '0' }
        },
        'sparkle': {
          '0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: '1' }
        },
        'shiny-sparkle': {
          '0%, 100%': { filter: 'drop-shadow(0 0 14px rgba(99, 102, 241, 0.8)) brightness(1.15) saturate(1.1)' },
          '50%': { filter: 'drop-shadow(0 0 24px rgba(99, 102, 241, 1)) brightness(1.25) saturate(1.2)' }
        }
      },
animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 40s linear infinite',
        'fade-up': 'fade-up 0.5s ease-out both',
        'scan': 'scan 1.8s ease-in-out infinite',
        'rainbow-hue': 'rainbow-hue 4s linear infinite',
        'rainbow-border': 'rainbow-border 3s linear infinite',
        'shine-sweep': 'shine-sweep 3s ease-in-out infinite',
        'shine-skew': 'shine-skew 3s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'shiny-sparkle': 'shiny-sparkle 2s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
