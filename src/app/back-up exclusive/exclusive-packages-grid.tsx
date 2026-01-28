import PackageCard from "@/app/back-up exclusive/package-card"
import { exclusivePackages } from "@/app/back-up exclusive/exclusive-packages"

export default function ExclusivePackagesGrid() {
  return (
    <>
      {/* GRID ATAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {exclusivePackages.featured.map((item, index) => (
          <PackageCard key={index} {...item} />
        ))}
      </div>

      {/* GRID BAWAH */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exclusivePackages.regular.map((item, index) => (
          <PackageCard key={index} {...item} />
        ))}
      </div>
    </>
  )
}