// CHALLENGE
//Who's name is longer?

/* BRONZE
Write two variables. One will store your name and another will store 
a friend's name. Find out what property you can use to check how long
the names are. Console log how many letters are in each name.
*/

// to create a variable, use let (var is legacy)

let t="toshaaa";
let c="chelsea";
console.log(t.length); 
console.log(c.length);

/* SILVER
Expand on what you have already done and write a conditional to see 
who has the longer name. Using string interpolation console log who's 
name is longer.
Example Result: My name is longer than Adam's.
*/

/* GOLD
In the console log include how many letters difference there are 
between the names. 
Example Result: Adam's name is shorter than mine by 1 letter.
There is also one additional case that should be handled that has 
not been mentioned so far. See if you can add that to your conditional!
*/

let myNameLength = t.length;
let myOtherName = c.length;

if (t.length>c.length) {
    console.log(`${t} is longer than ${c} by ${myNameLength - myOtherName} characters`);
} else if (t.length === c.length) {
    console.log(`${t} is equal in length to ${c}`);
} else {
    console.log(`${c} is longer than ${t} by ${myOtherName - myNameLength} characters`);
}

// CHALLENGE 2 - Types

/* BRONZE
Create an Object that contains a string, number, boolean, and object.
console.log the type of one of the values in the object.
*/

/*SILVER
Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean or object 
console.log 'What are you?!'

typeof --> tells you the TYPE of something 
*/

let car = {
    make: 'Tesla Model X',
    year: 2020,
    isCharged: true,
    gear: {}
}
console.log(car.year);

let valueToCheck = car.gear;

if (typeof valueToCheck === 'string') {
    console.log('This is a string');
} else if (typeof valueToCheck === 'number') {
    console.log('This is a number');
} else if (typeof valueToCheck === 'boolean') {
    console.log("This is a bool");
} else if (typeof valueToCheck === "object") {
    console.log("This is an object");
} else {
    console.log("WhAt ArE yOu?!");
}