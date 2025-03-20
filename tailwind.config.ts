import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#AC0F0A",
                secondary: "#FFFFFF",
                terciary: "#000000",
                quaternary: "#FDCC1E",
                quinary: "#F6F6F6",
                senary: "#CACACB",
                transparent: "transparent",
            },
           
            fontSize: {
                sm: "12px",
                ssm: "10px",
                "4xl": "1.5rem",
                "5xl": "2rem",
                "6xl": "2.5rem",
                "7xl": "3.5rem",
                
            },
        },
    },
    plugins: [],
} satisfies Config;
