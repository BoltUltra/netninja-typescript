let age: number = 30;
console.log(age);

// ----------------
// Object Literals
// ----------------

let user: { fname: string; age: number; id: number } = {
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

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

addTwoNumbers(10, 20);

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAllNumbers([10, 20, 30, 40]);

// -----------------------
// return type inference
// -----------------------

function formatGreeting(name: string, greetings: string) {
  return `${greetings}, ${name}`;
}

const result = formatGreeting("Mayowa", "Hello");

// --------
// any type
// --------

let dob: any;

dob = 30;
dob = false;

// ---------------------
// any type in arrays
// ---------------------

let mixed: any[] = ["hello", true, 20, null];
mixed.push({ id: 123 });

// ---------------------
// functions & any
// ---------------------

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether("hello");
const resultTwo = addTogether(3);

// --------
// tuples
// --------

let student: [string, number, boolean] = ["mayowa", 30, false];

// -----------------
// tuple example
// -----------------

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 0.5];

let xy: [number, number];
xy = [94.7, 20.1];

// -----------------
// tuple example
// -----------------

let someone: [name: string, age: number];
someone = ["peach", 25];

// -----------------
// interfaces
// -----------------

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "James", avatar: "/img/mario.png" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "My first post",
  body: "lorem ipsum",
  tags: ["web", "mobile"],
  create_at: new Date(),
  author: authorOne,
};
