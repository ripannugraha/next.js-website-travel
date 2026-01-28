import DestinationCard from "@/components/molecules/destination-card"
import { destinations } from "@/constants/destinations"

export default function DestinationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-montserrat text-3xl md:text-4xl text-[#0B2C4D] mb-4">
            Destinasi Unggulan Indonesia
          </h2>
          <p className="font-inter text-gray-600 text-sm md:text-base">
            Jelajahi destinasi wisata paling populer di Indonesia dengan
            paket perjalanan terbaik dan terpercaya dari NusaTrip.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}