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
export default function ContactUs() {
    return (
        <section id="contact-us" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-5xl">

                {/* Headers */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-px bg-accent w-12 sm:w-24"></div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm">Contact Us</span>
                        <div className="h-px bg-accent w-12 sm:w-24"></div>
                    </div>
                    <h2 className={`text-4xl lg:text-5xl ${cinzel.className} font-bold text-primary`}>
                        Get In Touch With Us
                    </h2>
                </div>

                {/* Form Grid Layout */}
                <form className="bg-bg-light/30 p-8 sm:p-12 rounded-2xl shadow-sm border border-accent/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                        {/* Row 1 */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className="text-primary font-semibold text-sm">First Name *</label>
                            <input
                                type="text"
                                id="firstName"
                                required
                                className="w-full bg-white/80 border border-primary/20 focus:border-accent text-primary rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-primary/40"
                                placeholder="John"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="text-primary font-semibold text-sm">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full bg-white/80 border border-primary/20 focus:border-accent text-primary rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-primary/40"
                                placeholder="Doe"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-primary font-semibold text-sm">Email *</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-white/80 border border-primary/20 focus:border-accent text-primary rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-primary/40"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mobile" className="text-primary font-semibold text-sm">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                className="w-full bg-white/80 border border-primary/20 focus:border-accent text-primary rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-primary/40"
                                placeholder="+971 50 123 4567"
                            />
                        </div>

                        {/* Row 3 */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="subject" className="text-primary font-semibold text-sm">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-white/80 border border-primary/20 focus:border-accent text-primary rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-primary/40"
                                placeholder="Regarding corporate uniforms for our healthcare staff"
                            />
                        </div>

                        {/* Row 4 */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="message" className="text-primary font-semibold text-sm">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full bg-white/80 border border-primary/20 focus:border-accent text-primary rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none placeholder:text-primary/40"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            className="bg-primary text-bg-light font-bold px-12 py-4 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-primary/95 transition-all duration-300 w-full sm:w-auto min-w-[200px]"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Map Integration */}
                <div className="mt-16 overflow-hidden rounded-2xl shadow-lg border border-accent/10">
                    <iframe
                        title="QASR ALFALAH UNIFORMS Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.581297587784!2d55.44948437596164!3d25.312384725942487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f7823e59073%3A0x6291a56e01a54554!2sQasr%20Al%20Falah%20Uniforms!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="mt-16 pt-12 border-t border-accent/20 text-center">
                    <div className="flex flex-col items-center gap-4 text-primary">
                        <p className="text-xl font-bold">Ajman</p>
                        <p className="text-lg">Mob : 56 800 1696</p>
                        <p className="text-xl font-bold uppercase">SHARJAH</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
