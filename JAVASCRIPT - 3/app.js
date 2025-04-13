// Array 
//  let students = ["Student1", "student2","student3"]
//  console.log(students)

// let nums = [2,4,6,8]
// console.log(nums[0])
// console.log(nums.length)
// console.log(typeof(nums ))

// STORING ARRAY

// let numbers = [25, 65 ,45 ,89]
// let students = ["Rahul", "Aman", "rohan"]
// let info = [25 ,67 ,98, "coding", "namchi",76]
// console.log(info)

// EMPTY ARRAY
// let info = ["coding", "namchi"];
// console.log(info)

// ARRAYS ARE MUTABLE
// let fruits = ["banana","mango","orange"]
// console.log(fruits) 
// fruits[0] = "apple"
// console.log(fruits)

// ARRAY METHODS

// let str = ["audi","bmw","mercedes"]
// // PUSH (PUSH TO END )
// str.push("ferrari")
// console.log(str)
// // POP (DELETE FROM END)
// str.pop()
// console.log(str)
// // UNSHIFT (PUSH TO FRONT)
// str.unshift("ferrari")
// console.log(str)
// // SHIFT (DELETE FROM FRONT)
// str.shift()
// console.log(str)


// let followers = ["a","b","c"];
// let blocked = followers.shift()
// console.log(followers)
// console.log(blocked)

// ADDING AND DELETING FROM TEH FRONT - 1ST APPROCH
// let start = [ "janauary","july","march","august"]
// start.shift()
// start.unshift("july")
// start[1] = "june"
// console.log(start)

// adding and deleting from the front end 2ND APPROACH

// let start = [ "janauary","july","march","august"]
// start.shift()
// start.shift()
// start.unshift("july")
// start.unshift("june")
// console.log(start)

// INDEX OF IN ARRAY
// let primary =[ "red", "red","yellow"]
// console.log(primary.indexOf("red")) // 0
// console.log(primary.indexOf("Red")) // -1
// console.log(primary.indexOf("yellow")) // 2


// INCLUDES IN ARRAY
// console.log(primary.includes("hELLO")) // false
// console.log(primary.includes("red")) // true

// CONCATENATION IN ARRAYS
//  let primary = [1 ,2 ,3]
//  let secondary = [4, 5, 6]
//  let final = primary.concat(secondary)
//  console.log(final)

// REVERSE IN ARRAY
// let primary = [1 ,2 ,3]
// primary.reverse();
// console.log(primary)

// ARRAY SLICING ( ORIGINAL ARRAY REMAINS SAME)
// let color = ["red","yellow","blue","orange","pink","white"]
// console.log(color.slice())
// console.log(color) //( ORIGINAL ARRAY REMAINS SAME)  
// console.log(color.slice(2,4))
// console.log(color) // ( ORIGINAL ARRAY REMAINS SAME)
// console.log(color.slice(1,5))
// console.log(color) // ( ORIGINAL ARRAY REMAINS SAME)
// console.log(color.slice(-2))
// console.log(color) // ( ORIGINAL ARRAY REMAINS SAME)
// console.log(color.slice(7))
// console.log(color) // ( ORIGINAL ARRAY REMAINS SAME)

// ARRAY SPLICING (MODIFIES THE ORIINAL ARRAY)
// let color = ["red","yellow","blue","orange","pink","white"]
// console.log(color.splice(4)) // works a slice and returns "pink","white" as return.
// console.log(color) // now oiginal color = ['red', 'yellow', 'blue', 'orange']
// console.log(color.splice(0,1)) // works a slice and returns red as return.
// console.log(color) // Now original color = ['yellow', 'blue', 'orange']
// console.log(color.splice(0, 1, "Mango", "apple")) // deleted yellow and returned it.
// console.log(color) //  now color =  ['Mango', 'apple', 'blue', 'orange']
// console.log(color.splice(0, 0, "NEW", )) // ADDED "NEW" BEFORE 0TH INDEX WITH NO DELETION 
// console.log(color) //COLOR = ['NEW', 'Mango', 'apple', 'blue', 'orange']

// SORT ARRAY
// let color = ["red", "yellow", "blue", "orange", "pink", "white"]
// console.log(color.sort()) // ['blue', 'orange', 'pink', 'red', 'white', 'yellow']

// ADDING AND DELETING ELEMENTS IN ARRAY USING SPLICE
// let start = ["january", "july", "march", "august"]
// start.splice(0,2, "july", "june");
// console.log(start)