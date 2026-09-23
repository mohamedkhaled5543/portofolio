import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { BusinessImpact } from "@/components/BusinessImpact";
import { HowIWork } from "@/components/HowIWork";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <BusinessImpact />
        <HowIWork />
        <TechStack />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
