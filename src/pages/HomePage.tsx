import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import DomainRibbon from "../components/DomainRibbon";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import VenturesSection from "../components/VenturesSection";
import ReviewsSection from "../components/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DomainRibbon />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <VenturesSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
