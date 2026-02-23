const { fibonacciGenerator } = require("./generator");
const { iteratorWithTimeout } = require("./iterator");

const fib = fibonacciGenerator();
iteratorWithTimeout(fib, 1);
