import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1600&q=80",
    ],
    []
  );

  const [active, setActive] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[92vh] overflow-hidden bg-black">
      {/* Slides */}
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt="Hero slide"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <p className="text-yellow-400 font-semibold tracking-wide mb-4">
            Branding • Design • Digital Growth
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Thirsty for{" "}
            <span className="text-yellow-400">branding</span>?
          </h1>

          <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed">
            We create premium brands, websites and content that converts.
            Sip coffee — we’ll handle the creative.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Contact Us
            </a>

            <a
              href="#services"
              className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Left/Right Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${
              active === i ? "w-10 bg-yellow-400" : "w-2.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
