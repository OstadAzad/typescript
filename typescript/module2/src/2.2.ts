{
//
/*Step-by-Step Learning: TypeScript interface and type
Topic	Description
1. Interface	Used to define object structure (shape), mostly for objects, functions, and classes.
2. Type Alias	Can define object types like interface, but also works for unions, primitives, tuples, etc.
3. When to Use	Use interface for object-oriented patterns and type for complex types, unions, etc.
*/

//TypeScript interface: Syntax & Examples
interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // optional
  }
//TypeScript type: Syntax & Examples
type Person = {
    name: string;
    age: number;
    isStudent?: boolean;
  };
//Extending

interface Animal { name: string }
interface Dog extends Animal { breed: string }

type AnimalT = { name: string }
type DogT = AnimalT & { breed: string }
//Reopening (interface can, type cannot)
interface A { x: number }
interface A { y: string }

type B = { x: number }
// type B = { y: string } ❌ Error: duplicate identifier

/* Project 1: Simple User Management System
Features:

Use interface for user object

Use type for user roles (admin, editor, viewer)

Class that implements the User interface
*/
interface User {
    id: number;
    name: string;
    role: UserRole;
  }
  
  type UserRole = 'admin' | 'editor' | 'viewer';
  
  class Account implements User {
    constructor(public id: number, public name: string, public role: UserRole) {}
  }
/*
Project 3: Product Catalog
Features:

interface for Product

type for Category ('electronics' | 'books' | 'clothing')

Use array of products with destructuring
*/
interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
  }
  
  type Category = 'electronics' | 'books' | 'clothing';
  
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 999, category: "electronics" }
  ];
  








//
}