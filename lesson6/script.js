
// console.log('declareVariable', declareVariable)

// console.log('myDeclareFunc', myDeclareFunc())
// var declareVariable = 'My Var'

// function myDeclareFunc() {
//   console.log('My func')
//   return 'here'
// }

// let myExpressionVar = 'My Let'

// function mutateObj(obj) {
//   const firstKey = Object.keys(obj)[0]
//   const secondKey = Object.keys(obj)[1]
//   console.log('secondKey', secondKey)
//   delete obj[firstKey]
//   return obj
// }

// const person = {
//   name: 'Vasyl',
//   age: 25,
//   isTeacher: true
// }

// console.log('mutateObj(person)', mutateObj(person))

// function getName(person) {
//   person.name = person.name.toUpperCase()

//   return `Hello ${person.name}`
// }

// const person = {
//   name: 'Vasyl',
//   age: 25,
//   isTeacher: true
// }

// console.log('getName(person)', getName(person))

// function getName(personName) {
//   personName = personName.toUpperCase()

//   return `Hello ${personName}`
// }

// const person = {
//   name: 'Vasyl',
//   age: 25,
//   isTeacher: true,
//   cars: {
//     name: 'volvo',
//     count: 1,
//     colors: [
//       'white'
//     ]
//   }
// }

// const personB = structuredClone(person)

// // const personB = JSON.parse(JSON.stringify(person))
// personB.gender = 'male'
// personB.cars.colors[1] = 'black'
// console.log('personB', personB)
// console.log('person', person)



// console.log('getName(person)', getName(person.name))

// function sumAll() {
//   console.log('args', arguments)
//   Array.from(arguments).forEach(el => {
//     console.log('el', el)    
//   })

// }

// const sumAll = (...args) => {
//   console.log('args', args)
// }

// sumAll(3, 5, 7, 4, 33)

// function setTitle(titleText) {
//   document.title = titleText
// }

// function multipleTen(num) {
//   return num * 10
// }

// setTitle('My title')

// const myNum = multipleTen(46)
// console.log('myNum', myNum)

// const person = {
//   name: 'Vasyl',
//   age: 25,
//   isTeacher: true,
//   cars: {
//     name: 'volvo',
//     count: 1,
//     colors: [
//       'white'
//     ]
//   }
// }



// function setName(personName = 'Bob'){

//   function getAge() {
//     let ageText = `${personName} is ${person.age}`
//     if (true) {
//       const thisIsTrue = true
//     }
//     // console.log('thisIsTrue', thisIsTrue)
//     return ageText
//   }

//   const age = getAge()
//   console.log('age', age)
//   // console.log('ageText', ageText)
//   const personB = structuredClone(person)
//   personB.name = personName
//   console.log('personB', personB)
//   return personB
// }

// function getName() {
//   setName('Mark')
//   // return personB.name
// }

// console.log('getName', getName())


// if (5 === 5) {
//   let isFive = 'This is 5'
// }

// console.log('isFive', isFive)

// function myClosures() {
//   function getAge() {
//     let ageText = `${personName} is ${person.age}`
//     return ageText
//   }

//   const age = getAge()
//   console.log('age', age)
//   // console.log('ageText', ageText)
//   const personB = structuredClone(person)
//   personB.name = personName
//   console.log('personB', personB)
//   return personB
// }

// function myMethod() {
//   function getAge() {
//     let ageText = `${personName} is ${person.age}`
//     return ageText
//   }

//   const age = getAge()
//   console.log('age', age)
//   // console.log('ageText', ageText)
//   const personB = structuredClone(person)
//   personB.name = personName
//   console.log('personB', personB)
//   return personB
// }

// High Order Function
function multiple(a) {
  console.log('a', a)
  return function num(b) {
    console.log('b', b)
    return a * b
  }
}

console.log('multiple(20)(6)', multiple(15)(7))

const multFive = multiple(5)
const multThree = multiple(3)


console.log('multFive(120)', multFive(120))
console.log('multFive(17)', multFive(17))
console.log('multThree(120)', multThree(120))
console.log('multThree(17)', multThree(17))

const voiceLetters = ['a', 'e', 'i', 'o', 'u', 'y']

// function hasPerson(personName) {

//   function hasItem(itemName) {
//     return `${personName} has ${voiceLetters.includes(itemName[0].toLowerCase()) ? 'an' : 'a'} ${itemName}`
//   }

//   return hasItem

// }

// const personItem = hasPerson(prompt('Enter you name'))

// alert(personItem(prompt('What stuff do you have?')))


function summ(a, b) {
  return a + b
}
let c = 56

function dirtyFunc(a, b) {
  return a + b + c
}


