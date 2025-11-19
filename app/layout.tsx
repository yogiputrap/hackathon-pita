import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logi+ | AI-Driven Yield & Capacity Engine",
  description: "Transform your logistics with AI-powered 3D load planning, dynamic pricing, and predictive network balancing. Built for OPTIMA-POS GLID System.",
  keywords: ["logistics", "AI", "capacity management", "yield management", "3D planning", "load optimization"],
  authors: [{ name: "OPTIMA-POS Team" }],
  openGraph: {
    title: "Logi+ | AI-Driven Yield & Capacity Engine",
    description: "Transform your logistics with AI-powered solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
