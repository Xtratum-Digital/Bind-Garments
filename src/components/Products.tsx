import React from "react";

export default function Products() {
    const categories = [
        {
            title: "School Uniform",
            description: "Educational reforms, like the uniform, are also important for schools.",
            image: "/services/school.png",
        },
        {
            title: "Hospital Uniform",
            description: "Not all angels have wings.some have scrubs.",
            image: "/services/hospital.png",
        },
        {
            title: "House Keeping Uniform",
            description: "A modern and sleek approach to classic housekeeping uniforms",
            image: "/services/housekeeping.png",
        },
        {
            title: "Office Uniform",
            description: "Style is a reflection of your attitude and your personality.",
            image: "/services/office.png",
        }
    ];

    const products = [
        {
            title: "Coverall",
            description: "Durable and protective industrial workwear for heavy-duty environments.",
            image: "/products/coverall.png"
        },
        {
            title: "Cargo Trouser",
            description: "Rugged cargo pants with multiple utility pockets for maximal functionality.",
            image: "/products/cargo_trouser.png"
        },
        {
            title: "Polo T-Shirt",
            description: "Premium breathable polo shirts designed for comfort and professional brand exposure.",
            image: "/products/polo_tshirt.png"
        },
        {
            title: "Lab Coat",
            description: "Crisp, professional lab coats engineered for sterile and scientific environments.",
            image: "/products/lab_coat.png"
        },
        {
            title: "Chef Jacket",
            description: "High-quality, heat-resistant apparel for professional culinary experts.",
            image: "/products/chef_jacket.png"
        },
        {
            title: "Security Jacket",
            description: "High-visibility technical jackets ensuring safety and authority for security personnel.",
            image: "/products/security_jacket.png"
        },
        {
            title: "Customized T-Shirt",
            description: "Bespoke sports and promotional apparel with vibrant, high-definition graphics.",
            image: "/products/custom_tshirt.png"
        },
        {
            title: "Graduation Uniform",
            description: "Traditional and elegant graduation regalia for academic ceremonies.",
            image: "/products/graduation_uniform.png"
        },
    ];

    return (
        <section id="our-products" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 uppercase">Our Products</h2>
                    <p className="text-lg text-primary/75">
                        We provide specialized uniform solutions and high-quality apparel tailored to the unique operational demands of diverse sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...categories, ...products].map((item, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col bg-bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(186,168,128,0.25)] transition-all duration-300 border border-transparent hover:border-accent/40 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="h-56 w-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 p-2"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-primary/70 mb-6 flex-1 text-sm line-clamp-3">{item.description}</p>
                                <div className="mt-auto flex items-center text-accent font-bold group-hover:text-primary transition-colors">
                                    <span>Explore Catalog</span>
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
