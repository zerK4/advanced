export default function Sizes({ size, sizeHandler, product }) {
  return (
    <div className="size w-full mt-10 justify-center md:justify-start flex gap-2">
      {product.category.cat === "shoes" ? (
        <div className="">
          <select
            onChange={(e) => {
              sizeHandler(e);
            }}
            className="h-10 w-20 bg-black border-2 outline-none"
          >
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </div>
      ) : product.category.cat === "hat" ? null : (
        <div className="flex gap-2">
          <button
            value="S"
            onClick={(e) => {
              sizeHandler(e);
            }}
            className={
              size === "S"
                ? "h-14 w-14 border-2 border-neutral-300 font-bold"
                : "h-14 w-14 border-2 border-neutral-600 hover:border-neutral-300 font-bold ease-in-out duration-200"
            }
          >
            S
          </button>
          <button
            value="M"
            onClick={(e) => {
              sizeHandler(e);
            }}
            className={
              size === "M"
                ? "h-14 w-14 border-2 border-neutral-300 font-bold"
                : "h-14 w-14 border-2 border-neutral-600 hover:border-neutral-300 font-bold ease-in-out duration-200"
            }
          >
            M
          </button>
          <button
            value="L"
            onClick={(e) => {
              sizeHandler(e);
            }}
            className={
              size === "L"
                ? "h-14 w-14 border-2 border-neutral-300 font-bold"
                : "h-14 w-14 border-2 border-neutral-600 hover:border-neutral-300 font-bold ease-in-out duration-200"
            }
          >
            L
          </button>
          <button
            value="XL"
            onClick={(e) => {
              sizeHandler(e);
            }}
            className={
              size === "XL"
                ? "h-14 w-14 border-2 border-neutral-300 font-bold"
                : "h-14 w-14 border-2 border-neutral-600 hover:border-neutral-300 font-bold ease-in-out duration-200"
            }
          >
            XL
          </button>
          <button
            value="XXL"
            onClick={(e) => {
              sizeHandler(e);
            }}
            className={
              size === "XXL"
                ? "h-14 w-14 border-2 border-neutral-300 font-bold"
                : "h-14 w-14 border-2 border-neutral-600 hover:border-neutral-300 font-bold ease-in-out duration-200"
            }
          >
            XXL
          </button>
        </div>
      )}
    </div>
  );
}
