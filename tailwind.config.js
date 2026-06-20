/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg:      'var(--bg)',
        bg2:     'var(--bg-2)',
        text:    'var(--text)',
        muted:   'var(--muted)',
        surface: 'var(--surface)',
        border:  'var(--border)',
        indigo:  'rgb(var(--color-primary) / <alpha-value>)',
        cyan:    'rgb(var(--color-secondary) / <alpha-value>)',
        violet:  '#8b5cf6',
        emerald: '#10b981',
        rose:    '#f43f5e',
        amber:   '#f59e0b',
      },
      backgroundImage: {
        'grad':        'var(--grad)',
        'grad-rev':    'var(--grad-rev)',
        'grad-violet': 'linear-gradient(135deg, #8b5cf6, rgb(var(--color-primary)))',
        'mesh':        'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(var(--color-primary), 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(var(--color-secondary), 0.10) 0%, transparent 60%)',
      },
      animation: {
        'float':       'float 4s ease-in-out infinite',
        'float-slow':  'float 6s ease-in-out infinite',
        'pulse-ring':  'pulse-ring 3s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 0 4px rgba(99,102,241,0.2)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(6,182,212,0.15)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
