import Image from "next/image";
import ProductContext from "../Context/productContext";
import { useContext } from "react";
import Link from "next/link";
import Currency from "./Currency";

export default function AutoSlider() {
  const { showMany, getOne, currency } = useContext(ProductContext);
  if (!showMany) {
    return (
      <div className="w-screen flex flex-wrap overflow-hiddenm md:flex-nowrap justify-evenly gap-2 px-4 h-auto md:h-[20rem]">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="w-screen flex flex-wrap overflow-hiddenm md:flex-nowrap justify-evenly gap-2 px-4 h-auto md:h-[20rem]">
        {showMany.map((product) => (
          <Link
            key={product.id}
            href="/Product/[Product]"
            as={`/Product/${product.id}`}
          >
            <div
              onClick={(e) => {
                getOne(product);
              }}
              key={product.id}
              className="md:w-1/3 hContainer w-full h-[20rem] flex items-center bg-[#5158bb]"
            >
              <div className="h-full w-3/4 flex flex-col justify-center">
                <div className="">
                  <Image
                    src={product.image}
                    height="90%"
                    alt={product.title}
                    width="100%"
                    layout="responsive"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="h-full flex flex-col justify-between pt-32 md:pt-16 px-2 bg-black w-1/3">
                <h1 className="rotate-90 text-2xl sm:text-xl lg:text-4xl">
                  {product.title}
                </h1>
                <h1 className="text-xl hPrice h-18 flex items-center w-1/2 justify-center lg:text-4xl">
                  <Currency currency={currency} product={product} />
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
