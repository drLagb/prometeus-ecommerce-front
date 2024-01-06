import type { Config } from 'tailwindcss'
import plugin from "tailwindcss-animate"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        mainColor: "#415380",
        secondaryColor: "#AEE5D1",
        backgroundColor: "#F2F2F2",
        altBAckgroundColor: "#E4E4E4",
        verdeColor: "#59E756",
        grisColor: "#8F8787",
        rojoColor: "#940808"
      }
    },
    fontSize: {
      "mv-icon-s": "4.6vw",
      "mv-icon-m":"11.6vw",
      "mv-icon-l": "17.4vw",
      "pc-icon-s": "2.3vw",
      "pc-icon-m": "4vw",
      "pc-icon-l": "5.2vw"
    }
  },
  plugins: [plugin],
}
export default config
