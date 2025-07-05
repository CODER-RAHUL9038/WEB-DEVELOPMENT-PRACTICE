let input = document.querySelector("textarea");
let output = document.querySelector("#output");

let maxChars = 100; // Set a maximum character limit
input.setAttribute("maxlength", maxChars); // Set the maxlength attribute on the textarea   
input.setAttribute("placeholder" , 'Type here... Max 100 characters'); // Set a placeholder text

input.addEventListener("input", function () {
let text = input.value;
let words = text.trim().split(/\s+/).filter(w => w.length > 0); // Split by whitespace and filter out empty strings
let charCount = text.length;          
let wordCount = words.length;

output.innerHTML = ` Word Count: ${wordCount} | Character Count: ${charCount} | Character Remaining: ${maxChars-charCount}`;
  output.style.display = "block";
});

