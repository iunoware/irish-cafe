import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bonVivant = localFont({
  src: [
    {
      path: "../fonts/BonVivantSerifBold.ttf",

      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bon-vivant",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irish Cafe",
  description: "The Irish Cafe, Best restaurant in Madurai",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} ${bonVivant.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
