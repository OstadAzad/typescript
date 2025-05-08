// Step 1: Define basic types
type User = {
    name : string,
    email : string,
};

type Admin = {
    adminLevel : number,
}

// Step 2: Intersection type
type AdminUser = User & Admin;

// Step 3: Function to describe admin
function describeAdmin(user: AdminUser) : string {
    return `Admin Name: ${user.name}, Email: ${user.email}, Level: ${user.adminLevel}`
}

// Step 4: Test the function
const admin1 : AdminUser = {
    name : "Azad",
    email : "azad@gmail.com",
    adminLevel : 1,
}

console.log(describeAdmin(admin1));

