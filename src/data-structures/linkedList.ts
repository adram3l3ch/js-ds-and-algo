import { printMessage, printTitle } from "../utils";

printTitle("Linked List");

class Node<T extends Array<V>, V> {
   constructor(public value: V, public next: Node<T, V> | null = null) {}
}

export class LinkedList<T extends Array<V>, V> {
   #head: Node<T, V> | null = null;
   size = 0;

   constructor(...values: T) {
      if (!values.length) return;
      let current: Node<T, V> | null = null;
      for (const index in values) {
         const node = new Node(values[index]);
         if (index === "0") this.#head = node;
         else current!.next = node;
         current = node;
      }
      this.size = values.length;
   }

   isEmpty() {
      return !this.size;
   }

   prepend(value: V) {
      const node = new Node(value);
      if (this.isEmpty()) this.#head = node;
      else {
         node.next = this.#head;
         this.#head = node;
      }
      this.size++;
   }

   append(value: V) {
      const node = new Node(value);
      let lastNode = this.#head;
      while (lastNode?.next) {
         lastNode = lastNode?.next;
      }
      if (lastNode) lastNode.next = node;
      else this.#head = node;
      this.size++;
   }

   insert(index: number, value: V) {
      if (index <= 0) this.prepend(value);
      else if (index >= this.size) this.append(value);
      else {
         let i = 0;
         let currentNode = this.#head;
         while (index - 1 > i && currentNode) {
            currentNode = currentNode.next;
            i++;
         }
         const node = new Node(value);
         node.next = currentNode!.next;
         currentNode!.next = node;
      }
      this.size++;
   }

   removeFrom(index: number, prevNode?: Node<T, V> | null) {
      if (index >= this.size || this.isEmpty() || index < 0) return;
      if (index === 0) this.#head = this.#head?.next || null;
      else if (index < this.size) {
         if (prevNode) {
            prevNode.next = prevNode?.next?.next || null;
            this.size--;
            return;
         }
         let current = this.#head;
         let i = 0;
         while (i < index - 1 && current) {
            current = current?.next;
            i++;
         }

         current!.next = current?.next?.next || null;
      }
      this.size--;
   }

   remove(value: V) {
      let current = this.#head;
      let prev = this.#head;
      let i = 0;
      while (current?.value !== value && current) {
         prev = current;
         current = current?.next;
         i++;
      }
      this.removeFrom(i, prev);
   }

   search(value: V) {
      let current = this.#head;
      let i = 0;
      while (current?.value !== value && current) {
         current = current?.next;
         i++;
      }
      const found = i < this.size;
      return { found, index: found ? i : -1, node: found ? current : null };
   }

   reverse() {
      if (this.size <= 1) return;
      let current = this.#head;
      let prev = null;
      while (current) {
         let next = current.next;
         current.next = prev;
         prev = current;
         current = next;
      }
      this.#head = prev;
   }

   print() {
      let node = this.#head;
      const values = [];
      while (node) {
         values.push(node.value);
         node = node.next;
      }
      console.log("_".repeat(values.join(" | ").length + 4));
      console.log(`| ${values.join(" | ")} |`);
      console.log("*".repeat(values.join(" | ").length + 4));
   }
}

const callback = () => {
   list.print();
   console.log("Size:", list.size);
};

const list = new LinkedList(1, 2, 3, 4, 5, 6);
printMessage("Initiated with: 1, 2, 3, 4, 5, 6", callback);

list.prepend(5);
list.prepend("a");
list.prepend("b");
printMessage("Prepended: 5,a,b in order", callback);

list.append(8);
printMessage("Appended: 8", callback);

list.insert(1, 10);
printMessage("Inserted: 10 at index 1", callback);

list.insert(4, 15);
printMessage("Inserted: 15 at index 4", callback);

list.removeFrom(2);
printMessage("Removed: index 2", callback);

list.remove(5);
printMessage("Removed: value 5", callback);

printMessage("Search: value 8");
console.log(list.search(8));

list.print();
list.reverse();
printMessage("Reverse list", callback);
