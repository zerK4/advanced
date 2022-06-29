import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";

export default function Texter() {
  return (
    <div className="h-[20rem] px-10 flex-wrap bg-neutral-900 relative w-screen flex items-center justify-center">
      <div className="absolute top-10 left-0 flex flex-col -translate-x-10 gap-2">
        <Link href="https://facebook.com">
          <div className=" flex justify-end items-center hover:translate-x-10 movement hover:text-3xl text-xl cursor-pointer h-10 w-[5rem] bg-[#6a00f4] p-2">
            <AiFillFacebook className="" />
          </div>
        </Link>
        <Link href="https://instagram.com">
          <div className=" flex justify-end items-center hover:translate-x-10 movement hover:text-3xl text-xl cursor-pointer h-10 w-[5rem] bg-[#6a00f4] p-2">
            <AiFillInstagram className="" />
          </div>
        </Link>
        <Link href="https://twitter.com">
          <div className=" flex justify-end hover:text-3xl items-center hover:translate-x-10 movement text-xl h-10 cursor-pointer w-[5rem] bg-[#6a00f4] p-2">
            <AiFillTwitterSquare className="" />
          </div>
        </Link>
        <Link href="https://www.youtube.com">
          <div className=" flex justify-end hover:text-3xl items-center hover:translate-x-10 movement h-10 text-xl cursor-pointer w-[5rem] bg-[#6a00f4] p-2">
            <AiFillYoutube className="" />
          </div>
        </Link>
      </div>
      <div className="md:w-[10rem] w-2/3 text-4xl font-semibold">
        Duis maximus nibh vitae sapien
        <span className="text-pink-500">.</span>
      </div>
      <div className="md:w-[25rem] w-full">
        Nam suscipit enim in diam imperdiet auctor. Nulla porttitor, metus sed
        vehicula eleifend, diam nisi mattis nibh, a ultricies ipsum dolor quis
        tellus. Nulla ac tortor eu urna posuere varius. Cras ac nisi imperdiet,
        tincidunt sem sed, efficitur erat. Vestibulum semper arcu in enim
        bibendum lacinia.
      </div>
    </div>
  );
}
