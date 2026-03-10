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

export default function Services() {
    const specializedServices = [
        {
            title: "STITCHING",
            image: "/services/stitching.png",
            description: "Precision stitching ensuring durability, comfort, and a perfect fit in every uniform we craft."
        },
        {
            title: "EMBROIDERY",
            image: "/services/embroidery.png",
            description: "High-quality custom embroidery providing a premium and professional touch for your brand representation."
        },
        {
            title: "SCREEN PRINTING",
            image: "/services/screen_printing.png",
            description: "Vibrant and long-lasting screen prints engineered to withstand rigorous daily use and washing."
        },
        {
            title: "SUBLIMATION PRINTING",
            image: "/services/sublimation.png",
            description: "Advanced sublimation techniques delivering flawless, fade-resistant, edge-to-edge custom designs."
        }
    ];

    return (
        <section id="our-services" className="py-24 bg-bg-light relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <h2 className={`text-4xl lg:text-5xl ${cinzel.className} font-bold text-primary mb-6 uppercase`}>Our Services</h2>
                    <p className="text-lg text-primary/75 max-w-3xl mx-auto mb-12">
                        We offer comprehensive garment manufacturing services, pairing state-of-the-art technology with artisanal craftsmanship to deliver unparalleled quality.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {specializedServices.map((service, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,8,44,0.15)] transition-all duration-300 border border-transparent hover:border-primary/20 hover:-translate-y-2"
                            >
                                <div className="h-64 w-full overflow-hidden relative bg-primary">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-40 transition-all duration-700"
                                    />
                                    {/* Default State */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end justify-center pb-6 group-hover:opacity-0 transition-opacity duration-500 z-10">
                                        <h3 className={`text-white font-bold text-lg tracking-widest text-center shadow-sm ${cinzel.className}`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                    {/* Hover State with Description */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                        <h3 className={`text-accent font-bold text-xl tracking-widest text-center shadow-sm mb-4 ${cinzel.className} transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-white/90 text-center text-sm leading-relaxed ${lato.className} transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
