//Basic Supporting types

type Address = {
    street : string;
    city : string;
    country: string;
    postalCode? : string;
};

type HairAndEyeColor = {
    hairColor : string;
    eyeColor : string;
};

type IncomeAndExpense = {
    income : number;
    expense : number;
};

type Hobby = string;

type FamilyMember = {
    name : string,
    relation : string,
    age? : number,
};

type Job = {
    title : string;
    company : string;
    experienceInYears : number;
};

type Skill = {
    name : string;
    level : 'beginner' | 'intermediate' | 'advanced' | 'expert';
};

type MaritalStatus = 'single' | 'married';

type Friend = {
    name : string,
    contact : number,
};

//Main Person type alias
type Person = {
    name : string;
    address : Address;
    hairAndEyeColor : HairAndEyeColor;
    incomeAndExpense : IncomeAndExpense;
    hobbies : Hobby[];
    familyMembers : FamilyMember[];
    job : Job;
    skills : Skill[];
    maritalStatus : MaritalStatus;
    friends : Friend[];
};

const person : Person = {
    name : "Azad",
    address : {
        street : "Ketura Mosque Lane",
        city : "ctg",
        country : "Bangladesh"
    },
    hairAndEyeColor : {
        hairColor : "Brown",
        eyeColor : "blue",
    },
    incomeAndExpense : {
        income : 123456,
        expense : 234,
    },
    hobbies : ['reading' , 'programming', 'travelling'],
    familyMembers : [ {name : "Manha" , relation : "daughter", age : 6},
                    {name : 'Inaya' , relation : "daughter" , age : 1}
     ],
    job : {
        title : "Assistant Manager",
        company : "GPH Ispat Ltd",
        experienceInYears : 16,
    },
    skills : [{name : "Mastering on ReactJS, Nextjs and Prisma", level : "intermediate"},
        {name : "Next Level Web Development", level : "beginner"}
    ],
    maritalStatus : "married",
    friends : [{ name : "Younus", contact : 1234 },
        { name : "Rakan", contact : 2222 }
    ]
}

console.log(person);

