// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// let fristname = "jonas"; //declaring a variable

/* conventiona and rules for naming variables 
camelcasing, underscores, hyphens to combine words
never start with a number or use any symbols except _ and $
no keywords
name is a reserved keywords but is allwoed to use. dont use it tho
variables dont start with a capital letter, convention
when declaring constants, use all caps
mnemonic variables
*/

/*
the 7 primitive date types
Number: used for all kinds of numbers; string; Boolean: true or false
Undefined; null; Symbol; BigInt: Larger integers than Number type can hold
JS is dynamic typing: do not have to manually define the data type when
declaring or assigning a variable
*/

// console.log(typeof true, typeof "hi", typeof 22.34, typeof null);

// let, var and const
// let: to declare variables that can change later. cannot declare twice. variables can be mutated
// const: variables that are not supoosed to change anytime in the future. cannot declare without assigning a value
// const: type error if variable is re-assigned
// var: meh

// ls = 'gi'
// console.log(ls)
// this actually works too but it's supposedly a terrible idea to do so
// doesnt create a variable in the current scope, js creates a property in the global object


// operators, string concatenation
// operator precedence: google

// strings and template literals
// const firstname = "jonas";
// const age = 32;
// const birthyear = 1212;

// const jonas = firstname + age + birthyear;
// js converts numbers to sting when concatanating with other strings
//console.log(jonas)
// use `` for template literals
// const newname = `i am ${fristname}`;
// console.log(newname)
// console.log(typeof `highghi`)
// console.log("write multi line \n\
// like this \n\
// or")

// console.log(`just 
// like this
// using these quotes`)
// just use `` from now on. useful in string formatting too
//console.log(`name: ${firstname}`)

// conditionals
const age = 15;

if (age >= 18) {
console.log('Sarah can start driving')
} else {
    const years_left = 18-age
    console.log(`too young. can drive in ${years_left} years`)
}

let century //declare the variable outside the code block because you cannot access the variable 
// outside the code block if you declare it inside one
const byear = 1918
if (byear < 2000) {
    century = 20
} else {
    century = 21
}
console.log(`the century born in is ${century}`)

// type conversion and coercion
// type conversion: when it is manually done
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)
console.log(Number(`jonas`)) //output: NaN (which basically means Not a number). but typef NaN is number tho
console.log(String(18))
// type coercion: when it is done under the hood by js
// whatever makes the most sense

/* 
truthy and falsey values
falsey values: not exactly false but will become false if you try to convert them into boolean
there are 5 values: 0, undefined,'',null,NaN
truthy: everything else
js uses type coercion to booleans in two situations :
1. when using logical operators
2. in a logical context like using if else operators, for example read on
*/

const money = 0
if (money) {
    console.log('save a bit')
} else{
    console.log('get a fucking job')
}

let height
if (height) {
    console.log(`grow up lol`)
} else {
    console.log('you can still put on a couple inches')
}

