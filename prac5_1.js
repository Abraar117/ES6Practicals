//Defining variables
let marks = [86,76,98,88,92];
let upper_lim = marks.length*100;
var total = 0;

for (let i = 0; i < marks.length; i++) {
    total+= marks[i]
}

let percentage = (total/upper_lim)*100;

if (percentage>95) {
    grade = "O";
}

else if (percentage>85) {
    grade = "A";
}

else if (percentage>75) {
    grade = "B";
}

else if (percentage>65) {
    grade = "C";
}

else if (percentage>55) {
    grade = "D";
}

else if (percentage>45) {
    grade = "E";
}

else {
    grade = "F";
}
console.log("Total Marks Achieved:",total)
console.log("Total Marks: ",upper_lim)
console.log("Grade Achieved: ",grade)
