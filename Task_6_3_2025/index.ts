//Task 6/3/2025 

//Identify if a Number is Even or Odd
//You are given a variable num Check whether the number is even or odd, without using a function.

// Identify if a Number is Even or Odd
let num: number = 7;
if (num % 2 === 0) {
    console.log('${num} is even');
} else {
    console.log('${num} is odd');
}


//Filter Expensive Products from an Array :
//You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
// Filter Expensive Products from an Array

let prices: number[] = [100, 250, 300, 150, 600, 50];
let threshold: number = 200;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > threshold) {
        console.log('Expensive product price: ${prices[i]}');
    }
}


//Sum All Elements in an Array
//You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
// Sum All Elements in an Array


let numbers: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log('Sum of all elements: ${sum}');
