import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <ServicesSection />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
