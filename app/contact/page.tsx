import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { SocialConnectSection } from "@/components/social-connect-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <ContactSection />
      <SocialConnectSection />
      <Footer />
    </main>
  )
}
