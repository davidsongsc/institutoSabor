import type { Metadata } from "next";
import { Inter, Roboto_Mono, Montserrat } from "next/font/google";
import "./globals.css";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { useMemo } from "react";
import { ConfigProvider, App, Layout } from "antd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instituto do Sabor",
  description: "No Instituto do Sabor, unimos teoria e prática para que você aprimore suas habilidades e transforme ingredientes em verdadeiras obras-primas.",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = useMemo(() => resolveConfig(tailwindConfig), []);

  return (
    <html lang="pt-br">
      <body
        className={` 
          ${inter.variable} ${montserrat.variable}  antialiased h-screen  ocultar-scroll   
`}

      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: config.theme.colors.primary,
              colorPrimaryHover: config.theme.colors.quaternary,
              borderRadius: 8,
            },
            components: {
              Menu: {
                colorText: config.theme.colors.primary,
                colorBgContainer: config.theme.colors.transparent,
              },
              Button: {
                colorPrimary: config.theme.colors.primary,
                fontWeight: "bold",
                defaultHoverBg: config.theme.colors.primary,
                defaultHoverColor: config.theme.colors.primary,
              },
              Card: {
                colorBgContainer: config.theme.colors.quinary,
              },
            },
          }}
        >
          <App>
            <Layout className="bg-septenary "
            >

              {children}
            </Layout>
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}