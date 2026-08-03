import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ClarityGapSection } from "@/components/clarity-gap-section"
import { GenAIMindsetSection } from "@/components/gen-ai-mindset-section"
import { ExperienceSection } from "@/components/experience-section"
import { SocialConnectSection } from "@/components/social-connect-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <AboutSection />
      <ClarityGapSection />
      <GenAIMindsetSection />
      <ExperienceSection />
      <SocialConnectSection />
      <Footer />
    </main>
  )
}
