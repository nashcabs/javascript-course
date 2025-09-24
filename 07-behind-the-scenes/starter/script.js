'use strict';

// function first() {
//   second();
// }
// function second() {
//   console.log('In second');
// }
// first();

// function alpha() {
//   console.log('alpha:start');
//   console.log('alpha:end');
// }
// function beta() {
//   console.log('beta');
// }

// alpha();

// const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, functionVar);
// }

// demoScope();

// const name = 'GlobalName';

// function a() {
//   const name = 'FunctionName';
//   function b() {
//     console.log(name); // 'FunctionName' via scope chain
//   }
//   b();
// }

// a();
console.log(varX); // 1
// console.log(letX); // 2
// console.log(constX);//3

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl(2, 3)); // 5

function addDecl(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
