function processData(data: unknown) : string | number | null {
    // Check if data is a string
    if(typeof data === "string") {
        return data.toUpperCase(); // Convert string to uppercase
    }
    // Check if data is a number
    if(typeof data === "number") {
        return data * data; // Square the number
    }
    // If data is not string or number
    return null; // or you can return a custom message
}

console.log(processData("Assalamualikum!")); //output : ASSALAMUALIKUM!
console.log(processData(9)); //output : 81
console.log(processData(true)); //output : null
console.log(processData([1, 2, 3])); //output : null
console.log(processData(undefined)); //output : null

//This structure a little bit similar with task#7 or "Narrowing" method