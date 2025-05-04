// TypeScript Basic Data Types
// TS has mainly two data types. They are: 1. Primitive(number, string, boolean, null, undefined, symbol) 2. Non-primitive(array, object, tuple)

// number
let money : number = 5;

// string
let fname : string = "Inaya";

//boolean
let isAdmin : boolean = true;

//null
let a : null = null;

//undefined
let p : undefined = undefined;

//symbol
let id : symbol = Symbol("id");

//Array---Number
let age : Array<number> = [20, 25, 30];

//Array---String
let family : Array<string> = ["manha", "inaya", "marjan"];

//Tuple
let personInfo : readonly[string, number, number] = ["azad", 35, 123];

//or

let person = {
    fname : "azad",
    age : 35,
    cell : 123
};


