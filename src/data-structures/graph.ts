import { printMessage, printTitle } from "../utils";

printTitle("Graph");

export class Graph {
   #adjacencyList: Record<string, Set<string>>;
   constructor() {
      this.#adjacencyList = {};
   }

   addVertex(vertex: string) {
      if (!this.#adjacencyList[vertex]) this.#adjacencyList[vertex] = new Set();
   }

   addEdge(vertex1: string, vertex2: string) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.#adjacencyList[vertex1].add(vertex2);
      this.#adjacencyList[vertex2].add(vertex1);
   }

   hasEdge(vertex1: string, vertex2: string) {
      return this.#adjacencyList[vertex1]?.has(vertex2);
   }

   deleteEdge(vertex1: string, vertex2: string) {
      this.#adjacencyList[vertex1]?.delete(vertex2);
      this.#adjacencyList[vertex2]?.delete(vertex1);
   }

   deleteVertex(vertex: string) {
      if (!this.#adjacencyList[vertex]) return;
      for (const ver of this.#adjacencyList[vertex]) {
         this.#adjacencyList[ver].delete(vertex);
      }
      delete this.#adjacencyList[vertex];
   }

   print() {
      for (const key in this.#adjacencyList) {
         let connections = `${key} => ${[...this.#adjacencyList[key]]}`;
         console.log(connections);
      }
   }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
printMessage("Add vertices A, B, C", graph.print.bind(graph));

graph.addEdge("A", "B");
graph.addEdge("B", "C");
printMessage("Connect A to B and C to B", graph.print.bind(graph));

printMessage(`A and B are connected? ${graph.hasEdge("A", "B")}`);
printMessage(`A and C are connected? ${graph.hasEdge("A", "C")}`);
printMessage(`C and B are connected? ${graph.hasEdge("C", "B")}`);

graph.deleteVertex("B");
printMessage("Delete B", graph.print.bind(graph));
