// console.log('multipleFive', multipleFive(5000))
// console.log('multipleTen', multipleTen(200))
const array = [1,2,3,4,5,6,7,8,9,10, 4, -5 , 5.4]


// array.reduce((a, v) => a + v, 0)
// array.reduce(function(a, v) {return a + v}, 0)


// function getConcoleDate() {
//   console.log('Date', new Date())
// }

// let myDate = getConcoleDate()
// console.log('myDate', myDate)


// const myNumber = multipleFive(12, 5 , 6 , 79)

// const emptyNumber = multipleFive()

// console.log('emptyNumber', emptyNumber)
// console.log('myNumber', myNumber)

// const multipleTen = function(num) {
//   console.log('num', num)
//   return num * 10
// }

// console.log('multipleTen', multipleTen(13))
// console.log('multipleTen', multipleTen(143))
// console.log('multipleTen', multipleTen(3))
// console.log('multipleTen', multipleTen(43))
// console.log('multipleTen', multipleTen(13))
// console.log('multipleTen', multipleTen(139))
// console.log('multipleTen', multipleTen(73))
// console.log('multipleTen', multipleTen(66))
// console.log('multipleTen', multipleTen(15))


// 
function multipleFive(num = 1) {
  return num * 5
}

const myArrowFunc = (num = 1) => {
  return num * 5
}

let arrowFunc = (num = 1) => num * 5

console.log('multipleFive', multipleFive(70))
console.log('myArrowFunc', myArrowFunc(70))

function summ(...args) {
  console.log('args', args)
  return args.reduce(function(acc, el) {
    return acc + el
  }, 0)
  // return args.reduce((acc, el) => acc + el, 0)
}

const summValues = summ(5, 7 ,78 ,54 ,49, 5 ,16)
console.log('summValues', summValues)
console.log('summ(5, 7 ,78 ,54 ,49, 5 ,16, 79, 47)', summ(5, 7 ,78 ,54 ,49, 5 ,16, 79, 47))
// let newArr = []
// function arrReduce(func, accumulator) {
//   let defaultValue = accumulator
//   let i = 0
//   defaultValue += func(accumulator, newArr[i])
// return defaultValue
// }

const deledeEl = delete array[4]
console.log('deledeEl', deledeEl)

function sayHello(age) {
  const myName = prompt('Enter your name pls.')
  let myGender = null
  do {
    let gender = prompt('Enter your gender pls. (male/female)')
    myGender = (gender === 'male' || gender === 'female') ? gender : null
  } while (!myGender)

  return `Hello ${myName}, I am ${age}, I am ${age > 25 ? 'mature' : 'young'} ${myGender === 'male' ? 'man' : 'girl'}`
}

window.sayHello = sayHello

// console.log('sayHello', sayHello(28))
// console.log('sayHello', sayHello(18))
// console.log('sayHello', sayHello(35))
// console.log('sayHello', sayHello(21))
