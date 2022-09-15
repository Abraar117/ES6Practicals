//Implement string,array,math,date methods in es6

//String methods
var str1 = new String("This is the first string.");
var str2 = new String("This is the second string.");
var str3 = new String("This is the third string.");
console.log("String Methods: ")

console.log("charAt() Method:");
console.log("Second character is:" + str1.charAt(1));

console.log("concat() Method: ",str2.concat(str3));
console.log("\n");

console.log("slice() Method: ",str2.slice(5))
console.log("\n");

//Array Methods
console.log("Array Methods: ")
let pbrands = ["Samsung","Apple","Xiaomi"];
let fbrands = ["RalphLauren","Ferragamo","Tumi"];

console.log("concat() Method: ",pbrands.concat(fbrands));
console.log("indexOf() Method: ",fbrands.indexOf("Tumi"));
console.log("push() Method: ",pbrands.push("Oneplus"),pbrands);
console.log("\n");

//Math Methods
console.log("Math Methods: ");
console.log("Math.pow() Method: ",Math.pow(3,5));
console.log("Math.sqrt() Method: ",Math.sqrt(256));
console.log("Math.cbrt() Method: ",Math.cbrt(729));
console.log("\n");

//Date Methods
console.log("Date Methods: ");
console.log("Date() Method: ",Date());
var dt = new Date("June 11, 2002 23:15:12"); 
console.log("getDay() Method: ",dt.getDay());
console.log("getSeconds() Method: ",dt.getSeconds());


