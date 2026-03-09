import React from "react";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-bg-light py-20 lg:py-0">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-start z-10 lg:pe-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-wider mb-6 uppercase">
                        Premium Craftsmanship
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight mb-6 tracking-tight">
                        QASR ALFALAH UNIFORMS TAILORING
                    </h1>
                    <p className="text-lg lg:text-xl text-primary/80 mb-10 max-w-2xl mx-auto lg:mx-0">
                        We Establish Extraordinary Connections!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-4 bg-accent text-primary font-bold rounded-md hover:bg-accent/90 transition-all shadow-[0_4px_14px_0_rgba(186,168,128,0.39)] hover:shadow-[0_6px_20px_rgba(186,168,128,0.23)] hover:-translate-y-1 transform">
                            Request a Quote
                        </button>
                        <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-bg-light transition-all">
                            Our Catalog
                        </button>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="flex-1 relative w-full h-[400px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
                    {/* Using a placeholder online image for the stitching/tailoring aesthetic */}
                    <img
                        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Corporate Uniform Tailoring"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
}
