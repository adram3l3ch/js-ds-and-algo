import { printComplexity, printMessage, printTitle } from "../utils";

printTitle("selection sort");

const array = [5, 3, 6];
printMessage(`Sort ${array}`);
console.log(array, insertionSort([...array]));

printComplexity("n^2");

export function insertionSort(array: number[]) {
   for (let i = 1; i < array.length; i++) {
      const numberToInsert = array[i];
      let j = i - 1;
      while (j >= 0 && numberToInsert < array[j]) {
         array[j + 1] = array[j];
         j--;
      }
      array[j + 1] = numberToInsert;
   }
   return array;
}

// split array into two sections sorted and unsorted , compare each element from unsorted array with elements in sorted array , if not sorted push the element from sorted array to right , else place the add the comparing number to the right
