import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "SEO Blog & Article Writing",
      headline: "Turn search traffic into trust.",
      description: "Regular blog posts and articles that attract the audience you want — and keep them reading. Every piece is:",
      bullets: [
        "Keyword-researched for topics your audience is actively searching",
        "Readability and formatting for better engagement",
        "AI concepts broken down without oversimplification",
        "Original, fact-checked, and free from AI-generated filler"
      ],
      idealFor: "AI startups and tech companies wanting consistent organic traffic without publishing generic, low-quality content.",
      cta: "Start a Blog Project",
      image: "/images/web-design.svg",
    },
    {
      title: "Website & Landing Page Copy",
      headline: "Copy that explains, persuades, and converts.",
      description: "Professional copy for homepages, product pages, service pages, and landing pages. I write content that:",
      bullets: [
        "States what your company does in plain, direct language",
        "Speaks directly to your target buyer's concerns",
        "Is structured for both readability and SEO",
        "Enhanced with diagrams, visual breakdowns, and structured examples where needed"
      ],
      idealFor: "SaaS and AI companies launching new products, updating their site, or entering a new market.",
      cta: "Discuss Your Website",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Technical & AI Content Writing",
      headline: "Accurate content for technical audiences.",
      description: "Content for AI, machine learning, data science, and technology topics — written with the accuracy that technical readers expect and the clarity that non-technical stakeholders need. Deliverables include:",
      bullets: [
        "Technical explainers and deep dives",
        "AI trend analysis and Problem-to-solution narrative",
        "A tone that reflects expertise without becoming overly dense",
        "Developer-focused guides and documentation",
        "Analytical and concept-driven content"
      ],
      idealFor: "Companies whose audiences include engineers, data scientists, or technically-informed buyers.",
      cta: "Talk About Your Technical Content",
      image: "/images/product-design.svg",
    },
    {
      title: "Whitepapers & Case Studies",
      headline: "Long-form content that builds real authority.",
      description: "In-depth reports and case studies (1,500+ words) that position your company as a credible voice in your space. Each piece is:",
      bullets: [
        "Thoroughly researched with cited references",
        "Structured to guide the reader from problem to solution",
        "Formatted for professional presentation",
        "Designed to support lead generation, sales conversations, or thought leadership"
      ],
      idealFor: "Companies that want to establish expertise, support enterprise sales, or contribute to industry conversations.",
      cta: "Request a Whitepaper",
      image: "/images/user-research.svg",
    },
    {
      title: "Email Newsletters & Social Media",
      headline: "Consistent communication between the big pieces.",
      description: "Short-form content that keeps your audience informed and directs them back to your site. Includes:",
      bullets: [
        "Email newsletters (product updates, insights, curated content, announcements)",
        "LinkedIn posts (thought leadership, technical commentary, product narratives)",
        "Social captions and content series planning",
        "Message consistency across platforms and formats"
      ],
      idealFor: "Companies building an audience or maintaining visibility between major content releases.",
      cta: "Plan Your Social Content",
      image: "/images/motion-graphics.svg",
    },
    {
      title: "Content Editing & Refinement",
      headline: "Make your existing content work harder.",
      description: "If you have drafts, internal documents, or published content that isn't quite hitting the mark, I'll improve it. I edit for:",
      bullets: [
        "Clarity, tone, and precision",
        "Structure, flow, and logical progression",
        "Alignment with your target audience and intent",
        "Grammar, punctuation, and brand voice consistency"
      ],
      idealFor: "Teams with strong ideas but content that needs a professional edit before publishing.",
      cta: "Submit Content for Review",
      image: "/images/web-design.svg",
    },
    {
      title: "Academic AI & ML Content",
      headline: "Structured learning content for technical education.",
      description: "I develop academic materials for AI, Machine Learning, and Data Science — for universities, EdTech platforms, training institutes, and curriculum developers. This includes:",
      bullets: [
        "Course outlines and syllabus frameworks",
        "Lesson and module content",
        "Technical explanations and learning notes",
        "Assignments and case-based exercises",
        "Presentation and instructional support materials"
      ],
      idealFor: "EdTech companies, corporate training teams, and faculty developing AI or data science curricula.",
      cta: "Discuss Academic Content",
      image: "/images/ui-ux-design.svg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Content for every stage of your communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col group"
              >
                <div className="mb-4 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <h3 className="text-[22px] leading-[30px] font-bold mb-1 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[16px] leading-[24px] font-semibold text-[#FF4A60] mb-3">{service.headline}</p>
                  <p className="text-[15px] leading-[24px] font-medium text-[#393939] mb-3">{service.description}</p>
                  <ul className="text-[14px] leading-[22px] text-[#393939] mb-4 space-y-1">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="mr-2 text-[#FF4A60]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[14px] leading-[22px] text-[#666] italic mb-4">
                    <span className="font-semibold not-italic">Ideal for:</span> {service.idealFor}
                  </p>
                  <div className="mt-auto">
                    <Button className="bg-black text-white hover:bg-black/90 rounded-[12px] px-6 py-3 font-medium text-[14px] w-full">
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Looking for another service? Get in touch with me, there is a high chance that I will be able to help!
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]">
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
