import { AiTwotoneFilter } from "react-icons/ai";

export default function Filter({ filter, categoryHandler, filterHandler }) {
  return (
    <div
      ref={filter}
      className="filters flex-col gap-10 overflow-hidden filter md:h-full items-start select-none text-xl font-semibold w-full px-10 ld:border-r-2 lg:border-neutral-700 md:pt-10 md:flex-1"
    >
      <div className="flex justify-between w-full items-center">
        <p className="text-neutral-600">Filters</p>
        <AiTwotoneFilter
          onClick={filterHandler}
          className="cursor-pointer md:hidden"
        />
      </div>
      <p>Brands</p>
      <div className="w-full flex justify-between items-center flex-col">
        <div className="flex justify-between flex-col gap-2 w-full items-center mb-4">
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="All"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            All
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="hatters"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Hatters
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="nnm"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            NNM
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="coaters"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Coaters
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="eljeanos"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            elJeanos
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="shoester"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Shoster
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="nike"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Nike
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="hatem"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Hatem
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="cote"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Cote
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="combers"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Combers
          </button>
        </div>
      </div>
      <p>Categories</p>
      <div className="w-full h-full flex justify-between items-center flex-col">
        <div className="flex justify-between flex-col gap-2 w-full items-center mb-4">
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="men"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Men
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="women"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Women
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="shoes"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Shoes
          </button>
          <button
            onClick={(e) => {
              categoryHandler(e), filterHandler();
            }}
            value="dress"
            className="w-full text-start hover:bg-neutral-900 py-2 pl-2 text-sm"
          >
            Dresses
          </button>
        </div>
      </div>
    </div>
  );
}
