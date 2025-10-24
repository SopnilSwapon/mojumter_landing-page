import React from "react";
import Image from "next/image";
import star_logo from "@/public/star_logo.png";
import service_one from "@/public/service_one.png";
import service_two_img from "@/public/service_two_image.png";
import service_three_img from "@/public/service_three.png";
import service_four_img from "@/public/service_four.jpg";

export default function Services() {
  return (
    <div className="max-w-[1320px] p-4 mx-0 lg:mx-auto py-15 lg:py-25">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-secondary text-xl lg:text-2xl">
            <div className="w-4 h-4 bg-text-secondary rounded-full"></div>
            <p>About us</p>
          </div>
          <h1
            className={`font-bold text-2xl md:text-[48px] my-3 md:my-4 uppercase gap-2 text-white`}
          >
            EXPERT SERVICES TO
            <span className="block mt-2">
              REDEFINE
              <span className="text-text-secondary"> YOUR LIMITS</span>
            </span>
          </h1>
        </div>
        <div className="flex justify-end">
          <button className="px-6 py-3 flex gap-2 justify-center items-center mx-auto bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-base">
            View All Services
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
      {/* Service one */}
      <div className="flex flex-col-reverse p:0 lg:p-10  lg:flex-row mt-8 lg:mt-12 gap-20  items-center">
        <div className="w-full">
          <h1
            className={`text-xl lg:text-2xl my-3 md:my-4 gap-2 text-secondary`}
          >
            /01 Recovery Services
          </h1>
          <h1
            className={`text-2xl lg:text-[32px] my-6 uppercase font-bold md:my-4 gap-2 text-white`}
          >
            p.R.E.p.Recovery
          </h1>
          <p className="text-[18px]">
            Mobile recovery: &quot;Pro-LevelRecovery, Made for
            EverydayAthletes.&quot;
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <h2 className="text-white font-bold uppercase flex gap-2 text-xl lg:text-2xl">
              <Image src={star_logo} height={36} width={36} alt="star logo" />{" "}
              Cold Tub
            </h2>
            <h2 className="text-white font-bold uppercase flex gap-2 text-xl lg:text-2xl">
              <Image src={star_logo} height={36} width={36} alt="star logo" />{" "}
              Tens Massage/Heat Pad
            </h2>
            <h2 className="text-white font-bold uppercase flex gap-2 text-xl lg:text-2xl">
              <Image src={star_logo} height={36} width={36} alt="star logo" />{" "}
              Leg Compression
            </h2>
            <h2 className="text-white font-bold uppercase flex gap-2 text-xl lg:text-2xl">
              <Image src={star_logo} height={36} width={36} alt="star logo" />{" "}
              Massage Gun/Belt
            </h2>
          </div>
          <button className="py-3  mt-6 underline flex gap-2 text-[18px] items-center rounded-lg text-secondary">
            View Details
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
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector"
                d="M4 12L20 12"
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
        <div className="w-full max-h-[560px] overflow-hidden rounded-sm">
          <Image src={service_one} width={1200} height={900} alt="logo" />
        </div>
      </div>

      {/* Service two */}
      <div className="flex bg-none lg:bg-[#282828] flex-col-reverse p:0 lg:p-10  lg:flex-row mt-8 lg:mt-12 gap-20  items-center">
        <div className="w-full">
          <h1
            className={`text-xl lg:text-2xl my-3 md:my-4 gap-2 text-secondary`}
          >
            /02 books
          </h1>
          <h1
            className={`text-2xl lg:text-[32px] my-6 uppercase font-bold md:my-4 gap-2 text-white`}
          >
            Do It 4 The Culture by Maurice “Mo” Sumter
          </h1>
          <p className="text-[18px]">
            Do It 4 The Culture is a short, practical guide about building a
            winning culture — whether in sports, business, or any team. Maurice
            Sumter shares lessons from his playing and coaching career, with
            simple exercises, conversation prompts, and mindset work to help
            leaders raise mental toughness and team standards. The book aims to
            give clear steps teams can follow to build consistency, discipline,
            and long-term success.
          </p>
          <button className="py-3  mt-6 underline flex gap-2 text-[18px] items-center rounded-lg text-secondary">
            View Details
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
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector"
                d="M4 12L20 12"
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
        <div className="w-full max-h-[560px] overflow-hidden rounded-sm">
          <Image src={service_two_img} width={1200} height={900} alt="logo" />
        </div>
      </div>
      {/* Service three */}
      <div className="flex flex-col-reverse p:0 lg:p-10  lg:flex-row mt-8 lg:mt-12 gap-20  items-center">
        <div className="w-full">
          <h1
            className={`text-xl lg:text-2xl my-3 md:my-4 gap-2 text-secondary`}
          >
            /03 consulting service
          </h1>
          <h1
            className={`text-2xl lg:text-[32px] my-6 uppercase font-bold md:my-4 gap-2 text-white`}
          >
            Train with Coach Mo
          </h1>
          <p className="text-[18px]">
            Maurice combines pro-level skill work, strength & recovery routines
            to help you move smarter and play harder. His sessions mix focused
            drills, injury-preventing rehab, and mental coaching to boost
            confidence and on-court results. Get a simple, personalized plan
            that speeds recovery, builds power, and keeps you game-ready.
          </p>
          <button className="py-3  mt-6 underline flex gap-2 text-[18px] items-center rounded-lg text-secondary">
            View Details
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
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector"
                d="M4 12L20 12"
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
        <div className="w-full max-h-[560px] overflow-hidden rounded-sm">
          <Image src={service_three_img} width={1200} height={900} alt="logo" />
        </div>
      </div>
      {/* Service four */}
      <div className="flex flex-col-reverse p:0 lg:p-10  lg:flex-row mt-8 lg:mt-12 gap-20  items-center">
        <div className="w-full">
          <h1
            className={`text-xl lg:text-2xl my-3 md:my-4 gap-2 text-secondary`}
          >
            /04 apparel
          </h1>
          <h1
            className={`text-2xl lg:text-[32px] my-6 uppercase font-bold md:my-6 gap-2 text-white`}
          >
            Movement Merch
          </h1>
          <p className="text-[18px]">
            Gear built for performance and comfort — designed with athletes in
            mind. Lightweight, breathable pieces that move with you during
            training, recovery, and game day. Shop durable, stylish essentials
            that support your training and reflect your commitment to the
            culture.
          </p>
          <button className="py-3  mt-8 underline flex gap-2 text-[18px] items-center rounded-lg text-secondary">
            View Details
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
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector"
                d="M4 12L20 12"
                stroke="rgb(255,128,54)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
        <div className="w-full max-h-[400px] overflow-hidden rounded-sm">
          <Image src={service_four_img} width={600} height={500} alt="logo" />
        </div>
      </div>
    </div>
  );
}
