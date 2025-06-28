let url = "http://universities.hipolabs.com/search?name=";
let input = document.querySelector("input");

let btn = document.querySelector("button");
let ul = document.querySelector("#list");

btn.addEventListener("click", async () => {
  let country = input.value;
  console.log(country);
  let colleges = await getColleges(country);
  show(colleges);
  input.value = "";
});

function show(colleges) {
  ul.innerText = "";

  for (clg of colleges) {
    let li = document.createElement("li");
    li.innerText = clg.name;
    ul.append(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    console.log(error);
    return "No college found";
  }
}
