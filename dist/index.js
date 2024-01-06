"use strict";
let age = 30;
console.log(age);
// ----------------
// Object Literals
// ----------------
let user = {
    fname: "Mayowa",
    age: 25,
    id: 1,
};
user.fname = "Damilola";
user.id = 10;
let person = {
    name: "June",
    score: 35,
};
person.name = "Rosemary";
// ----------
// Functions
// ----------
function addTwoNumbers(a, b) {
    return a + b;
}
addTwoNumbers(10, 20);
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([10, 20, 30, 40]);
// -----------------------
// return type inference
// -----------------------
function formatGreeting(name, greetings) {
    return `${greetings}, ${name}`;
}
const result = formatGreeting("Mayowa", "Hello");
// --------
// any type
// --------
let dob;
dob = 30;
dob = false;
// ---------------------
// any type in arrays
// ---------------------
let mixed = ["hello", true, 20, null];
mixed.push({ id: 123 });
// ---------------------
// functions & any
// ---------------------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(3);
// --------
// tuples
// --------
let student = ["mayowa", 30, false];
// -----------------
// tuple example
// -----------------
let hsla;
hsla = [200, "100%", "50%", 0.5];
let xy;
xy = [94.7, 20.1];
// -----------------
// tuple example
// -----------------
let someone;
someone = ["peach", 25];
const authorOne = { name: "James", avatar: "/img/mario.png" };
const newPost = {
    title: "My first post",
    body: "lorem ipsum",
    tags: ["web", "mobile"],
    create_at: new Date(),
    author: authorOne,
};
