type RatingProps = {
  value: number
}

export default function Rating({ value }: RatingProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-[#FB8C00]">
        {"★".repeat(Math.round(value))}
      </span>
      <span className="font-inter text-gray-600">
        {value.toFixed(1)}
      </span>
    </div>
  )
}