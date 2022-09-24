const prompt = require("prompt-sync")();

console.log()
var n = Number(prompt("Enter "))
var sum = 1
var fact = 1

for(var i = 2; i <= n; i++) {
        fact *= i
        if(i % 2 != 0) sum += fact
    }

console.log("Sum of odd factorials of first "+n+" integers is:",sum)
console.log()
var n = prompt("Enter the number to reverse: ")
var rev = ""

for(var i = n.length - 1; i >= 0; i--) {
    rev += n.charAt(i)
}

console.log("Reverse of Number",Number(n),"is:",Number(rev))
console.log()
var str = prompt("Enter the string to check palindrome: ")
var pal = true;

for(var i = 0; i < str.length/2; i++) {
    if(str.charAt(i) != str.charAt(str.length-i-1)) {
        pal = false
        break
    }
}

console.log(str+" is",pal ? "a" : "not a","Palindrome")
console.log()
var len = Number(prompt("Enter the length of required Fibonacci Series: "))
var fib = []

if(len == 1) fib.push(1)
if(len >= 2) fib.push(1,1)

for(var i = 2; i < len; i++) {
    fib.push(fib[i-2] + fib[i-1])
}

console.log("First "+len+" elements of Fibonacci Series are: "+fib)
console.log()
