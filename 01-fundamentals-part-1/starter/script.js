// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);


// console.log("=== VARIABLES ===");

// let firstName = "Nash";
// console.log(firstName);
// let age = 20;
// console.log(age);
// age = 30;
// console.log(age);

// const birthYear = 2005;

// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job  = "programmer";
// job = 'teacher';
// console.log(job);

//  age  = 30;
// console.log(age);

// let lastName = "Cabia";
// console.log(lastName);


// // kjshdohsl
// // sdfskjgdbskjfdkuds


// console.log("=== DATA TYPES ===");
// age = 25;
// console.log(age);
// console.log(typeof age);

// let username = "Nashuu";
// console.log(username);
// console.log(typeof username);

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Hello";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

////////////////////////////////////
// Basic Operators - Math operators
console.log("=== MATH OPERATORS ===");

const now = 2025;
const ageNash = now - 2005;
const ageRegi = now - 2006;
console.log(ageNash, ageRegi);

console.log(ageNash * 2, ageNash / 10, 2 ** 3);
console.log("Math operations:")
console.log("Addition:", 20-8);
console.log("SUbtraction;", 20-8);
console.log("Multiplication:", 4*3);
console.log("Division:", 20/2);
console.log("Exponentiation:", 2 ** 3);

const firstName = "Nash";
const lastName = "Cabia";

console.log(firstName + " " + lastName);

console.log("Hello" + "World"+"!");
console.log("I am " + ageNash + " years old.");

console.log("=== ASSIGNMENT OPERATORS ===");
let x = 10 + 15;
console.log("x starts as:", x);
x += 10
console.log("x starts as:", x);
X *= 4;
console.log("x starts as:", x);
x /= 2;
console.log("x starts as:", x);
x++;
console.log("x starts as:", x);


console.log("=== COMPARISON OPERATORS ===");
console.log(ageNash > ageRegi); // true
console.log(ageRegi >= 18); 
console.log(ageNash < 30);
console.log("Number comaprisons");
console.log(25 >20);
console.log(15 <10);
console.log(18 >= 18);
console.log(16 <=15);

const isFullAge = ageRegi >= 18;
console.log("Regi is adult:", isFullAge);

console.log("Complex comparison");
console.log(now - 2005> now - 2025);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageNash + ageRegi) / 2;
console.log(ageNash, ageRegi, averageAge);


////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
// 2. Create markHigherBMI variable
// 3. Log results to console
 
const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);
const markHigherBMI = bmiMark > bmiJohn;
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);

console.log("Is Mark's BMI higher than John's?", markHigherBMI);



