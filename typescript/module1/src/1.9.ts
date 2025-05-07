{
//Alias in TypeScript
type User = {
    name: string;
    age: number;
  };
  
  const user: User = {
    name: "Azad",
    age: 30,
  };

  console.log({user});

  //Alias Optional Properties
  type Product = {
    id: number;
    name: string;
    description?: string; // optional
  };
  
  const item: Product = {
    id: 1,
    name: "Book",
  };
console.log({item});

//Student Management System (Object + Array Alias)
type Student = {
    id: number;
    name: string;
    grade: string;
  };
  
  type StudentList = Student[];
  
  let students: StudentList = [];
  
  function addStudent(s: Student) {
    students.push(s);
  }
  
  addStudent({ id: 1, name: "Rahim", grade: "A" });
  console.log(students);
//E-Commerce Cart (Object + Optional + Union)
type Status = "pending" | "shipped" | "delivered";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & {
  quantity: number;
  status?: Status;
};

let cart: CartItem[] = [];

cart.push({ id: 101, name: "Phone", price: 20000, quantity: 1 });
//
}