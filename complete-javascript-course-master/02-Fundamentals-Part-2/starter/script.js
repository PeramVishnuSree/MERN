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

//built in array methods
const friends = ['mike', 'steve', 'pete']
//push: adds elements to the end of the array
// push method return the length of the new array
let new_length = friends.push('mira')
console.log(friends)
console.log(new_length)

// unshift: adds element to the beignning of the array
friends.unshift('joe')
console.log(friends)

// pop method: removes element from the endd of the array adn returns it
const popped = friends.pop()
console.log(friends)
console.log(popped)

// shift method: removes element from the beginning of the array and returns it
const shifted = friends.shift()
console.log(friends)
console.log(shifted)

// indexOf: gives the index of the element specified or -1 if the element is not in the array
console.log(friends.indexOf('mike')) // 0

// includes: returns true if element is in the aray or false otherwise. uses strict equality check.
console.log(friends.includes('mike')) //true
console.log(friends.includes('gigi')) //false


//********************OBJECTS*********************

// data structures with key value pairs
const john = {
    firstname : 'john',
    lastname : 'edwards',
    age: 2022-1991,
    job: 'teacher',
    frnds: ['mira', 'joe', 'justin'],
}
console.log(john)
// the elements inside the object are called properties
// accessing the properties of an object
console.log(john.firstname) //dot notation
console.log(john['lastname']) // bracket notation
// you get undefined if you try to access a key that does not exist
let f = 'firstname'
console.log(john.f) //undefined. you have to specify the exact expression
console.log(john[f])//john. bracate notation can evaluate expressions inside the brackets
console.log(john['vfvf'])//udefined

// adding new properties
john.location = "boston"
console.log(john)
console.log(`${john.firstname} ${john.lastname} has ${john.frnds.length} friends and his best friend is ${john.frnds[0]}`)

// object methods
// objects can have fucntions in them too. these functions are called methods of that object
const jonas = {
    first: 'jonas',
    last: 'smith',
    birthyear: 1991,
    job: 'archaelogist',
    friends: ['mira', 'jason', 'jared', 'adam'],
    hasDriversLicense: false,

    // calcAge : function () {
    //     return 2022 - this.birthyear; //this is equivalent to self in python
    // }

    // we can also add properties to the object from inside a function
    calcAge : function () {
        this.age = 2022-this.birthyear
        return this.age
    }
};

console.log(jonas.calcAge())
console.log(`${jonas.first} ${jonas.last} is a ${jonas.calcAge()}-year old 
${jonas.job}, and ${jonas.hasDriversLicense === true ? 'has' : "doesn't have"} a driver's license`)


// **************************LOOPS**********************

// FOR LOOP

/* for (let <set initial value to the variable>; <codition to be evaluated before each iteration of the loop>; <change to the variable after the code block inside the loop is executed>) {
    code block
    };
*/

for (let rep = 1; rep <= 10; rep +=1) {
    console.log(`rep: ${rep}`);
};

//looping through array
// continue and break work the same
let arr = [12,23,"justin",34,45,"blake",56,100,59]
let arr2 = []
for (let i = 0; i < arr.length; i ++) {
    if (typeof(arr[i]) === 'string') continue
    else if (arr[i] === 100) break
    console.log(arr[i])
    arr2.push(typeof(arr[i]))
}
console.log(arr2)

//WHILE LOOP

let rep = 1
while (rep < 10){
    console.log(rep)
    rep++
}

let dice = Math.trunc(Math.random() * 6) +1; // Math.random() creates a number between 0 and 1
while (dice != 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
}