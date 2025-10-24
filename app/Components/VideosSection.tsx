"use client";
import React from "react";
import { Play } from "lucide-react";

interface VideoItemProps {
  src: string;
  title: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ src, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      {/* Title Overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black/50 text-white text-lg font-semibold px-4 py-2">
        {title}
      </div>

      {/* Video */}
      <video
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Play Icon on Hover (optional) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
        <Play className="text-white w-12 h-12" />
      </div>
    </div>
  );
};

export default function VideosSection() {
  return (
    <section className="max-w-[1320px] mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side (2 stacked videos) */}
        <div className="flex w-full  flex-col h-[530px]! overflow-hidden gap-6 flex-1">
          <div className="aspect-video h-[400px]">
            <VideoItem
              src="/videos/YouCut_20230525_201853820.mp4"
              title="Watch our 90-Day Challenge"
            />
          </div>
          <div className="aspect-video h-[400px]">
            <VideoItem
              src="/videos/YouCut_20230525_201920309.mp4"
              title="Stretch & Recovery"
            />
          </div>
        </div>

        {/* Right Side (1 big video) */}
        <div className="flex-1 w-full h-[900px]!">
          <div className="h-full aspect-9/16 lg:aspect-auto">
            <VideoItem
              src="/videos/YouCut_20230525_201920309.mp4"
              title="Our next training program update"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
