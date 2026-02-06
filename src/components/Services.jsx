const services = [
  { title: "Creative", desc: "Unique branding and design systems." },
  { title: "Digital", desc: "Marketing strategies that generate leads." },
  { title: "Photography", desc: "High quality product & brand shoots." },
  { title: "Films", desc: "Cinematic videos, ads and reels." },
  { title: "Website", desc: "Modern responsive websites & landing pages." },
  { title: "Social", desc: "Social media content and management." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600">
          Everything you need to build a strong brand presence.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-6 shadow-sm border hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
