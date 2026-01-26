import PageHeader from "@/components/organisms/PageHeader"
import DetailLayout from "@/components/templates/DetailLayout"
import Gallery from "@/components/organisms/Gallery"
import PackageInfo from "@/components/organisms/PackageInfo"
import Summary from "@/components/molecules/Summary"
import IncludeExclude from "@/components/molecules/IncludeExclude"
import Itinerary from "@/components/organisms/Itinerary"
import LocationMap from "@/components/organisms/LocationMap"
import BookingSidebar from "@/components/organisms/BookingSidebar"
import ContactCard from "@/components/atoms/ContentCard"
import Newsletter from "@/components/organisms/Newsletter"

export default function DetailPaketWisata() {
  return (
    <main>
      <PageHeader />

      <DetailLayout
        sidebar={
          <div className="sticky top-24 space-y-6">
            <BookingSidebar />
            <ContactCard />
          </div>
        }
      >
        <Gallery />
        <PackageInfo />
        <Summary />
        <IncludeExclude />
        <Itinerary />
        <LocationMap />
      </DetailLayout>
      <Newsletter />
    </main>
  )
}