import DestinationCard from "../molecules/DestinationCard"

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

          <DestinationCard
            image="/assets/prambanan.jpg"
            title="Prambanan, Yogyakarta"
            rating={4.8}
            description="Nikmati keindahan candi Hindu terbesar di Indonesia dengan arsitektur megah dan nilai sejarah yang memukau."
            price="Rp. 2.900.000"
          />

          <DestinationCard
            image="/assets/labuanbajo.jpg"
            title="Labuan Bajo, NTT"
            rating={4.9}
            description="Jelajahi keindahan laut biru, pulau eksotis, dan pengalaman wisata alam yang tak terlupakan."
            price="Rp. 3.500.000"
          />

          <DestinationCard
            image="/assets/borobudur.jpg"
            title="Borobudur, Jawa Tengah"
            rating={4.6}
            description="Rasakan ketenangan dan keagungan candi Buddha terbesar di dunia."
            price="Rp. 2.500.000"
          />

          <DestinationCard
            image="/assets/nusapenida.jpg"
            title="Nusa Penida, Bali"
            rating={4.8}
            description="Pantai eksotis, tebing ikonik, dan laut biru jernih khas Bali."
            price="Rp. 3.000.000"
          />

          <DestinationCard
            image="/assets/bromo.jpg"
            title="Bromo, Jawa Timur"
            rating={4.7}
            description="Keindahan matahari terbit dengan latar pegunungan dan lautan pasir."
            price="Rp. 1.900.000"
          />

        </div>
      </div>
    </section>
  )
}