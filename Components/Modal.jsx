export default function Modal({ wishNCart, modalToggle, removeFromWish }) {
  return (
    <div className="modal flex justify-center absolute h-full overscroll-none w-full bg-black bg-opacity-50 z-40 top-auto left-auto bottom-auto right-auto">
      <div className="h-[30rem] w-[25rem] bg-neutral-900 p-10 flex flex-col items-center gap-10">
        <h1 className="title text-xl">
          {wishNCart.title} exists in wish list too.
        </h1>
        <p className="text-neutral-500 select-none">
          Do you want to remove it from wish list as you are buying it now? :D{" "}
        </p>
        <img
          src={wishNCart.image}
          alt={wishNCart.title}
          className="w-36 h-36 object-contain"
        />
        <div className="buttons flex justify-between w-full">
          <button
            onClick={(e) => {
              removeFromWish(wishNCart), modalToggle();
            }}
            className="h-12 w-36 border-2 border-neutral-700 hover:border-neutral-400 movement"
          >
            Yes
          </button>
          <button
            onClick={modalToggle}
            className="h-12 w-36 border-2 border-neutral-700 hover:border-neutral-400 movement"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
