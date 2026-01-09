import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,990", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    ["80000 DPI", "5 Programmable Buttons"],
    ["Intuitive Surface", "Designed for Ipad Pro"],
    ["Designed for Ipad Pro", "Designed got Apple"],
    ["Wireless", "Optical Orientation"],
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
