// console.log('hi', this)

// const obj = {
//   name: 'Vasyl',
//   age: 25,
//   favouriteNum: 17,
//   salary: 1000,
//   expirience: 17,
//   sayHi() {
//     return `Hello, my name is ${this.name}`
//   },
//   showThis() { return () => this },
//   // showThis() { return function() {return this} },
//   // showThis: function() { return function() {return this} },
//   showThisArrow: () => this,
//   showTotal(mult) {
//     return this.salary * this.expirience * mult
//   }
// }

// const obj2 = {
//   name: 'Andriy',
//   age: 27,
//   favouriteNum: 84,
//   salary: 1200,
//   sayHi: obj.sayHi
// }

// const person = {
//   name: 'Bob',
//   expirience: 24,
//   salary: 1700
// }



// console.log('obj.showTotal', obj.showTotal(1.2))
// console.log('obj.showTotal.call(person)', obj.showTotal.call(person, 0.9))
// console.log('obj.showTotal.apply(person)', obj.showTotal.apply(person, [0.9]))

// const personTotal = obj.showTotal.bind(person)
// console.log('personTotal', personTotal(2))

// function Person() {
//   return {
//     name: 'Iryna',
//     age: 18,
//     greetings() {
//       return `Hello, I am ${this.age}`
//     }
//   }
// }

// function Ctor() {}
// const p1 = new Ctor();
// const p2 = new Ctor();
// Ctor.prototype.prop = 1;
// console.log(p1.prop); // 1
// console.log(p2.prop); // 1

function Person(name, age, language = 'English') {
  const arrayNames = []
  this.name = name
  this.age = age
  this.language = language
  this.greetings = function () {
    return `Hello, I am ${this.age}`
  }
  this.setName = function(userName){
    arrayNames.push(userName)
  }
  this.showNames = () => arrayNames
}


Person.prototype.profession = 'High school'
const girl = new Person('Svitlana', 27)
// girl.education = 'KPI'
const boy = new Person('John', 44)


console.log('boy', boy)
console.log('girl', girl.profession)
console.log('girl', girl.greetings())

console.log('boy.__proto__ === Person.prototype', boy.__proto__ === Person.prototype)

boy.setName('Vasyl')
boy.setName('Dmytro')
boy.setName('Liza')

console.log('boy.showNames()', boy.showNames())
