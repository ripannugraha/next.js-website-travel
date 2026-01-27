import BenefitItem from "../molecules/BenefitItem"

export default function HeroBenefits() {
  return (
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        h-[224px]
        bg-[#0B2C4D]/70
        backdrop-blur-[5px]
        z-20
      "
    >
      <div className="max-w-[1440px] mx-auto h-full grid grid-cols-1 md:grid-cols-3 items-center text-center px-6 text-white">
        <BenefitItem
          title="Pemandu Lokal"
          desc="Didampingi oleh pemandu berpengalaman."
        />
        <BenefitItem
          title="Harga Terjangkau"
          desc="Harga transparan dan fleksibel."
        />
        <BenefitItem
          title="Layanan Responsif"
          desc="Siap membantu sebelum & selama perjalanan."
        />
      </div>
    </div>
  )
}