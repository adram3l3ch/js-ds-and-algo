import { printComplexity, printTitle } from "../utils";

printTitle("Prime number");

for (let i = 0; i <= 10; i++) {
   console.log(`${i} is prime: ${isPrime(i)}`);
}

printComplexity("sqrt(n)");
// printComplexity("n");

export function isPrime(n: number) {
   // every prime number has a divisor less than or equal to its square root

   // n = a * b , a,b !==1 && a,b !==n
   // if a and b are greater than root n then a*b > n , its contradicting , so either a or b must be less than root n
   for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
   }

   // for (let i = 2; i < n; i++) {
   //    if (n % i === 0) return false;
   // }
   return n > 1;
}
