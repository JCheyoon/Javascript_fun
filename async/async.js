"use strict"
//async & await
//clear style of using promise

//1. async
// -원래 promise 방식-
// function fetchUser(){
//   //do network request in 10 secs...
//   return new Promise((resolve, reject) => {
//     resolve('cheyun') })}

async function fetchUser(){
  //do network request in 10 secs...
  return 'cheyun';
}
const user = fetchUser()
user.then(console.log)
console.log(user)

//2. await 🌠
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms))

}
async function getApple(){
  await  delay(1000)
  return '🍎'
}
async function getBanana(){
  await  delay(2000)
  return "🍌"
}

//-기존방식-
// function pickFruits(){
//   return getApple()
//     .then(apple => {
//       return getBanana().then(banana => `${apple} + ${banana}`)
//     });
// }
// pickFruits().then(console.log)

//병렬적으로 기능 수행, 근데 코드가 ㄷㅓ럽다
async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise
  const banana = await bananaPromise
  return `${apple} + ${banana}`
}
pickFruits().then(console.log)

//3. useful Promise APIs
function pickAllFruits(){
  return Promise.all([getApple(),getBanana()]).then(fruits => fruits.join('+')
  )
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple(),getBanana()])
}
pickOnlyOne().then(console.log)
