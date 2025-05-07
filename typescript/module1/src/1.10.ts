{
//Union in Variables
let userId: string | number;

userId = "azad123";
userId = 456;

console.log(userId);
//Intersection with Object Types
type User = { name: string };
type Admin = { isAdmin: boolean };

type AdminUser = User & Admin;

const person: AdminUser = {
  name: "Azad",
  isAdmin: true
};
console.log({person})

//User Role Checker
type User = { name: string };
type Admin = { role: "admin" };
type Guest = { role: "guest" };

type AppUser = User & (Admin | Guest);

function checkRole(user: AppUser) {
  if (user.role === "admin") {
    console.log(`${user.name} has admin access.`);
  } else {
    console.log(`${user.name} is a guest.`);
  }
}









//
}