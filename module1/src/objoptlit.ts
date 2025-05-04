//TypeScript-Object

const user : {fname : string, mname : string, lname : string} = {
    fname : "Abul",
    mname : "Kalam",
    lname : "Azad"
};

const empInfo : {
    readonly company : string, //"GPH Ispat Ltd" literals type; fixed value is called literals type.
    empname : string, 
    empsalary?: number, //"?" this sign is optional. It is called optional tag.
    empid : number,
    isMarried : boolean
        } 
    = {
    company : "GPH Ispat Ltd", //"GPH Ispat Ltd" literals type; fixed value is called literals type.
    empname : "jamil",
    empid : 123,
    isMarried : true
    };

//empInfo.company = "gph steel" //please see line no 10;

/* // Using interface (better for objects)
interface User {
    fname: string;
    mname: string;
    lname: string;
}

const user: User = {
    fname: "Abul",
    mname: "Kalam",
    lname: "Azad"
};

// Using type alias
type Employee = {
    readonly company: "GPH Ispat Ltd"; // Literal type
    empname: string;
    empsalary?: number; // Optional
    empid: number;
    isMarried: boolean;
};

const empInfo: Employee = {
    company: "GPH Ispat Ltd",
    empname: "jamil",
    empid: 123,
    isMarried: true
};
*/