{
//  Type Alias

type student = {
    name : string,
    age : number;
    gender : string;
    contactNo : string;
    address : string;
}


const student1 : student
= {
    name : "sahin",
    age : 12,
    gender : "male",
    contactNo : "018",
    address : "ctg"
}

const student2 : student = {
    name : "pria",
    age : 14,
    gender : "female",
    contactNo : "017",
    address : "dhaka",
}

type UserName = string;
type IsAdmin = boolean;

const username : UserName = "piyal";
const isadmin : IsAdmin = true;

type add = (num1 : number, num2 : number) => number;

const sum : add = (num1, num2) => num1 + num2;







//
}