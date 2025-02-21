import { printComplexity, printTitle } from "../utils";

printTitle("cartesian product");

console.log(findCartesianProduct([1, 2, 5], [3, 4]));

printComplexity("ab");

export function findCartesianProduct(a: number[], b: number[]) {
   const result = [];
   for (const ele1 of a) {
      for (const ele2 of b) {
         result.push([ele1, ele2]);
      }
   }
   return result;
}
