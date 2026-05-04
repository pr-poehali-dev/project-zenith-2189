import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedArtists } from "@/components/FeaturedArtists";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedArtists />
      <ArtworkGrid />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;