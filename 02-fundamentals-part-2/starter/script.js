// console.log("Part 2 is now working");

// console.log("=== FUNCTION ===");

// function logger (){
//     console.log("My name is Jonas");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(5, 0));

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 1);
// console.log(juice1);
// console.log(juice2);
// console.log(juice3);

// //FUNCTION EXPRESSION
// const calcAge = function(birthYear){
//     return 2025 - birthYear;
// }

// console.log(calcAge(2005));
// console.log(calcAge(1991));

// function introduce(firstName, lastName, birthYear){
//     const age = calcAge(birthYear);
//     const introduction = `Hi, I'm ${firstName}${lastName}, and I'm ${age} years old.`;
//     return introduction;
// }
// console.log(introduce("Nash","Cabia", "2005"));

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;

//     if (retirement > 0){
//         return`${firstName} retires in ${retirement} years.`;
        
//     } else {
//         return `${firstName} has already retired.`;
        
//     }
// }

// console.log(yearsUntilRetirement(2005, "Nash"));

// const globalVar = "I am global";
// function testScope(){
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();

// // ## 🏆 Coding Challenge #1: Function Calculator

// // Time for your first real function challenge! You'll build a gymnastics team competition calculator using professional functions.

// // ### The Challenge

// // **Back to the two gymnastics teams, the Dolphins and the Koalas! There's a new gymnastics discipline.**

// // Each team competes 3 times, and the average of the 3 scores is calculated. A team only wins if it has at least **DOUBLE** the average score of the other team. Otherwise, no team wins!

// // **Your Tasks:**

// // 1. Create a function `calcAverage` to calculate the average of 3 scores
// // 2. Use the function to calculate the average for both teams
// // 3. Create a function `checkWinner` that determines the winner
// // 4. Use your functions to determine the winner for different test data

// // **Test Data 1:** Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49  
// // **Test Data 2:** Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// ////////////////////////////////////
// // Coding Challenge #1

// function calcAverage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;

// }
// function checkWinner(avgDolphins, avgKoalas) {
//       // Your code here
//   // Remember: team needs DOUBLE the score to win
//   // Use template literals for nice output
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
//     }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// //Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// //### Expected Output Examples

// // - "Dolphins win (60.0 vs. 56.0)"
// // - "Koalas win (84.7 vs. 60.0)"
// // - "No team wins! Dolphins: 50.5, Koalas: 55.2"
// ////////////////////////////////////

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grade = [85, 92, 78, 96, 88];
// console.log(grade);

// const friends = ['Nash', 'Daniel', 'Seva', 'Cabia'];
// console.log(friends);

// const mixed = ['Jonas', 27, true, friends];
// console.log(mixed);

// const years = new Array (1992, 1991, 1984, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// //change value in your index

// friends[1] ='Gabriel';
// console.log(friends);

// const firstName = 'Nash';
// const Nash = [firstName, 'Cabia'];

// console.log(Nash);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const ages = [calcAge(2005), calcAge(1991), calcAge(2010)];
// console.log(ages);

// //Array Methods

// const newLength = friends.push ('Steven');
// console.log(friends);
// console.log(newLength);
// const newLength2 = friends.push('Justine');
// console.log(friends); 

// friends.unshift('Jehu');
// console.log(friends);

// //ganto mag FO

// const popped = friends.pop();
// const popped2 = friends.pop();

// console.log(popped);
// console.log(popped2);
// console.log(friends);


// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);
// //Find element
// //indexOf
// console.log(friends.indexOf('Nash'));
// console.log(friends.indexOf('Cabia'));
// //includes()
// console.log(friends.includes('Nash'));
// console.log(friends.includes('Daniel'));

// //Array Iteration = Loops

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach(
//     function(friend, index){
//         console.log(`Friend ${index + 1}: $(friend)`);
//     }
// )
// friends.forEach(
//     (friend, index)=>{
//         console.log(`Friend ${index + 1}: $(friend)`);
//     }
// )

// const grades2 = [85,92,78,96,88,74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average = total /grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grades)=> {
//     if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed`);

// ### The Challenge

// **You're building a grade management system for a teacher.**

// **Your Tasks:**

// 1. Create an array of student grades: `[78, 85, 92, 67, 88, 95, 73, 82]`
// 2. Create a function `calculateAverage(grades)` that returns the average
// 3. Create a function `findHighestGrade(grades)` that returns the highest grade
// 4. Create a function `findLowestGrade(grades)` that returns the lowest grade
// 5. Create a function `countPassing(grades, passingGrade)` that counts students who passed
// 6. Use all your functions to create a complete grade report

// **Passing grade is 70.**

// **Expected output:**

// - Average: 82.5
// - Highest: 95
// - Lowest: 67
// - Passing students: 6 out of 8

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
//   // Your code here
//   // Hint: Sum all grades, divide by length
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highest) {
//             highest = grades[i];
//         }
//     }
//     return highest;
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//     let lowest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] < lowest) {
//             lowest = grades[i];
//         }
//     }
//     return lowest;
//   // Your code here
//   // Hint: Similar to highest, but use < comparison
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//     let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= passingGrade) {
//             count++;
//         }
//     }
//     return count;
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);


// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

//  console.log(jonas);

//  //Property Access Methods
//   console.log(jonas.lastName);
//   console.log(jonas['lastName']);
//   const nameKey = 'Name';
//   console.log(jonas['first' + nameKey]);

//   //modify property
//   jonas.age = 30;
//   jonas['job'] = 'programmer';
//   console.log(jonas);

//   jonas.location = 'Portugal';
//   jonas['twitter'] = '@jonasschmedtman';

//   jonas['linkedin'] = 'linkedin.com/in/jonasschmedtmann';
//   jonas.hasDriversLicense = true;
//   console.log(jonas);

//   const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// const student = {
//   firstName: "Alice",
//   grades: [85, 92, 78, 96, 88],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   }
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// const jonas1 = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // Method - function inside object
//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// }; 

// console.log(jonas1.calcAge(1991));

// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); // Shows the jonas object
//     return 2025 - this.birthYear; // Access own birthYear!
//   },
// };
// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear; // Store result as new property
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// }; 
// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age); // New property from calcAge  
// console.log(jonasAdvanced.getSummary());

////////////////////////////////////
// Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     // Calculate age and store as this.age
//     // Hint: Use new Date().getFullYear() for current year
//     // Your code here
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     // Add new friend object to this.friends array
//     // Return the new length of friends array
//     // Your code here
//     this.friends.push({ name: name, status: status });
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     // Filter friends array to count only active friends
//     // Hint: use this.friends.filter()
//     // Your code here
//     const activeFriends = this.friends.filter(friend => friend.status === "active");
//     return activeFriends.length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     // Switch this.isActive between true and false
//     // Return the new status
//     // Your code here
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     // Create a social media style profile summary
//     // Include: name, age, location, status, friend counts, interests
//     // Use template literals for nice formatting
//     // Your code here
//     const age = this.calcAge();
//     const activeFriendsCount = this.getActiveFriends();
//     const status = this.isActive ? "Active" : "Inactive";
 
//     return `${this.firstName} ${this.lastName}, Age: ${age}, Location: ${this.location}
//      Currently ${status} 
//     ${this.friends.length} total, ${activeFriendsCount} active
//      Interests: ${this.interests.join(", ")}
//      Connect with friends and share your adventures!`;
    

//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");

// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());


//query selector that uses css selectors

// const message = document.querySelector('.message');
// console.log(message);

// const button = document.querySelector('.btn');
// console.log(button);

// const heading = document.querySelector('h1');
// console.log(heading);

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// //getElementById
// const buttonByID = document.getElementById('btn');
// console.log(buttonByID);
// console.log(buttonByID === button);

// //querySelectorAll
// const allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

// const message = document.querySelector('.message');
// // text content
// console.log(message.textContent);
// message .textContent = 'Correct Number! 🎉' 
// console.log(message.textContent);

// //innerHTML

// message.innerHTML = '<strong>Correct Number! 🎉</strong>';
// //innerText
// console.log(message.innerText);


// //Input Element Values
// const input = document.querySelector('.guess');

// console.log(input.value);
// input.value = 'Default Text';
// console.log(input.value);

// const heading = document.querySelector('h1');

// heading.style.color = 'red';
// heading.style.backgroundColor = 'blue';
// heading.style.fontSize = '5rem';

// const button = document.querySelector('#btn');
// button.style.padding = '20px';
// button.style.borderRadius = '5px';
// button.style.backgroundColor = 'green';
// button.style.color = 'white';

//eventlistners = user interactions
const message = document.querySelector('.message');

const button = document.querySelector('#btn');
button.computedStyleMap.padding = '20px';
button.style.borderRadius = '5px';


button.addEventListener('click', function(){
  console.log('Button was clicked');
  message.textContent = "Button was clicked";
  message.style.color = 'blue';
});

let clickCount = 0;
button.addEventListener('click', function(){
  clickCount++;
  button.textContent = `Button clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 100%, 50%)`;
});
const input = document.querySelector('.guess');
const display = document.querySelector('.message');
input.addEventListener('input', function(){
  const userInput = input.value;
  display.textContent = `User typed: ${userInput}`;
  display.style.fontSize = `${userInput.length + 10}px`;
});

//keyboard events = responds to specific key

input.addEventListener('keydown', function(event){
console.log(`Key pressed "${event.key} `);

if(event.key ==='Enter' ){
  display.textContent = `You pressed Enter! Text was ${input.value}`;
  input.value = "";
}
});
