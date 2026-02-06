export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-black text-white p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s build something amazing.
          </h2>

          <p className="mt-4 text-white/80 text-lg">
            Want branding, website or digital growth? Message us now.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919999777471"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold text-center hover:bg-yellow-300"
            >
              Call Now
            </a>

            <a
              href="mailto:vipin@coffeeandcreative.in"
              className="border border-white/30 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white hover:text-black transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
