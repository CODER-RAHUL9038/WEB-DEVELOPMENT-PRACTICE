import "./Product.css";

function Product({ title, price }) {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}

export default Product;
