"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/brand_logo.png";

export default function AppNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Recovery", href: "/" },
    { title: "Videos", href: "/" },
    { title: "Books", href: "/" },
    { title: "Consulting", href: "/" },
    { title: "Apparel", href: "/" },
  ];

  return (
    <nav className="fixed mx-auto w-full h-22 backdrop-blur-sm bg-white z-50">
      <div className="text-[18px] px-2 max-w-[1320px] mx-auto flex items-center justify-between my-3">
        {/* Brand */}
        <Link href="/" className="flex items-center pl-3">
          <Image src={logo} alt="Brand Logo" width={60} height={60} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 items-center">
          {navItems.map((item, index) => (
            <div key={item.title} className="flex items-center space-x-6">
              <Link
                href={item.href}
                className={`flex items-center uppercase gap-1 transition-colors ${
                  item.title === "Home"
                    ? "text-secondary font-medium"
                    : "text-[#171717] hover:text-text-secondary"
                }`}
              >
                {item.title}
              </Link>

              {/* Divider except last item */}
              {index < navItems.length - 1 && (
                <div className="w-[0.1px] h-7 bg-[#FFFFFF1A]" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex gap-3">
          <button className="p-3 rounded-full w-12 h-12 text-black border border-black">
            YT
          </button>
          <button className="p-3 rounded-full w-12 h-12 text-black border border-black">
            IG
          </button>
          <button className="p-3 rounded-full w-12 h-12 text-black border border-black">
            FB
          </button>
          <button className="lg:p-3 rounded-full w-12 h-12 text-black border border-black">
            TW
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (below 900px) */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#9aa0a5] px-4 py-4 flex flex-col space-y-4 text-white">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`hover:text-[#4CCEEE] text-black uppercase transition-colors ${
                item.title === "Home"
                  ? "text-secondary font-medium"
                  : "text-[#171717] hover:text-text-secondary"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          {/* Desktop Button */}
          <div className="flex gap-2">
            <button className="lg:p-3 rounded-full w-12 h-12 text-black border border-black">
              YT
            </button>
            <button className="lg:p-3 rounded-full w-12 h-12 text-black border border-black">
              IG
            </button>
            <button className="lg:p-3 rounded-full w-12 h-12 text-black border border-black">
              FB
            </button>
            <button className="lg:p-3 rounded-full w-12 h-12 text-black border border-black">
              TW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
