const car = {
  model: 'Volvo',
  year: 2018,
  color: 'black',
  info: {
    conscructor: 'Paulo Rudolfo',
    creationDate: 1943
  }
}

// const year = car.year


const { year: volvoYeAR, color, model, info, info: { conscructor } } = car
// console.log('info', info)


// console.log('volvoYeAR', volvoYeAR)
// console.log('conscructor', conscructor)
// console.log('model', model)
// console.log('color', color)
// console.log('year', year)

// const myArray = [4, 5, 8, 'name', car]
// console.log('myArray', myArray)
// console.log('myArray spread', ...myArray)

// const [firstEl, secondEl, ...rest] = myArray

// console.log('firstEl', firstEl)
// console.log('secondEl', secondEl)
// console.log('rest', rest)

// const divs = document.querySelectorAll('div')
// console.log('divs', divs)
// const divsArr = [...divs]
// console.log('divs', divs)
// console.log('divs', ...divs)
// console.log('divs', [...divs])

// divsArr.forEach(el => {
//   console.log('el', el)

// })

// function summ(firstNum, secontNum, thirdNum, ...rest) {
//   console.log('rest', rest)
//   return firstNum + secontNum + thirdNum
// }


// console.log('summ', summ(...myArray))
// summ(4, 5, 8, 'name', car)


const dateNow = new Date()
console.log('getTime', dateNow.getTime())
// console.log('dateNow', dateNow)
// console.log('toDateString', dateNow.toDateString())
// console.log('toISOString', dateNow.toISOString())
// console.log('toLocaleString', dateNow.toLocaleString())
// console.log('toLocaleDateString', dateNow.toLocaleDateString())
// console.log('toLocaleTimeString', dateNow.toLocaleTimeString())
// console.log('toTimeString', dateNow.toTimeString())
// console.log('toString', dateNow.toString())

// const customDate = new Date('11/05/1977')
// const customDate = new Date('11.05.1977')
// const customDate = new Date(1846, 2, 58, 2)

const customDate = new Date(1_007_130_620_104)
console.log('customDate', customDate)

const carJson = JSON.stringify(car)
localStorage.setItem('myCar', carJson)

// localStorage.removeItem('myCar')


console.log('LocalStorage', JSON.parse(localStorage.getItem('myCar')))



