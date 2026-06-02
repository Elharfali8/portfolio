// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import { ScrollObserver } from "@/components/header/ScrollObserve";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Youssef Elharfali",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ScrollObserver />
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}