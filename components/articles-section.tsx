import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { primaryLinks } from "@/lib/social-links"

type Article = {
  title: string
  description: string
  tag: string
  href: string
  image: string
  author: string
  date: string
  featured?: boolean
}

const articles: Article[] = [
  {
    title: "Autoencoders explained: from bottleneck to reconstruction",
    description:
      "A five-part series that walks through autoencoder architecture, latent spaces, and practical PyTorch implementations. Written for learners who want intuition and code, not just equations.",
    tag: "Series",
    href: "https://ompramod.medium.com/",
    image: "/images/article-autoencoders.jpg",
    author: "Omkar Hankare",
    date: "2025",
    featured: true,
  },
  {
    title: "Mastering gradient descent: intuition, math, and variants",
    description:
      "Multi-part deep dive into batch, stochastic, and mini-batch gradient descent with visual intuition for learning rates, momentum, and convergence behavior.",
    tag: "Series",
    href: "https://ompramod.medium.com/",
    image: "/images/article-gradient-descent.jpg",
    author: "Omkar Hankare",
    date: "2025",
  },
  {
    title: "Swift–AI approach for AI-generated lyrics, portraits, and avatar dance",
    description:
      "Peer-reviewed paper presented at AIP Conference Proceedings. Co-authored research on generative AI pipelines for creative content synthesis.",
    tag: "Research",
    href: "https://scholar.google.com/citations?user=W3A9ur4AAAAJ",
    image: "/images/article-research-paper.jpg",
    author: "Omkar Hankare et al.",
    date: "2025",
  },
]

export function ArticlesSection() {
  const featured = articles.find((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Writing &amp; Research</h2>
          <a href={primaryLinks.medium} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[3px] border-black rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Read all on Medium
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured article card */}
          {featured && (
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <div className="bg-[#EDEDED] relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
                <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                  {featured.tag}
                </span>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  {featured.title}
                </h3>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#6366F1] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg md:text-xl">OH</span>
                  </div>
                  <div>
                    <div className="font-bold text-base md:text-lg text-[#0B0B0B]">{featured.author}</div>
                    <div className="text-sm md:text-base text-gray-600">{featured.date}</div>
                  </div>
                </div>
              </div>
            </a>
          )}

          {/* Right side — smaller article cards */}
          <div className="space-y-6 md:space-y-8">
            {rest.map((article, index) => (
              <a
                key={index}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 block"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image area */}
                  <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                    <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                      {article.tag}
                    </span>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  {/* Content area */}
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Substack CTA replaces the stubbed newsletter component */}
        <div className="bg-[#0B0B0B] border-[3px] border-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white space-y-3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Mostly Human!</h3>
            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              AI engineering, technical writing, and honest takes on building with large language models.
              Subscribe on Substack.
            </p>
          </div>
          <a
            href={primaryLinks.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Button
              className="bg-[#FFC224] text-black hover:bg-[#FFC224]/90 border-[3px] border-black rounded-xl py-4 px-8 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)] transition-all h-auto"
            >
              Subscribe on Substack
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
