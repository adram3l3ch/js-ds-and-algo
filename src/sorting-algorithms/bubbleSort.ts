import { printComplexity, printMessage, printTitle } from "../utils";

printTitle("bubble sort");

const array = [5, 2, 34, 3, 6, 12, 25];
printMessage(`Sort ${array}`);
console.log(bubbleSort([...array]));

printComplexity("n^2");

export function bubbleSort(array: number[]) {
   let swapped = false;
   do {
      swapped = false;
      for (let i = 0; i < array.length - 1; i++) {
         if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            swapped = true;
         }
      }
   } while (swapped);
   return array;
}

// compare each element with the next elements if not sorted swap them, repeat this until no more swapping is needed
