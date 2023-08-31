let myName = "Vasyl"

let greetings = `Hello ${myName} programmer exp ${5 + 8}`
// greetings = `Hello` + ' ' + myName
console.log(greetings)


console.log('2 ** 4', 2 ** 4)
console.log('19 % 3', 19 % 3)
console.log('20 % 3', 20 % 3)
console.log('21 % 3', 21 % 3)

console.log('5 == \'5\'', 5 == '5')
console.log('5 === \'5\'', 5 === '5')

console.log("null == undefined", null == undefined)

// // FALSE caases
// console.log(!!false)
// console.log(!!0)
// console.log(!!undefined)
// console.log(!!null)
// console.log(!!'')
// console.log(!!NaN)

// //All other cases TRUE
// console.log(!!'0')
// console.log(!!555)
// console.log(!!'hkkyf')
// console.log(!!{})
// console.log(!![])

let num = 10
console.log('++num', ++num)
console.log('num++', num++)
console.log('num', num)


console.log('myName.length', myName.length)

if (myName.length >= 5 && myName.length <= 9) {
  console.log('Your name is OK !')
} else if (myName.length > 9) {
  alert('Your name is too long !!!')
} else {
  console.log('Your name is too short !')
}

// if(Умова) {
//   Інструкція вивонання
// } else {
//   Інструкція вивонання якщо умова видає фальшиве значання (false)
// }



// FIRST ALGOTITHM

const applePrice = 27
const orangePrice = 62
const kiwiPrice = 105

let appleCount = 0
let orangeCount = 0
let kiwiCount = 0

const needApples = confirm(`Do you wanna buy apples for price ${applePrice} UAH ?`)
if (needApples) {
  appleCount = Number(prompt('How many apples do you want to buy?'))
}

const needOranges = confirm(`Do you wanna buy oranges for ${orangePrice} UAH ?`)
if (needOranges) {
  orangeCount = Number(prompt('How many oranges do you want to buy?'))
}

const needKiwis = confirm(`Do you wanna buy Kiwis for ${kiwiPrice} UAH ?`)
if (needKiwis) {
  kiwiCount = Number(prompt('How many kiwis do you want to buy?'))
}

const price = appleCount * applePrice + orangeCount * orangePrice + kiwiCount * kiwiPrice
// console.log( `${myName} want's to buy fruits for total: ${price} UAH`)

const totalTag = document.querySelector('.total')
totalTag.innerHTML = `${myName} want's to buy fruits for total: ${price} UAH`
