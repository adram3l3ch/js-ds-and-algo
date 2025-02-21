import { printComplexity, printMessage, printTitle } from "../utils";

printTitle("selection sort");

const array = [6, 5, 2, 34, 3, 6, 12, 2, 6, 25];
printMessage(`Sort ${array}`);
console.log(array, selectionSort([...array]));

printComplexity("n^2");

export function selectionSort(array: number[]) {
   for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
         if (array[minIndex] > array[j]) {
            minIndex = j;
         }
      }
      if (minIndex !== i) {
         [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
   }
   return array;
}

// compare each element with next elements and find the smaller element , swap them , repeat
