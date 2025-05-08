function removeDuplicates<T>(items: T[]) : T[] {
    return Array.from(new Set(items));
}

// Example 1: Numbers
const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4]


// Example 2: Strings
const fruits = ['apple', 'banana', 'apple', 'orange'];
const uniqueFruits = removeDuplicates(fruits);

console.log(uniqueFruits); // Output: ["apple", "banana", "orange"]

//Alternative Solution

function removeDuplicate<T>(arr : T[]) : T[] {
    return [...new Set(arr)];
}

// Example 1: Numbers
const nums = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicate(nums));

// Example 2: Strings
const strings = ['a', 'b', 'b', 'c', 'c', 'c' ];

console.log(removeDuplicate(strings));
