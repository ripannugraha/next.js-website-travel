import Image from "next/image"
import Rating from "../atoms/Rating"
import Price from "../atoms/Price"
import Button from "../atoms/Button"

type Props = {
  image: string
  title: string
  rating: number
  description: string
  price: string
}

export default function DestinationCard({
  image,
  title,
  rating,
  description,
  price,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      
      {/* IMAGE */}
      <div className="relative h-[220px] w-full">
        <Image
          src={image}
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

        <Rating value={rating} />

        <p className="font-inter text-sm text-gray-600 my-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <Price value={price} />
          <Button>PESAN SEKARANG →</Button>
        </div>
      </div>
    </div>
  )
}