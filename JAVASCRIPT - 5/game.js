let max= Number(prompt("Enter the maximum range"))
const random = Math.floor(Math.random()*max) + 1
console.log(random)
let guess = Number(prompt("Guess the  Number"))
while(true){
    if (( guess == "quit") || (guess == null)){
        console.log("Quitting app");
        break;
    }
    else if (guess == random){
        console.log(`Congrats!! ${guess} is correct!`)
        break;
    }
    else {
        guess = Number(prompt(` ${guess} is Wrong Guess!! Try again`))
    }
}
