import Link from "next/link"

export default function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm hover:text-orange-500 transition"
    >
      {label}
    </Link>
  )
}