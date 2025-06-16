// tailwind.config.js
import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['"DM Sans"', "sans-serif"],
            ibm: ['IBM Plex Sans Arabic"', "sans-serif"]
        },
        colors: {
            primary: {
                DEFAULT: '#000000FF',
                foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
                DEFAULT: '#FFFFFFFF',
                foreground: 'hsl(var(--secondary-foreground))'
            },
            cta: '#f9ad0a',
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))'
            },
            highlight: '#F1C40F',
          lemon: '#9df00f',
            san: '#f5eee9',
          royalblue: '#016ef1',
          brandblue: '#3883f8',
          paleblue: '#629ef9',
          blue: '#0d6efd',
          footer: '#002847',
          facebook: '#3b5998',
          careemgreen: "#00e784",
          typo: "#00493e",
          forestgreen: "#006fee",
          lightgreen: "#d6ffea",
          desertskyblue: "#a6edf2",
          midnightblue: "#001942",
          offwhite: "#fafffc",
          warmgrey: "#F6F6F1",
          black: "#000000",
          pay: "#000C26",
          get: "#7f5ffa",
          eat: "#80FF80",
          go: "#3837e4",
            neutral: {
                light: '#ECF0F1',
                dark: '#34495E'
            },
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
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))'
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))'
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            chart: {
                '1': 'hsl(var(--chart-1))',
                '2': 'hsl(var(--chart-2))',
                '3': 'hsl(var(--chart-3))',
                '4': 'hsl(var(--chart-4))',
                '5': 'hsl(var(--chart-5))'
            }
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
        }
    }
},
  darkMode: "class",
  plugins: [heroui()]
}

export default config;