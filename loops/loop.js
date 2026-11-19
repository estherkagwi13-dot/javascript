//for loop
//do while loop
//while loop

//do while
let i = 11
do {

    console.log(i);
    i++; //i=i+1
} while (i < 10)

//while loop
let j = 0
while (j < 10) {
    console.log(j)
    j++;
}

let sum = 0;
//for loop
for (let k = 1; k <= 10; k++) { //k+1
    sum = sum + k// sum = sum + k
}
console.log(sum)

//check even number between 1 to 100
for (j = 1; j <= 100; j++) {
    //check if the number is even %
    if (j % 5 === 0) {
        console.log(j)
    }
}


for (i = 0; i <= 10; i++) {
    let row = ""
    for (j = 0; j <= i; j++) {
        row += "*"

    }
    console.log(row)
}

let marks = [23, 45, 67, 89, 30, 50]
let above = marks.filter((mark) => mark > 50)
console.log(above)
for (i = 0; i < marks.length; i++) {
    console.log(marks[i])
}




function sayHi() {
    console.log(`Hello ${name}`)
}

sayHi("Ken")
sayHi("Esther")
const greetings = (name) => {
    console.log(`Hello ${name}`)
}
greetings();
greetings("Rose");

const greetings2 = (name) => console.log(`Hello ${name}`)
greetings2("Ann")

//loop ppt EX 1
/**
 * Write a for loop that displays number 1 to 100
 */

for (let m = 1; m <= 100; m++) {
    console.log(m)
}
/**
 * Ex 2
 * sum of 1 to 10
 */
let total = 0
for (x = 0; x <= 10; x++) {
    total = total + x
}
console.log(`sum of 10 numbeers: ${total}`)

let add = 0
for (q = 0; q <= 30; q++) {
    add = add + q
}
console.log(`Addation of 30 numbers ${add}`)

/**
 * display even numbers
 */
for (s = 0; s <= 50; s++) {
    if (s % 2 === 0) {
        console.log(`even number ${s}`)
    }
}
for (t = 0; t <= 50; t++) {
    if (t % 2 === 1) {
        console.log(`odd numbers ${t}`)
    }
}
for (z = 0; z <= 50; z++) {
    if (z % 9 === 0) {
        console.log(`Multiple of Nine ${z}`)
    }
}
/**
 * Count down from 10
 */
let f;
for (f = 10; f >= 0; f--) {
    if (f === 0) {
        console.log("happy New Year")
    }
    else {
        console.log(f)
    }
}
let l;
for (l = 20; l >= 2; l--) {
    if (l === 2) {
        console.log("almost Done")
    }
    else {
        console.log(l)
    }
}

/**
 * STUDENT MARKS ANALYZER
 * dispaly every students mark
 * calc total and average
 * show highest and lowest mark
 */
console.log("All student Marks")
let mark = [75, 45, 89, 60, 32, 95, 50, 68]
for (i = 0; i < mark.length; i++) {
    console.log(mark[i])
}

console.log("Above 50 mark")
for (i = 0; i < mark.length; i++) {
    if (mark[i] >= 50) {
        console.log(mark[i])
    }
}


console.log("below 50")
for (i = 0; i < mark.length; i++) {
    if (mark[i] <= 49) {
        console.log(mark[i])
    }
}
//counter of fail(below) and pass
let fail = 0
let passed = 0
for (i = 0; i < mark.length; i++) {
    if (mark[i] >= 50) {
        passed++
    }
    else {
        fail++ //shorthand for fail+1
    }
}
console.log("Number of passes " + passed)
console.log("Number of fails " + fail)


console.log("Total mark")
let totalMark = 0
for (i = 0; i < mark.length; i++) {
    totalMark = totalMark + mark[i]
}
console.log(totalMark)

console.log("Average")
let average = totalMark / mark.length
console.log(average)
console.log(`number of mark entries ${mark.length}`)

console.log("Highest Mark")
let highest = mark[0]
for (i = 0; i < mark.length; i++) {
    if (mark[i] > highest) {
        highest = mark[i]
    }
}
console.log(highest)

console.log("Lowest Mark")
let lowest = mark[0]
for (i = 0; i < mark.length; i++) {
    if (mark[i] < lowest) {
        lowest = mark[i]
    }
}
console.log(lowest)

//GRADING
for (i = 0; i < mark.length; i++) {
    if (mark[i] >= 80) {
        console.log(`Student mark-${mark[i]} A`)
    }
    else if
        (mark[i] >= 70) {
        console.log(`Student mark-${mark[i]} B`)
    }
    else if
        (mark[i] >= 60) {
        console.log(`Student mark-${mark[i]} C`)
    }
    else if (mark[i] >= 50) {
        console.log(`Student mark-${mark[i]} D`)

    } else { console.log(`Student mark-${mark[i]} fail`) }
}