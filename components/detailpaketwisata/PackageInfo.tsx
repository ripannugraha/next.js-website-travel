export default function PackageInfo() {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#0B2C4D]">
          Raja Ampat, Papua Barat
        </h1>

        <div className="text-right">
          <p className="text-sm text-gray-500">Mulai dari</p>
          <p className="text-xl font-bold text-[#0B2C4D]">
            Rp. 8.500.000 <span className="text-sm font-normal">/ Orang</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
        <span>⭐ 4.8</span>
        <span>•</span>
        <span>Raja Ampat, Papua Barat</span>
      </div>

      <button className="mt-6 bg-[#FB8C00] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-orange-600 transition">
        PESAN SEKARANG →
      </button>
    </div>
  );
}