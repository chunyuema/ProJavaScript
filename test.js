console.log(a);
var a = "me";

function Car(make, model, year){
    this.make = make;
    this.model = model; 
    this.year  = year; 
     
}

const car1 = new Car('Toyota', 'Prius', 2016); 
console.log(car1);
car1.setMiles(20);
console.log(car1);

function f(){
    console.log(this);
}
f();


