import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
