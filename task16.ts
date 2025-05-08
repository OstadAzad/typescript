// Define an interface
interface Person {
    name : string,
    age : number,
    email?: string,
}

// Generic function using keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K) : T[K] {
    return obj[key];
}

// Create an object
const person : Person = {
    name : "Azad",
    age : 25,
    email : "azad@gmail.com",
}

// Test the function
console.log(getProperty(person, "name")); //output : Azad
console.log(getProperty(person, "age")); //output : 25
console.log(getProperty(person, "email")); //output : azad@gmail.com

// Trying to access invalid property would cause TypeScript error
// console.log(getProperty(person, "address")); 
// Error: Argument of type '"address"' is not assignable to parameter of type 'keyof Person'

// Let's see the types in action
const nameValue = getProperty(person, "name");
console.log(typeof nameValue); // Output: "string"

const ageValue = getProperty(person, "age");
console.log(typeof ageValue); // Output: "number"

const emailValue = getProperty(person, "email");
console.log(typeof emailValue); // Output: "string" (or "undefined" if email wasn't provided)