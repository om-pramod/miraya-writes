import { Linkedin, Github, BookOpen, Newspaper, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { primaryLinks } from "@/lib/social-links"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Newsletter"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-4 px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black">Read Mostly Human!</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Substack notes on AI, technical writing, and making complex systems usable.
                  </p>
                </div>

                <a
                  href={primaryLinks.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <Button className="bg-black text-white hover:bg-black/90 rounded-[10px] px-6 md:px-10 text-sm md:text-base font-semibold whitespace-nowrap h-14 w-full md:w-auto">
                    Open Substack
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <Image
                    src="/images/footer-logo.jpeg"
                    alt="Miraya Intelligenza"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Miraya Intelligenza</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Omkar Hankare · AI engineer and technical writer. Connecting deep tech to human understanding for AI
                startups and EdTech founders. Based in Pune, India.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={primaryLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={primaryLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={primaryLinks.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Medium"
                >
                  <BookOpen className="w-5 h-5" />
                </a>
                <a
                  href={primaryLinks.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Substack"
                >
                  <Newspaper className="w-5 h-5" />
                </a>
                <a
                  href={primaryLinks.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF4A60] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Google Scholar"
                >
                  <GraduationCap className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Start here</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Request a strategy session
                  </Link>
                </li>
                <li>
                  <a
                    href={primaryLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn · ompramod
                  </a>
                </li>
                <li>
                  <a
                    href={primaryLinks.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Medium writing
                  </a>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Documentation work samples
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Miraya Intelligenza · AI Technical Writer Hub · Omkar Hankare</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
