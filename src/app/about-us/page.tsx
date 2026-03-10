import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <AboutUs />
            </div>
        </main>
    );
}
