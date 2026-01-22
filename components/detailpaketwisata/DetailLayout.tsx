export default function DetailLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
        {/* LEFT CONTENT */}
        <div>{children}</div>

        {/* RIGHT SIDEBAR */}
        <aside className="relative">
          <div className="sticky top-24">{sidebar}</div>
        </aside>
      </div>
    </section>
  );
}