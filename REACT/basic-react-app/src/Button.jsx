export default function Button() {
  function printHello() {
    console.log("Hello Rahul");
  }
  function PrintBy() {
    console.log("Checking on para");
  }
  function mouseHover() {
    console.log("Hovered");
  }
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onClick={PrintBy}>Para</p>
      <h1 onMouseOver={mouseHover}>Hover me!</h1>
      <h2 onClick={(e) => console.log("React Clicked",e)}>React</h2>
    </div>
  );
}
