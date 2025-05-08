// Custom type guard to check if a value is a string

function isString(value: unknown) : value is string {
    return typeof value === "string";
}

// Function that uses the type guard
function printUpperCase(value: unknown) : void {
    if(isString(value)) {
        // Within this block, TypeScript knows 'value' is a string
        console.log(value.toUpperCase());
    }else{
        console.log("Value is not a string");
    }
}

printUpperCase("Hello Bangladesh"); // Output: "HELLO BANGLADESH"
printUpperCase(123); // Output: "Value is not a string"
printUpperCase(true); // Output: "Value is not a string"

//This structure a little bit similar with task#7 ("Narrowing" method) and task#11("unknown" method)