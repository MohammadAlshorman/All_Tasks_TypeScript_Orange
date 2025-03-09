interface Person {
    name: string;
    age: number;
  }
  
  function checkAge(person: Person): void {
    if (person.age > 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }
  }
  
  // Example usage:
  const person: Person = { name: "M7MD", age: 22 };
  checkAge(person); // Output: Adult


  ////////////////
  // Define the Teacher interface
interface Teacher {
  name: string;
  subjects: string[];
}

// Create a teacher object
const teacher: Teacher = {
  name: "Mohammad ",
  subjects: ["Math", "Science", "History"]
};

// Iterate through the subjects array and print each subject
console.log(`${teacher.name} teaches:`);
teacher.subjects.forEach(subject => {
  console.log(subject);
});

 

// Define the Product interface
interface Product {
  name: string;
  price: number;
  quantity: number;
}

// Create an array of products
const products: Product[] = [
  { name: "Laptop", price: 1000, quantity: 3 },
  { name: "Mouse", price: 50, quantity: 10 },
  { name: "Keyboard", price: 80, quantity: 7 },
  { name: "Monitor", price: 300, quantity: 4 }
];

// Modify prices if quantity is greater than 5
products.forEach(product => {
  if (product.quantity > 5) {
      product.price *= 0.85; // Reduce price by 15%
  }
});

// Print updated products
console.log("Updated Product List:");
products.forEach(product => {
  console.log(`${product.name}: $${product.price.toFixed(2)}, Quantity: ${product.quantity}`);
});





