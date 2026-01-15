import TestimonialCard from "./TestimonialCard"

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl text-[#0B2C4D] mb-4">
            Testimoni Wisatawan
          </h2>
          <p className="font-inter text-sm md:text-base text-gray-600">
            Cerita dan pengalaman nyata dari wisatawan yang
            telah menjelajahi Indonesia bersama NusaTrip.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          <TestimonialCard
            quote="Pemandu wisatanya sangat ramah dan berpengalaman. Perjalanan kami terasa nyaman dan terorganisir dengan baik sejak awal hingga akhir."
            name="Handika Nugraha"
            location="Palembang, Sumatera Selatan"
            image="/assets/dika.JPEG"
          />

          <TestimonialCard
            quote="Destinasi yang ditawarkan sangat menarik dan sesuai dengan deskripsi. NusaTrip benar-benar membantu kami menikmati liburan tanpa ribet."
            name="Muhammad Alpian"
            location="Bandung, Jawa Barat"
            image="/assets/pian.JPEG"
          />

          <TestimonialCard
            quote="Pelayanan cepat dan responsif. Kami mendapatkan pengalaman wisata yang berkesan bersama keluarga."
            name="Muhammad Reyno"
            location="Jakarta"
            image="/assets/eno.JPEG"
          />

        </div>
      </div>
    </section>
  )
}