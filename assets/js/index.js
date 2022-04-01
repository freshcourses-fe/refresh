// function Car (model, maxSpeed, isLightsOn) {
//   this.model = model;
//   this.maxSpeed = maxSpeed;
//   this.isLightsOn = isLightsOn;
// }

// function CarPrototype() {
//   this.turnLightsOn = function() {
//     this.isLightsOn = true;

//     return this.isLightsOn;
//   }
// }

// const carProto = new CarPrototype();
// Car.prototype = carProto;
// const car = new Car();

class Car {
  constructor(model, maxSpeed, isLightsOn) {
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.isLightsOn = isLightsOn;
  }

  turnLightsOn() {
    this.isLightsOn = true;
    return this.isLightsOn;
  }

  turnLightsOff() {
    this.isLightsOn = false;
    return this.isLightsOn;
  }

  static isCar(obj) {
    return obj instanceof Car;
  }

  SECRET = 124;
}

class SuperCar extends Car {
  constructor(maxSpeed) {
    super('supercar', maxSpeed, false);
    this.text = 12354;
  }

  turnLightsOn() {
    this.isLightsOn = Math.random() > 0.5;
    return this.isLightsOn;
  }

  turnLightsOff() {
    this.isLightsOn = Math.random() > 0.5;
    return this.isLightsOn;
  }
}

const car = new Car('test', 21433, true);
const car2 = new SuperCar(21433);
