//TypeScript Function
//1.Nomal Function 2.Arrow Function

function add (num1 : number, num2 : number) : number {
    return num1 + num2;
}

add( 3, 5);

const addarrow = (num1 : number, num2 : number) : number => num1 + num2; //arrow funciton

add(5, 6);

//object--in function---called method

const empUser = {
    name : "azad",
    balance : 0,
    
    addBalance(balance: number) : number {
        return this.balance + balance;
    }

}

const array : number[] = [1, 2, 3, 4, 5];

const newArray : number[] = array.map( (elem : number) : number => elem*elem); //callback function
