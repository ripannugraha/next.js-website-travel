export default function NewsletterSection() {
  return (
    <section className="bg-white w-full h-[288px] flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Kiri: Judul & Deskripsi */}
        <div className="max-w-xl">
          <h3 className="font-montserrat text-2xl font-bold text-[#0B2C4D]">
            Berlangganan Newsletter NusaTrip
          </h3>
          <p className="mt-2 font-inter text-gray-600">
            Dapatkan update destinasi terbaru, promo perjalanan, dan tips wisata langsung ke email Anda.
          </p>
        </div>

        {/* Kanan: Input & Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          
          {/* Input Email: bg-gray-50 agar tidak terlalu kontras */}
          <input
            type="email"
            placeholder="Masukkan alamat email Anda"
            className="w-full sm:w-[320px] px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FB8C00]"
          />

          {/* Button dengan emoji + logo tambahan */}
           <button className="inline-flex items-center gap-2 bg-[#FB8C00] hover:bg-[#e67e00] text-white px-5 py-3 rounded-lg font-inter font-semibold transition whitespace-nowrap">
              <span>▶</span>
              BERLANGGANAN
            </button>
        </div>
      </div>
    </section>
  )
}