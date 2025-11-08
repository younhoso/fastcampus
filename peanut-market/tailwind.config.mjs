import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: { themes: ["light", "dark", "cupcake"] }, // 필요 테마만
};
