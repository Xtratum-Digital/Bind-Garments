import React from "react";

export default function Services() {
    const specializedServices = [
        { title: "STITCHING", image: "/services/stitching.png" },
        { title: "EMBROIDERY", image: "/services/embroidery.png" },
        { title: "SCREEN PRINTING", image: "/services/screen_printing.png" },
        { title: "SUBLIMATION PRINTING", image: "/services/sublimation.png" }
    ];

    return (
        <section id="our-services" className="py-24 bg-bg-light relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-20 max-w-6xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-12 uppercase">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {specializedServices.map((service, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,8,44,0.15)] transition-all duration-300 border border-transparent hover:border-primary/20 hover:-translate-y-2"
                            >
                                <div className="h-48 w-full overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center p-4">
                                        <h3 className="text-white font-bold text-lg tracking-widest text-center shadow-sm">
                                            {service.title}
                                        </h3>
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
