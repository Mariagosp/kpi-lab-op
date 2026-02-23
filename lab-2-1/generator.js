"use strict";

function* fibonacciGenerator() {
  let prev = 0n;
  let curr = 1n;
  // let [prev, curr] = [0, 1];

  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

module.exports = { fibonacciGenerator };
