"use client"

import { MapPin, Send, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-10 md:sticky md:top-24">
          <div className="space-y-6">
            <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight text-black">
              Request a{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">strategy session</span>
            </h1>
            <p className="text-[#393939] text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Tell me your stack, who is stuck (users, support, sales, or learners), and what “better documentation or
              content” must change in the next 30 to 90 days. Pre-qualified detail beats a vague hello.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="group bg-white border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF6B7A] border-2 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-widest">Primary path</h3>
                  <p className="text-lg md:text-xl font-bold">Strategy session or docs audit</p>
                </div>
              </div>
            </div>

            <div className="group bg-white border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2F81F7] border-2 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-widest">Location</h3>
                  <p className="text-lg md:text-xl font-bold">Remote / worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-[3px] border-black rounded-[40px] p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold text-sm uppercase tracking-wider ml-1">Full name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-50 border-[3px] border-black rounded-xl px-5 py-4 font-medium focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-sm uppercase tracking-wider ml-1">Work email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-gray-50 border-[3px] border-black rounded-xl px-5 py-4 font-medium focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-sm uppercase tracking-wider ml-1">What do you need?</label>
              <select className="w-full bg-gray-50 border-[3px] border-black rounded-xl px-5 py-4 font-medium focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all appearance-none cursor-pointer">
                <option>Documentation strategy session</option>
                <option>Audit my documentation</option>
                <option>Technical / SEO content project</option>
                <option>Website or landing copy</option>
                <option>EdTech / curriculum content</option>
                <option>Edit and humanize existing drafts</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-sm uppercase tracking-wider ml-1">Context</label>
              <textarea
                rows={5}
                placeholder="Product type, stage (seed / Series A…), who is blocked today, and one example of a doc or page that is failing."
                className="w-full bg-gray-50 border-[3px] border-black rounded-xl px-5 py-4 font-medium focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-2">
              <Button className="w-full sm:w-auto sm:min-w-[240px] bg-[#FFC224] text-black hover:bg-[#FFC224]/90 border-[3px] border-black rounded-xl py-4 px-8 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all h-auto group">
                Send strategy request
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-[#666] text-center">
              Form UI only for now. Wire your preferred email or CRM endpoint when ready. No third-party address is
              hardcoded here.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
