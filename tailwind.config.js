/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced System Colors for Dark Theme
        'system': {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          neutral: '#374151',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#172554'
        },

        // Professional Dark Theme Palette
        'dark': {
          bg: {
            primary: '#0a0a0b',
            secondary: '#111827',
            tertiary: '#1f2937',
            elevated: '#252a41',
          },
          text: {
            primary: '#f9fafb',
            secondary: '#d1d5db',
            muted: '#9ca3af',
          },
          border: {
            primary: '#374151',
            secondary: '#4b5563',
          }
        }
      },

      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },

      animation: {
        // Enhanced Animation System
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'typing': 'typing 3s steps(30) infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' }
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2)' },
          'to': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
        },
        gradientY: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' }
        }
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse at center top, rgba(99, 102, 241, 0.15) 0%, transparent 50%), linear-gradient(135deg, #0a0a0b 0%, #111827 50%, #1f2937 100%)',
        'gradient-section': 'linear-gradient(135deg, #0a0a0b 0%, #111827 50%, #1f2937 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.8) 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgb(99, 102, 241) 0px, transparent 50%), radial-gradient(at 80% 0%, rgb(139, 92, 246) 0px, transparent 50%), radial-gradient(at 0% 50%, rgb(6, 182, 212) 0px, transparent 50%)',
      },

      backdropBlur: {
        'xs': '2px',
      },

      boxShadow: {
        'glow': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.2)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.4)',
        'glow-xl': '0 0 80px rgba(99, 102, 241, 0.5)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(99, 102, 241, 0.1)',
        'dark': '0 10px 15px -3px rgba(0, 0, 0, 0.8), 0 4px 6px -2px rgba(0, 0, 0, 0.6)',
        'dark-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.6)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.8)',
        '4xl': '0 45px 80px -20px rgba(0, 0, 0, 0.9)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },

      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.4, 0.0, 0.2, 1.0)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },

      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}