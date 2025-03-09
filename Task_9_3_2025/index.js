function checkAge(person) {
    if (person.age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
}
// Example usage:
var person = { name: "M7MD", age: 22 };
checkAge(person); // Output: Adult
// Create a teacher object
var teacher = {
    name: "Mohammad ",
    subjects: ["Math", "Science", "History"]
};
// Iterate through the subjects array and print each subject
console.log("".concat(teacher.name, " teaches:"));
teacher.subjects.forEach(function (subject) {
    console.log(subject);
});
// Create an array of products
var products = [
    { name: "Laptop", price: 1000, quantity: 3 },
    { name: "Mouse", price: 50, quantity: 10 },
    { name: "Keyboard", price: 80, quantity: 7 },
    { name: "Monitor", price: 300, quantity: 4 }
];
// Modify prices if quantity is greater than 5
products.forEach(function (product) {
    if (product.quantity > 5) {
        product.price *= 0.85; // Reduce price by 15%
    }
});
// Print updated products
console.log("Updated Product List:");
products.forEach(function (product) {
    console.log("".concat(product.name, ": $").concat(product.price.toFixed(2), ", Quantity: ").concat(product.quantity));
});
