//Define a "type" first
type userProfile = {
    name : string;
    age : number;
    role? : 'admin' | 'user' | 'guest';
}

//function that "return" "userProfile object/the above "type""
function createUserProfile(
    name : string, 
    age : number, 
    role ? : 'admin' | 'user' | 'guest',
) : userProfile {
    return ({name, age, role});
}
//create a "user" using the "type"
const user : userProfile = {
    name : "Azad",
    age : 25,
    role : "admin",
};

console.log({user}); // output = user: { name: 'Azad', age: 25, role: 'admin' }

//Solution 2

function profileUser(
    name : string,
    age : number,
    role? : 'admin' | 'user' | 'guest', // Optional parameter with literal type
) : void {
    if(role){
        console.log(`${name} is ${age} years old and has the role of ${role}.`);
    } else{
        console.log(`${name} is ${age} years old and has no specific role.`);
    }
}

profileUser('Jamil', 25, 'user'); // With role
profileUser('Rokan', 30, ); //Without role

