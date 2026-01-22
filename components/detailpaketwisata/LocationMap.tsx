export default function LocationMap() {
  return (
    <div className="mb-10">
      <h3 className="font-semibold text-[#0B2C4D] mb-4">
        Lokasi Wisata
      </h3>

      <div className="w-full h-[280px] rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=Raja+Ampat&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}