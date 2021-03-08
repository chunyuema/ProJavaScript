// Syntatic sugar of prototypical inheritance

// Class declaration: it is not hoisted
class Circle {
    constructor(radius) {
        this.radius = radius; 
        // This defines methods on the instance level
        this.move = function(){};
    }

    // These methods will be added to the prototype. 
    // Instance method
    draw() {
    }

    // This will be available on the Circle class (Circle.parse())
    static parse(str) {
        const radius = JSON.parse(str).radius; 
        return new Circle(radius);
    }
}

typeof Circle // returns function

// Class expression: rarely used
const Circle = class{}

// Use of static method
const circle = Circle.parse('{"radius": 1}'); 
// this creates a new circle == const circle = new Circle(1)

// Math.abs => this is an example of Math object's static method
// Usually used for util functions


// This keyword
const Circle = function(){
    this.draw = function(){console.log(this);}
}
const c = new Circle(); //create a new object and this will point to the object; if you forget the new, this will point to the global
// Method call: this refers to the object that is calling the method
c.draw(); //the cirle object is logged
const draw = c.draw; 
// Function call: this refers to the global object, if use strict, then this will refer to undefined => preventing us from accidentally change the global object
draw(); 

class Circle {
    draw(){console.log(this);}
}
const c = new Circle(); 
const draw = c.draw; 
draw(); // this gives undefined since by default ES6 executes the class body using the strict mode


// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
    constructor(size) {
        // "Kind of" private property 
        this[_size] = size; 
    }

    // "Kind of" private method 
    [_draw]() {
    }

    // By "kind of" I mean: these properties and methods are essentally
    // part of the object and are accessible from the outside. But accessing
    // them is hard and awkward. 
}

// using WeakMaps to implement private properties and methods
// the keys in a weakmap has to be objects
const _width = new WeakMap();
const _move = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);
        _move.set(this, ()=>{
            console.log(this); //this is inherited
        })
    }

    draw() {
        _move.get(this)();
        console.log('Rectangle with width' + _width.get(this));
    }
}

// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object. 

// Inheritance 
class Triangle extends Shape {
    constructor(color) {
        // To call the base constructor 
        super(color);
    }

    draw() {
        // Call the base method, without this one, only the overrode method will be invoked 
        super.draw();
        // Do some other stuff here
    }
}