import Image from "next/image";

const destinations = [
  {
    country: "Indonesia",
    title: "Gunung Bromo",
    image: "/assets/desgallery1.jpg",
  },
  {
    country: "Indonesia",
    title: "Pantai Kelingking",
    image: "/assets/desgallery2.jpg",
  },
  {
    country: "Indonesia",
    title: "Pura Ulun Danu Beratan",
    image: "/assets/desgallery3.jpg",
  },
  {
    country: "Indonesia",
    title: "Candi Prambanan",
    image: "/assets/desgallery4.jpg",
  },
  {
    country: "Indonesia",
    title: "Labuan Bajo",
    image: "/assets/desgallery5.jpg",
  },
];

export default function DestinationGallery() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-5 w-full h-[900px]">
        {destinations.map((item, i) => (
          <div key={i} className="relative h-full">
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={i === 0}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

            {/* Text center top */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-white text-center px-4">
              <p className="text-xs uppercase tracking-widest opacity-80">
                {item.country}
              </p>
              <h3 className="font-montserrat font-semibold text-lg leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
