/* filename: complexCode.js */

// The purpose of this code is to perform complex mathematical calculations using advanced algorithms and data structures.

// Define a class for a complex number with functions to perform various operations
class ComplexNumber {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  add(other) {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  subtract(other) {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  multiply(other) {
    const real = this.real * other.real - this.imag * other.imag;
    const imag = this.real * other.imag + this.imag * other.real;
    return new ComplexNumber(real, imag);
  }

  divide(other) {
    const denominator = other.real * other.real + other.imag * other.imag;
    const real = (this.real * other.real + this.imag * other.imag) / denominator;
    const imag = (this.imag * other.real - this.real * other.imag) / denominator;
    return new ComplexNumber(real, imag);
  }

  toString() {
    return `${this.real} + ${this.imag}i`;
  }
}

// Create complex numbers
const num1 = new ComplexNumber(2, 3);
const num2 = new ComplexNumber(4, 1);

// Perform complex operations
const sum = num1.add(num2);
const difference = num1.subtract(num2);
const product = num1.multiply(num2);
const quotient = num1.divide(num2);

// Print the results
console.log("Sum: ", sum.toString());
console.log("Difference: ", difference.toString());
console.log("Product: ", product.toString());
console.log("Quotient: ", quotient.toString());

// Additional complex calculations...

// Define a class for a matrix with functions to perform matrix operations
class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array(rows).fill().map(() => Array(cols).fill(0));
  }

  fillRandom() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.random();
      }
    }
  }

  multiplyScalar(scalar) {
    const result = new Matrix(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.data[i][j] = this.data[i][j] * scalar;
      }
    }
    return result;
  }

  transpose() {
    const result = new Matrix(this.cols, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.data[j][i] = this.data[i][j];
      }
    }
    return result;
  }

  static multiply(matrix1, matrix2) {
    if (matrix1.cols !== matrix2.rows) {
      throw new Error("Invalid matrix dimensions!");
    }

    const result = new Matrix(matrix1.rows, matrix2.cols);
    for (let i = 0; i < matrix1.rows; i++) {
      for (let j = 0; j < matrix2.cols; j++) {
        let sum = 0;
        for (let k = 0; k < matrix1.cols; k++) {
          sum += matrix1.data[i][k] * matrix2.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }
    return result;
  }
}

// Create matrices
const matrix1 = new Matrix(3, 2);
const matrix2 = new Matrix(2, 4);
matrix1.fillRandom();
matrix2.fillRandom();

// Perform matrix operations
const scalar = 2.5;
const productScalar = matrix1.multiplyScalar(scalar);
const productTranspose = matrix1.transpose();
const productMatrix = Matrix.multiply(matrix1, matrix2);

// Print the results
console.log("Matrix 1:");
console.log(matrix1.data);
console.log("Matrix 2:");
console.log(matrix2.data);
console.log("Scalar Product:");
console.log(productScalar.data);
console.log("Transpose Product:");
console.log(productTranspose.data);
console.log("Matrix Product:");
console.log(productMatrix.data);

// More complex calculations...
// ...
// ...

// End of complexCode.js