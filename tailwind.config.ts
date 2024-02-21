import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        minipayPrimary: "#00955f",
        minipayPrimaryComp: "#00c77f",
        minipayDisableCard: "#C8D0CB",
        minipayPrimaryLight: "#CFF2E5",
        minipaySecondary: "#EA3C58",
        valoraPrimary: "#1BB775",
        valoraDisableCard: "#C8D0CB",
        valoraPrimaryLight: "#CFF2E5",
        valoraSecondary: "#DFFC70",
      },
    },
  },
  plugins: [],
};
export default config;
