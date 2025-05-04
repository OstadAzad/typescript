{
//---?---1.Ternary Operator(logic), 2. optinal chaining, 3. nullish coalescing
/*
const age: number = 25;

if (age >= 18) {
    console.log("adult");
} else {
    console.log("not adult");
}
*/
let age : number = 18;
const isAdult = age >= 18 ? "adult" : "not adult";

//console.log({isAdult});

//nullish coalescing operator
//null or undefined for decission making

const isAuthentication = '';
const result1 = isAuthentication ?? "Guest";
const result2 = isAuthentication ? isAuthentication : "guest";

console.log({result1}, {result2});

type user = {
    name : string;
    address : {
        city : string;
        dist : string;
        presentaddress : string;
        parmanentaddress?: string;
    }
}
   const person : user = {
    name : "siam",
    address : {
        city : "wasa",
        dist : "ctg",
        presentaddress : "ctg town",
    }
   }
   
   const PermanentAddress = person?.address?.parmanentaddress ?? "no permanent address"

   console.log({PermanentAddress});
   
   
   
   
   
    //
    }