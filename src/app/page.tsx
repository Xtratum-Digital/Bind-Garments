import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Services />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
