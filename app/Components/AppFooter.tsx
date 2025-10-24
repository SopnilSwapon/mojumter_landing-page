import Image from "next/image";
import Link from "next/link";
import logo from "@/public/footer_logo.png";

export default function AppFooter() {
  return (
    <footer>
      <div className="max-w-[1320px] mx-auto py-12 lg:py-15 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* Brand Info */}
        <div className="col-span-2 w-full">
          <Image src={logo} height={80} width={80} alt="SMPL Money logo" />
          <p className="text-sm leading-relaxed pt-4 max-w-sm">
            We are committed to empowering you with the skills and confidence.
            ensuring you are always prepared for the next game.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <h2 className="text-secondary  underline text-sm lg:text-xl font-medium">
              YOUTUBE
            </h2>
            <h2 className="text-secondary underline text-sm lg:text-xl font-medium">
              INSTAGRAM
            </h2>
            <h2 className="text-secondary underline text-sm lg:text-xl font-medium">
              FACEBOOK
            </h2>
            <h2 className="text-secondary underline text-sm lg:text-xl font-medium">
              TWITTER
            </h2>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            NAVIGATION
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Our Services</Link>
            </li>
            <li>
              <Link href="#">Our Videos</Link>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">SUPPORT</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#">License</Link>
            </li>
            <li>
              <Link href="#">Term & conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            STAY CONNECTED
          </h3>

          <form className="">
            <input
              type="email"
              placeholder="Your Email Here"
              className=" bg-transparent px-3 py-3 border border-text-secondary rounded-sm text-sm text-gray-300 placeholder-gray-500 outline-none min-w-0"
            />
            <button className="px-18 lg:px-17 mt-2 block py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-base">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center pb-6 text-sm text-gray-500">
        Copyright © 2025 Maurice sumter
      </div>
    </footer>
  );
}
