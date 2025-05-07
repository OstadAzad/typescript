//TypeScript Basic Data Type


let isDone : boolean = false;
console.log(typeof isDone);

let discount : number | null = 10;
console.log(discount);

let username : string = "azad";
let age : number = 35;
let premiumUser : boolean = true;
let token : null = null;
let data : undefined = undefined;
let id : symbol = Symbol("userID")

console.log({username}, {age}, {premiumUser}, {token}, {data}, {id});
/*
console.log({username});
console.log({age});
console.log({premiumUser});
console.log({token})
console.log({data});
console.log({id});
*/

let product : [string, number] = ["mobile" , 12345]
console.log({product});

function sum (a : number , b : number) : number  {
    return a + b;
}

console.log(sum(2, 5));
