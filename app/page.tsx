import { Navbar } from "../Sections/Navbar";
import { Hero } from "../Sections/Hero";
import { Footer } from "../Sections/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
