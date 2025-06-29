// 🧩 1. Color Changer Button
// 🧠 Learn: addEventListener, style, Math.random()

// One button → On click → Page background color changes randomly.

// Bonus: Show the color code (like #ff0044) in text.

let body = document.querySelector("body");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  color = randomColor();
  body.style.backgroundColor = color
});

function randomColor() {
  let hexChars = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    let randIndex = Math.floor(Math.random() * 16);

    let randChar = hexChars[randIndex];
    color = color + randChar;
  }
  return color;
}
