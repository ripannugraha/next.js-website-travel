import Image from "next/image";

export default function AdventureCTA() {
  return (
    <section className="relative w-full h-[600px] flex items-center">
      {/* Background Image */}
      <Image
        src="/assets/rajaampat.jpg" // 🔴 GANTI IMAGE NANTI
        alt="Adventure NusaTrip"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2C4D]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-xl text-white">
            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold leading-tight">
              Jelajahi Petualangan <br />
              Terbaik Bersama NusaTrip
            </h2>

            <p className="mt-4 font-inter text-base text-white/90">
              Nikmati pengalaman wisata terbaik ke berbagai destinasi favorit
              Indonesia. Dari Bali hingga Labuan Bajo, NusaTrip menghadirkan
              perjalanan yang nyaman, aman, dan berkesan.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 bg-[#FB8C00] hover:bg-[#e67e00] text-white px-6 py-3 rounded-lg font-inter font-semibold transition">
              JELAJAHI PAKET
              <span>→</span>
            </button>
          </div>

          {/* Play Button */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
        <button
             className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition"
             aria-label="Play Video"
            >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0B2C4D"
            className="w-8 h-8 ml-1"
            >
            <path d="M8 5v14l11-7z" />
            </svg>
        </button>

          </div>
        </div>
      </div>
    </section>
  );
}