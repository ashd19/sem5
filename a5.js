/* ================= CONDITIONAL STATEMENTS ================= */
/* Conditional statements are like traffic signals: 
   - if light is green -> go
   - if light is yellow -> slow down
   - else (red) -> stop
*/

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a kid.");
}

// ternary made of three parts 
const presence = true
const present = presence ? "student is present" : "student is absent ";

/* ================= LOOPS ================= */
/* Loops are like washing multiple plates: 
   - Instead of washing one by one manually, 
   - we use a loop to repeat the same action for each plate.
*/

// FOR loop (we know how many times we want to run)
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Plate", i);
}

// WHILE loop (we keep going until a condition becomes false)
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}

// FOR...OF loop (good for arrays)
let fruits = ["Apple", "Banana", "Grapes"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

/* ================= FUNCTIONS ================= */
/* Functions are like cooking recipes: 
   - You write a recipe once, 
   - and you can reuse it every time you want to cook that dish.
*/

// Simple function
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Ashton"); // calling the function
greet("Teacher");

// Function with return value
function add(a, b) {
  return a + b;
}
let sum = add(5, 7);
console.log("Sum is:", sum);

/* ================= INHERITANCE ================= */
/* Inheritance is like a child inheriting qualities from parents. 
   - Parent has basic features, 
   - Child can use them AND add new features.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}

let myDog = new Dog("Bruno");
myDog.speak(); // Dog inherits "name" from Animal, but has its own "speak"

/* ================= ITERATORS ================= */
/* Iterator is like a remote control: 
   - You press "next" and get next channel (or next value)
*/

let myArray = [10, 20, 30];
let iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/* ================= GENERATORS ================= */
/* Generators are special functions that can pause and resume. 
   - Like a Netflix series: you can pause, do something else, then resume.
*/

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true (no more values)
