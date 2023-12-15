/* 
 * Filename: sophisticatedCode.js
 * Description: A complex and elaborate JavaScript code example
 * Author: OpenAI
 */

// Function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to determine if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate fibonacci sequence up to a given number of terms
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// Function to perform bubble sort on an array
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Function to find the maximum element in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to calculate the average of an array of numbers
function calculateAverage(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

// Example usage
let num = 5;
console.log(`Factorial of ${num}: ${factorial(num)}`);

let person = new Person("John Doe", 25);
person.introduce();

let number = 17;
console.log(`${number} is prime: ${isPrime(number)}`);

let fibSequence = fibonacci(10);
console.log("Fibonacci sequence:", fibSequence);

let unsortedArray = [8, 2, 7, 4, 1];
let sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);

let numbers = [1, 5, 10, 3, 7];
let maxNumber = findMax(numbers);
console.log("Max number:", maxNumber);

let average = calculateAverage(numbers);
console.log("Average:", average);

// And many more complex and creative functionalities...