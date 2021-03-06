"use strict";

// Array
//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["๐", "๐"];
console.log(fruits);

//3. Looping over an array

//for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach : api๋ฅผ ์ด์ฉํด์ callbackํจ์ ๋ฐ์์ด
fruits.forEach(function (fruit, index /*, array*/) {
  console.log(fruit, index); //๋ณดํต array๋ ๋ฐ์์ค์ง ์๋๋ค
});
//๐ 0
// ๐ 1

//forEach arrow function version
fruits.forEach((fruit) => console.log(fruit));

fruits.push("๐", "๐", "๐");
console.log(fruits);
fruits.splice(1);
//-----------------------
// //1. class declarations
// //class๋ ์ ์ํ๊ธฐ์ํด ๊ผญ ๋๋ฌธ์๋ก ์์ํด์ผํ๋ค
//
// class Person {
//   //์ฌ๋์ด๋ผ๋ ํด๋์ค๋ฅผ ๋ง๋ค๊ณ , constructor(์์ฑ์)๋ฅผ ์ด์ฉํด์ ๋์ค์ obj๋ฅผ ๋ง๋ค๋ ํ์ํ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌ
//   constructor(name, age) {
//     //fields
//     this.name = name;
//     this.age = age;
//     //์ ๋ฌ๋  ๋ฐ์ดํฐ๋ฅผ , class์ ์กด์ํ๋ ํ๋์ธ name ,age์ ๋ฐ๋ก ํ ๋น
//   }
//   //methods
//   speak() {
//     console.log(`${this.name}:hello!`);
//   }
// }
//
// const cheyun = new Person("cheyun", 27);
// console.log(cheyun.name); // cheyun
// console.log(cheyun.age); // 27
// cheyun.speak(); //cheyun : hello!
//
// //2. Getter & Setter
// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get age() {
//     return this._age;
//   }
//
//   set age(value) {
//     // if(value<0){
//     //   throw Error('age can not be negative')
//     // }
//     this._age = value < 0 ? 0 : value;
//   }
//   // _age ๋ฅผ ์ฐ๋ ์ด์ ๋ ๊ทธ๋ฅ age ๋ฅผ ์ฐ๋ฉด this.age = age ๊ฐ ์ธํฐ๋ฅผ ํธ์ถํด์ ๊ณ์ ๋ฌดํ๋ฐ๋ณต
// }
// const user1 = new User("peti", "kin", -1);
// console.log(user1.age);
