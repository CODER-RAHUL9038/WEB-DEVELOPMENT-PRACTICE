// Learning This

let student = {
    Name : "Rahul",
    Age : 25,
    eng : 67,
    math : 78,
    che : 70,
    getAvg(){ // IT is METHOD SHORTHAND 
        let avg = (this.eng + this.math + this.che)/3 // HERE THIS IS USED TO ACCESS THE PARAMETERS OF THE OBJECT STUDENT USED INSIDE THE METHOD.
        console.log(`${this.Name} got ${avg} as average marks`) 
    }
}

student.getAvg()


console.log(this) // this used globally will indicate to  window object which is the higher level object on a page or tab so alert.("Hello") and window.alert("Hello") are same just we don't type window. But everthing renders on window object itself.
window.alert("Hello")
alert("Hello")
