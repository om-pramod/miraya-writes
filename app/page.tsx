import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { ClarityGapSection } from "@/components/clarity-gap-section"
import { AboutSection } from "@/components/about-section"
import { GenAIMindsetSection } from "@/components/gen-ai-mindset-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <ClarityGapSection />
      <AboutSection />
      <GenAIMindsetSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
