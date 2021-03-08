// OBJECT ORIENTED PROGRAMMING
// encapsulation: properties and methods are coupled together
// abstraction:   simpler interface; reduce and isolate impact of changes
// inheritance:   eliminate redundant code through inheriting
// polymorphism:  many forms; same method of an object can bahave differently, refactor 

// JAVASCRIPT OBJECT
// 1. object literal syntax: properties (hold values)/ methods(if they are functions)
const circle1 = {
    // property
    radius: 1, 
    // value can be location as well
    location: {
        x: 1, 
        y: 1
    }, 
    draw: function(){ console.log('drawing a circle');}
}
// circle1.draw();

// 2. factories function
// object literals are not a good practice
function createCircle(radius){
    console.log(this); // this refers to the global object
    return {
        radius, 
        draw: function(){ 
            console.log(this); // this refers to the object
            console.log('drawing a circle');}
    };
}
// const circle2 = createCircle(2);
// circle2.draw();
// console.log(circle2.radius); 

// 3. constructors
// this refers to the new object which is created by the new operator
// make sure that you use the new operator
function Circle(radius){
    console.log(this); //Circle {}
    this.radius = radius; 
    this.draw = function(){
        console.log(this); // Circle {radius: 3, draw: ƒ}
        console.log('draw');
    }
    //return this => happens automatically when using new
}
const circle3 = new Circle(3);
console.log(circle3);
console.log(circle3.radius);


// 4. constructor property
// every object has this property, which references to the function used to create the object
console.log(circle3.constructor); //Circle(radius) used when creating this one
const c = {}
console.log(c.constructor); //Object() used when creating this one

// 5. functions are object 
console.log(Circle.name);  //"Circle"
console.log(Circle.length); // 1
console.log(Circle.constructor); // Function()
Circle.call({}, 1); //{} is what this refers to == new Circle(1)
Circle.apply({}, [1]); //{} is what this refers to == new Circle(1)
// console.log(circle4, circle5);

// 6. Value Types (Primitive) and Reference Types (Objects, Functions and Arrays) 
// value types passed by value
let x = 10; 
let y = x;
x = 20;
console.log(x); //20
console.log(y); //10
// refernce type passed by reference
let x2 = { value: 20 };
let y2 = x2; 
x2.value = 21; 
console.log(y2); //{value: 21}


// 7. adding / removing properties
// const circle10 = new Circle(10);
// console.log(circle10);
// circle10.location = {x: 1}
// console.log(circle10);
// circle10['location'] = {x:1}
// delete circle10.location;
// console.log(circle10);

// 8. enumerating properties: 
for (let key in circle10) {
    if (typeof circle10[key] !== 'function')
    console.log(key, circle10[key]);
}
for (let key of Object.keys(circle10)) console.log()
for (let entry of Object.entries(circle10)) console.log()
// const keys = Object.keys(circle10);
// console.log(keys)

// if ('radius' in circle10){
//     console.log('Circle10 has radius!')
// }

// 9. Copy an object
const o1 = {radius: 1}
const o2 = {}
for (let key in circle){o2[key] = o1[key]}

const o3 = Object.assign({}, o1); //{radius: 1}
const o4 = Object.assign({color: "yellow"}, o1); //{color": 'yellow', radius: 1}
const o5 = {...o1}; //{radius: 1}

// 10. Math
Math.random(); 
Math.round(1.3); 
Math.PI; 

// 11. String
// String primitive
const s1 = "hi"; 
typeof s1; //string
// String object
const s2 = new String("hi"); 
typeof s2; //object
//however, in JS engine, s1 is treated as if it is an object
 
// 9. Abstraction
// certain methods should not be accessible to the users
// hide the details and ecpose the essentials
// use private properties and methods
function Circle(radius){
    this.radius = radius; 
    // private property
    let defaultLocation = {x:0, y:0}; 
    let computeOptimalLocation = function(){console.log()}; 
    // availble to the method functions due to closure
    this.draw = function(){
        computeOptimalLocation();
        console.log('draw')
    }
}
// Note that defaultLocation and computeOptimalLocation are not accessible

// 10. getter and setter
// sometimes you want to read the things we hid from the user 
// no modification, just reading
function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:3, y:5} 
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        }
    });
}

// const circleC = new Circle(12);
// console.log(circleC.defaultLocation)


