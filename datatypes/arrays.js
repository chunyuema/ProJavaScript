let array = new Array(); 
let array2 = [];
let array3 = ["A", "B", "X"]; 
console.log(array3.length);


// The shift operation must do 3 things:
// Remove the element with the index 0.
// Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// Update the length property.
// Hence shift/unshift is slower than push/pop
array3.pop();
array3.push("C"); 
array3.shift(); 
array3.unshift("K"); 
console.log(array3);


let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i <arr.length; i++){
    console.log(arr[i]); 
}
// good practice
for (let fruit of arr){
    console.log(fruit);
}
// bad practice
// The loop for..in iterates over all properties, not only the numeric ones
// The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. 
for (let key in arr){
    console.log(arr[key]);
}


// The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.
let array5 = [];
array5[100] = "what";
console.log(array5); //[ <100 empty items>, 'what' ]
console.log(array5.length);


let array4 = new Array(3); //sepcify the length of the array
console.log(array4); //[ <3 empty items> ]
array4[4] = "what"; 
console.log(array4); //[ <4 empty items>, 'what' ]

// Two objects are equal == only if they’re references to the same object.
// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
// …With an exception of null and undefined that equal == each other and nothing else.
// Hence, comparing of arrays with == will always be false
let array6 = [1,2,3]; 
let array7 = [1,2,3]; 
console.log(array6 == array7); //false
// To compare two different arrays, write a for loop to compare every item in it


// exercise: finding the maximum sum of continuous subarray
function getMaxSubarray(arr){
    let res = 0; 
    let currSum = 0;
    for (let num of arr){
        currSum += num; 
        res = Math.max(res, currSum); 
        if (currSum < 0) currSum = 0; 
    }
    return res;
}

console.log(getMaxSubarray([-1, 2, 3, -9]));