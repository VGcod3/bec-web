import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bec-orange": '#DF9320',
        "bec-accent": "#d9d9d9",
        "bec-bg": "#151515"
      },

    },
  },
  plugins: [],
}
export default config
