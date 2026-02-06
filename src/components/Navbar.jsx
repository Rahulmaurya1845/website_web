export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          Coffee<span className="text-yellow-500"> & </span>Creative
        </div>

        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li>
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-700">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
        >
          Let’s Talk
        </a>
      </div>
    </nav>
  );
}
