import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="md:col-span-2 h-[360px] relative rounded-xl overflow-hidden">
        <Image
          src="/assets/rajaampat01.jpg"
          alt="Raja Ampat"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex md:flex-col gap-4">
        <div className="relative h-[172px] rounded-xl overflow-hidden">
          <Image
            src="/assets/rajaampat02.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[172px] rounded-xl overflow-hidden">
          <Image
            src="/assets/rajaampat03.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}