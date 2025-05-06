//TypeScript Object, Optional and Literal Types

type user = {
 name : string;
 age : number;
}

const emp : user = { name : "azad" , age : 35};

console.log({emp});

type product = {
    id : number,
    title : string,
    price : number
}

const deliverynote : product = {id : 2, title : "laptop", price : 50}
console.log({deliverynote});


type UserProfile = {
    name : string;
    email? : string;
    role : "admin" | "user"
}

const user: UserProfile = {
    name : "azad",
    role : "admin",
}

console.log({user})