//Typescript Assertion/Type Narrowing
/*What is Type Assertion?
Type assertion tells TypeScript:

“Trust me, I know better — this value is of this specific type.”
*/

let someValue: unknown = "I am a string";
let strLength: number = (someValue as string).length;

console.log({strLength});

/*
What is Type Narrowing?
Type narrowing means TypeScript automatically detects the more specific type based on conditions.
*/
function printId(id: number | string) {
    if (typeof id === "string") {
      console.log(id.toUpperCase()); // TypeScript knows it's a string
    } else {
      console.log(id); // number
    }
  }
  
  //Type Assertion with Unknown
  let value: unknown = "Hello";
let strLength = (value as string).length;

//Type Narrowing with typeof
function double(val: number | string) {
    if (typeof val === "number") {
      return val * 2;
    }
    return val + val;
  }
//  