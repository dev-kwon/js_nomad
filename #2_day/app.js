/*
let 재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var 재선언 가능, 재할당 가능
*/

const a = 5;
const b = 2;
let myName = "nico";
const amIFat = true;
const amIFatTwo = "true";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello" + myName);

// myName = "nicolas";
// console.log("hello" + myName);

// console.log(amIFat);
// console.log(amIFatTwo);


// const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"];


// console.log(daysOfWeek);

// Add one more day to the Array
// daysOfWeek.push("aaa");

// console.log(daysOfWeek);

// pop
// daysOfWeek.pop();

// console.log(daysOfWeek);

// Do something with Object
// player
const player = {
    name : "nico",
    points : 10,
    fat: true,
};

console.log(player);
player.fat = false;
player.lastName = "potato"; 
console.log(player);