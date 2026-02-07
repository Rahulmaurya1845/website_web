import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* TOP LIME STRIP */}
      <div className="w-full bg-lime-400 py-10 px-6 text-center">
        <h3 className="text-black font-extrabold text-3xl sm:text-4xl tracking-wide">
          दिमाग में विचार और थाली में अचार... अपना होना चाहिए
        </h3>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative w-full bg-black overflow-hidden">
        {/* soft background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
            {/* LEFT LINKS */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-white/70 text-sm">
                {["Home", "About", "Services", "Portfolio", "Contact", "Blogs"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-white transition"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* CENTER LOGO / QUOTE IMAGE */}
            <div className="flex justify-center">
              <img
                src="/footer-center.png"
                alt="Coffee & Creative Footer"
                className="w-[520px] max-w-full opacity-90"
                draggable="false"
              />
            </div>

            {/* RIGHT SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-end">
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

          {/* COPYRIGHT */}
        
        </div>
      </div>
    </footer>
  );
}
