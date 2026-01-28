import HeroSection from "@/components/sections/home/hero-section"
import DestinationSection from "@/components/sections/home/destination-section"
import TestimonialSection from "@/components/sections/home/testimonial-section"
import PackageSection from "@/components/sections/home/package-section"

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <DestinationSection />
      <TestimonialSection />
      <PackageSection />
    </main>
  )
}