import React from "react";
import Image from "next/image";
import about_us_img from "@/public/about_us_img.webp";

export default function AboutUs() {
  return (
    <div className="flex justify-between max-w-[1320px] mx-auto flex-col-reverse p-4  lg:flex-row-reverse gap-20  items-center py-15 lg:py-25">
      <div className="w-full">
        <div className="flex items-center gap-2 text-secondary text-xl lg:text-2xl">
          <div className="w-4 h-4 bg-text-secondary rounded-full"></div>
          <p>About us</p>
        </div>
        <h1
          className={`font-bold text-2xl md:text-[48px] my-3 md:my-4 uppercase gap-2 text-white`}
        >
          Your Trusted Partner{" "}
          <span>
            in <span className="text-text-secondary">sports recovery</span>
          </span>
        </h1>
        <p>
          Maurice “Mo” Sumter is a performance and sports-recovery coach,
          author, and veteran college basketball coach who helps athletes
          recover faster and reach their best.
        </p>
        <p className="my-4">
          {" "}
          He has worked at multiple college programs and has a strong background
          in player development and on-court performance. He also played
          professionally overseas, which gives him real-world experience with
          both training and recovery.{" "}
        </p>
        <p>
          Want to work with Maurice or learn more? Connect with him through the
          links
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <h2 className="text-secondary  underline text-xl lg:text-2xl font-medium">
            YOUTUBE
          </h2>
          <h2 className="text-secondary underline text-xl lg:text-2xl font-medium">
            INSTAGRAM
          </h2>
          <h2 className="text-secondary underline text-xl lg:text-2xl font-medium">
            FACEBOOK
          </h2>
          <h2 className="text-secondary underline text-xl lg:text-2xl font-medium">
            TWITTER
          </h2>
        </div>
      </div>
      <div className="w-full max-h-[560px] overflow-hidden rounded-sm">
        <Image src={about_us_img} width={1200} height={900} alt="logo" />
      </div>
    </div>
  );
}
