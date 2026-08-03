import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { CanvasTrail } from "@/components/ui/canvas-trail";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Shannen Nazareno | Developer Portfolio",
  description: "Developer Portfolio of Shannen Nazareno - Information Systems, Automation, Data Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "h-full", "antialiased", "bg-neutral-950", "text-neutral-50", "scroll-smooth", outfit.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CanvasTrail />
        {children}
      </body>
    </html>
  );
}
