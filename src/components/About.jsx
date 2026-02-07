import { useEffect, useMemo, useState } from "react";

export default function About() {
  const slides = useMemo(
    () => [
      {
        topLabel: "रसपंच",
        bottomLabel: "ताऊ की खाट के चार पाये और हुक्का है हम",
        leftImg:
          "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80",
        rightImg:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        centerTitle: "उम्मीद से ज़्यादा",
        centerTop:
          "TAALIYON KA HISAAB RAKHA NAHI\nGAALIYON KA HISAAB MEI RAKHTI NAHI",
        centerBottom: "KAHIN MEI FLIPKART TOH NAHI?",
        centerBg:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
      },
      {
        topLabel: "रसपंच",
        bottomLabel: "जो बोलता है वही होता है… और हम बहुत कुछ हैं",
        leftImg:
          "https://images.unsplash.com/photo-1520975693416-35a6d19b5f7c?auto=format&fit=crop&w=1200&q=80",
        rightImg:
          "https://images.unsplash.com/photo-1520975682034-5b6a07d1a93b?auto=format&fit=crop&w=1200&q=80",
        centerTitle: "थोड़े weird",
        centerTop: "WE MAKE BRANDS\nTHAT PEOPLE REMEMBER",
        centerBottom: "SIP COFFEE — WE’LL HANDLE THE CREATIVE",
        centerBg:
          "https://images.unsplash.com/photo-1520975693416-35a6d19b5f7c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        topLabel: "रसपंच",
        bottomLabel: "ब्रांडिंग के लिए हमारे पास आइए वरना जाके भैंस चराइए",
        leftImg:
          "https://images.unsplash.com/photo-1524503033411-f7a2b3c38f2b?auto=format&fit=crop&w=1200&q=80",
        rightImg:
          "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=1200&q=80",
        centerTitle: "दमदार",
        centerTop: "CREATIVE • DIGITAL • FILMS",
        centerBottom: "WE CREATE BEAUTY OUT OF CHAOS",
        centerBg:
          "https://images.unsplash.com/photo-1524503033411-f7a2b3c38f2b?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  // auto slide
  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  return (
    <section id="about" className="w-full bg-black overflow-hidden">
      {/* SLIDES */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`relative w-full transition-opacity duration-700 ${
            active === i ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Top lime strip */}
          <div className="w-full bg-lime-400 py-3 text-center">
            <p className="text-black font-bold tracking-wider">{s.topLabel}</p>
          </div>

          {/* Main slider area */}
          <div className="relative w-full h-[70vh] min-h-[520px] bg-black">
            {/* left portrait */}
            <div className="absolute left-0 top-0 h-full w-[28%] hidden md:block">
              <img
                src={s.leftImg}
                alt="Left portrait"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* right portrait */}
            <div className="absolute right-0 top-0 h-full w-[28%] hidden md:block">
              <img
                src={s.rightImg}
                alt="Right portrait"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* center */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="relative w-full max-w-4xl text-center">
                {/* faint bg behind text */}
                <div className="absolute inset-0 -z-10 flex justify-center">
                  <div className="w-[700px] h-[420px] opacity-20 blur-[2px]">
                    <img
                      src={s.centerBg}
                      alt="bg"
                      className="w-full h-full object-cover rounded-2xl"
                      draggable="false"
                    />
                  </div>
                </div>

                {/* top lines */}
                <p className="text-white/80 text-sm sm:text-base tracking-wider leading-relaxed whitespace-pre-line">
                  {s.centerTop}
                </p>

                {/* big title */}
                <h2 className="mt-6 text-lime-400 font-extrabold text-[52px] sm:text-[70px] md:text-[84px] leading-none tracking-tight">
                  {s.centerTitle}
                </h2>

                {/* bottom */}
                <p className="mt-6 text-white/80 text-sm sm:text-base tracking-wider">
                  {s.centerBottom}
                </p>
              </div>
            </div>

            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition"
            >
              <span className="text-4xl leading-none">‹</span>
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-
              -3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition"
            >
              <span className="text-4xl leading-none">›</span>
            </button>
          </div>

          {/* Bottom lime strip */}
          <div className="w-full bg-lime-400 py-3 text-center">
            <p className="text-black font-bold tracking-wider">
              {s.bottomLabel}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="bg-black py-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              active === i ? "w-10 bg-lime-400" : "w-2.5 bg-white/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
