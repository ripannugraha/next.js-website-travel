import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-[#0B2C4D]/90 backdrop-blur">
      <div className="max-w-[1440px] mx-auto h-[64px] flex items-center justify-between px-6 text-white">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logonb.png"
            alt="Nusa Trip Logo"
            width={214}
            height={64}
            className="object-contain"
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-6 font-inter text-sm">
          <HoverLink href="/" label="Beranda" />
          <HoverLink href="/tentang-kami" label="Tentang Kami" />

          {/* Paket Wisata Dropdown */}
          <Dropdown label="Paket Wisata" items={[
            { href: "/paket-wisata", label: "Paket Wisata" },
            { href: "/detail-paket-wisata", label: "Detail Paket Wisata" },
          ]} />

          {/* Destinasi Dropdown */}
          <Dropdown label="Destinasi" items={[
            { href: "/destinasi", label: "Destinasi" },
            { href: "/detail-destinasi", label: "Detail Destinasi" },
          ]} />

          {/* Pages Dropdown */}
          <Dropdown label="Pages" items={[
            { href: "/guide", label: "Guide" },
            { href: "/gallery", label: "Gallery" },
            { href: "/blog-article", label: "Blog and Article" },
            { href: "/single-post", label: "Single Post" },
          ]} />

          <HoverLink href="/kontak" label="Kontak" />

          {/* Language Switch */}
          <span className="flex gap-1">
            <button className="hover:text-orange-500 transition">EN</button>
            <button className="bg-orange-500 px-2 rounded text-xs">ID</button>
          </span>
        </nav>
      </div>
    </header>
  )
}

function HoverLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 transition-colors duration-200 hover:text-orange-500"
    >
      {label}
    </Link>
  )
}

function Dropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="relative group focus-within:block">
      <button
        className="flex items-center gap-1 px-3 py-2 transition-colors duration-200 hover:text-orange-500 focus:outline-none"
      >
        {label}
        <span className="text-xs">▾</span> {/* Panah tipis */}
      </button>
      <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 invisible group-hover:visible group-focus-within:visible transition duration-200 z-10 min-w-[180px]">
        <div className="flex flex-col">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-2 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}