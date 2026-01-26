import Image from "next/image"
import Navbar from "../layout/Navbar"
import HeroInfo from "./HeroBenefits"

export default function Hero() {
  return (
    <section className="relative w-full">
      <Navbar />

      {/* BACKGROUND IMAGE */}
      <div className="relative h-[calc(100vh-224px)] min-h-[700px] w-full">
        <Image
          src="/assets/bali.jpg" // ← GANTI GAMBAR BACKGROUND
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY GELAP */}
        <div className="absolute inset-0 bg-[#0B2C4D]/60" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">
            
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            TEMUKAN PENGALAMAN WISATA <br />
            <span className="block mt-2">TERBAIK NUSANTARA</span>
            </h1>

            <p className="font-inter text-sm md:text-base opacity-90 mb-8">
              Nikmati pengalaman liburan yang nyaman dan terpercaya dengan
              paket wisata pilihan ke berbagai destinasi terbaik di Indonesia.
            </p>

            <button className="bg-[#FB8C00] hover:bg-orange-600 transition px-6 py-3 rounded-md font-inter text-sm flex items-center gap-2">
              JELAJAHI PAKET →
            </button>

          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <HeroInfo />
    </section>
  )
}