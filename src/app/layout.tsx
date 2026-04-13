import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
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
      className={`${spaceGrotesk.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
