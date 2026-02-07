export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* top lime strip */}
      <div className="absolute top-0 left-0 right-0 h-[14px] bg-lime-400" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* who we are */}
            <p className="text-[44px] leading-none font-light text-gray-700 tracking-wide">
              who we are?
            </p>

            {/* Big Heading */}
            <div className="mt-3 leading-[0.85]">
              <h2 className="text-[72px] sm:text-[88px] md:text-[100px] font-extrabold text-lime-400">
                WE’RE
              </h2>
              <h2 className="text-[88px] sm:text-[110px] md:text-[130px] font-extrabold text-lime-400 -mt-2">
                GOOD
              </h2>
            </div>

            {/* Sub heading */}
            <p className="mt-3 text-[30px] sm:text-[36px] font-semibold tracking-wide text-black">
              JUST ASK OUR MOMS
            </p>

            {/* Paragraph */}
            <div className="mt-8 max-w-xl">
              <p className="text-[15px] leading-7 text-gray-700">
                <span className="font-bold tracking-wider text-black">
                  THIRSTY FOR BRANDING?
                </span>
                <br />
                Sit back & sip a cup of coffee with us. We are crazy kickass brain
                boxes doing everything unless you want to see magic tricks done
                by pasha. Jokes apart! We are the ones who breathe amongst common
                people, understand them and come out with uncommon ideas to make
                your brand stand out. We are a plethora of ideas, delivering
                impactful tailor-made strategies and eye-catching imagery every
                now and often.
              </p>
            </div>

            {/* Button */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-lime-400 text-black font-bold tracking-[0.2em] text-sm px-8 py-3 hover:bg-lime-300 transition"
              >
                READ MORE
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="w-full">
              {/* IMPORTANT:
                 Put image inside /public/aliens.png
                 or change src accordingly
              */}
              <img
                src="/aliens.png"
                alt="Coffee & Creative Illustration"
                className="w-full h-auto object-contain"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
          <path d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
          <path d="M16 3C8.83 3 3 8.83 3 16c0 2.3.6 4.46 1.66 6.33L3 29l6.85-1.58A12.93 12.93 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.6c-2.04 0-3.94-.6-5.55-1.64l-.4-.25-4.07.94.88-3.97-.26-.41A10.55 10.55 0 1 1 16 26.6z" />
        </svg>
      </a>
    </section>
  );
}
