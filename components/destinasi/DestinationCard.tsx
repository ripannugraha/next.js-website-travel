import Image from "next/image"

type Props = {
  image: string
  title: string
  location: string
  rating: number
  description: string
  price: string
}

export default function DestinationCard({
  image,
  title,
  location,
  rating,
  description,
  price,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      
      {/* IMAGE DESTINASI */}
      <div className="relative h-[220px] w-full">
        <Image
          src={image} // ← PLACEHOLDER IMAGE
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-montserrat text-lg text-[#0B2C4D] mb-1">
          {title}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-2 text-sm mb-3">
          <span className="text-[#FB8C00]">
            {"★".repeat(Math.round(rating))}
          </span>
          <span className="font-inter text-gray-600">
            {rating.toFixed(1)}
          </span>
        </div>

        <p className="font-inter text-sm text-gray-600 mb-4">
          {description}
        </p>

        {/* PRICE & CTA */}
        <div className="flex items-center justify-between">
          <span className="font-inter text-sm text-[#0B2C4D]">
            <strong>{price}</strong> / Orang
          </span>

          <button className="bg-[#FB8C00] hover:bg-orange-600 transition text-white text-sm px-4 py-2 rounded-md flex items-center gap-1">
            Pesan Sekarang →
          </button>
        </div>
      </div>
    </div>
  )
}