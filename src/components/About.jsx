export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            About Coffee & Creative
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We’re a creative agency focused on branding, digital campaigns,
            websites and content production. Our goal is simple — make your
            brand look premium and convert better.
          </p>
        </div>

        <div className="rounded-2xl bg-white border p-8 shadow-sm">
          <h3 className="text-xl font-bold">Why us?</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Fast delivery</li>
            <li>✅ Premium design</li>
            <li>✅ Strong strategy</li>
            <li>✅ Content + Growth in one</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
