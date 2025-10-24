import React from "react";

export default function Services() {
  return (
    <div className="max-w-[1320px] p-4 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-end mx-0 lg:mx-auto py-15 lg:py-25">
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
  );
}
