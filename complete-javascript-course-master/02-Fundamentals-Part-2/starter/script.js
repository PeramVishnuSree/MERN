'use strict';
// activates strict mode. should be on the first line

//********************FUNCTIONS*********************

// functions: piece of code we can use over and over again on the program
// keyword: function
// calling / running / invoking; they mean the same thing
function logger() {
    console.log('shut up')
}

logger()
logger()

function fp (apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const j = fp(5,0)
console.log(j)

// function declaration vs function expression
// function declaration
console.log(calcAge1(1997))
function calcAge1(birthyear) {
    return 2022 - birthyear;
}
console.log(calcAge1(1997))

//function expression
const calcAge2 = function(birthyear) {
    return 2022 - birthyear;
}

console.log(calcAge2(1998))

// one of the main differences is you can call the function before defining it in case of functin declaration
// in case of function expression, you can call it only after defning it

// arrow functions
const calcAge3 = birthyear => 2020 - birthyear

console.log(calcAge3(1919))

const retirement = (birthyear, firstname) => {
    const age = 2020 - birthyear;
    return (`${firstname} can retire in ${65-age} years`);
}

console.log(retirement(2003, `jonas`))

// functions CAN call other functions

//**************************ARRAYS********************** 

const nums = [1,2,3,4,5]

console.log(nums)
console.log(nums[0], nums[nums.length-1])
console.log(nums.slice(1,3))
nums[2] = 34
console.log(nums)
