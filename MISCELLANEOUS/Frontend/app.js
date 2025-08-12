// BAD WAY TO CREATE STUDENTS OBJECT

// const student1 = {
//   Name: "adam",
//   age: 25,
//   marks: 96,
//   getmarks : function (){
//     return this.marks
//   }
// };

// const student2 = {
//   Name: "adam",
//   age: 25,
//   marks: 96,
//   getmarks : function (){
//     return this.marks
//   }
// };

// const student3 = {
//   Name: "adam",
//   age: 25,
//   marks: 96,
//   getmarks : function (){
//     return this.marks
//   }
// };

// INSTED WE CAN USE CONSTRUCTOR FUNCTION

// function Person(Name, age) {
//   // IN CONSTRUCTOR FUNCTION FUNCTION FIRST LETTER SHOULD BE IN CAPS AND DOSN'T RETURN ANYTHING
//   this.Name = Name;
//   this.age = age;
//   console.log(this);
// }

// Person.prototype.talk = function () { // function defined outside of the constructor
//   console.log(`Hey i am ${this.Name}`);
// };
// let p1 = new Person("Rahul", 27);
// let p2 = new Person("Birju", 77);
// let p3 = new Person("Satish", 87);
// p1.talk();
// p2.talk();
// p3.talk();

// MORE EFFIECEINT TO MAKE OBJECT THAN CONSTRUCTOR

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     // functions/ methods can be defined here only not outside the class.
//     console.log(`Hi i am ${this.name}`);
//   }
// }

// let p1 = new Person("Rahul" , 27);
// let p2 = new Person("Sunil" , 57);
// p1.talk()

//LEARNING INHERITANCE

// CREATING PERSON CLASS FOR INHERITANCE

class Person {
  constructor(name, age) {
    // common parameters from both student and teachers
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi! i am ${this.name}`);
  }
}

// STUDENT CLASS

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

let student1 = new Student("Rahul", 27, 98);

// TEACHER CLASS
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let teacher1 = new Teacher("Rahul", 27, ["`Phyics", "chemistry", "Maths"]);

// ANOTHER EXAMPLE OF INHERITANCE

// PARENT CLASS
class Mammals {
  constructor(Name) {
    this.Name = Name;
    this.type = "warm-blooded";
  }
  // p
  eat() {
    console.log("I can eat");
  }
}

// CHILD CLASS
class Dog extends Mammals {
  constructor(Name) {
    super(Name);
  }
  // Dog's internal method
  bark() {
    console.log("Bark!!");
  }
}

// CHILD CLASS
class Cat extends Mammals {
  constructor(Name) {
    super(Name);
  }
  // Cat's internal method
  meow() {
    console.log("Meow!!");
  }
}
let dog1 = new Dog("lusy"); // Dog {Name: 'lusy', type: 'warm-blooded'}
