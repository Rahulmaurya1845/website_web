export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-3 items-center justify-between">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Coffee & Creative. All rights reserved.
        </p>

        <p className="text-sm text-white/70">
          Made with ☕ + creativity
        </p>
      </div>
    </footer>
  );
}
