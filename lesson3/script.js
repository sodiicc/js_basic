// let greetings = 'Hello world !!!      '

// let objString = new String('My new sring !!!')
// console.log('objString', objString)


// let lists = document.querySelectorAll('ul')
// console.log('lists', lists)

// if (lists.length) {
//   let i
//   let smth = 'let'
//   var other = 'var'
//   console.log(`There are ${lists.length} elements`)
// }

// // console.log('smth', smth)
// console.log('other', other)

// console.log('other', other)
// var other = 'var'
// console.log('other', other)
// console.log('smth', smth)
// let smth = 'smth'

// let str = 'my string'
// console.log('str', str)

// let otherStr = str

// console.log('otherStr', otherStr)

// otherStr = 'bad string'

// console.log('otherStr', otherStr)

// console.log('str', str)

// const obj = {
//   name: 'Vasyl',
//   email: 'vas@gmail.com',
//   age: 25,
//   hasSon: true,
//   boats: null,
//   cars: {
//     toyota: 2,
//     volvo: 3
//   }
// }

// let nextObj = obj
// console.log('obj 111', obj)
// console.log('nextObj', nextObj)

// nextObj.age = 28

// nextObj.surname = 'Tsyva'

// console.log('obj 222', obj)

// const arr = [obj, 4, null, 'Vasyl']

// nextArr = arr

// nextArr[1] = 50

// console.log('arr', arr)

// const fruit = prompt('write some fruit')

// switch (fruit) {
//   case 'apple' :
//     console.log(`This is an ${fruit}`)
//     break
//   case fruit.startsWith('app') :
//     console.log(`This is an ${fruit}`)
//     break
//   case 'pear' :
//     console.log(`This is an ${fruit}`)
//     break
//   case 'kiwi' :
//     console.log(`This is an ${fruit}`)
//     break
//   case 'banana' :
//   case 'cherry' :
//     console.log(`This is an ${fruit}`)
//     break
//   default:
//     console.log('Unknown fruit')
// }

// if (fruit === 'apple') {
//   console.log(`This is an ${fruit}`)
// } else if (fruit === 'orange') {
//   console.log(`This is an ${fruit}`)
// } else {
//   console.log('Unknown fruit')
// }

// const promptName = prompt('Enter your name pls.')

// let nameCorrect =
//   promptName.length > 3
//   ? promptName
//   : promptName.length === 3
//   ? 'It`s extremally short name'
//   : 'Your name is incorrect'

// console.log('nameCorrect', nameCorrect)

// for (let i = 1; true; i++) {
//   if (i > 1_000_000_000) break
//   // console.log('i', i * 3)  
// }
// console.log('end')

let num = 5
// while(num < 400) {
//   num += 14
//   if (num > 50 && num < 300) break
//   console.log('num', `This is ${num}`)
// }

do {
  num += 14
  if (num > 50 && num < 300) continue
  console.log('num', `This is ${num}`)
} while (num < 400);

const myArr = [{name: 'Vasyl', email: 'sod@gmail.com'}, 4, null, 'Vasyl', false]

for (let i = 0; i < myArr.length; i++) {
  console.log(i, typeof myArr[i])
}


