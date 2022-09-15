//Implement string,array,math,date methods in es6

//String methods
var str1 = new String("This is the first string.");
var str2 = new String("This is the second string.");
var str3 = new String("This is the third string.");
console.log("String Methods: ")

console.log("charAt() Method:");
console.log("Third character is:" + str1.charAt(0));
console.log("Second character is:" + str1.charAt(1));
console.log("Third character is:" + str1.charAt(2));
console.log("\n");

console.log("concat() Method:");
console.log("Concatenated String is:",str2.concat(str3));
console.log("\n");

console.log("slice() Method:")
console.log("Sliced string is: ",str2.slice(5));
console.log("\n");

//Array Methods
console.log("Array Methods: ")
let pbrands = ["Samsung","Apple","Xiaomi"];
let fbrands = ["RalphLauren","Ferragamo","Tumi"];

console.log("concat() Method: ",pbrands.concat(fbrands));
console.log("indexOf() Method: ",fbrands.indexOf("Tumi"));
console.log("push() Method: ",pbrands.push("Oneplus"),pbrands);

//Math Methods

