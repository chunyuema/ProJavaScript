// primitive types: string, number, bigint , boolean, symbol, undefined
// primitives are just primitives but the language allows access to methods and properties as if they are objects
// In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.
console.log(typeof 0) //number
console.log(typeof new Number(0)) //object

// yet the primitives are not objects -> they cannot store additional data
let str = "Hello"; 
str.test = 5; 
console.log(str.test); //undefined
