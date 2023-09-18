// function getSumm(num) {
//   console.log('num', num)
//   return num < 2 ? num : getSumm(num - 1) + num
// }

// const summ = getSumm(10)
// console.log('summ', summ)


// function badSumm(num) {
//   function lessTwo(num) {
//     return num - 2
//   }
//   function lessOne(num) {
//     return num - 1 + lessTwo(num)
//   }
//   return num + lessOne(num)
// }



// function fibbanacci(num) {
//   return num <= 2 ? 1 : fibbanacci(num - 1) + fibbanacci(num - 2)
// }

// console.log('fibbanacci', fibbanacci(8))
// console.log('summ(10)', summ(10))

// function summ(num) {
//   let secondNum = 6
//   return num * secondNum
// }

// const arrowSumm = num => num * 41

// console.log('arrowSumm', arrowSumm(3))

// const setDocumentTitle = (newTitle = '') => {
//   if (newTitle.length > 3) {
//     order.title = newTitle
//     return true
//   }
//   console.log('Title length is to short')
//   return false
// }

// const setOwner = (newOwner = '') => {
//   console.log('newOwner.split(\' \').length', newOwner.split(' ').length)
//   if (
//     newOwner.toLowerCase().includes('bastard') ||
//     newOwner.length < 4 ||
//     newOwner.split(' ').length !== 2
//   ) {
//     console.log('Pls enter correct name')
//     return false
//   }
//   order.owner = newOwner
//   return true
// }

// const order = {
//   title: 'My Order',
//   id: '95195165s61s61sgg',
//   created: new Date('12/04/2019'),
//   owner: 'Vasyl Tsyvinskyi',
//   setDocumentTitle,
//   setOwner
// }

// const productFive = (num, callback) => {
//   const result = num * 5
//   return callback(result)
// }

// const myCallback = num => console.log(num)

// productFive(4, myCallback)

// Функція, що самовизивається (IIFE)

(function(arg) {
  console.log('arg', arg)
  console.log('Hi, i am (IIFE)')
})('i am arg')
