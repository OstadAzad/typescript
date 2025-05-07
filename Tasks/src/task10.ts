function getDisplayName(name: string | null | undefined) : string {
    return name ?? "Anonymous";
}

console.log(getDisplayName("Azad")); //output : Azad
console.log(getDisplayName(null)); //output : Anonymous
console.log(getDisplayName(undefined)); //output : Anonymous
console.log(getDisplayName("")); //output : "" (Not Anonymous)