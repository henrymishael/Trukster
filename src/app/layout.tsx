import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trukster Logistics | Finance Assets. Move Goods. Power Businesses.",
  description:
    "Trukster Logistics Limited is a technology-driven platform that provides asset financing and reliable cross-city delivery solutions for individuals and businesses across Africa.",
  keywords: [
    "logistics",
    "asset financing",
    "delivery",
    "Nigeria",
    "Africa",
    "hire purchase",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased noise" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
