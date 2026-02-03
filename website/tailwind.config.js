/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#000000',
        'text-primary': '#F5F5F7',
        'text-secondary': 'rgba(255, 255, 255, 0.8)',
        'text-muted': 'rgba(134, 134, 139, 1.0)',
        'ui-bg': 'rgba(42, 42, 45, 0.72)',
        'ui-hover': 'rgba(66, 66, 69, 0.72)',
        'ui-border': 'rgba(134, 134, 139, 0.3)',
        'ui-border-hover': 'rgba(134, 134, 139, 0.5)',
        'nav-bg': 'rgba(22, 22, 23, 0.95)',
        'code-bg': 'rgba(30, 30, 32, 0.9)',
        'accent': '#667eea',
        'accent-hover': '#764ba2',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'pill': '28px',
        'card': '16px',
      },
    },
  },
  plugins: [],
}
