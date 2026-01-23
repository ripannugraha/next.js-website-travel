import PageHeader from "@/components/detailpaketwisata/PageHeader"
import DetailLayout from "@/components/detailpaketwisata/DetailLayout"
import Gallery from "@/components/detailpaketwisata/Gallery"
import PackageInfo from "@/components/detailpaketwisata/PackageInfo"
import Summary from "@/components/detailpaketwisata/Summary"
import IncludeExclude from "@/components/detailpaketwisata/IncludeExclude"
import Itinerary from "@/components/detailpaketwisata/Itinerary"
import LocationMap from "@/components/detailpaketwisata/LocationMap"
import BookingSidebar from "@/components/detailpaketwisata/BookingSidebar"
import ContactCard from "@/components/detailpaketwisata/ContentCard"
import Newsletter from "@/components/layout/Newsletter"

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