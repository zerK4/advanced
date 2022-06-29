import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import ProductContext from "../Context/productContext";
import { useContext } from "react";
import Link from "next/link";

export default function Show() {
  const { showFirst, addToWish, showSecond, showThird, getOne } =
    useContext(ProductContext);

  return (
    <div className="w-screen flex-wrap justify-center md:flex-nowrap flex gap-2">
      {!showFirst
        ? "Loading..."
        : showFirst.map((product) => (
            <Link
              key={product.id}
              href="/Product/[Product]"
              as={`/Product/${product.id}`}
            >
              <div
                onClick={(e) => {
                  getOne(product);
                }}
                className="hContainer relative overflow-hidden flex justify-center bg-[#470a77] md:h-full w-full md:w-4/6"
              >
                <div className="absolute z-10 hText cursor-pointer top-0 left-0 h-20 px-8 flex justify-center items-center bg-black text-2xl">
                  {product.title}
                </div>
                <div
                  onClick={(e) => {
                    addToWish(product);
                  }}
                  className="absolute cursor-pointer hHart z-10 bottom-0 right-0 h-20 px-8 flex items-center bg-black text-2xl lg:text-4xl"
                >
                  <AiFillHeart />
                </div>
                <div className="hImage h-4/6 w-4/6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    priority
                    width="100%"
                    height="100%"
                    layout="responsive"
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        <div className="relative">
          {!showSecond
            ? "Loading..."
            : showSecond.map((product) => (
                <Link
                  key={product.id}
                  href="/Product/[Product]"
                  as={`/Product/${product.id}`}
                >
                  <div
                    onClick={(e) => {
                      getOne(product);
                    }}
                    className="hContainer flex items-center overflow-hidden justify-center bg-[#e500a4] w-full h-full "
                    key={product.id}
                  >
                    <div className="absolute z-10 hText cursor-pointer top-0 left-0 h-20 px-8 flex justify-center items-center bg-black text-2xl">
                      {product.title}
                    </div>
                    <div
                      onClick={(e) => {
                        addToWish(product);
                      }}
                      className="absolute cursor-pointer hHart z-10 bottom-0 right-0 h-20 px-8 flex items-center bg-black text-2xl lg:text-4xl"
                    >
                      <AiFillHeart />
                    </div>
                    <div className="hImage h-full w-8/12">
                      {" "}
                      <Image
                        src={product.image}
                        alt={product.title}
                        priority
                        width="100%"
                        height="100%"
                        layout="responsive"
                        className="object-contain w-auto"
                      />
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        <div className="relative">
          {!showThird
            ? "Loading..."
            : showThird.map((product) => (
                <Link
                  key={product.id}
                  href="/Product/[Product]"
                  as={`/Product/${product.id}`}
                >
                  <div
                    onClick={(e) => {
                      getOne(product);
                    }}
                    className="hContainer flex items-center justify-center bg-[#7fdeff] w-full overflow-hidden"
                    key={product.id}
                  >
                    <div className="absolute z-10 hText cursor-pointer top-0 left-0 h-20 px-8 flex justify-center items-center bg-black text-2xl">
                      {product.title}
                    </div>
                    <div
                      onClick={(e) => {
                        addToWish(product);
                      }}
                      className="absolute cursor-pointer hHart z-10 bottom-0 right-0 h-20 px-8 flex items-center bg-black text-2xl lg:text-4xl"
                    >
                      <AiFillHeart />
                    </div>
                    <div className="hImage w-8/12">
                      {" "}
                      <Image
                        src={product.image}
                        alt={product.title}
                        priority
                        width="100%"
                        height="100%"
                        layout="responsive"
                        className="object-contain w-auto"
                      />
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
