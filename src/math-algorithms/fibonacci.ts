import { printComplexity, printTitle } from "../utils";

printTitle("Fibonacci");

for (let i = 1; i <= 10; i++) {
   console.log(`${i} elements: ${fibonacci(i)}`);
}

printComplexity("n");

export function fibonacci(limit: number) {
   const fibonacciArray = [0, 1];
   if (limit <= fibonacciArray.length) return fibonacciArray.slice(0, limit);
   for (let i = 2; i < limit; i++) {
      fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
   }
   return fibonacciArray;
}
