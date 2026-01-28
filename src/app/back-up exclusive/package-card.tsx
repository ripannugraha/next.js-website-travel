import Image from "next/image"
import Button from "@/components/atoms/button"

type Props = {
  image: string
  title: string
  rating: string
  price: string
  desc: string
  small?: boolean
}

export default function PackageCard({
  image,
  title,
  rating,
  price,
  desc,
  small = false,
}: Props) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className={`relative w-full ${small ? "h-[180px]" : "h-[260px]"}`}>
        <Image src={image} alt={title} fill className="object-cover" />
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

          <Button variant="secondary">PESAN SEKARANG</Button>
        </div>
      </div>
    </div>
  )
}