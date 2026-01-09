import Product from "./Product";

function ProductTab() {
  let styles = { display: "flex", flexWrap: "wrap", flex: "1" };
  return (
    <div style={styles}>
     
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zev thunder" idx={2} />
      <Product title="Dell Vostro" idx={3} />
    </div>
  );
}

export default ProductTab;
