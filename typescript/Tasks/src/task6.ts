function sum(...numbers : number[]) : number { 
    return numbers.reduce((total, num) => (total + num), 0); //reduce is calculating method
}
console.log(sum(2, 3, 6)); //output : 11
console.log(sum(5, 10, 15)); //output : 30

//(...numbers is a rest operator)
// number[] is number type data
// :number is means output result will become number.