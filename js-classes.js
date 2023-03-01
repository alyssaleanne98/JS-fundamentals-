// Javascript classes lecture 9/17/22
//vocab: 
    // instantiate a class
    // encapsulation in OOP
    // object literal notation
    // instance: object created from the class
    //instantiate: we instantiate a class to create an object 
    // instantiation: the process of creating an object.
    // methods: 
    // static methods: only for vehicle class itself to use 
// what are classes: object oriented programming we use objects to model our applications purpose 
// classes: are used to create objects. Think of classes as the blueprints used to create objects of a certain "type". you can create individual cars based on the class. 
// encapsulation: bundling data and related behavior within an object. Methods: things the car can do. Attributes: describes its features. View the example below: 
// prototype aka instance methods: usable by each instance obj that is created from class 
// static method: only usable or callable by the class itself 
//methods included in example: substring 
// when creating static methods, you do not put anything in the constructor function. 

// const cohort = {
//     id: "SEIR Flex",
//     students: ["Mary", "Toni", "Fred"],
//     instructors: ["Susan", "Phil"],
//     addStudent: function (name) {
//       name = name[0].toUpperCase() + name.substr(1).toLowerCase()
//       this.students.push(name)
//     },
//     pickRandomStudent: function () {
//       const rndIdx = Math.floor(Math.random() * this.students.length)
//       return this.students[rndIdx]
//     },
//   }
// example 2 below: 
// when we name classes, it is uppercase. 
// "constructor" is needed to initalize the data properties.
// // a methof is automatically called to instantiate a new obj from a class? constructor method 

//   class Vehicle {
//     constructor(vin, make, model) {
//         this.vin = vin
//         this.make = make
//         this.model = model 
//         this.running = false 
//     }
//     static count = 0;
//     // prototype method - can be used by all obj
//     start() {
//         this.running = true 
//         console.log("running...")
//     }
//     // prototype method - can be used by all obj
//     stop(){
//         this.running = false
//         console.log("not running...")
//     }
//     // prototype method - can be used by all obj
//     toString(){
//         return 'Vehicle: ${this.make}, ${this.model} has a vin of ${this.vin}.'
//     }
//     // Code to define the class's properties and methods.
//   }

//   const plane = new Vehicle("Yh538dh", "Boeing")
//   const car = new Vehicle("239472492", "Toyota")
//   const boat = new Vehicle("ueswi", "bayliner", "saturn")

//   plane.toString()

//   console.log(plane.toString());

//   plane.toString = function () {
//     console.log("This is the to string method")
//   }

//   console.log(plane.toString())

  // static method (static means: stationary. only used by the class)
  
  //using the 'extend' keyword to define a subclass. 

// //   class Plane extends Vehicle {
// //     constructor(vin, make, model, airline) {
// //       super(vin, make, model)
// //       this.airline = airline;
// //     }
// //     engageAutoPilot() {
// //       console.log("Look Mom, no hands!")
// //     }
// //   }

// //   const plane = new Plane("sdhif", "boeing", "757", "alaska")
// //   console.log(plane)

// class Automobile extends Vehicle {
//     constructor(vin, make, model, numOfDoors) {
//         super(vin, make, model, numOfDoors)
//         this.numOfDoors = numOfDoors
//     }
//     honk() {
//         console.log("Beep!")
//     }
// }

// const car = new Automobile ("1234", "Toyota", "Rav4", 4)
// // add number of doors property - x
// // add a honk method - put outside of constructor but still instead class
// // create a car obj


// correct code provided by instructor: 
class Vehicle {
    constructor(vin, make, model) {
      this.vin = vin;
      this.make = make;
      this.model = model;
      this.running = false;
      Vehicle.count += 1;
    }
    static count = 0;
    // Prototype method - can be used by all obj
    start() {
      this.running = true;
      console.log("running...");
    }
    // Prototype method - can be used by all obj
    stop() {
      this.running = false;
      console.log("not running...");
    }
    // Prototype method - can be used by all obj
    toString() {
      return `Vehicle: ${this.make}, ${this.model} has a vin of ${this.vin}.`;
    }
    // static - only used by the class
    static about() {
      console.log("I am the Vehicle class...")
    }
    static printCount() {
      console.log(this.count)
    }
  }
  
  const plane = new Vehicle("Yh538dh", "Boeing", "757")
  const plane2 = new Vehicle("98weiuhw78", "Boeing", "878")
  const car = new Vehicle("9834798274", "Toyota", "Camry")
  const boat = new Vehicle("aksjhdkhsdjkh", "Bayliner", "Bowrider")
  
  
  Vehicle.about()
  Vehicle.printCount()
  console.log(Vehicle.count)
  
  
  console.log(plane.count)