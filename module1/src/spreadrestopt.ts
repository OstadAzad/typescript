//1. Spread Operator, 2. Rest Operator 3. Destructuring Operator

//Spread Operator
const empName1 : string[] = ["jamil", "rokan", "rasel"];
const empName2 : string[] = ["sahadat", "noman", "sufian"];

empName1.push(...empName2);

const science = {
    physics : "light",
    chemistry : "equation",
    biology : "human body",
}

const commerce = {
    accounting : "jabeda",
    finance : "balance sheet",
    banking : "master paper"
}

const subjectlist = {
    ...science,
    ...commerce
}

//learn rest operator

const greetFriends = (...frineds : string[]) =>  {
  //  console.log(`Hi ${friend1} ${friend2} ${friend3}`);

  frineds.forEach((friend : string) => console.log(`Hi ${"tasnim"}`));
}

greetFriends("mizan", "minhaz", "azad", "inaya", "manha");