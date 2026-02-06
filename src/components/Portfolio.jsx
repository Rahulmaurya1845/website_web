export default function Portfolio() {
  const works = ["Branding", "Social Media", "Website", "Photography", "Films", "Ads"];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">Portfolio</h2>
        <p className="mt-3 text-gray-600">
          Some of our recent creative work.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <div
              key={w}
              className="rounded-2xl bg-gray-100 border p-8 flex items-center justify-center text-xl font-bold"
            >
              {w}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
