/*
let 재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var 재선언 가능, 재할당 가능
*/

const a = 5;
const b = 2;
let myName = "nico";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello" + myName);

myName = "nicolas";
console.log("hello" + myName);

