/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 3s linear infinite',
      },
      boxShadow: {
        glow: '0 0 15px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  safelist: [
    'text-cyan-400',
    'text-fuchsia-400',
    'text-green-400',
    'bg-cyan-500',
    'bg-fuchsia-500',
    'bg-green-500',
    'bg-cyan-500/20',
    'bg-fuchsia-500/20',
    'bg-green-500/20',
    'border-cyan-500',
    'border-fuchsia-500',
    'border-green-500',
    'from-cyan-500',
    'from-fuchsia-500',
    'from-green-500',
    'hover:bg-cyan-400',
    'hover:bg-fuchsia-400',
    'hover:bg-green-400',
  ],
  plugins: [],
};