// A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.

function modifyArray(arr, callback){
    arr.push(100); 
    callback();
}

modifyArray([1,2,3], function(){
    console.log("Inserted 100!")
})