import { printComplexity, printTitle } from "../utils";

printTitle("factorial");

for (let i = 0; i <= 5; i++) {
   console.log(`${i}!: ${factorial(i)}`);
}

printComplexity("n");

export function factorial(n: number) {
   let result = 1;
   for (let i = 2; i <= n; i++) {
      result *= i;
   }
   return result;
}
