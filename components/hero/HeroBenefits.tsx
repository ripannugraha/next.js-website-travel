export default function HeroBenefits() {
  return (
    <div className="bg-[#0B2C4D]/90 text-white">
      <div className="max-w-[1440px] mx-auto h-[224px] grid grid-cols-1 md:grid-cols-3 items-center text-center px-6">
        
        <div>
          <h4 className="font-montserrat text-lg mb-2">Pemandu Lokal</h4>
          <p className="font-inter text-sm opacity-80">
            Didampingi oleh pemandu berpengalaman di setiap perjalanan.
          </p>
        </div>

        <div>
          <h4 className="font-montserrat text-lg mb-2">Harga Terjangkau</h4>
          <p className="font-inter text-sm opacity-80">
            Paket wisata fleksibel dengan harga yang transparan.
          </p>
        </div>

        <div>
          <h4 className="font-montserrat text-lg mb-2">Layanan Responsif</h4>
          <p className="font-inter text-sm opacity-80">
            Tim kami siap membantu sebelum dan selama perjalanan.
          </p>
        </div>

      </div>
    </div>
  )
}