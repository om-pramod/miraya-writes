import {
  Twitter,
  Linkedin,
  Github,
  BookOpen,
  GraduationCap,
  Code,
  Newspaper,
  FileText,
  MessageSquare,
  Instagram,
  Globe,
  Search,
  Hash,
  type LucideIcon,
} from "lucide-react"
import { socialLinks } from "@/lib/social-links"

const iconByName: Record<string, LucideIcon> = {
  "g.dev/ompramod": Code,
  GitHub: Github,
  "Dev.to": Code,
  Hashnode: Hash,
  LinkedIn: Linkedin,
  Substack: Newspaper,
  Medium: BookOpen,
  Bluesky: Globe,
  ResearchGate: FileText,
  ORCID: GraduationCap,
  "Google Scholar": Search,
  "X (Twitter)": Twitter,
  Instagram: Instagram,
  Threads: MessageSquare,
}

const colorByGroup = {
  developer: "#2F81F7",
  professional: "#6366F1",
  academic: "#FF4A60",
  social: "#FFC224",
} as const

export function SocialConnectSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Connect with me <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">everywhere</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium">
            Verified profiles across developer, academic, and professional platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {socialLinks.map((link) => {
            const Icon = iconByName[link.name] ?? Globe
            const color = colorByGroup[link.group]
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white border-[3px] border-black rounded-full px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <div
                  className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center transition-transform group-hover:rotate-12"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="font-bold text-sm md:text-base tracking-tight">{link.name}</span>
              </a>
            )
          })}
        </div>

        <div className="mt-20 border-t-[3px] border-black border-dashed opacity-10"></div>
      </div>
    </section>
  )
}
