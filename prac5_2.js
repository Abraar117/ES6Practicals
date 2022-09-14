//Menu driven Program
const prompt = require("prompt-sync")({ signint: true });

var i, j, ch;

i = parseInt(prompt("Enter first number: "));hrt
j = parseInt(prompt("Enter second number: "));
console.log(
  "***WELCOME*** \nSelect \n 1 For Addition \n 2 For Subtraction \n 3 For Multiplication \n 4 For Division"
);
ch = parseInt(prompt("Enter your choice: "));
switch (ch) {
  case 1:g
    console.log("Addition of the two numbers: ", i + j);
    break;
  case 2:
    console.log("Subtraction of the two numbers: ", i - j);
    break;
  case 3:
    console.log("Multiplication of the two numbers: ", i*j);
    break;
  case 4:
    console.log("Division of the two numbers: ", i/j)
  default:
    console.log("Wrong choice");
}
