/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#05070B',
        midnight: '#0B101B',
        stratosphere: '#121A2B',
        starlight: '#F2F5F8',
        silver: '#C4CDD9',
        regolith: '#8A96A8',
        amber: {
          DEFAULT: '#E59846',
          bright: '#F3B062',
          muted: '#9E6526',
        },
        violet: {
          DEFAULT: '#7C6AE6',
          soft: '#9D8FF0',
          deep: '#241D49',
        },
        cyan: {
          DEFAULT: '#56B4E9',
        }
      },
      fontFamily: {
        serif: ['"Spectral"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Schibsted Grotesk"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'editorial': '1440px',
      },
      transitionTimingFunction: {
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
      }
    },
  },
  plugins: [],
}
