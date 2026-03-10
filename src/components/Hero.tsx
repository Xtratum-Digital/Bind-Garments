import React from "react";
import { Cinzel, Lato } from "next/font/google";

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
});

export default function Hero() {
    return (
        <section className={`relative h-screen w-full overflow-hidden bg-primary ${lato.className}`}>
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero/hero_light.png"
                    alt="Premium Fabric Texture"
                    className="w-full h-full object-cover opacity-70 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/100 via-primary/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start text-left">

                {/* Gold Sparkle Decoration (Top Left) */}
                <div className="absolute top-34 left-75 text-accent/40 animate-pulse hidden lg:block">
                    <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                </div>

                {/* Premium Badge */}
                <div className="mb-8 transform translate-y-0 opacity-100 transition-all duration-1000 delay-300">
                    <span className="inline-block py-2 px-5 rounded-full border border-accent/40 bg-accent/10 text-accent font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(186,168,128,0.2)]">
                        Premium Craftsmanship
                    </span>
                </div>

                {/* Main Hero Title - cinzel font */}
                <h1 className={`max-w-4xl text-5xl md:text-7xl lg:text-[5.5rem] ${cinzel.className} font-medium text-accent leading-[1.1] tracking-tight mb-8 transform translate-y-0 opacity-100 transition-all duration-1000 delay-500 drop-shadow-xl`}>
                    QASR ALFALAH<br />
                    UNIFORMS<br />
                    TAILORING
                </h1>

                {/* Subtext - Lato font */}
                <p className="text-xl md:text-2xl font-light text-bg-light/90 max-w-2xl mb-12 transform translate-y-0 opacity-100 transition-all duration-1000 delay-700 drop-shadow-md">
                    We Establish Extraordinary Connections!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 transform translate-y-0 opacity-100 transition-all duration-1000 delay-900">
                    <button className="px-8 py-3.5 bg-accent text-primary font-bold text-sm tracking-widest hover:bg-accent/90 transition-all shadow-[0_4px_14px_0_rgba(186,168,128,0.39)] uppercase rounded-sm">
                        Request a Quote
                    </button>
                    <button className="px-8 py-3.5 bg-transparent border border-bg-light/60 text-bg-light font-bold text-sm tracking-widest hover:bg-bg-light/10 transition-all uppercase rounded-sm backdrop-blur-sm">
                        Our Catalog
                    </button>
                </div>
            </div>
        </section>
    );
}
