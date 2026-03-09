import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Bind Garments",
  description: "Premium corporate uniform stitching in the Middle East.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${cairo.variable} font-sans antialiased text-primary bg-bg-light`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
