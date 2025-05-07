// Define the type of Employee

type Employee = {
    name : string,
    address? : {
        street? : string,
        city?: string,
    };
};

// Function to get the city using optional chaining
function getEmployeeCity(employee : Employee) : string | undefined {
    return employee.address?.city;
}


//Test the function
const emp1 : Employee = {
    name : "Jamil",
    address : {
        street : "basbaria",
        city : "Sitakunda",
    }  
};

const emp2 : Employee = {
    name : "sufina"
};

console.log(getEmployeeCity(emp1)); //output: Sitakunda
console.log(getEmployeeCity(emp2)); //output: undefined

