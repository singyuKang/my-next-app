/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from 'tailwindcss'
const colors = require('./src/foundation/Color/ColorPalette')
const fontSize = require('./src/foundation/Text/Typography')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily: {
        primary: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Roboto"',
          '"Malgun Gothic"',
          '"맑은 고딕"',
          'helvetica',
          '"Apple SD Gothic Neo"',
          'sans-serif',
        ],
      },
      backgroundImage: {
        checked: `url('../assets/icon/checked_enum.svg')`,
      },
      content: {
        checked: `url('../assets/icon/checked_enum.svg')`,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none' /* Chrome, Safari, Opera */,
        },
      })
    },
  ],
}

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config
