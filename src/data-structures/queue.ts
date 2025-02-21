import { printMessage, printTitle } from "../utils";

printTitle("Queue");

export class Queue<T> {
   #items: T[];
   constructor(...values: T[]) {
      this.#items = values;

      // this.#items = {}
      // this.front = 0
      // this.rear = 0
   }

   enqueue(...value: T[]) {
      return this.#items.push(...value);
   }

   dequeue() {
      return this.#items.shift();
   }

   get head() {
      return this.#items[0];
   }

   get tail() {
      return this.#items.at(-1);
   }

   get size() {
      return this.#items.length;
   }

   isEmpty() {
      return !this.#items.length;
   }

   print() {
      const values = this.#items.join(" | ");
      console.log("_".repeat(values.length + 4));
      console.log(`| ${values} |`);
      console.log("*".repeat(values.length + 4));
   }
}

const callback = () => {
   numbers.print();
   console.log("Size:", numbers.size);
};

const numbers = new Queue(1, 2, 3, 4, 5);
printMessage("Initiated with: 1,2,3,4,5", callback);

console.log("Is Empty:", numbers.isEmpty());

console.log("Head", numbers.head);
console.log("Tail", numbers.tail);

numbers.enqueue(6, 7, 8, 9);
printMessage("Enqueues with: 6,7,8,9", callback);

numbers.dequeue();
printMessage("Dequeued", callback);
numbers.dequeue();
printMessage("Dequeued", callback);
