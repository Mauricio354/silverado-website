import type { Metadata } from "next";
import { Playfair_Display, Raleway, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silverado | Custom Decks, Sunrooms & Outdoor Living — Calgary",
  description:
    "Silverado builds stunning custom decks and beautiful sunrooms in SW Calgary. Premium craftsmanship for your outdoor living space. Lawn care & snow removal services also available. Call 587-437-4655.",
  keywords: [
    "custom decks Calgary",
    "sunrooms Calgary",
    "deck builder",
    "outdoor living",
    "lawn care",
    "snow removal",
    "Silverado",
    "SW Calgary",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", playfair.variable, raleway.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
