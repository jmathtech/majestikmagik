// tailwind.config.js (or .ts)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      // Add these keyframes and animation definitions
      keyframes: {
        gradientFadeInOut: {
          '0%, 100%': { opacity: '1' }, // Fully visible at start and end
          '50%': { opacity: '0.5' },   // Slightly faded in the middle
        },

        fadeInOut: {
          '0%, 100%': { opacity: '0.2' }, // Start and end semi-transparent (adjust opacity as needed)
          '50%': { opacity: '1' },       // Fully visible in the middle
        },

        fadeInScrollUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // Start off-screen and transparent
          '100%': { opacity: '1', transform: 'translateY(0)' }, // End on-screen and fully visible
        },
        animation: {
          // Reference the keyframes above
          gradientFadeInOut: 'gradientFadeInOut 4s ease-in-out infinite', // Adjust duration (4s) and timing as needed
          fadeInOut: 'fadeInOut 4s ease-in-out infinite',
          fadeInScrollUp: 'fadeInScrollUp 0.6s ease-out forwards', // Adjust duration (0.5s) as needed
        },
      },
      // Keep existing extensions if any
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
