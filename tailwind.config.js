/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			colors: {
				"primary": "#D87D4A",
				"primary-light": "#fbaf85",
				"black-light": "#191919",
				"dark-light": "#101010",
				"gray-light": "#F1F1F1",
				"gray-lightest": "#FAFAFA"
			}
		},
  },
  plugins: [],
};
