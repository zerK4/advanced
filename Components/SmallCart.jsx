import ProductContext from "../Context/productContext";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/dist/client/image";

export default function SmallCart({ showCartHandler, sHandler }) {
  const { cartItems, addToCart, removeFromCart, currency } =
    useContext(ProductContext);
  const itemsPrice =
    currency === "EURO"
      ? parseInt(cartItems.reduce((a, c) => a + c.price * c.qty, 0) * 0.94)
      : currency === "RON"
      ? parseInt(cartItems.reduce((a, c) => a + c.price * c.qty, 0) * 5)
      : cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice =
    currency === "EURO"
      ? parseInt(itemsPrice * 0.2)
      : currency === "RON"
      ? parseInt(itemsPrice * 0.14)
      : itemsPrice + taxPrice;
  const totalPrice =
    currency === "EURO"
      ? itemsPrice + taxPrice
      : currency === "RON"
      ? itemsPrice + taxPrice
      : itemsPrice + taxPrice;
  return (
    <div className="relative flex heightos">
      <AiOutlineClose
        onClick={() => {
          showCartHandler(), sHandler();
        }}
        className="absolute top-0 right-0 text-4xl border-2 border-neutral-700 hover:border-white movement cursor-pointer p-2"
      />
      {cartItems.length === 0 ? (
        <div className=" h-full w-full flex items-center justify-center flex-col text-3xl">
          Your cart is empty!
          <p className="text-lg text-neutral-600">Drop something in here! :)</p>
        </div>
      ) : (
        <div className="w-full flex flex-col sm:px-20 md:px-0 gap-2">
          <h1 className="text-3xl">Your Cart</h1>
          <div className="overflow-y-auto ">
            {cartItems.map((product) => (
              <div
                className="prod flex border-b-2 border-neutral-900 py-2 justify-between"
                key={product.id}
              >
                <div className="left flex-1 flex flex-col gap-4">
                  <div className="top text-2xl text-neutral-400">
                    {product.title}
                  </div>
                  <div className="buttons w-full justify-between gap-2 flex items-center">
                    <button
                      onClick={(e) => {
                        removeFromCart(product);
                      }}
                      className="w-16 h-10 border-neutral-700 border-2 hover:border-white movement"
                    >
                      -
                    </button>
                    <button className="h-10 border-2 border-neutral-700 w-full">
                      {product.qty}
                    </button>
                    <button
                      onClick={(e) => {
                        product.stock === 0 ? null : addToCart(product);
                      }}
                      className="w-16 h-10 border-neutral-700 border-2 hover:border-white movement"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="price text-neutral-400 underline text-xl">
                      {currency === "USD"
                        ? product.price * product.qty
                        : currency === "EUR"
                        ? parseInt(product.price * 0.94) * product.qty
                        : parseInt(product.price * 5) * product.qty}{" "}
                      {currency}
                    </div>
                    <div
                      className={
                        product.category.cat === "hat"
                          ? "hidden"
                          : "size h-10 w-10 border-2 border-neutral-600 flex items-center justify-center"
                      }
                    >
                      {product.size}
                    </div>
                  </div>
                </div>
                <div className="right w-40">
                  <Image
                    height="100%"
                    width="100%"
                    layout="responsive"
                    src={product.image}
                    alt={product.title}
                    className="h-[10rem] w-[10rem] object-contain border-2 border-neutral-900"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-col">
            <div className="total">
              <div className="">
                Items Price: {itemsPrice} {currency}
              </div>
              <div className="">
                Tax Price: {taxPrice} {currency}
              </div>
              <div className="">
                Total: {totalPrice} {currency}
              </div>
            </div>
            <Link href="/checkout">
              <button
                onClick={() => {
                  showCartHandler(), sHandler();
                }}
                className="w-full h-14 border-2 border-neutral-600 hover:border-white movement"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
