{
//never with a throwing function

function throwError(message: string): never {
    throw new Error(message);
  }

  //unknown vs any

  let valueAny: any = "Hello";
let valueUnknown: unknown = "Hello";

valueAny.toUpperCase();       // ✅ allowed
// valueUnknown.toUpperCase(); // ❌ Error

if (typeof valueUnknown === "string") {
  console.log(valueUnknown.toUpperCase()); // ✅ Safe use
}

//Nullable type

function greet(name: string | null) {
    if (name === null) {
      console.log("Hello Guest");
    } else {
      console.log(`Hello ${name}`);
    }
  }

//
}