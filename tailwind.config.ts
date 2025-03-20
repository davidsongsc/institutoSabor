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
            borderRadius: {
                xl: "1rem",
                "3xl": "25px",
                "3x2": "50px",
            },
            fontSize: {
                sm: "12px",
                ssm: "10px",
            },
        },
    },
    plugins: [],
} satisfies Config;
