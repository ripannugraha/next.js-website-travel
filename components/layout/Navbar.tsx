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
        <nav className="hidden md:flex items-center gap-8 font-inter text-sm">
          <Link href="/">Beranda</Link>
          <Link href="/tentang-kami">Tentang Kami</Link>
          <Link href="/paket-wisata">Paket Wisata</Link>
          <Link href="/destinasi">Destinasi</Link>
          <Link href="/artikel">Artikel</Link>
          <Link href="/kontak">Kontak</Link>

          <span className="flex gap-1">
            <button>EN</button>
            <button className="bg-orange-500 px-2 rounded text-xs">ID</button>
          </span>
        </nav>
      </div>
    </header>
  )
}