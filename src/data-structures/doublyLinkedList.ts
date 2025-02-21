import { printMessage, printTitle } from "../utils";

printTitle("Doubly Linked List");

class Node<T extends Array<V>, V> {
   public next: Node<T, V> | null = null;
   public prev: Node<T, V> | null = null;
   constructor(public value: V) {}
}

export class DoublyLinkedList<T extends Array<V>, V> {
   #head: Node<T, V> | null = null;
   #tail: Node<T, V> | null = null;
   size = 0;

   constructor(...values: T) {
      let prev: Node<T, V> | null = null;
      for (const index in values) {
         const node = new Node(values[index]);
         if (index === "0") this.#head = node;
         if (prev) prev.next = node;
         node.prev = prev;
         prev = node;
      }
      this.#tail = prev;
      this.size = values.length;
   }

   isEmpty() {
      return !this.size;
   }

   append(value: V) {
      const node = new Node(value);
      if (this.size === 0) {
         this.#head = node;
         this.#tail = node;
      } else {
         node.prev = this.#tail;
         this.#tail!.next = node;
         this.#tail = node;
      }
      this.size++;
   }

   prepend(value: V) {
      const node = new Node(value);
      if (this.size === 0) {
         this.#head = node;
         this.#tail = node;
      } else {
         node.next = this.#head;
         this.#head!.prev = node;
         this.#head = node;
      }
      this.size++;
   }

   insert(index: number, value: V) {
      if (index <= 0) this.prepend(value);
      else if (index >= this.size) this.append(value);
      else {
         let current = this.#head;
         let i = 0;
         while (i < index && current) {
            current = current.next;
            i++;
         }
         const node = new Node(value);
         node.prev = current!.prev;
         node.next = current;
         if (current?.prev) current!.prev.next = node;
         current!.prev = node;
         this.size++;
      }
   }

   removeFrom(index: number) {
      if (index >= this.size || this.isEmpty() || index < 0) return;
      let current = this.#head;
      let i = 0;
      while (i < index && current) {
         current = current?.next;
         i++;
      }

      if (current?.prev) current.prev.next = current.next;
      if (current?.next) current.next.prev = current.prev;
      if (index === 0) this.#head = this.#head?.next || null;
      this.size--;
   }

   search(value: V) {
      let current = this.#head;
      let i = 0;
      while (current?.value !== value && current) {
         current = current?.next;
         i++;
      }
      const found = !!current;
      return { found, index: found ? i : -1, node: found ? current : null };
   }

   reverse() {
      let current = this.#head;
      [this.#head, this.#tail] = [this.#tail, this.#head];
      while (current) {
         let next = current.next;
         current.next = current.prev;
         current.prev = current.next;
         current = next;
      }
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

const list = new DoublyLinkedList(1, 2);
printMessage("Initiated with 1,2", callback);

list.append(3);
printMessage("Append 3", callback);

list.prepend(4);
printMessage("Prepend 4", callback);

list.insert(0, 5);
printMessage("Insert 5 at index 0", callback);

list.insert(3, 6);
printMessage("Insert 6 at index 3", callback);

list.insert(list.size, 10);
printMessage("Insert 10 at the end", callback);

list.removeFrom(0);
printMessage("Remove from index 0", callback);

list.removeFrom(4);
printMessage("Remove from index 4", callback);

printMessage("Find 6", () => {
   console.log(list.search(6));
});

list.reverse();
printMessage("Reverse", callback);
