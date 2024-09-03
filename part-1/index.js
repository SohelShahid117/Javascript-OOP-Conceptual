//https://www.w3schools.com/js/js_objects.asp
//https://www.youtube.com/watch?v=B6vSq4KiZeM&t=5447s--1:30 min done
/*1.What is class in Javascript?
Ans:
JavaScript Classes are templates for JavaScript Objects.
Syntax:
class ClassName {
  constructor() { ... }
}
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
  The constructor method is called automatically when a new object is created.

The Constructor Method
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.


Class Methods
Class methods are created with the same syntax as object methods.
Use the keyword class to create a class.
Always add a constructor() method.
Then add any number of methods.

Syntax:
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

A JavaScript class is not an object.
It is a template for JavaScript objects.
*/

class Car {
  constructor(name, year) {
    console.log("Enjoy OOP in javascript ")
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
console.log("myCar1-->",myCar1)
console.log("myCar1-name is -->",myCar1.name)

const myCar2 = new Car("Audi", 2019);
console.log("myCar2-->",myCar2)

class Bus {
    constructor(name, year) {
      this.name = name;
      this.year = year;
      console.log("hello bus")
      console.log(this.year)
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  const myBus = new Bus("Tata", 2007);
  console.log("My bus is " + myBus.age() + " years old.")


  class Truck {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }

const date2 = new Date();
let year = date2.getFullYear();

const myTruck = new Truck("Ford", 2004);
console.log("My truck is " + myTruck.age(year) + " years old.")

/*
2.What is object in Javascript?
Ans:
In real life, objects are things like: houses, cars, people, animals, or any other subjects.
Here is a car object example:

car Object	     Properties	           Methods
	
            car.name = Fiat         car.start()
            car.model = 500         car.drive()
            car.weight = 850kg      car.brake()
            car.color = white	    car.stop()
Car objects have the same properties, but the values differ from car to car.
Car objects have the same methods, but the methods are performed at different times.
*/
const car = {type:"Fiat", model:"500", color:"white"};
console.log("The car type is " + car.type)
/*
How to Define a JavaScript Object:
    1.Using an Object Literal
    2.Using the new Keyword
    3.Using an Object Constructor
*/

/*
JavaScript Object Literal
An object literal is a list of name:value pairs inside curly braces {}.

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
*/
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.table(person)

// Create an empty Object
const person2 = {};

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue"; 
console.log(person2)

// Create an Object
const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue"; 
console.log(person3)

/*
Objects written as name value pairs are similar to:

Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl
*/
console.log(person.firstName)
console.log(person['lastName'])
console.log(person['age'])

const person4 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person4.fullName)
  console.log(person4.fullName())

/*
In JavaScript, Objects are King.
If you Understand Objects, you Understand JavaScript.
Objects are containers for Properties and Methods.

Properties are named Values.
Methods are Functions stored as Properties.
Properties can be primitive values, functions, or even other objects.
*/

/*
In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
All JavaScript values, except primitives, are objects.
*/

/*
JavaScript Primitives
A primitive value is a value that has no properties or methods.
3.14 is a primitive value
A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:

string
number
boolean
null
undefined
symbol
bigint
*/

/*
Immutable
Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

Value	        Type	        Comment
"Hello"	        string	        "Hello" is always "Hello"
3.14	        number	        3.14 is always 3.14
true	        boolean	        true is always true
false	        boolean	        false is always false
null	        null (object)	null is always null
undefined	    undefined	    undefined is always undefined
*/

/*
JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

const x = person;
The object x is not a copy of person. The object x is person.

The object x and the object person share the same memory address.

Any changes to x will also change perso
*/

const person5 = {
    firstName: "Johny",
    lastName: "Doerr",
    age:50,
    eyeColor: "blue"
  };
  
  // Create a Copy
  const x = person5;
  
  // Change Age
  x.age = 10;
  person5.firstName = "rony"
  console.log(person5.firstName + " is " + person5.age + " years old.")


  const person6 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
person6.nationality = "English";
console.log(person6)

delete person6.age;

console.log(person6)

const myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }

console.log(myObj.myCars.car2);
console.log(myObj.myCars[`car1`]);

const myObj2 = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }
  
  let p1 = "myCars";
  let p2 = "car2";
  console.log(myObj2[p1][p2])

  /*
  Object methods are actions that can be performed on objects.
A method is a function definition stored as a property value.

  */

// Create an Object
const person7 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
// Add a Method
person7.name = function() {
    // return this.firstName + " " + this.lastName;
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  console.log(person7)
  console.log("x father is " + person7.name())