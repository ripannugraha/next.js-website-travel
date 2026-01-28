import HeroSection from "../components/sections/home/hero-section"
import HeroBenefits from "../components/organisms/hero-benefits"
import DestinationSection from "../components/sections/home/destination-section"
import TestimonialSection from "../components/sections/home/testimonial-section"
import PackageSection from "../components/organisms/PackageSection"
import AdventureCTA from "../components/organisms/AdventureCTA"
import BlogSection from "../components/organisms/BlogSection"
import Newsletter from "../components/organisms/Newsletter"

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <HeroBenefits />
      <DestinationSection />
      <TestimonialSection />
      <PackageSection />
      <AdventureCTA />
      <BlogSection />
      <Newsletter />
    </main>
  )
}