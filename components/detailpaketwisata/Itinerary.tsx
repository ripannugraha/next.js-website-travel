export default function Itinerary() {
  const days = [
    "Hari 1 – Kedatangan & Arborek",
    "Hari 2 – Pianemo & Telaga Bintang",
    "Hari 3 – Wayag & Pulau Karst",
  ];

  return (
    <div className="mb-10">
      <h3 className="font-semibold text-[#0B2C4D] mb-4">
        Itinerary Perjalanan
      </h3>

      <div className="space-y-3">
        {days.map((day, i) => (
          <details
            key={i}
            className="border rounded-lg px-4 py-3 cursor-pointer"
          >
            <summary className="font-medium text-sm text-[#0B2C4D]">
              {day}
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Detail kegiatan perjalanan hari ke-{i + 1}.
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}