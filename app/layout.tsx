import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tania Tan — Client Marketing & Events",
  description:
    "UCLA grad with hands-on experience across CRM, digital marketing, e-commerce, PR, and events for global brands. Currently Client Marketing Intern at Christian Dior Couture.",
  openGraph: {
    title: "Tania Tan — Client Marketing & Events",
    description:
      "UCLA grad with hands-on experience across CRM, digital marketing, e-commerce, PR, and events for global brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
