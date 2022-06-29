import {
  AiFillGithub,
  AiTwotoneMail,
  AiTwotonePhone,
  AiFillCaretDown,
} from "react-icons/ai";
import { useState, useContext } from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import ProductContext from "../Context/productContext";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  const { currency, currencyType, topBtn, goTop } = useContext(ProductContext);
  const [currencyActive, setCurrencyActive] = useState(false);
  const currencyHandler = () => {
    setCurrencyActive(!currencyActive);
  };

  return (
    <footer className="md:h-[25rem] relative bottom-0 left-0 w-full h-auto flex justify-center cursor-default select-none bg-neutral-900 p-10 mt-2">
      <div
        onClick={goTop}
        className={
          topBtn
            ? "gotop fixed right-10 cursor-pointer bottom-10 h-14 flex items-center justify-center bg-black z-50 w-14 border-2"
            : "hidden"
        }
      >
        <AiOutlineArrowUp />
      </div>
      <div className="w-5/6">
        <div className="flex h-auto flex-col md:flex-row">
          <div className="flex-1 flex flex-col md:items-center gap-2">
            <div className="logo text-3xl border-neutral-700 border-2 h-16 w-16 flex items-center justify-center rounded-full hover:border-neutral-500 ease-in-out duration-200 font-bold">
              AS
            </div>
            <div className="-translate-x-16 w-fit">Active inShop</div>
          </div>
          <div className="flex-1 flex flex-col p-6 justify-center items-center text-neutral-500">
            <Link href="/">
              <button className="hover:text-neutral-100 ease-in-out duration-200 mb-2">
                Home
              </button>
            </Link>
            <Link href="/">
              <button className="hover:text-neutral-100 ease-in-out duration-200 mb-2">
                About
              </button>
            </Link>
            <Link href="/">
              <button className="hover:text-neutral-100 ease-in-out duration-200 mb-2">
                Terms of use
              </button>
            </Link>
            <Link href="/">
              <button className="hover:text-neutral-100 ease-in-out duration-200 mb-2">
                Shipping and returns
              </button>
            </Link>
            <Link href="/">
              <button className="hover:text-neutral-100 ease-in-out duration-200 mb-2">
                Privacy Policy
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center flex-col">
            <div
              onClick={currencyHandler}
              className="flex relative items-center cursor-pointer hover:scale-110 ease-in-out duration-200"
            >
              <div
                className={
                  currencyActive
                    ? "flex-col absolute top-10 h-fit gap-2 w-20 bg-black p-2 flex"
                    : "hidden"
                }
              >
                <button
                  onClick={(e) => {
                    currencyType(e);
                  }}
                  value="USD"
                  className="p-1 bg-neutral-900 hover:bg-neutral-700 ease-in-out duration-200"
                >
                  USD $
                </button>
                <button
                  onClick={(e) => {
                    currencyType(e);
                  }}
                  value="EUR"
                  className="p-1 bg-neutral-900 hover:bg-neutral-700 ease-in-out duration-200"
                >
                  EUR &euro;
                </button>
                <button
                  onClick={(e) => {
                    currencyType(e);
                  }}
                  value="RON"
                  className="p-1 bg-neutral-900 hover:bg-neutral-700 ease-in-out duration-200"
                >
                  RON L
                </button>
              </div>
              <FcCurrencyExchange className="text-4xl mb-2 text-neutral-700 hover:text-neutral-50 ease-in-out duration-200 cursor-pointer" />
              <AiFillCaretDown />
            </div>
            <Link href="/">
              <a>
                <AiFillGithub className="text-4xl mb-2 text-neutral-700 hover:text-neutral-50 ease-in-out duration-200 cursor-pointer" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiTwotoneMail className="text-4xl mb-2 text-neutral-700 hover:text-neutral-50 ease-in-out duration-200 cursor-pointer" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiTwotonePhone className="text-4xl mb-2 text-neutral-700 hover:text-neutral-50 ease-in-out duration-200 cursor-pointer" />
              </a>
            </Link>
          </div>
        </div>
        <div className="bords flex flex-col items-center md:flex-row md:items-start justify-between pt-2">
          <div className="left">&copy; Sebastian Pavel</div>
          <div className="right">Made with Next.js</div>
        </div>
      </div>
    </footer>
  );
}
