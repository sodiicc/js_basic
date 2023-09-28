class Vehicle {
  constructor(wheelsCount, wd) {
    this.wheels = wheelsCount
    this.wd = wd
  }

  showParentClassInfo() {
    return `This Vehicle has ${this.wheels}`
  }

  static conwertWheelsToAxes(wheels) {
    return `This Vehicle has ${wheels / 2} axes`
  }

  showInfo() {
    return this.showParentClassInfo()
  }
}

const newVehicle = new Vehicle(8, 'forward') 
console.log('newVehicle', newVehicle.showInfo())
console.log('newVehicle', newVehicle.axes)
// console.log('newVehicle', newVehicle.showParentClassInfo()) Not Working ....

class Car extends Vehicle {
  constructor(wheelsCount, wd, model, color) {
    super(wheelsCount, wd)
    this.model = model
    this.color = color
    this.type = 'Car'
  }

  static getAxes() {
    return super.conwertWheelsToAxes(this.wheels)
  }

  get describe() {
    return `This is ${this.model}`
  }
}

const volvo = new Car(4, '4x4', 'Volvo', 'Black')
// console.log('volvo.showInfo', volvo.showParentClassInfo())  Not Working ...
console.log('volvo.wd', volvo.wd)
console.log('Car.axes', Car.getAxes())
console.log('volvo', volvo.describe)

const getterObj = {
  name: 'Vasyl',
  get showName() {return this.name},
  set setName(newName) {this.name = newName}
}

// getterObj.showName = 111
getterObj.setName = () => {}
getterObj.setName = 'Peter'
console.log('getterObj.showName', getterObj.showName)

const goodObj = {}
console.log('goodObj', goodObj)
const notGoodObj = new Object({name: 'Vas'})
console.log('notGoodObj', notGoodObj)
const badObj = Object.create({}, {name: {value: 'Julia'}})
console.log('badObj', badObj)
