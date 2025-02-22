import { printMessage, printTitle } from "../utils";
import { Queue } from "./queue";

printTitle("binary search tree");

class TreeNode {
   value: number;
   left: TreeNode | null;
   right: TreeNode | null;

   constructor(value: number, left?: TreeNode, right?: TreeNode) {
      this.value = value;
      this.left = left || null;
      this.right = right || null;
   }
}

export class BinarySearchTree {
   root: TreeNode | null = null;
   constructor() {}

   isEmpty() {
      return this.root === null;
   }

   insert(value: number) {
      const newNode = new TreeNode(value);
      if (this.isEmpty()) this.root = newNode;
      else {
         this.#insertNode(this.root!, newNode);
      }
   }

   #insertNode(root: TreeNode, newNode: TreeNode) {
      const { value } = newNode;
      if (value > root.value) {
         if (root.right) this.#insertNode(root.right, newNode);
         else root.right = newNode;
      } else if (value < root.value) {
         if (root.left) this.#insertNode(root.left, newNode);
         else root.left = newNode;
      }
   }

   search(value: number) {
      let current = this.root;
      while (current) {
         if (value === current.value) return { found: true, node: current };
         else if (value < current.value) current = current.left;
         else current = current.right;
      }
      return { found: false, node: null };
   }

   preOrderDfs(node = this.root) {
      if (!node) return;
      console.log(node.value);
      this.preOrderDfs(node.left);
      this.preOrderDfs(node.right);
   }

   inOrderDfs(node = this.root) {
      if (!node) return;
      this.inOrderDfs(node.left);
      console.log(node.value);
      this.inOrderDfs(node.right);
   }

   postOrderDfs(node = this.root) {
      if (!node) return;
      this.postOrderDfs(node.left);
      this.postOrderDfs(node.right);
      console.log(node.value);
   }

   bfs() {
      if (this.isEmpty()) return;
      const queue = new Queue<TreeNode>();
      queue.enqueue(this.root!);
      this.#levelOrder(queue);
   }

   #levelOrder(queue: Queue<TreeNode>) {
      if (queue.isEmpty()) return;
      const node = queue.dequeue();
      console.log(node?.value);
      if (node?.left) queue.enqueue(node.left);
      if (node?.right) queue.enqueue(node.right);
      this.#levelOrder(queue);
   }

   findMin(root?: TreeNode) {
      if (this.isEmpty()) return null;
      let current = root || this.root;
      while (current) {
         if (!current.left) return current.value;
         current = current.left;
      }
   }

   findMax(root?: TreeNode) {
      if (this.isEmpty()) return null;
      let current = root || this.root;
      while (current) {
         if (!current.right) return current.value;
         current = current.right;
      }
   }

   delete(value: number) {
      this.root = this.#deleteNode(this.root, value) || null;
   }

   #deleteNode(root: TreeNode | null, value: number) {
      if (root === null) return root;
      if (value === root.value) {
         if (!root.left && !root.right) return null;
         if (!root.left) return root.right;
         if (!root.right) return root.left;
         root.value = this.findMin(root.right)!;
         root.right = this.#deleteNode(root.right, root.value);
      } else if (value < root.value) {
         root.left = this.#deleteNode(root.left, value);
      } else {
         root.right = this.#deleteNode(root.right, value);
      }
      return root;
   }

   reverse(root = this.root) {
      if (root === null) return;
      [root.left, root.right] = [root.right, root.left];
      this.reverse(root.left);
      this.reverse(root.right);
   }

   print() {}

   // insert(value: number) {
   //    const node = new TreeNode(value);
   //    if (this.isEmpty()) this.root = node;
   //    else {
   //       let current = this.root;
   //       let prev: null | TreeNode = null;
   //       while (current) {
   //          prev = current;
   //          if (value === current.value) return;
   //          else if (value < current.value) current = current.left;
   //          else current = current.right;
   //       }
   //       if (!prev) return;
   //       else if (value > prev.value) prev.right = node;
   //       else prev.left = node;
   //    }
   // }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
printMessage("Insert 10,5,15,3,7 in order", () => {
   console.log("Pre Order DFS:");
   bst.preOrderDfs();
   console.log("In Order DFS:");
   bst.inOrderDfs();
   console.log("Post Order DFS:");
   bst.postOrderDfs();
   console.log("BFS:");
   bst.bfs();
});

printMessage("Search 5");
console.log(bst.search(5));

console.log("Min:", bst.findMin());
console.log("Max:", bst.findMax());

bst.delete(10);
printMessage("Delete 10", bst.bfs.bind(bst));
bst.reverse();
printMessage("Reverse", bst.bfs.bind(bst));
