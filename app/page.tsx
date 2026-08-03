import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SocialConnectSection } from "@/components/social-connect-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <TestimonialsSection />
      <SocialConnectSection />
      <Footer />
    </main>
  )
}
