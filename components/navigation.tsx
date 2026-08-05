export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-center bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="/about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="/services" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Services
          </a>
          <a href="/work" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Work
          </a>
          <a href="/contact" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>
      </nav>
    </div>
  )
}
