/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         container: {
            center: true,
         },
         fontFamily: {
            poppins: ["poppins", "sans-serif"],
         },
         backgroundImage: {
            "bg-hero": "url('/src/assets/image/bg-image.png')",
         },
         animation: {
            floatUp: " floatUp 10s infinite alternate",
            floatDown: " floatDown 10s infinite alternate",
         },
         keyframes: {
            floatUp: {
               "0%": { transform: "translateY(40px)" },
               "100%": { transform: "translateY(-40px)" },
            },
            floatDown: {
               "0%": { transform: "translateY(-40px)" },
               "100%": { transform: "translateY(40px)" },
            },
         },
      },
   },
   plugins: [],
};
