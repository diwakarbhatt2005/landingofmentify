/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#02a2bd',
          info: '#06b6d4',
        },
        status: {
          success: '#22c55e',
          warning: '#faad14',
          error: '#f5222d',
        },
        light: {
          bodyBg: '#F3F6FB',
          headerBg: '#E6ECF5',
          siderBg: '#E6ECF5',
          cardBg: '#FFFFFF',
          text: '#0F172A',
          textMuted: '#64748B',
          border: '#CBD5E1',
          accentPrimary: '#2563EB',
          accentSecondary: '#06B6D4',
          accentViolet: '#7C3AED',
          accentGreen: '#10B981',
          accentError: '#EF4444',
        },
        dark: {
          bodyBg: '#000000',
          headerBg: '#0a0a0a',
          siderBg: '#0a0a0a',
          cardBg: '#111111',
          text: '#ffffff',
          textMuted: '#a3a3a3',
          border: '#262626',
          accentPrimary: '#2563EB',
          accentSecondary: '#06B6D4',
          accentViolet: '#7C3AED',
          accentGreen: '#10B981',
          accentError: '#EF4444',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInFromRight 0.6s ease-out forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(6, 182, 212, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};