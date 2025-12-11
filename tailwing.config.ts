import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Note: I removed "src/" from these paths
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bayut: {
          DEFAULT: "#3f3f46", // This is zinc-700
          dark: "#27272a",    // This is zinc-800 (for hover states)
          light: "#f4f4f5",
        },
      },
    },
  },
  plugins: [],
};
export default config;