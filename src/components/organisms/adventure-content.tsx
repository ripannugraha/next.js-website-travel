import { ADVENTURE_CTA } from "@/constants/adventure-cta"

export default function AdventureContent() {
  return (
    <div className="max-w-xl text-white">
      <h2 className="font-montserrat text-4xl lg:text-5xl font-bold leading-tight">
        {ADVENTURE_CTA.title.split("Terbaik")[0]} <br />
        Terbaik Bersama NusaTrip
      </h2>

      <p className="mt-4 font-inter text-base text-white/90">
        {ADVENTURE_CTA.description}
      </p>

      <button className="mt-8 inline-flex items-center gap-2 bg-[#FB8C00] hover:bg-[#e67e00] text-white px-6 py-3 rounded-lg font-inter font-semibold transition">
        {ADVENTURE_CTA.buttonText}
        <span>→</span>
      </button>
    </div>
  )
}