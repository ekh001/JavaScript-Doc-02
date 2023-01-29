//==========Exercise #1 ===========//
/*
Write a function that parses through the below object 
and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell", // (agreed)
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
Human = () =>{
    console.log(person3);
    // console.log(`Person 3 likes: \n${person3['pizza']} pizza, \n${person3['tacos']} in the tacos department, \n${person3['burgers']}, \nand ${person3['ice_cream']} ice cream.` )
    // ^^This almost works, but need to figure out printing the dictionary within the string
}
console.log(Human(person3))

// -------------------------------------------------------------------

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

// TO DO: Use an arrow to create the printInfo method
    this.printInfo = (fingers = 0, hobby) => {
        console.log(`This person is called ${this.name}, they are ${this.age} years old, they have ${fingers} fingers, and they enjoy ${hobby}.`);
        return '';
    };
// Create another arrow function for the addAge method that takes 
// a single parameter
// Adding to the age 
// I solemnly swear I will remember how to use arrow notation
    this.increaseAge = (i) => {
        // wow...
        return (this.age + i)
    }
}
let new_person = new Person('Pedro Pascal', 45)
let new_person2 = new Person('Christopher Wade', 34)
console.log(new_person2.printInfo(10, 'playing DDR and drinking Jones soda'))
console.log(new_person.printInfo(10, 'acting in live action video game adaptations'))
console.log(new_person.increaseAge(3))


// -------------------------------------------------------------------

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// As it turns out, Brandon does, in fact, use a lot of arrow notation. My bad
const isBigWord = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            resolve("Big word")
        } else {
            reject("Small Number")
        }
    })
}
// Basic:
console.log(isBigWord("supercalifragilisticexpiallidocious"))
// Looks cleaner:
isBigWord('big')
.then( (result) => {
    console.log("Result: " + result)
})
.catch( (error) => {
    console.log("Result: " + error)
})
console.log(isBigWord("big"))

// -------------------------------------------------------------------

// Codewars:
// 1. Completed:
// You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.
otherAngle = (f, g) => {
    a = (180 - f - g);
    return a
    }
var f = 75
var g = 15
console.log(otherAngle(f,g))

// 2. Uncompleted:
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
move = (position, roll) => {
    x = (roll * 2);
    y = position;
    return x + y;
}
console.log(move(3, 6))

// ------------------------------------------------------------------
// ****All First Doc exercises re-written in arrow format to avoid Donovan's wrath****:

//==================Exercise #1 ==========//
let dog_string = "Hello John, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
findWords = () => {
    for (let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])) {
            return `Matched ${dog_names[i]} `
        } else return `Not a match`
    }
}
console.log(findWords(dog_string))


//============Exercise #2 ============//
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

replaceEvens = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
}
console.log(replaceEvens(arr))
// Still not forgetting about that argument inclusion ><

// --------------------Codewars:
// 1. Even or odd:
evenOrOdd = (x) => {
    if (x % 2 == 0){
      return "Even";
  } else {
      return "Odd";
  }
}
console.log(evenOrOdd(6))

// 2. Multiply debug: (Still doesn't count, did it anyway)
multiply = (a, b) =>{
    return a * b
  }
console.log(multiply(2,4))

// 3. Find the sum of positive integers in an array
positiveSum = (new_arr) => {
    let sum = 0;
    for(i =0; i < new_arr.length, i++;) {
        if (new_arr[i] > 0) {
            sum += new_arr[i]
        }
    }
    return sum
}
let new_arr = [1, 2, 5, -4, 9]
console.log(positiveSum(new_arr))

// 4. Take a positive and make it negative 
makeNegative = (num) => {
    if(num > 0){
      return num * -1;
    }else {
      return num;
    }
  }
  console.log(makeNegative(7))

// 5. Reverse a string
solution = (str) => {
    return str = str.split('').reverse().join('');     
    }
let str = "Hello world"
console.log(solution(str))