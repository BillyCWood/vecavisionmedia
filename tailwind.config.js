/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'custom-gray': '#1f1f1f',
      'vvm-pink': '#ac00e6',
      'vvm-teal': '#03fcca',
      'vvm-blue': '#0384fc',
      'vvm-lightblue': '#38BDF8',
    },
  },
  plugins: [],
};
