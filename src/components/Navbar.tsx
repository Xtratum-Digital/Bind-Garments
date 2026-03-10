"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
    const [isRTL, setIsRTL] = useState(false);

    useEffect(() => {
        document.documentElement.dir = isRTL ? "rtl" : "ltr";
    }, [isRTL]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Our Products", href: "/our-products" },
        { name: "Contact Us", href: "/contact-us" }
    ];

    return (
        // Using bg-primary to match the hero gradient starting point
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-primary/95 via-primary/70 to-transparent transition-all duration-500">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer no-underline">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    {/* Text changed to white to contrast with primary background */}
                    <span className={`text-2xl ${cinzel.className} font-semibold text-white tracking-tight`}>
                        QASR ALFALAH
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative text-white/90 hover:text-accent font group py-2 transition-colors duration-300 ${cinzel.className}`}
                        >
                            <span>{link.name}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}