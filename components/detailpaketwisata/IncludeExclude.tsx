export default function IncludeExclude() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div>
        <h4 className="font-semibold text-[#0B2C4D] mb-3">
          Termasuk
        </h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>✔ Transportasi laut (Speed Boat)</li>
          <li>✔ Penginapan</li>
          <li>✔ Makan 3x sehari</li>
          <li>✔ Tiket masuk wisata</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-[#0B2C4D] mb-3">
          Tidak Termasuk
        </h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>✖ Tiket pesawat PP</li>
          <li>✖ Pengeluaran pribadi</li>
          <li>✖ Asuransi perjalanan</li>
        </ul>
      </div>
    </div>
  );
}