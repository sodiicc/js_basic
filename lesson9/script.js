// const obj = {
//   name: 'Vasyl',
//   sayHi() {
//     return `Hello my name is ${this.name}`
//   }
// }

// const myObj = {
//   name: 'George'
// }


// const sayOtherHi = obj.sayHi.bind(myObj)

// console.log('obj.sayHi.call(myObj)', obj.sayHi.call(myObj, arg1, arg2 ...))
// console.log('obj.sayHi.apply(myObj)', obj.sayHi.apply(myObj, [arg1, arg1 ...]))


// console.log('sayOtherHi', sayOtherHi())

// const badObj = Object.create({}, {name: {value: 'John'}})
// console.log('badObj', badObj)

// const goodObj = {
//   name: 'Bob'
// }

// console.log('goodObj', goodObj.hasOwnProperty('a'))

// class Person {
//   constructor(name = 'Vasyl', age = 22, language = 'C++') {
//     this.name = name
//     this.age = age
//     this.language = language
//     this.arrayNames = []
//   }

//   sayHi() {
//     return `Hello , I am ${this.name}, I am ${this.age}`
//   }

//   setName = function(userName){
//     this.arrayNames.push(userName)
//   }

//   showNames = () => this.arrayNames
// }


// const developer = new Person('Robert', 33, 'Javascript')
// developer.setName('Bob')
// developer.setName('Mary')
// developer.setName('Jack')

// console.log('developer', developer.showNames())
// console.log('developer.sayHi()', developer.sayHi())

class Person {
  constructor(name = 'Vasyl', age = 22) {
    this.name = name
    this.age = age
  }

  sayHi() {
    return `Hello , I am ${this.name}, I am ${this.age}`
  }
}


class Musician extends Person {
  constructor(name, age, instrument) {
    super(name, age)
    this.instrument = instrument
  }

  sayHi() {
    return `${super.sayHi()} and my instrument is ${this.instrument}`
  }
}

class PianoMan extends Musician {
  constructor(name, age, instrument, exp) {
    super(name, age, instrument)
    this.exp = exp
  }

  sayHi() {
    return `${super.sayHi()} and my expirience is ${this.exp}`
  }
}

const guitarplayer = new Musician('Rick', 45, 'Guitar')
console.log('guitarplayer', guitarplayer.sayHi())
console.log('guitarplayer.instrument', guitarplayer.instrument)

const piano = new PianoMan('Volodymyr', 31, 'Piano', '4 years')
console.log('piano', piano.sayHi())
console.log('piano', piano.instrument)
console.log('piano', piano.exp)

