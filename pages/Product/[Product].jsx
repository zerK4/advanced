import ProductContext from "../../Context/productContext";
import { useContext } from "react";
import Sizes from "../../Components/Sizes";
import Head from "next/head";
import { motion } from "framer-motion";
import Currency from "../../Components/Currency";
import Modal from "../../Components/Modal";
import { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import Notification from "../../Components/Notification";
import Image from "next/dist/client/image";

export default function Product() {
  const {
    id,
    size,
    sizeHandler,
    currency,
    addToCart,
    checkProduct,
    wishNCart,
    modalToggle,
    modalOff,
    removeFromWish,
    goTop,
    addToWish,
    wishList,
    notificationHandler,
    notification,
  } = useContext(ProductContext);

  const existWish = wishList.find((wish) => wish.id === id);

  useEffect(() => {
    if (modalOff === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [modalOff]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex mt-4 justify-center"
    >
      {notification === true ? (
        <Notification toastTitle={id.title} toastMessage={"Added to cart!"} />
      ) : null}
      <div className={modalOff ? "flex" : "hidden"}>
        <Modal
          wishNCart={wishNCart}
          modalToggle={modalToggle}
          removeFromWish={removeFromWish}
        />
      </div>
      <Head>
        <title>{id.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {id.length === 0 ? (
        <div className="w-full h-[20rem] bg-neutral-900 flex items-center justify-center text-4xl mt-2">
          Please return to the front page
        </div>
      ) : (
        <div className="mainContainer h-full lg:h-[50rem] w-full flex flex-wrap select-none cursor-default lg:flex-nowrap justify-center">
          <div className="image border-2 border-neutral-900 w-1/2 m-2">
            <Image
              height="100%"
              width="100%"
              layout="responsive"
              src={id.image}
              alt={id.title}
              className="h-full w-[40rem] object-contain"
            />
          </div>
          <div className="content relative w-screen mx-2 md:w-[50rem] justify-between flex flex-col items-center p-10">
            <div className="w-full">
              <div className="w-full flex justify-center">
                <div
                  className={
                    id.stock === 0
                      ? "stock absolute top-0 h-10 w-full justify-center text-2xl flex items-center bg-red-600 bg-opacity-50"
                      : id.stock < 10
                      ? "stock absolute top-0 h-10 w-full justify-center text-2xl flex items-center bg-orange-400"
                      : null
                  }
                >
                  {id.stock === 0
                    ? "Out of Stock"
                    : id.stock < 10
                    ? `Hurry up, only ${id.stock} remaining now!`
                    : null}
                </div>
              </div>
              <div className="w-full flex justify-between items-center text-neutral-500">
                <div className="">
                  <h1 className="text-start text-4xl">{id.title}</h1>
                  <h1 className="text-xl text-neutral-400">{id.brand}</h1>
                  <AiFillHeart
                    onClick={(e) => {
                      addToWish(id);
                    }}
                    className={
                      existWish
                        ? "h-10 w-10 flex items-center justify-center border-2 px-1 text-red-600 cursor-pointer ease-in-out duration-200border-neutral-400"
                        : "h-10 w-10 flex items-center justify-center border-2 px-1 border-neutral-700 hover:text-red-600 cursor-pointer ease-in-out duration-200 hover:border-neutral-400"
                    }
                  />
                </div>
                <div className="">
                  <div className="text-end">{id.rating.rate}</div>
                  <div className="">{id.rating.count} Reviews</div>
                </div>
              </div>
              <Sizes size={size} sizeHandler={sizeHandler} product={id} />
              <div className="description w-full text-start mt-8">
                {id.description.map((desc) => (
                  <p key={id.id}>{desc.list}</p>
                ))}
              </div>
              <div className="text-2xl w-full h-14 flex items-center justify-between">
                <Currency currency={currency} product={id} />
                <div className="text-neutral-600 text-sm">
                  {id.stock} peices remaining
                </div>
              </div>
            </div>
            <div className="w-full">
              {id.stock === 0 ? null : (
                <button
                  onClick={(e) => {
                    checkProduct(id),
                      addToCart(id),
                      goTop(),
                      notificationHandler();
                  }}
                  className={
                    id.stock === 0
                      ? "h-20 w-full border-2 border-red-700 flex justify-center items-center text-2xl"
                      : "h-20 w-full border-2 border-neutral-700 flex justify-center items-center text-2xl hover:border-white ease-in-out duration-200"
                  }
                >
                  {id.stock === 0 ? "❌ Out of stock" : "Add to cart!"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
