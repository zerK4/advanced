import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import Currency from "./Currency";

export default function Featured({ product, currency, getOne, addToWish }) {
  return (
    <div className="flex flex-col bg-neutral-900 select-none relative mt-2 cursor-default h-[20rem]">
      <Link href="/Product/[Product]" as={`/Product/${product.id}`}>
        <div
          onClick={(e) => {
            getOne(product);
          }}
          className="relative w-[15rem] h-[15rem] md:w-[15rem] md:h-[15rem] lg:w-[15rem] hContainer lg:h-[15rem]"
        >
          <div
            className={
              product.stock === 0
                ? "absolute top-0 right-0 h-8 bg-red-600 w-1/2 z-20 flex items-center justify-center text-lg font-bold bg-opacity-80"
                : product.stock < 10
                ? "absolute top-0 right-0 h-8 bg-red-600 w-10 z-20 flex items-center justify-center text-lg font-bold bg-opacity-80"
                : "hidden"
            }
          >
            {product.stock === 0
              ? "Out Of Stock"
              : product.stock < 10
              ? product.stock
              : "hidden"}
          </div>
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
      <div
        onClick={(e) => {
          addToWish(product);
        }}
        className="absolute bottom-20 right-0 p-2 bg-black cursor-pointer z-30 hover:bg-red-600 movement"
      >
        <AiFillHeart />
      </div>
      <div className="border-t-2 border-neutral-700">
        <div className="flex text-neutral-600 justify-between p-2">
          <h1 className="font-bold">{product.brand}</h1>
          <Currency currency={currency} product={product} />
        </div>
      </div>
    </div>
  );
}
