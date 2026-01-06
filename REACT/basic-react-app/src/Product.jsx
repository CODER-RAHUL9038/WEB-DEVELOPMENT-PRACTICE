import "./Product.css";

function Product({ title, price = 1, features, feature2 }) {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>{price}</p>
      {price > 2000 && <p>Discount of 5 %</p>}
    </div>
  );
}

export default Product;
