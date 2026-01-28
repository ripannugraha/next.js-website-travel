import Button from "@/components/atoms/button"
import ExclusivePackagesGrid from "@/app/back-up exclusive/exclusive-packages-grid"

export default function ExclusivePackagesSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
          <div>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-[#0B2C4D]">
              Paket Wisata Eksklusif
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Nikmati pengalaman liburan terbaik dengan pilihan paket wisata
              eksklusif dari kami.
            </p>
          </div>

          <Button>JELAJAHI PAKET →</Button>
        </div>

        <ExclusivePackagesGrid />
      </div>
    </section>
  )
}