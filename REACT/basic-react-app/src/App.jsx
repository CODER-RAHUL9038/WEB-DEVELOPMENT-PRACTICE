import "./App.css";
import MessageBox from "./MessageBox.jsx";
import ProductTab from "./ProductTab.jsx";

function App() {
  return (
    <>
      <MessageBox userName="Rahul" textColor="pink" />
      <MessageBox userName="Elon" textColor="blue " />
      <ProductTab />
    </>
  );
}

export default App;
