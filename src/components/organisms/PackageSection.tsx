import Image from "next/image"

export default function PackageSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
            Paket Wisata Eksklusif NusaTrip
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Pilihan paket perjalanan terbaik untuk menikmati keindahan Indonesia
            dengan pengalaman yang nyaman dan berkesan.
          </p>
        </div>

        {/* Paket 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/nusapenida01.jpg"
              alt="Bali & Nusa Penida"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
              Bali & Nusa Penida
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">4.8</span>
              <span className="text-orange-500">★★★★★</span>
            </div>

            <p className="text-gray-600 mb-6">
              Nikmati keindahan pantai eksotis, tebing ikonik, dan laut biru
              jernih di Bali dan Nusa Penida. Cocok untuk liburan santai
              maupun petualangan.
            </p>

            <p className="mb-6">
              <span className="font-semibold text-gray-700">Mulai dari </span>
              <span className="font-bold text-[#0A2540]">
                Rp6.500.000
              </span>
              <span className="text-gray-600"> / 3 hari</span>
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              PESAN SEKARANG
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Paket 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/labuanbajo01.jpg"
              alt="Labuan Bajo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
              Labuan Bajo
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">4.9</span>
              <span className="text-orange-500">★★★★★</span>
            </div>

            <p className="text-gray-600 mb-6">
              Jelajahi keindahan alam Flores, Pulau Padar, dan bertemu
              langsung dengan Komodo. Pengalaman wisata alam yang tak
              terlupakan.
            </p>

            <p className="mb-6">
              <span className="font-semibold text-gray-700">Mulai dari </span>
              <span className="font-bold text-[#0A2540]">
                Rp5.900.000
              </span>
              <span className="text-gray-600"> / 3 hari</span>
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              PESAN SEKARANG
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}