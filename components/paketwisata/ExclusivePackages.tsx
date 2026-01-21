import Image from "next/image";

export default function ExclusivePackages() {
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

          <button className="self-start md:self-auto bg-orange-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-orange-600 transition">
            JELAJAHI PAKET →
          </button>
        </div>

        {/* ===== GRID ATAS (2 BESAR) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="max-w-[640px] w-full mx-auto">
            <PackageCard
              image="/assets/rajaampat.jpg"
              title="Paket Raja Ampat"
              rating="4.9"
              price="Rp. 8.500.000"
              desc="Eksplorasi surga bawah laut Raja Ampat dengan snorkeling, island hopping, dan panorama alam."
            />
          </div>

          <div className="max-w-[640px] w-full mx-auto">
            <PackageCard
              image="/assets/lombok.jpg"
              title="Paket Lombok Eksotis"
              rating="4.8"
              price="Rp. 4.200.000"
              desc="Nikmati keindahan Pantai Kuta Mandalika, Gili Trawangan, dan budaya Sasak."
            />
          </div>
        </div>

        {/* ===== GRID BAWAH (3 KECIL) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="max-w-[422px] w-full mx-auto">
            <PackageCard
              image="/assets/karimunjawa.jpg"
              title="Paket Karimunjawa"
              rating="4.8"
              price="Rp. 3.700.000"
              desc="Snorkeling, hopping island, dan sunset di pulau tropis alami."
              small
            />
          </div>

          <div className="max-w-[422px] w-full mx-auto">
            <PackageCard
              image="/assets/danautoba.jpg"
              title="Paket Danau Toba"
              rating="4.7"
              price="Rp. 3.900.000"
              desc="Wisata budaya Batak dan panorama danau vulkanik terbesar di Asia Tenggara."
              small
            />
          </div>

          <div className="max-w-[422px] w-full mx-auto">
            <PackageCard
              image="/assets/tanatoraja.jpg"
              title="Paket Wisata Tana Toraja"
              rating="4.6"
              price="Rp. 4.800.000"
              desc="Wisata budaya unik dengan rumah adat Tongkonan dan pegunungan."
              small
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageCard({
  image,
  title,
  rating,
  price,
  desc,
  small = false,
}: {
  image: string;
  title: string;
  rating: string;
  price: string;
  desc: string;
  small?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div
        className={`relative w-full ${
          small ? "h-[180px]" : "h-[260px]"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="font-montserrat font-semibold text-lg text-[#0B2C4D]">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="text-orange-500">★★★★★</span>
          <span className="text-gray-500">{rating}</span>
        </div>

        <p className="text-gray-500 text-sm mt-2">{desc}</p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-sm font-semibold text-[#0B2C4D]">
            {price} / orang
          </span>

          <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded-md hover:bg-orange-600 transition">
            PESAN SEKARANG
          </button>
        </div>
      </div>
    </div>
  );
}