import Hero from "@/components/homepage/Hero"
import DestinationSection from "@/components/homepage/DestinationSection"
import TestimonialSection from "@/components/homepage/TestimonialSection"
import PackageSection from "@/components/homepage/PackageSection"
import AdventureCTA from "@/components/homepage/AdventureCTA"
import BlogSection from "@/components/homepage/BlogSection"
import Newsletter from "@/components/layout/Newsletter"

export default function Homepage() {
  return (
    <>
      <Hero />
      <DestinationSection />
      <TestimonialSection />
      <PackageSection />
      <AdventureCTA />
      <BlogSection />
      <Newsletter />
    </>
  );
}