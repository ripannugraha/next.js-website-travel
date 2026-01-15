import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B2C4D] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/assets/logonb.png" // logo sama seperti navbar
              alt="NusaTrip Logo"
              width={214}
              height={64}
              className="mb-4"
            />
            <p className="font-inter text-sm text-white/80 leading-relaxed">
              NusaTrip adalah platform perjalanan yang menghadirkan destinasi
              wisata terbaik di Indonesia dengan pengalaman liburan yang aman,
              nyaman, dan berkesan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-[#FB8C00] mb-4">
              Tautan Cepat
            </h4>
            <ul className="space-y-3 font-inter text-sm text-white/80">
              <li>Beranda</li>
              <li>Tentang Kami</li>
              <li>Paket Wisata</li>
              <li>Destinasi</li>
              <li>Kontak</li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h4 className="font-montserrat font-semibold text-[#FB8C00] mb-4">
              Halaman Lainnya
            </h4>
            <ul className="space-y-3 font-inter text-sm text-white/80">
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
              <li>Disclaimer</li>
              <li>FAQ (Pertanyaan Umum)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-[#FB8C00] mb-4">
              Informasi Kontak
            </h4>
            <ul className="space-y-4 font-inter text-sm text-white/80">
              <li>Jl. Niti Mandala, Renon, Bali 80225</li>
              <li>+62 858 6155 6201</li>
              <li>info@nusatrip.id</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center">
          <p className="font-inter text-sm text-white/60">
            © 2025 NusaTrip. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}