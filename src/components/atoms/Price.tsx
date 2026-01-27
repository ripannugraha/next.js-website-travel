export default function Price({ value }: { value: string }) {
  return (
    <span className="font-inter text-sm text-[#0B2C4D]">
      <strong>{value}</strong> / Orang
    </span>
  )
}