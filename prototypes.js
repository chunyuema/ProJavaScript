// Prototypical Inheritance =? walks up the prototype chain to find the property 
// The parent object of a certain object
// Every object has a constructor property except one

// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,        // cannot be modified
    enumerable: false       // cannot be enumerated
    // by default they are all true
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({}) === {}.__proto__
Array.prototype === Object.getPrototypeOf([]) === [].__proto__

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 
// x.__proto__ === y.__proto__ is the same but we do not use it

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
// getting the prototype of Circle by Circle.prototype and then add the draw
// defining the method on the prototype level
Circle.prototype.draw = function() {} 
c1 = new Circle()
c2 = new Circle()
// c1 and c2 will have the same draw method

function Class () {}
Class.prototype.calc = function (a, b) {
    return a + b;
}
// Create 2 instances:
var ins1 = new Class();
var ins2 = new Class();

// Test the calc method:
console.log(ins1.calc(1,1), ins2.calc(1,1));
// -> 2, 2

// Change the prototype method
Class.prototype.calc = function () {
    var args = Array.prototype.slice.apply(arguments), res = 0, c;
    while (c = args.shift()) res += c;
    return res; 
}

// Test the calc method:
console.log(ins1.calc(1,1,1), ins2.calc(1,1,1));
// -> 3, 3
// if the method is not applied to the prototype level, then the above method has to be done on every instance in order to update them all


// Constructor Prototypes
let array = [] // new Array
// array.__proto__ === Array.prototype they are the same thing
let circle = new Circle; 
// circle.__proto__ === Circle.prototype

function Circle(radius){
    // Instance memebers
    this.radius = radius; 
    this.move = function(){console.log('move')}
}
// Prototype Members
Circle.prototype.draw = function(){
    console.log('draw')
}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}

// Try to avoid changing the built in object
// Dont modify the property that you do not own
Array.prototype.shuffle = function(){} 
// This is bad since it modifies the built in Array object
// Which might not be compatible with the other people's Array object


