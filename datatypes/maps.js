// Map – is a collection of keyed values and it allows kesy of any type

// Methods and properties:

// new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
// map.set(key, value) – stores the value by the key, returns the map itself.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key, returns true if key existed at the moment of the call, otherwise false.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
// The differences from a regular Object:

// Any keys, objects can be keys.
// Additional convenient methods, the size property.
// Set – is a collection of unique values.

// Methods and properties:

// new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
// set.add(value) – adds a value (does nothing if value exists), returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
// Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.



// WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

// WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

// Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

// That comes at the cost of not having support for clear, size, keys, values…

// WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.

let map = new Map(); 
map.set('1', 'string');
console.log(map);
console.log(map.get("1"));

let john = {name: "john"}; 
let ben = {name: "ben"}; 
let map2 = new Map(); 
map2.set(john, 123); 
map2.set(ben, 456);
console.log(map2);

console.log(map2.keys());
console.log(map2.values()); 
console.log(map2.entries());
for (let entry of map2){
    console.log(entry);
    console.log(typeof entry);
}