import { printComplexity, printTitle } from "../utils";

printTitle("power of two");

for (let i = 0; i <= 64; i++) {
   isPowerOfTwo(i) && console.log(`${i} is a power of two: ${recursiveIsPowerOfTwo(i)}`);
}

printComplexity("1");

export function isPowerOfTwo(n: number) {
   //the result of bitwise and for all the power of 2 and the previous number will always be zero
   return n >= 1 && (n & (n - 1)) === 0;

   while (n > 1) {
      if (n % 2 !== 0) return false;
      n = n / 2;
   }

   return n === 1;
}

export function recursiveIsPowerOfTwo(n: number) {
   if (n === 1) return true;
   if (n % 2 !== 0 || n < 1) return false;
   return recursiveIsPowerOfTwo(n / 2);
}
