// There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
// Strings in JavaScript are encoded using UTF-16.
// We can use special characters like \n and insert letters by their Unicode using \u....
// To get a character, use: [].
// To get a substring, use: slice or substring.
// To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
// To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
// To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
// str.trim() – removes (“trims”) spaces from the beginning and end of the string.
// str.repeat(n) – repeats the string n times.

// backticks and template string
function sum(a,b){return a+b;}
console.log(`1+2=${sum(1, 2)}`)

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList)


// length is a property
let str = "My\n"
console.log(str.length)

// accessing characters from string
let str2 = "what what is going on?";
console.log(str2[0]);
console.log(str2.charAt(0));

//looping through string by character
for (let char of str2){console.log(char)}

//string is immutable str2[0] = "h" gives an error

// string method
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.indexOf("what")) //start from 0 appearance or -1
console.log(str2.indexOf("what", 2)) //start from index 2 appearance or -1
console.log(str2.includes("WHAT"));
console.log(str2.includes("what"));
console.log(str2.includes("what", 4)); //staring from index 4

function getIndices(str, target){
    let res = [];
    let pos = 0;
    while (true){
        let found = str.indexOf(target, pos); 
        if (found == -1) break;
        res.push(found); 
        pos += found + 1;
    }
    return res;
}
console.log(getIndices(str2, "what"));


let str3 = "stringtobesliced"; 
console.log(str3.slice(1, 3));
console.log(str3.slice(4));
//substring: starting and ending index
console.log(str3.substring(2, 6)); 
console.log(str3.substring(2, 26)); //can go over range
console.log(str3.substring(6, 2)); //does the same thing
console.log(str3.slice(6, 2)); //does not work for slicing
//substr: starting index and length
console.log(str3.substr(2, 6));
console.log(str3.substr(2, 26)); //can go over range


console.log(str3.repeat(3))

let str4 = "   dsjkfjds   "
console.log(str4.trim()) // "dsjkfjds"