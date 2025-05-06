{
//Ternary Operator Basic
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"

//Nested Ternary Operator
const marks = 85;
const grade = marks > 90 ? "A+" : marks > 75 ? "A" : "B";
console.log(grade); // Output: "A"

//Optional Chaining on Object
const user = { name: "Azad", address: { city: "Dhaka" } };
console.log(user.address?.city);  // Output: "Dhaka"
console.log(user.contact?.phone); // Output: undefined

//Optional Chaining on Function
const obj = {
    greet: () => "Hello"
  };
  
  console.log(obj.greet?.()); // Output: "Hello"
  console.log(obj.sayBye?.()); // Output: undefined

  //Optional Chaining on Array
  const users = [{ name: "Ali" }, { name: "Sara" }];
console.log(users[1]?.name); // Output: "Sara"
console.log(users[2]?.name); // Output: undefined

//Nullish Coalescing Basic
let username: string | null = null;
const displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"

//Nullish vs OR Operator
const value = 0;
console.log(value || 100);  // Output: 100 ❌ (0 is falsy)
console.log(value ?? 100);  // Output: 0 ✅

//User Profile Display
type User = {
    name?: string;
    age?: number;
    address?: {
      city?: string;
      zip?: string;
    };
  };
  
  const user: User = { name: "Azad" };
  
  console.log("Name:", user.name ?? "Unknown");
  console.log("City:", user.address?.city ?? "Not Provided");

//
}