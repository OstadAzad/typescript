//Spread and Rest Operator
//Spread Operator
const numbers = [1, 2, 3];
const copy = [...numbers];

console.log(copy)
//merging arrays
const frontEnd = ["HTML", "CSS"];
const backEnd = ["node.js", "Expressjs"];

const fullStack = [...frontEnd, "JavaScript",...backEnd];

console.log({fullStack});

//copying object
const person = {name : "manha", age : 7};
const copyuser = {...person};

console.log({copyuser});

//merging object
const a = { x : 1};
const b = { y : 2, Z : 3};
const merged = {...a,...b};

console.log({merged});

//Basic Array Speading
const ar1 = [1, 2, 3];
const ar2 = [...ar1, 4, 5, 6];

console.log(ar2);

//combining object

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };

console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }

//Function Arguments with Spread

function sum (a : number, b : number, c : number) {
    return a + b + c;
}

const nums = [10, 20, 30];

console.log(sum(...nums));

//Rest Operator-Function Parameters

function greet(message : string, ...names : string[]) {
    return `${message} ${names.join(',')}`;
}

console.log(greet("Hello!", "azad", "manha"));

//destructuring array
const [first,...others] = [10, 20, 30, 40];

console.log({first});
console.log({others});

//destructuring object
const {fname,...details} = {
    fname : "azad",
    age : 35,
    country : "Bangladesh",
}

console.log({fname}, {details});
//filtering object parameter dynamically

const User = {
id : 1,
name : "azad",
password : "secret",
};

const {password,...safeUser} = User;

console.log({safeUser}, (User.password));

//Merge and Filter User Profile

type User = {
id : number;
name : string;
email : string;
passwords : string;
}

const user1 : User = {
    id : 1,
    name : "manha",
    email : "azads5390@gmail.com",
    passwords : "123abc",
};

const user2 : User = {
    ...user1,
    name : "Inaya",
    email : "azads@gmail.com",
};

const {passwords,...publisher} = user2;

console.log({publisher});

//dynamic shopping cart

function addToCart(initial: string[],...newItems: String[]) {
    return [...initial,...newItems];
}

const cart = ['book'];

const updatedCart = addToCart(cart, "pen", "laptop", "notebook")
console.log({updatedCart});
