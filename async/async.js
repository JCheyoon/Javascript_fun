"use strict"
//async & await
//clear style of using promise

//1. async
// -μλ promise λ°©μ-
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

//2. await π 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms))

}
async function getApple(){
  await  delay(1000)
  return 'π'
}
async function getBanana(){
  await  delay(2000)
  return "π"
}

//-κΈ°μ‘΄λ°©μ-
// function pickFruits(){
//   return getApple()
//     .then(apple => {
//       return getBanana().then(banana => `${apple} + ${banana}`)
//     });
// }
// pickFruits().then(console.log)

//λ³λ ¬μ μΌλ‘ κΈ°λ₯ μν, κ·Όλ° μ½λκ° γ·γλ½λ€
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
