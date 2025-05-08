// Step 1: Create a Type Alias for User

type User = {
    name : string,
    age : number;
}


// Step 2: Create an async function to simulate fetching user data
async function fetchUserData(): Promise<User> {
    await new Promise (resolve => setTimeout(resolve, 2000)); // Simulate 2 seconds delay

    // Return mock user data
    return {
        name : "Azad",
        age : 25,
    }
}
// Step 3: Call the async function and print the result
async function displayUser(){
    console.log("fetching user data...");
    const user = await fetchUserData();
    console.log("user fetched", user);
}

displayUser();

/*
output :
Fetching user data...
(wait 2 seconds)
User fetched: { name: 'Azad', age: 30 }
*/
