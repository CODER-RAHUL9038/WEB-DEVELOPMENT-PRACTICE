import Product from "./Product";

function ProductTab() {
  let options = ["Nice", "Durable", "Hardy"];
  let optionObj = {
    name: "Rahul",
    age: 25,
  };
  return (
    <>
      <Product title="Phone" price={300} />
      <Product title="Laptop" price={2999} />
      <Product title="IPhone" />
    </>
  );
}

export default ProductTab;
