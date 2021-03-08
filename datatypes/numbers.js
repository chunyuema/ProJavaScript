let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
console.log(a == b)

let num = 255; 
console.log(num.toString(16));
console.log(num.toString(2));
// console.log(255.toString(2)); // returns error
console.log((255).toString(2));


// rounding
console.log(Math.floor(3.1), Math.floor(-1.2));
console.log(Math.ceil(3.1), Math.ceil(-1.2));
console.log(Math.round(3.1), Math.round(-1.1)); 
console.log(Math.trunc(3.6), Math.trunc(-1.4));


let sum = 0.1 + 0.2
console.log(sum);
console.log(sum.toFixed(2));



console.log(parseInt('0xff', 16));