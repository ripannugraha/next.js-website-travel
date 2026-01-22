import PageHeader from "@/components/detailpaketwisata/PageHeader"
import PaketLayout from "@/components/detailpaketwisata/PaketLayout"
import Gallery from "@/components/detailpaketwisata/Gallery"
import PackageInfo from "@/components/detailpaketwisata/PackageInfo"
import Summary from "@/components/detailpaketwisata/Summary"
import IncludeExclude from "@/components/detailpaketwisata/IncludeExclude"
import Itinerary from "@/components/detailpaketwisata/Itinerary"
import LocationMap from "@/components/detailpaketwisata/LocationMap"


export default function DetailPaketWisata() {
  return (
    <main>
    <PageHeader />
    <PaketLayout />
    <Gallery />
    <PackageInfo />
    <Summary />
    <IncludeExclude />
    <Itinerary />
    <LocationMap />
    </main>
  )
}