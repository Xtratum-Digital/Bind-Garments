import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
    title: "Bind-Garments | Premium Apparel Solutions",
    description: "Advanced garment manufacturing and digital management solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="hero-gradient">
                <Navigation />
                {children}
            </body>
        </html>
    );
}
