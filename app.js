console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// Person class
class Person {
    constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
    }
  
    info() {
      console.log(`Name: ${this.name}`);
      console.log(`Pets: ${this.pets}`);
      console.log(`Residence: ${this.residence}`);
      console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    }
  
    soundOff() {
      console.log("I am a person!");
    }
  
    addHobby(newHobby) {
      this.hobbies.push(newHobby);
    }
  
    removeHobby(hobbyToRemove) {
      this.hobbies = this.hobbies.filter(hobby => hobby !== hobbyToRemove);
    }
  
    greeting() {
      console.log("Hello fellow person!");
    }
  }
  
  // Exercise 2:
  console.log("EXERCISE 2:\n==========\n");
  // Coder class (subclass of Person)
  class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
      super(name, pets, residence, hobbies);
      this.occupation = "Full Stack Web Developer";
    }
  
    greeting() {
      console.log("Hello fellow coder!");
    }
  }
  
  // Exercise 3:
  // Create instances of classes
  const personObject = new Person("John Doe", 2, "Cityville", ["Reading", "Traveling"]);
  const coderObject = new Coder("Jane Coder", 0, "Code City", ["Coding", "Gaming"]);
  
  // Test methods and properties
  personObject.info();
  console.log("EXERCISE 3:\n==========\n");
  personObject.soundOff();
  personObject.addHobby("Swimming");
  personObject.removeHobby("Reading");
  personObject.greeting();
  
  coderObject.info();
  coderObject.soundOff();
  coderObject.addHobby("Cooking");
  coderObject.removeHobby("Gaming");
  coderObject.greeting();
  
  // Exercise 4:
  console.log("EXERCISE 4:\n==========\n");
  // Calculator class
  class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(x, y = this.result) {
      this.result = x + y;
      return this.result;
    }
  
    subtract(x, y = this.result) {
      this.result = x - y;
      return this.result;
    }
  
    multiply(x, y = this.result) {
      this.result = x * y;
      return this.result;
    }
  
    divide(x, y = this.result) {
      if (y !== 0) {
        this.result = x / y;
      } else {
        console.log("Error: Cannot divide by zero.");
      }
      return this.result;
    }
  
    displayResult() {
      console.log(`Result: ${this.result}`);
    }
  }
  
  // Test Calculator class
  const calculatorObject = new Calculator();
  calculatorObject.add(5, 3);
  calculatorObject.subtract(8);
  calculatorObject.multiply(4);
  calculatorObject.divide(2);
  calculatorObject.displayResult();
  