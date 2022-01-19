// promise is a Javascript object for asynchronous operation
//state: pending -> fulfilled or rejected
//producer vs consumer

//1. producer
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve,reject) => {
//doing some heavy work(network,read files)
  console.log("doing something..") //성공적으로 받아온 데이터를 resolve로 전달..
  setTimeout(() => {
    // resolve('cheyoon')
    reject(new Error('no network'))
  },2000)
})

//2.consumers: then, catch, finally
promise.then((value) => {
  console.log(value)
}) //promise 값이 정상적으로 수행이 잘 된다면 그럼 값을 또 받아올거야.
  //then 을 호출하면 프로미스가 리턴되고, 리턴된 프로미스에 catch 등록
.catch(error=> {
  console.log(error)
})
.finally(() => {
  console.log("finally")
}) //finally 성공하든 실패하든 어떤걸 마지막으로 실행하고 싶을때 씀

//3. promise chaining
const fetchNumber = new Promise((resolve,reject) => {
  setTimeout(() => {resolve(1),1000})
}); //1

fetchNumber
.then(num => num *2) //2
.then(num => num*3) //6
.then(num => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {resolve(num-1),1000})
  })
})
.then(num=> console.log(num)) //5

//4. Error Handling
const getHen = () =>
  new Promise((resolve,reject) => {
    setTimeout(() => {resolve('🐔'),1000})
  })
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => {reject(new Error(`error ! ${hen} =>🥚`)),1000})
  })
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => {resolve(`${egg} =>🍳`), 1000})
  })

getHen()
.then(getEgg)
.catch(error=>{return '🍎'})
.then(cook)
.then(console.log)
