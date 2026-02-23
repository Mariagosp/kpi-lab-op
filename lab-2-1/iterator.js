async function iteratorWithTimeout(iterator, durationSeconds) {
  const startTime = Date.now();
  const timeoutMs = durationSeconds * 1000;

  let count = 0;
  let sum = 0n;

  while (Date.now() - startTime < timeoutMs) {
    const { value, done } = iterator.next();

    if (done) {
      console.log("Iterator finished");
      break;
    }

    count++;
    sum += BigInt(value);

    console.log(`[${new Date().toLocaleTimeString()}]`);
    console.log(`Iteration #${count}: Value = ${value}`);
    console.log(`Total Sum: ${sum}`);
    console.log("---------------------------");

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log(`\nTime's up`);
}

module.exports = { iteratorWithTimeout };
