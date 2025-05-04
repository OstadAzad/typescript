//Dedustructuring

const worker = {
    id : 234,
    name : {
        fname : "abul",
        mname : "kalam",
        lname : "azad"
    },
    contactno : "01814868644",
    address : "ctg"
}

const {contactno, name : {mname}} = worker;

//array destructuring

const myFrnds = ["romel", "raju", "younus", "rakib", "minhaz"];

const [,, bestFrnd, ...rest] = myFrnds;

