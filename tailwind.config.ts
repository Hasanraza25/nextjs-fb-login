import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '639px'}, // Custom max-width breakpoint
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myGreen: '#42b72a',
        hoverGreen: '#36a420',
        blueBg: '#0866ff',
        hoverBlue: '#1877f2',
        inputColor: '#9e9fa3',
      },
    },
  },
  plugins: [],
};
export default config;
