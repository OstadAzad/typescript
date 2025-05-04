{
//Union types

type result = "good" | "very good"

const exam : result = "good"

type user = {
    name : string,
    id : number,
    email? : string,
    gender : "male" | "female";
    bloodgroup : "O+"|"A+"; 
}

const user1 : user = {
    name : "azad",
    id : 234,
    gender : "male",
    bloodgroup : "A+"
}

type stu1 = {
    knowledge : string[],
    school1 : "A high school"
}

type stu2 = {
    knowledge : string[],
    school2 : "B high school"
}

type Stu = stu1 & stu2

const Students : Stu = {
    knowledge : ["math", "physics", "chemistry"],
    school1 : "A high school",
    school2 : "B high school"

}








//
}