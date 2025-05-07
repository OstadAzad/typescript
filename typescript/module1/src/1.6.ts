//TypeScript Function

function greet(name? : string) : string {
    return name? `Hello! ${name}`: "Hello!";
}
console.log(greet("Inaya"));


function welcome(name : string = "Guest") : string {
    return `Hello, ${name}`;
}
console.log(welcome());

function sum (...numbers : number[]) : number {
    return numbers.reduce((a , b) => a + b, 0);
}

console.log(sum(2, 3))
