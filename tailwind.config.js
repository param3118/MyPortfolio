module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom Indigo
        secondary: "#9333EA", // Custom Purple
        accent: "#22D3EE", // Custom Cyan
        lightBg: "#f0f0f0",
        darkBg: "#0F172A", // Custom Dark Background
      },
    },
  },
  plugins: [],
};
