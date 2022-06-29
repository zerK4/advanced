import ProductContext from "../Context/productContext";
import { useContext } from "react";
import Link from "next/link";
import Currency from "../Components/Currency";
import Image from "next/image";

export default function Checkout() {
  const { cartItems, currency, getOne } = useContext(ProductContext);
  if (cartItems.length === 0) {
    return (
      <div className="h-[25rem] w-full flex items-center justify-center text-4xl">
        Oops, nothing to checkout!
      </div>
    );
  } else {
    return (
      <div className="p-10 flex flex-col gap-4 justify-center select-none">
        <div className="flex flex-wrap gap-2 justify-center">
          {cartItems.map((product) => (
            <div className="" key={product.id}>
              <Link href="/Product/[Product]" as={`/Product/${product.id}`}>
                <div
                  onClick={(e) => {
                    getOne(product);
                  }}
                  className="relative w-[15rem] h-[15rem] hContainer"
                >
                  <div className="absolute hText top-0 left-0 p-2 bg-black cursor-pointer z-20">
                    {product.title}
                  </div>
                  <Image
                    src={product.image}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    className="object-contain hImage"
                    alt={product.title}
                    priority
                  />
                </div>
              </Link>
              <div className="border-t-2 pt-2 border-neutral-700">
                <div
                  className={
                    product.category.cat === "hat"
                      ? "hidden"
                      : "h-10 w-10 border-2 flex items-center justify-center border-neutral-700"
                  }
                >
                  {product.size}
                </div>
                <div className="flex text-neutral-600 justify-between p-2">
                  <h1 className="font-bold">{product.brand}</h1>
                  <Currency currency={currency} product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-4 w-full flex-col gap-6 items-center border-t-2 border-neutral-500 pt-4">
          <h1 className="text-2xl">Please fill out this details</h1>
          <form className="flex flex-col items-center gap-2">
            <div className="flex gap-2 flex-wrap justify-center">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="w-[20rem] md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                  placeholder="Please enter your name..."
                />
                <input
                  type="text"
                  className="w-full md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                  placeholder="Please enter your email..."
                />
                <input
                  type="text"
                  className="w-full md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                  placeholder="Please enter your phone..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="w-[20rem] md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                  placeholder="Please enter the name from the card..."
                />
                <input
                  type="text"
                  className="w-full md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                  placeholder="Please enter card Number..."
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-12 md:w-12 h-10 bg-black border-2 border-neutral-600 pl-2"
                    placeholder="MM"
                  />
                  <input
                    type="text"
                    className="w-12 md:w-12 h-10 bg-black border-2 border-neutral-600 pl-2"
                    placeholder="YY"
                  />
                  <input
                    type="text"
                    className="w-12 md:w-12 h-10 bg-black border-2 border-neutral-600 pl-2"
                    placeholder="CCV"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="w-[20rem] md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                placeholder="Country..."
              />
              <input
                type="text"
                className="w-full md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                placeholder="City..."
              />
              <input
                type="text"
                className="w-full md:w-[30rem] h-10 bg-black border-2 border-neutral-600 pl-2"
                placeholder="Street & number..."
              />
            </div>
            <button className="w-full border-2 h-12">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
