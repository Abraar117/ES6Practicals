//Normal Function
function Car() {
    var a = ["BMW", "Audi", "Mercedes", "McLaren"];
    for (let i=0; i < a.length; i++) {
        console.log(a[i]);
    }
}
console.log("Result from Normal Function: ",Car())

//Arrow Function
let sum = (a,b) => {
    let result = a + b;
    return result;
}
let result1 = sum(8,4);
console.log("Result from Arrow Function: ",result1)

//Generator Function



//Anonymous Function