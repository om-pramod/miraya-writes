import { Navigation } from "@/components/navigation"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
