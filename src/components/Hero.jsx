import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        title: (
          <>
            <span className="font-serif">थोड़े</span>{" "}
            <span className="font-serif">weird</span>
          </>
        ),
        img: "/sloth.png",
      },
      {
        title: (
          <>
            <span className="font-serif">We</span>{" "}
            <span className="font-serif">Design</span>
          </>
        ),
        img: "/sloth.png",
      },
      {
        title: (
          <>
            <span className="font-serif">Coffee</span>{" "}
            <span className="font-serif">& Creative</span>
          </>
        ),
        img: "/sloth.png",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  return (
    <section id="home" className="relative w-full min-h-[92vh] bg-black overflow-hidden">
      {/* Top thin line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20 z-30" />

      {/* ================= NAVBAR ================= */}
      <header className="relative z-30 w-full">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="leading-none select-none">
            <div className="text-lime-400 font-extrabold text-3xl tracking-tight">
              coffee
              <span className="text-lime-300">&</span>
            </div>
            <div className="text-lime-400 font-extrabold text-3xl -mt-2 tracking-tight">
              creative
            </div>
            <div className="text-lime-400/70 text-[11px] -mt-1 tracking-wider">
              lets brew thoughts
            </div>
          </Link>

          {/* Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-white/80 text-sm tracking-[0.18em]">
            <Link to="/" className="hover:text-white transition">
              HOME
            </Link>

            <Link to="/about" className="hover:text-white transition">
              ABOUT
            </Link>

            <Link to="/services" className="hover:text-white transition">
              SERVICES
            </Link>

            <Link to="/portfolio" className="hover:text-white transition">
              PORTFOLIO
            </Link>

            <Link to="/contact" className="hover:text-white transition">
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= SLIDES ================= */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-black" />

          {/* Soft center glow */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-lime-400/10 blur-[140px]" />
          </div>

          {/* Main Content */}
          <div className="relative z-20 h-full flex items-center justify-center px-6">
            <div className="relative w-full max-w-6xl flex items-center justify-center">
              {/* Big Title */}
              <div className="text-center select-none">
                <h1 className="text-lime-400 font-extrabold text-[64px] sm:text-[90px] md:text-[120px] leading-[0.9] tracking-tight">
                  {s.title}
                </h1>
              </div>

              {/* Sloth image (Right) */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                <div className="w-[240px] lg:w-[280px] opacity-95">
                  <img
                    src={s.img}
                    alt="Sloth Illustration"
                    className="w-full h-auto object-contain"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Side arrows */}
          <button
            onClick={prev}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 text-white/60 hover:text-white transition"
          >
            <span className="text-4xl leading-none">‹</span>
          </button>

          <button
            onClick={next}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 text-white/60 hover:text-white transition"
          >
            <span className="text-4xl leading-none">›</span>
          </button>
        </div>
      ))}

      {/* ================= WHATSAPP FLOATING ================= */}
      <a
        href="https://wa.me/919999777471"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
          <path d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
          <path d="M16 3C8.83 3 3 8.83 3 16c0 2.3.6 4.46 1.66 6.33L3 29l6.85-1.58A12.93 12.93 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.6c-2.04 0-3.94-.6-5.55-1.64l-.4-.25-4.07.94.88-3.97-.26-.41A10.55 10.55 0 1 1 16 26.6z" />
        </svg>
      </a>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-10 left-0 right-0 z-40 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              active === i ? "w-10 bg-lime-400" : "w-2.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
