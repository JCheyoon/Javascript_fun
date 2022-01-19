'use strict'

//callback hell example
//사용자의 데이터를 서버backend에서 받아오는 예제
//사용자를 로그인 하는  api, 로그인이 되면 success,문제있으면error

class UserStorage { 
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if (
        (id ==='cheyun' && password ==='1205') ||
        (id === 'coder' && password ==='1206')
      ){
        onSuccess(id);
      } else {
        onError(new Error('not found'))
      }
    },2000);

  }
  getRoles(user,onSuccess, onError) {
    setTimeout(() => {
      if (user === 'cheyun'){
        onSuccess({name:'cheyun',role:'admin'})
      }else {
        onError(new error('no access'))
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(user,
      (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
      },
      error => {
        console.log(error)})
  },
  error => {
    console.log(error)}
)
/*Javascript is synchronous,
* Execute the code block in order after hoisting.
* hoisting: var, function declaration.*/

// console.log('1')
// setTimeout(() => console.log('2'),1000)
// // setTimeout(function (){
// //   console.log('2')},1000)
// console.log('3')
// // 결과 1 - 3 - 2
//
// //synchronous callback 즉각 동기적
// function printImmediately(print){
//   print();
// }
// printImmediately(() => {
//   console.log('hello')})
// //Asynchronous callback  나중에,예측할수없는 비동기적
// function printWithDelay(print, timeout){
//   setTimeout(print,timeout)
// }
// printWithDelay(() =>console.log('async callback'),2000)

//  1- 3 - hello - 2 - async callback'
//=-----------------------------------------
//class constructor(RunEveryFiveTime) <- RunEveryFiveTime 이콜백함수
//카운터라는 class에는 자체적으로 카운터라는 변수가 있다.카운터는 이 class 를이용해서 object를 만드는순간 0으로 초기화가 된다
/*
class Counter {
  constructor(RunEveryFiveTime) {
    this.counter = 0;
    this.callback = RunEveryFiveTime
  }

  increase(){
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 ===0){
     this.callback && this.callback(this.counter)
    }
  }
}

function printSomething(num){
  console.log(`yo! ${num}`)
}
function alertNum(num){
  alert(`wow! ${num}`)
}

const coolCounter = new Counter(printSomething)

coolCounter.increase() //1
coolCounter.increase() //2
coolCounter.increase() //3
coolCounter.increase() //4
coolCounter.increase() // yo! 5

*/

