import Image from "next/image";

const blogs = [
  {
    title: "Menjelajahi Surga Tersembunyi di Nusa Penida",
    category: "Destinasi",
    date: "24 Desember 2025",
    description:
      "Nikmati keindahan pantai eksotis, tebing ikonik, dan laut biru jernih yang menjadikan Nusa Penida destinasi favorit.",
    image: "/assets/nusapenida02.jpg", //  placeholder
  },
  {
    title: "9 Destinasi Wisata Populer di Indonesia Tahun 2024",
    category: "Rekomendasi",
    date: "25 Desember 2025",
    description:
      "Dari Bali hingga Labuan Bajo, inilah daftar destinasi wisata Indonesia yang paling banyak diminati.",
    image: "/assets/bali01.jpg",
  },
  {
    title: "Tips Liburan Aman dan Nyaman Saat Traveling",
    category: "Tips Wisata",
    date: "26 Desember 2025",
    description:
      "Panduan praktis untuk mempersiapkan perjalanan agar liburan lebih nyaman, aman, dan bebas khawatir.",
    image: "/assets/bali02.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-montserrat text-3xl font-bold text-[#0B2C4D]">
              Blog & Artikel Wisata
            </h2>
            <p className="mt-2 font-inter text-gray-600 max-w-xl">
              Inspirasi perjalanan, tips liburan, dan rekomendasi destinasi
              terbaik di Indonesia untuk menemani rencana liburanmu.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 bg-[#FB8C00] hover:bg-[#e67e00] text-white px-5 py-3 rounded-lg font-inter font-semibold transition w-fit">
            LIHAT SEMUA
            <span>→</span>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />

                {/* Category Badge */}
                <span className="absolute bottom-4 left-4 bg-white text-[#0B2C4D] text-sm font-inter px-3 py-1 rounded-md shadow">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="font-montserrat text-lg font-semibold text-[#0B2C4D]">
                  {blog.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500 font-inter">
                  {blog.date}
                </p>

                <p className="mt-3 font-inter text-gray-600 text-sm line-clamp-3">
                  {blog.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 font-inter font-semibold text-[#FB8C00] hover:underline"
                >
                  BACA SELENGKAPNYA
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}