export default function BookingSidebar() {
  return (
    <aside className="w-[480px] bg-white rounded-xl shadow-lg overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#0B2C4D] px-6 py-4">
        <h3 className="text-white text-lg font-semibold">
          Pesan Tur Ini
        </h3>
      </div>

      {/* Form */}
      <div className="p-6 space-y-4">
        {[
          "Nama Lengkap",
          "Nomor Telepon",
          "Email",
          "Tanggal Keberangkatan",
          "Jumlah Peserta",
        ].map((label, i) => (
          <input
            key={i}
            placeholder={label}
            className="w-full h-[48px] px-4 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        ))}

        <button className="w-full h-[48px] bg-[#FB8C00] text-white font-semibold rounded-lg hover:bg-orange-600 transition">
          PESAN SEKARANG
        </button>
      </div>
    </aside>
  );
}