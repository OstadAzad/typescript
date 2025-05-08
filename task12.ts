function handleError(message: string) : never {
    throw new Error(message);
}

try {
    handleError("someting is wrong!");
}
catch(error) {
    console.log("Caught an error:", (error as Error).message);
}
  

