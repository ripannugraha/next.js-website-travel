type InputProps = {
  placeholder: string
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className="w-full sm:w-[320px] px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FB8C00]"
    />
  )
}