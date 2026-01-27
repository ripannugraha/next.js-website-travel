import Image from "next/image"
import Navbar from "./Navbar"
import Button from "../atoms/Button"
import Text from "../atoms/Text"
import HeroBenefits from "../organisms/HeroBenefits"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Navbar />

      {/* HERO */}
      <div className="relative w-full min-h-[820px] lg:min-h-[880px]">
        {/* Background */}
        <Image
          src="/assets/bali.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B2C4D]/60" />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-[140px]">
          <div className="max-w-[520px]">
            <Text variant="hero" color="light" className="mb-6">
              TEMUKAN PENGALAMAN WISATA
              <br />
              TERBAIK NUSANTARA
            </Text>

            <Text color="light" className="opacity-90 mb-8">
              Nikmati pengalaman liburan yang nyaman dan terpercaya dengan
              paket wisata pilihan ke berbagai destinasi terbaik di Indonesia.
            </Text>

            <Button>JELAJAHI PAKET →</Button>
          </div>
        </div>

        {/* BENEFITS */}
        <HeroBenefits />
      </div>
    </section>
  )
}