import Hero from "./components/Hero";
import GallerySection from "./components/GallerySection";
import ServicesSection from "./components/ServicesSection";
import VogueSection from "@/app/components/VogueSection";
export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">


      {/* Hero Section */}
 
        <Hero />
    
      {/* Vogue Section */}
      <VogueSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Footer */}
      
    </main>
  );
}