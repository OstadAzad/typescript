function collectInput ( input : string | number) : number {
    if (typeof input === "string") {
        return input.length; // If input is a string, return its length // input is narrowed to string
    }
    else{
        return input * input; // If input is a number, return its square  // input is narrowed to number
    }
    }

    console.log(collectInput("codeEEE")); //output : 7
    console.log(collectInput(7)); //output : 49

//look in here, return value of this collectInput we given "number". Question is why? because
//1. function output string or number always give us a "number". So, ":number" is used in function must.

//This structure a little bit similar with task#11 or "unknown" method