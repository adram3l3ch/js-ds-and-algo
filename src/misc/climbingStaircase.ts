import { printComplexity, printTitle } from "../utils";

printTitle("cartesian product");

export function findClimbingStaircase(steps: number): number {
   if (steps <= 2) return steps;
   return findClimbingStaircase(steps - 1) + findClimbingStaircase(steps - 2);
}

console.log(findClimbingStaircase(4));
