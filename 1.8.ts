{
//Array Destructuring
  const numbers = [10, 20, 30];
  const [first, second] = numbers;

  console.log({first}, {second});

  //skipping item in array
const colors = ['red', 'green', 'blue'];
const [, , third] = colors;

console.log({third}, {colors});

//profile card creator
function displayProfile({ name, email, social: { twitter, linkedin } }: any) {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Twitter: ${twitter}`);
    console.log(`LinkedIn: ${linkedin}`);
  }
  
  // ✅ Call the function with a matching object
  const userProfile = {
    name: 'Azad',
    email: 'azad@example.com',
    social: {
      twitter: '@azad123',
      linkedin: 'linkedin.com/in/azad'
    }
  };
  
  displayProfile(userProfile);
  //E-commerce cart summary
  const cart = [
    {name : 'pen', price : 10, qty : 3},
    {name : 'nootbook', price : 50, qty : 2}
  ]

for (const {name, price, qty} of cart){
    console.log(`${name}-Total: ${price*qty}`)
}

}