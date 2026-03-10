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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <nav className="hidden md:flex items-center gap-8">
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

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-white hover:text-accent focus:outline-none transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md transition-all duration-300 overflow-hidden z-40 ${isMobileMenuOpen ? "max-h-72 opacity-100 py-6 shadow-lg border-t border-accent/20" : "max-h-0 opacity-0 py-0"
                    }`}
            >
                <nav className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-white hover:text-accent font tracking-wide text-lg transition-colors duration-300 ${cinzel.className}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}