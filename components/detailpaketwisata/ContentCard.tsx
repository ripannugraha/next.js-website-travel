import Image from "next/image";

export default function ContactCard() {
  return (
    <div className="relative w-[480px] h-[400px] rounded-xl overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/assets/rajaampat-bg.jpg" // ganti sesuai asset
        alt="Contact Background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2C4D]/80" />

      {/* Content */}
      <div className="relative z-10 p-6 text-white h-full flex flex-col justify-center">
        <h4 className="text-xl font-semibold mb-3">
          Punya Pertanyaan?
        </h4>

        <p className="text-sm opacity-90 mb-6 leading-relaxed">
          Jangan ragu untuk menghubungi kami. Tim NusaTrip siap membantu
          perjalanan Anda.
        </p>

        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2">
            📞 +62858 6155 6201
          </p>
          <p className="flex items-center gap-2">
            ✉ info@nusatrip.id
          </p>
        </div>
      </div>
    </div>
  );
}