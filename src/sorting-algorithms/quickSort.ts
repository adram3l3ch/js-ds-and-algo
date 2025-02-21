import { printComplexity, printMessage, printTitle } from "../utils";

printTitle("quick sort");

const array = [5, 2, 34, 3, 25, 6, 12];
printMessage(`Sort ${array}`);
console.log(array, quickSort([...array]));

printComplexity("n^2");
printComplexity("n log n");

export function quickSort(array: number[]): number[] {
   if (array.length <= 1) return array;
   const pivot = array[array.length - 1];
   const left: number[] = [];
   const right: number[] = [];
   for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > pivot) right.push(array[i]);
      else left.push(array[i]);
   }
   return [...quickSort(left), pivot, ...quickSort(right)];
}

// take a pivot create two sub arrays which is less than pivot and greater than pivot , repeat til get one single number , concatenate the results
