import { printComplexity, printMessage, printTitle } from "../utils";

printTitle("merge sort");

const array = [4, 2, 6, 145, 1, 34, 3];
printMessage(`Sort ${array}`);
console.log(mergeSort(array));

printComplexity("n log n");

function splitArray(array: number[]) {
   const mid = Math.floor(array.length / 2);
   return { left: array.slice(0, mid), right: array.slice(mid) };
}

function mergeArray(left: number[], right: number[]) {
   const mergedArray: number[] = [];
   while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
         const number = left.shift();
         if (number) mergedArray.push(number);
      } else {
         const number = right.shift();
         if (number) mergedArray.push(number);
      }
   }
   return mergedArray.concat(left, right);
}

export function mergeSort(array: number[]): number[] {
   if (array.length < 2) return array;
   const { left, right } = splitArray(array);
   return mergeArray(mergeSort(left), mergeSort(right));
}
