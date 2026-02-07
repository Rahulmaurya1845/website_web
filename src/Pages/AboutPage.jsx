import Hero from "../components/Hero";
import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Hero />

      {/* ===================== TOP BLACK STRIP ===================== */}
      <div className="w-full bg-black py-6">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-lime-400 font-extrabold text-sm tracking-wide">
              सब मोह माया है
            </p>
            <p className="text-white/80 text-[11px] tracking-wider uppercase mt-1">
              PEHLI BAAR ME CLIENT KA APPROVAL KAB AAYA HAI ?
            </p>
          </div>

          {/* small doodle placeholder */}
          <div className="hidden sm:block">
            <img
              src="/doodle.png"
              alt="doodle"
              className="w-12 opacity-90"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* ===================== WHO WE ARE (WHITE) ===================== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl flex flex-col items-center text-center">
              {/* Big about image placeholder */}
              <img
                src="/about-good.png"
                alt="We're Good"
                className="w-[760px] max-w-full"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LIME STRIP ===================== */}
      <div className="w-full bg-lime-400 py-4 text-center">
        <p className="text-black font-extrabold tracking-wide text-lg">
          अगर CHANGES ना होते... तो आज हम चाँद पर होते
        </p>
      </div>

      {/* ===================== STATS DARK ===================== */}
      <section className="relative w-full bg-black overflow-hidden">
        {/* blurred bg */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <Stat number="24+" label="YEARS" />
            <Stat number="50+" label="ARTIST" />
            <Stat number="1000+" label="BRANDS" />
            <Stat number="10000+" label="PROJECTS" />
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM STRIP (LIKE FOOTER) ===================== */}
      <div className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left branding line */}
            <div className="flex items-center gap-4">
              <img
                src="/footer-mini.png"
                alt="branding"
                className="w-[320px] max-w-full opacity-90"
                draggable="false"
              />
            </div>

            {/* Right socials */}
            <div className="flex items-center gap-5 text-white/60">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-white">
      <div className="text-2xl sm:text-3xl font-light tracking-wide">
        {number}
      </div>
      <div className="mt-2 text-[10px] tracking-[0.3em] text-white/70">
        {label}
      </div>
    </div>
  );
}
