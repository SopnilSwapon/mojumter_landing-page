export default function BannerSection() {
  return (
    <section className="relative rounded-2xl overflow-hidden pt-25">
      {/* Background Layer */}
      <div
        className="
      absolute inset-0 
      bg-cover 
      bg-center 
      bg-no-repeat 
      bg-black
    "
        style={{
          backgroundImage: "url('/bannerLogo2.png')",
        }}
      >
        {/* Optional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Layer */}
      <div className="relative flex flex-col items-center mt-22 justify-center text-center text-white min-h-[60vh] sm:min-h-[70vh] lg:min-h-[calc(100vh-190px)] px-4 py-12">
        <div className="max-w-[1320px] w-full">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4">
            P.R.E.P. : PREPARE.{" "}
            <span className="text-secondary">
              {" "}
              RECOVER.<span className="block mt-2"> EVOLVE. PERFORM.</span>
            </span>
          </h1>
          <p className="sm:text-[16px] md:text-xl mb-6 lg:w-3xl mx-auto text-[#E9E9EA]">
            Science-backed treatments and personalized plans to get you back in
            the game — stronger, pain-free, and more confident than ever. Book a
            free assessment and start your comeback.
          </p>
          <button className="px-6 py-3 flex gap-2 justify-center items-center mx-auto bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-base">
            Book your recovery session{" "}
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24.000000"
              height="24.000000"
              fill="none"
            >
              <rect
                id="arrow-right-02-stroke-standard 1"
                width="24.000000"
                height="24.000000"
                x="0.000000"
                y="0.000000"
                fill="rgb(255,255,255)"
                fill-opacity="0"
              />
              <path
                id="Vector"
                d="M15.0001 17L20 12L15 7"
                fill-rule="nonzero"
                stroke="rgb(250,250,250)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector"
                d="M4 12L20 12"
                stroke="rgb(250,250,250)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
