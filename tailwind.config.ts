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
            screens: {
                '3xl': '2000px', 
            },
            backgroundImage: {
                'multi-gradient': 'linear-gradient(to right, var(--primary) 20%, var(--secondary) 50%, transparent 80%)',
            },
            colors: {
                primary: "#AC0F0A",
                secondary: "#FFFFFF",
                terciary: "#000000",
                quaternary: "#FDCC1E",
                quinary: "#F6F6F6",
                senary: "#CACACB",
                septenary: "#E7E7E7",
                transparent: "transparent",
                backgroundPrimary: "#EBEBEB"
            },

            fontSize: {
                sm: "12px",
                ssm: "10px",
                "4xl": "1.5rem",
                "5xl": "2rem",
                "6xl": "2.4rem",
                "7xl": "3.5rem",
                "8xl": "5.5rem",
                "9xl": "6.5rem",
                "10xl": "7.0rem",
                "11xl": "8.5rem",
                "12xl": "9.5rem",
                "13xl": "10.5rem",
                "14xl": "11.5rem",
                "15xl": "12.5rem",
                "16xl": "13.5rem",
                "17xl": "14.5rem",
                "18xl": "15.5rem",
                "blogTitle": "7rem",
                "blogSubTitle": "2.3rem",
                "blogText": "1.9rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
