import "./Product.css";

function Product({ title, price = 1, features, feature2 }) {
  let isDiscount = price > 2000;
  let style = { backgroundColor: isDiscount ? "blue" : null };
  return (
    <div className="Product" style={style}>
      <h2>{title}</h2>
      <p>{price}</p>
      {isDiscount && <p>Discount of 5 %</p>}
    </div>
  );
}

export default Product;
