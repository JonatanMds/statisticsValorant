import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/patters/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'white-100': '#ffff',
        'purple-100': '#6759E9',
        'purple-200': '#5747E9',
        'purple-400': '#1F2333',
        'purple-500': '#0E111C',
        'gray-100': '#8289A3',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
export default config
