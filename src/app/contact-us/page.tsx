import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactUs";

export default function ContactUsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <ContactUs />
            </div>
        </main>
    );
}
