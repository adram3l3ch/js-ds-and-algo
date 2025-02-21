import { printComplexity, printMessage, printTitle } from "../utils";

printTitle("binary search");

printMessage("Find 8 from [1, 2, 3, 4, 5, 6, 7]");
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 8));

printComplexity("log n");

export function binarySearch<T>(array: T[], item: T) {
   let left = 0;
   let right = array.length - 1;
   while (right >= left) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === item) return { match: true, index: mid };
      if (item > array[mid]) {
         left = mid + 1;
      } else {
         right = mid - 1;
      }
   }
   return { match: false };
}

export function recursiveBinarySearch<T>(array: T[], item: T, leftPointer?: number, rightPointer?: number) {
   let left = leftPointer !== undefined ? leftPointer : 0;
   let right = rightPointer !== undefined ? rightPointer : array.length - 1;
   const mid = Math.floor((left + right) / 2);
   if (item < array[left] || item > array[right]) return { match: false };
   if (array[mid] === item) return { match: true, index: mid };
   if (right < left) return { match: false };
   if (item > array[mid]) {
      return recursiveBinarySearch(array, item, mid + 1, right);
   } else {
      return recursiveBinarySearch(array, item, left, mid - 1);
   }
}
