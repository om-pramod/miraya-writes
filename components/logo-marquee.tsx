export function LogoMarquee() {
  const items = [
    "AI product docs",
    "EdTech curriculum",
    "Release notes",
    "TSGs & runbooks",
    "SEO technical articles",
    "Audience matrix T/S/N",
    "UI microcopy",
    "Responsible AI checklist",
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-12 md:py-16 -rotate-[5deg] mt-24 md:mt-32 mb-12 md:mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-10 md:gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="text-white text-xl md:text-3xl font-bold tracking-tight uppercase"
            >
              {label}
              <span className="text-[#FF4A60] mx-6 md:mx-10">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
