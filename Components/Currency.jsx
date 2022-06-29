export default function Currency({ currency, product }) {
  return (
    <div>
      <div className="text-neutral-400">
        {currency === "USD"
          ? product.price
          : currency === "EUR"
          ? parseInt(product.price * 0.94)
          : parseInt(product.price * 5)}{" "}
        {currency}
      </div>
    </div>
  );
}
