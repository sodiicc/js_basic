

// for (let i = 1; i <= 10; i++) {
//   console.log('i', i)
// }

// let num = 5
// while(num < 400) {
//   num += 14
//   if (num > 50 && num < 300) continue
//   console.log('num', `This is ${num}`)
// }

// do {
//   num += 14
//   console.log('num', `This is ${num}`)
// } while (false);

const myArr = [{name: 'Vasyl', email: 'sod@gmail.com'}, 4, null, 'Vasyl', false, [2, 4, 6]]

const person = {
  name: 'Vasyl',
  age: 20,
  profession: 'programmer',
  isMarried: true,
  // arr: myArr,
  cars: {
    volvo: 2,
    toyota: 1
  }
}

// const ulElement = document.createElement('ul')

// for (let objectKey in person) {
//   const objectKeys = []
//   const objectValues = []

//   if (typeof person[objectKey] === 'object') {
//     const innerObj = person[objectKey]
//     for (let carsKey in innerObj) {
//       objectKeys.push(carsKey)
//       objectValues.push(innerObj[carsKey])
//     }

//   } else {
//     objectKeys.push(objectKey)
//     objectValues.push(person[objectKey])
//   }



//   const liElement = document.createElement('li')
//   liElement.innerText = `${objectKeys} : ${objectValues}`
//   ulElement.appendChild(liElement)
// }

// for (let objectValue of myArr) {
//   console.log('objectValue', objectValue)

// }

// document.body.appendChild(ulElement)


// const values = Object.values(person)
// const keys = Object.keys(person)
// console.log('keys', keys)
// console.log('values', values)


// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {    
//     for (let k = 1; k <= 5; k++) {    
//       console.log('result', 'i', i, 'j=', j, 'k=', k)
//     }
//   }
// }

let cars = ['Volvo', 'Toyota', 'BMW', 'Mercedes', 'Acura', 'Mitsubishi', 'Audi']
console.log('cars', cars)
let persons = [
  {
    name: 'Vasyl',
    age: 33,
    gender: 'male',
    salary: 1200
  },
  {
    name: 'Bob',
    age: 22,
    gender: 'male',
    salary: 2800
  },
  {
    name: 'Bella',
    age: 27,
    gender: 'female',
    salary: 900
  },
  {
    name: 'John',
    age: 21,
    gender: 'male',
    salary: 4700
  },
  {
    name: 'Monika',
    age: 32,
    gender: 'female',
    salary: 3300
  },
]

// cars.forEach(car => {
  //   console.log('car', car)
  // })
  
  // cars.sort()
// console.log('cars.sort()', cars.sort())
// console.log('cars.reverse()', cars.reverse())
// const concatArreys = cars.concat(persons)
// console.log('concatArreys', [...cars, ...persons])

// const newCars = cars.map(car => {
//   let carDescription = ''
//   if (car.length < 5) {
//     carDescription = 'This is short name car'
//   } else if (car.length < 7) {
//     carDescription = 'This is normal name car'
//   } else carDescription = 'This is long name car'
//   return `${carDescription}: ${car}` 
// })
// console.log('newCars', newCars)
// newCars[2] = 'Ferrari'
// console.log('newCars', newCars)
// console.log('cars', cars)

// {
//   name: 'Monika',
//   age: 32,
//   gender: 'female',
//   salary: 3300
// }
let badTotal = 0
const personsDescription = persons.map(person => {
  badTotal += person.salary
  const heOrShe = person.gender === 'male' ? 'he' : 'she'
  return `${person.name}, ${heOrShe} is ${person.age}, ${heOrShe} has a salary - ${person.salary}$`
})
console.log('badTotal', badTotal)

const ulElement = document.createElement('ul')
personsDescription.forEach(person => {
  const liElement = document.createElement('li')
  liElement.innerText = person
  ulElement.appendChild(liElement)
})

document.body.appendChild(ulElement)

const totalSalary = persons.reduce((a, person) => {
  return a + person.salary
}, 0)

const totalElement = document.createElement('h3')
totalElement.innerText = `Total: ${totalSalary}`
document.body.appendChild(totalElement)

// console.log('totalSalary', totalSalary)

// console.log('personsDescription', personsDescription)
