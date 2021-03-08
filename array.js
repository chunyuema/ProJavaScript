var string = "Please Calm Down! You are Okay!"; 

var reverseSentence = reverse(string, ""); 
console.log(reverseSentence)
var reverseWords  = reverse(reverseSentence, " "); 
console.log(reverseWords)

function reverse(string, separator){
    return string.split(separator).reverse().join(separator);
}