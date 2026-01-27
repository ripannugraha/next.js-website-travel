import PageHeader from "@/components/organisms/PageHeader"
import ExclusivePackages from "@/components/organisms/ExclusivePackages"
import DestinationGallery from "@/components/organisms/DestinationGallery"
import BlogSection from "@/components/organisms/BlogSection"
import Newsletter from "@/components/organisms/Newsletter"

export default function PaketWisata() {
  return (
    <main>
    <PageHeader />
    <ExclusivePackages />
    <DestinationGallery />
    <BlogSection />
    <Newsletter />
    </main>
  )
}