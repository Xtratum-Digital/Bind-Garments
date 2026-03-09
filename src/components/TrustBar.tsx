import React from "react";

export default function TrustBar() {
    const features = [
        {
            title: "ISO Certified Fabrics",
            description: "Premium quality materials guaranteed to endure daily corporate wear.",
            icon: (
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Custom Embroidery",
            description: "Precision automated stitching to seamlessly integrate your brand identity.",
            icon: (
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            )
        },
        {
            title: "Timely Bulk Delivery",
            description: "Reliable production and logistics workflows across the Middle East.",
            icon: (
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-primary pt-16 pb-16 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-accent/20">
                            {feature.icon}
                            <h3 className="text-bg-light text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-bg-light/70 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
