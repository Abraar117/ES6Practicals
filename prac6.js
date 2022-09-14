//Normal Function
function Car() {
    var a = ["BMW", "Audi", "Mercedes", "McLaren"];
    for (let i=0; i < a.length; i++) {
        console.log(a[i]);
    }
}
console.log("Result from Normal Function: ")
Car();

//Arrow Function
console.log("\n")
let sum = (a,b) => {
    let result = a + b;
    return result;
}
let result1 = sum(8,4);
console.log("Result from Arrow Function: ",result1);
console.log("\n");

//Generator Function
function * generatorFunction() {
    console.log("Result from Generator function: ");
    console.log("This is the statement before yield.");
    yield "Hello";

    console.log("This is the statement after first yield.");
    yield "World";

    console.log("This is the statement after second yield.");
}
const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

//Anonymous Function
let anonymous = {
    first: 'Anonymous',
    last: 'Function'
};

(function () {
    console.log("\nResult from Anonymous Function: ")
    console.log(anonymous.first + ' ' + anonymous.last);
})(anonymous);