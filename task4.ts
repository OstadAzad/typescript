//define book interface
interface Book {
    title : string,
    author : string,
    pages : number,
}
//define magazine interface
interface Magazine {
    title : string,
    publisher : string,
    issue : number,
}

// Union type: Can be either Book or Magazine
type readingMaterial = Book | Magazine;
// Intersection type: Must have all properties of both Book and Magazine
type bookAndMagazine = Book & Magazine;

// Using union type
const item1 : readingMaterial = {
    title : "Bangladesh and Nature",
    author : "rokan",
    pages : 345,
};

const item2 : readingMaterial = {
    title : "Bangladesh times",
    publisher : "abc e-commerce",
    issue : 34
}

// Using intersection type
const item3 : bookAndMagazine = {
    title : "pqr stellite",
    author : "azad",
    pages : 123,
    publisher : "xyz",
    issue : 556,
}

console.log(item1, item2, item3);


