import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useContext } from "react";
import ProductContext from "../Context/productContext";
import SmallCart from "./SmallCart";
import { useEffect } from "react";

export default function Header() {
  const { cartItems, wishList } = useContext(ProductContext);

  const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [stopScroll, setStopScroll] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const activeHandler = (e) => {
    setActive(e.target.value);
  };
  const navHandler = () => {
    setShowNav(!showNav);
  };
  const sHandler = () => {
    setStopScroll(!stopScroll);
    console.log(stopScroll);
  };
  useEffect(() => {
    if (stopScroll === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [stopScroll]);

  return (
    <header className="h-20 flex items-center justify-between px-10 bg-black select-none cursor-default z-30">
      <div className="left flex items-center gap-10">
        <div className="logo text-3xl border-neutral-700 border-2 h-16 w-16 flex items-center justify-center rounded-full hover:border-neutral-500 ease-in-out duration-200 font-bold">
          AS
        </div>
        <div
          onClick={
            showNav
              ? () => {
                  navHandler(), sHandler();
                }
              : null
          }
          className={
            showNav
              ? "absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-30 z-30"
              : "hidden md:flex"
          }
        >
          <AiOutlineClose
            onClick={navHandler}
            className={
              showNav
                ? "cursor-pointer absolute right-10 top-4 h-16 w-16 p-4 border-neutral-500 border-2 rounded-full z-40"
                : "hidden"
            }
          />
          <nav
            className={
              showNav
                ? "showNav movement translate-y-0 md:flex md:justify-between z-30"
                : "md:flex movement md:-translate-y-0 -translate-y-[100vw] md:justify-between md:w-[18rem] z-40"
            }
          >
            <Link href="/">
              <button
                onClick={(e) => {
                  activeHandler(e);
                }}
                value="home"
                className={
                  showNav
                    ? "s-link"
                    : active === "home"
                    ? "text-neutral-400 md:active md:link md:w-20 md:mr-4 flex justify-center md:h-20 items-center"
                    : "text-neutral-400 md:link md:w-20 md:mr-4 flex justify-center md:h-20 items-center"
                }
              >
                Home
              </button>
            </Link>
            <Link href="/products">
              <button
                onClick={(e) => {
                  activeHandler(e);
                }}
                value="products"
                className={
                  showNav
                    ? "s-link"
                    : active === "products"
                    ? "text-neutral-400 md:active md:link md:w-20 md:mr-4 flex justify-center md:h-20 items-center"
                    : "text-neutral-400 md:link md:w-20 md:mr-4 flex justify-center md:h-20 items-center"
                }
              >
                Products
              </button>
            </Link>
            <Link href="/">
              <button
                onClick={(e) => {
                  activeHandler(e);
                }}
                value="categories"
                className={
                  showNav
                    ? "s-link"
                    : active === "categories"
                    ? "text-neutral-400 md:active md:link md:w-20 md:mr-4 flex justify-center md:h-20 items-center"
                    : "text-neutral-400 md:link md:w-20 md:mr-4 flex justify-center md:h-20 items-center"
                }
              >
                About
              </button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="right flex items-center gap-4">
        <div className="relative">
          <MdShoppingCart
            onClick={
              cartItems.length === 0
                ? null
                : (e) => {
                    showCartHandler(), sHandler();
                  }
            }
            className="text-neutral-500 text-2xl hover:text-neutral-300 movement cursor-pointer hover:text-3xl"
          />
          <div
            className={
              cartItems.length === 0
                ? "-translate-y-100 opacity-0 movement absolute"
                : "flex absolute movement opacity-100 translate-Y-0 -top-5 -right-3 bg-red-600 h-6 w-6 rounded-full items-center justify-center "
            }
          >
            {!cartItems ? null : cartItems.length}
          </div>
        </div>
        <div
          onClick={() => {
            showCartHandler(), sHandler();
          }}
          className={
            showCart
              ? "absolute min-h-full overflow-hidden bg-black bg-opacity-50 z-30 w-full left-0 top-0"
              : "hidden"
          }
        ></div>
        <div
          className={
            showCart
              ? "absolute top-0 z-40 right-0 h-full py-10 px-4 md:px-10 md:w-[30rem] w-full bg-black heightos"
              : "hidden"
          }
        >
          <SmallCart showCartHandler={showCartHandler} sHandler={sHandler} />
        </div>
        <Link href="/wishlist">
          <div className="relative">
            <AiFillHeart
              className={
                wishList.length === 0
                  ? "text-neutral-500 text-xl hover:text-neutral-300 movement cursor-pointer hover:text-3xl"
                  : "text-red-600 text-2xl hover:text-3xl movement cursor-pointer hover:text-red-500"
              }
            />
            <p
              className={
                wishList.length === 0
                  ? "hidden"
                  : "absolute -top-5 -right-3 border-2 border-red-600 bg-neutral-800 w-6 h-6 rounded-full flex items-center justify-center"
              }
            >
              {wishList.length}
            </p>
          </div>
        </Link>
        <div className="md:hidden flex">
          <GiHamburgerMenu
            onClick={() => {
              navHandler(), sHandler();
            }}
            className="text-neutral-500 text-2xl hover:text-neutral-300 movement cursor-pointer hover:text-3xl"
          />
        </div>
      </div>
    </header>
  );
}
