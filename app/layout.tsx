import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Omnia Ghanem Atelier",
  description: "A Symphony of Silk & Modesty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}