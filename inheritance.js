
function Shape() {}
function Circle() {}

// Prototypical inheritance: Circle inherit from Shape
Circle.prototype = Object.create(Shape.prototype); 
Circle.prototype.constructor = Circle; 
//When resetting the prototype, reset the constructor property as a good practice

// Instead of what we have above, you can create intermediate function inheritance extend which takes in two Consttuctor function as arguments and inherit one from the other
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype); 
    Child.prototype.constructor = Child;
}
extend(Cirle, Shape); 

// If the color is defined on the object from which Retangle is extended from
function Shape(color){
    this.color = color;
}

function Rectangle(color) {
    // what does not work 
    Shape(color) //this will set the property on the global
    // To call the super constructor 
    Shape.call(this, color);
}

// Method overriding: reimplementing method in a child object => Polymorphism 
function Shape(){}
Shape.prototype.draw = function() {
    console.log('draw');
}
function Circle(){}
extend(Circle, Shape);
Circle.prototype.draw = function() {
    // Call the base implementation, without this one, only the overriding method will be called
    Shape.prototype.draw.call(this);
    // Do additional stuff here 
    console.log('drawing circle');
}
c = new Circle(); 
c.draw() // draw drawing circle
function Rectangle(){}
extend(Rectangle, Shape);
Rectangle.prototype.draw = function(){console.log('drawing rectangle')}
r = new Rectangle();
r.draw() // drawing reactangle
//Without Polymorphism, we need to do something like this
for (let shape of shapes){
    if (shape.type == 'circle'){}
    if (shape.type == 'reactangle'){}
}
//You can see how this gets very complicated very soon


// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. 


// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = { 
    eat: function() {}
};

const canWalk = {
    walk: function() {}
};

//use the rest operator to pass in numerous number of sources
function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);