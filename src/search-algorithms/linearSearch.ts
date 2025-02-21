import { printComplexity, printMessage, printTitle } from "../utils";

printTitle("linear search");

const array = [1, 4, 565, 767, 7, 8, 2, 9];

printMessage(`Find 55 from ${array}`);
console.log(linearSearch(array, 55));

printMessage(`Find 565 from ${array}`);
console.log(linearSearch(array, 565));

printMessage(`Find 8 from ${array}`);
console.log(linearSearch(array, 8));

printComplexity("n");

export function linearSearch<T>(array: T[], item: T) {
   for (const index in array) {
      if (array[index] === item) return { match: true, index };
   }
   return { match: false };
}
