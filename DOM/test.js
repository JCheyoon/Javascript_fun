"use strict";

// Array
//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["🍎", "🍌"];
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

// forEach : api를 이용해서 callback함수 받아옴
fruits.forEach(function (fruit, index /*, array*/) {
  console.log(fruit, index); //보통 array는 받아오지 않는다
});
//🍎 0
// 🍌 1

//forEach arrow function version
fruits.forEach((fruit) => console.log(fruit));

fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1);
//-----------------------
// //1. class declarations
// //class는 정의하기위해 꼭 대문자로 시작해야한다
//
// class Person {
//   //사람이라는 클래스를 만들고, constructor(생성자)를 이용해서 나중에 obj를 만들떄 필요한데이터를 전달
//   constructor(name, age) {
//     //fields
//     this.name = name;
//     this.age = age;
//     //전달될 데이터를 , class에 존자하는 필드인 name ,age에 바로 할당
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
//   // _age 를 쓰는 이유는 그냥 age 를 쓰면 this.age = age 가 세터를 호출해서 계속 무한반복
// }
// const user1 = new User("peti", "kin", -1);
// console.log(user1.age);
