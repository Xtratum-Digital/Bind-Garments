import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Services />
      <Products />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
