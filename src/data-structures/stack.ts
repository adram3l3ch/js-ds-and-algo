import { printMessage, printTitle } from "../utils";
import { LinkedList } from "../data-structures";

printTitle("Stack");

export class Stack<T extends Array<V>, V> {
   #values: T;
   constructor(...values: T) {
      this.#values = values.reverse() as T;
   }

   push(value: V) {
      this.#values.unshift(value);
   }

   pop() {
      return this.#values.shift();
   }

   peek() {
      return this.#values[0];
   }

   get size() {
      return this.#values.length;
   }

   print() {
      const biggestStringLength = this.#values.reduce((acc, value) => Math.max(acc, (value + "").length), 0);
      const border = "-".repeat(biggestStringLength + 4) + "\n";
      const valuesString = this.#values.reduce((acc, value) => {
         return acc + "| " + (value + "").padEnd(biggestStringLength + 1) + "|\n" + border;
      }, border);
      console.log(valuesString);
   }
}

const callback = () => {
   history.print();
   console.log("Size:", history.size);
};

const history = new Stack("https://google.com", "www.india.gov.in");
printMessage("Initiated with 2 history", callback);

history.push("wiki.com");
printMessage("Pushed: wiki.com", callback);

history.pop();
printMessage("Popped", callback);

export class LinkedListStack<T extends Array<V>, V> {
   #stack: LinkedList<T, V>;
   constructor(...values: T) {
      this.#stack = new LinkedList(...values);
   }

   push(value: V) {
      this.#stack.append(value);
   }

   pop() {
      this.#stack.removeFrom(this.#stack.size - 1);
   }

   print() {
      this.#stack.print();
   }
}
