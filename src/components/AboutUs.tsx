import React from "react";

export default function AboutUs() {
    return (
        <section className="py-24 bg-bg-light overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

                {/* Narrative */}
                <div className="flex-1 lg:order-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest mb-4 uppercase">
                        Vision & Mission
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8 uppercase">
                        Our Vision
                    </h2>
                    <div className="space-y-6 text-lg text-primary/80">
                        <p>
                            we offer our clients the most effective angle to approach their marketing needs and effectively build their brand. we offer a truly spectacular marketing experience,from client service to the final product
                        </p>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8 mt-12 uppercase">
                        Our Mission
                    </h2>
                    <div className="space-y-6 text-lg text-primary/80">
                        <p>
                            To strive for the best client service possible, to offer a truly spectacular marketing experince
                        </p>
                    </div>
                </div>

                {/* Macro Photography */}
                <div className="flex-1 lg:order-1 relative">
                    {/* Decorative Background Element */}
                    <div className="absolute -inset-4 bg-accent/10 rounded-3xl transform rotate-3 scale-105 hidden lg:block"></div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px]">
                        <img
                            src="/about/main.png"
                            alt="Luxury Tailoring Studio"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient for premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

                        {/* Absolute positioning of a decorative accent */}
                        <div className="absolute bottom-10 left-10 right-10 z-10 bg-bg-light/95 backdrop-blur border border-accent/30 p-6 rounded-xl shadow-lg">
                            <p className="text-primary italic font-serif leading-relaxed">
                                "We don't just stitch uniforms; we weave your brand's integrity into every fiber."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
