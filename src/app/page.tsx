import HeroSection from "../components/organisms/HeroSection"
import HeroBenefits from "../components/organisms/HeroBenefits"
import DestinationSection from "../components/organisms/DestinationSection"
import TestimonialSection from "../components/organisms/TestimonialSection"
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