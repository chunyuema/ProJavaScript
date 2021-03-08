// a process that will take input and produce output, can be called repeatedly

// default function declaration
// function nameOfFuntion( arguments ) {
//     do some thing with arguments
//     return result
// }

// argument: what is passed into the function
// parameter: arguments inside the function are known as parameter


// You can pass in more or less arguments
// if no arguments passed in => undefined
// if more arguments are passed in => accessed through arguments object
// since JS allows various arguments, hence no function overloading

// functions are objects in java script
// hence function can assigned to a variable, create a list of functions
// we can aslo call function => call back function
// we can also return functions => bind


// pass in by value; what it does to x does not change x outside the function
let x = 5; 
function sqaure(x){return x*x; }
let y = sqaure(x);
// console.log(x);
// console.log(y);

// pass in by value but the value is actually a reference, hence the function will mutation the original object
// this happens with the non-primitive data type
let apple = {name: "apple"};
function change(object){object.name = 'pear'};
// change(apple)
// console.log(apple); //{ name: 'pear' }

function noChange(object){
    object = {};
    object.name = "pear"
}
// noChange(apple);
// console.log(apple); //{ name: 'apple' }

//FUNCTION DECLARATION : function f(arguments){} => hoisted during the first round of scanning
//FUNCTION EXPRESSION  : let f = function(){}    => not hoisted

//Function as an Object [First Class Citizen]:
// 1. You can assign a function to a variable
// 2. You can add function to an array
// 3. Add function to an object and make it a method / property
// 4. Add properties to a function f.description = "explanation"
// 5. Passed into another function as an argument
// 6. Function can be returned from a function

// Callback Function
// pass a function into another function as an argument so that the other function will invoke the function passed in
// the function that takes in another function: higher order function
// when passing in the function, we do f instead of f() since we do not want to invoke it
let return25 = () => 5*5;
function doSomething(f) { f(); }; //return undefined 
function doSomething2(f){ return f();}; //return value returned from f
// console.log(doSomething(return25));
// console.log(doSomething2(return25));

// async call back function: the function is called sometime in the future
// the function is not waited on when the rest of the codes are executed
let write = function() { console.log("Hello"); };
setTimeout(write, 2000);
console.log("This gets pinted first before 'Hello'");
