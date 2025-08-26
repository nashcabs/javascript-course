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
// console.log("=== MATH OPERATORS ===");

// const now = 2025;
// const ageNash = now - 2005;
// const ageRegi = now - 2006;
// console.log(ageNash, ageRegi);

// console.log(ageNash * 2, ageNash / 10, 2 ** 3);
// console.log("Math operations:")
// console.log("Addition:", 20-8);
// console.log("SUbtraction;", 20-8);
// console.log("Multiplication:", 4*3);
// console.log("Division:", 20/2);
// console.log("Exponentiation:", 2 ** 3);

// const firstName = "Nash";
// const lastName = "Cabia";

// console.log(firstName + " " + lastName);

// console.log("Hello" + "World"+"!");
// console.log("I am " + ageNash + " years old.");

// console.log("=== ASSIGNMENT OPERATORS ===");
// let x = 10 + 15;
// console.log("x starts as:", x);
// x += 10
// console.log("x starts as:", x);
// X *= 4;
// console.log("x starts as:", x);
// x /= 2;
// console.log("x starts as:", x);
// x++;
// console.log("x starts as:", x);


// console.log("=== COMPARISON OPERATORS ===");
// console.log(ageNash > ageRegi); // true
// console.log(ageRegi >= 18); 
// console.log(ageNash < 30);
// console.log("Number comaprisons");
// console.log(25 >20);
// console.log(15 <10);
// console.log(18 >= 18);
// console.log(16 <=15);

// const isFullAge = ageRegi >= 18;
// console.log("Regi is adult:", isFullAge);

// console.log("Complex comparison");
// console.log(now - 2005> now - 2025);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageNash + ageRegi) / 2;
// console.log(ageNash, ageRegi, averageAge);


// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs
// // 2. Create markHigherBMI variable
// // 3. Log results to console
 
// const BMIMARK = massMark / (heightMark ** 2);
// const BMIJOHN = massJohn / (heightJohn ** 2);
// const markHigherBMI = BMIMARK > BMIJOHN;
// console.log("Mark's BMI:", BMIMARK);
// console.log("John's BMI:", BMIJOHN);

// console.log("Is Mark's BMI higher than John's?", markHigherBMI);
////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew)

// console.log("I'm $(2037 - 1991) years old");
// console.log("Math works: $(2 + 3)");
// console.log("Comparisons too: $(5 > 3)");

// console.log(`Just a regular string`);

// console.log(`String
//   multiple
//   lines.`);

//   // Create variables for:
// const myName = "Nash"; // Your name
// const myAge = 20; // Your age
// const myJob = "Student"; // Your job/student status
// const currentYear = 2025;

// // Use template literals to create:
// // "Hi, I'm [name], a [age] year old [job]!"
// // Log it to the console

// const myIntro = `Hi I'm ${myName}, a ${myAge} year old ${myJob}!`;
// console.log(myIntro);

// // Create a template literal that:
// // 1. Calculates your birth year: currentYear - myAge
// // 2. Shows a calculation: 10 * 5
// // 3. Includes a comparison: myAge >= 18
// // Example: "Born in ${}, 10*5 = ${}, Adult: ${}"

// const myDetails = `Born in ${currentYear - myAge}, 10 * 5 = ${10 * 5}, Adult: ${myAge >= 18}`;
// console.log(myDetails);

// ////////////////////////////////////
// // Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// console.log(Boolean(0)); //falsy values, NaN, null, undefined, ''
// console.log(Boolean(undefined));
// console.log(Boolean("Nash"));//truthy values
// console.log(Boolean({}));//truthy values
// console.log(Boolean("")); //falsy values


// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }
// else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

////////////////////////////////////
// Type Conversion and Coercion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // Automatic Type Coercion

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = '1'+ 1;
// console.log(n);

// n = n - 1;
// console.log(n);

// //tyoe conversion = explicit/manual (recommend)
// //type conversion = implicit/automatic (javascript does itself)

// // Equality = Strict
// // const age = 18;
// // if (age === 18) console.log("You just became an adult(strict)");
// // if (age == 18) console.log("You just became an adult(loose)");

// // console.log('18'=== 18);
// // console.log('18' == 18);
// // console.log(18 === 18); 

// // console.log('0' == 0);
// // console.log(0 == false);
// // console.log('0' === false);
// // console.log('0' == undefined);
// // console.log('' == 0);
// // console.log(' ' == 0);

// // const favourite = Number(prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //   console.log("Cool! 23 is an amazing number!");
// // } else if (favourite === 7) {
// //   console.log("7 is also a cool number");
// // } else if (favourite === 9) {
// //   console.log("9 is also a cool number");
// // } else {
// //   console.log("Number is not 23 or 7 or 9");
// // }

// // if (favourite !== 23) console.log("Why not 23?");

// //Logical Operators

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);
// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// }else {
//   console.log("Someone else should drive...");
// }
// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive!");

// // More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// console.log("Age 20, permission true, experience false:",
//    (age >= 18 || hasPermission) && hasExperience
//   );
// // console.log("Age 16, permission false, experience true:", (16 >= 18

const age = 17;

const drink = age >=18 ? 'wine' : 'water';
console.log(drink);

let drink2 
if (age >= 18) {
  drink2 = 'wine';
}else {
  drink2 = 'water';
}

console.log(drink2);






