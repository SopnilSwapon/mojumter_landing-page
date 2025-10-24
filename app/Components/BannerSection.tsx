export default function BannerSection() {
  return (
    <section className="relative overflow-hidden pt-25">
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
          <p className="flex flex-col gap-3 items-center justify-center mt-10 text-sm">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24.000000"
              height="24.000000"
              fill="none"
            >
              <rect
                id="Frame"
                width="24.000000"
                height="24.000000"
                x="0.000000"
                y="0.000000"
                fill="rgb(255,255,255)"
                fill-opacity="0"
              />
              <g id="Group">
                <path
                  id="Vector"
                  d="M12 23.5C16.135 23.5 19.5 20.135 19.5 16L19.5 8C19.5 3.865 16.135 0.5 12 0.5C7.865 0.5 4.5 3.865 4.5 8L4.5 16C4.5 20.135 7.865 23.5 12 23.5ZM12.5 1.525C15.885 1.785 18.5 4.58 18.5 8L18.5 10.5L12.5 10.5L12.5 8.915C13.09 8.705 13.5 8.14 13.5 7.5L13.5 4.5C13.5 3.86 13.09 3.295 12.5 3.085L12.5 1.525ZM12 4C12.275 4 12.5 4.225 12.5 4.5L12.5 7.5C12.5 7.775 12.275 8 12 8C11.725 8 11.5 7.775 11.5 7.5L11.5 4.5C11.5 4.225 11.725 4 12 4ZM5.5 8C5.5 4.58 8.115 1.785 11.5 1.525L11.5 3.085C10.91 3.295 10.5 3.86 10.5 4.5L10.5 7.5C10.5 8.14 10.91 8.705 11.5 8.915L11.5 10.5L5.5 10.5L5.5 8ZM5.5 11.5L18.5 11.5L18.5 16C18.5 19.585 15.585 22.5 12 22.5C8.415 22.5 5.5 19.585 5.5 16L5.5 11.5Z"
                  fill="rgb(255,255,255)"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            SCROLL DOWN
          </p>
        </div>
      </div>
    </section>
  );
}
