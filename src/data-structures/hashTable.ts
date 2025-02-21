import { printMessage, printTitle } from "../utils";

printTitle("Hash table");

export class HashTable<T> {
   #table: [string, T][][];
   constructor(public size: number) {
      this.#table = new Array(size);
   }

   #hash(key: string) {
      const hashKey = key.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return hashKey % this.size;
   }

   set(key: string, value: T) {
      const index = this.#hash(key);
      let bucket = this.#table[index];
      if (!bucket) {
         bucket = [[key, value]];
      } else {
         const sameKeyItem = bucket.find((item) => item[0] === key);
         if (sameKeyItem) {
            sameKeyItem[1] = value;
         } else {
            bucket.push([key, value]);
         }
      }
      this.#table[index] = bucket;
   }

   get(key: string) {
      const bucket = this.#table[this.#hash(key)];
      if (!bucket) return undefined;
      else return bucket.find((item) => item[0] === key)?.[1];
   }

   remove(key: string) {
      const bucket = this.#table[this.#hash(key)];
      if (!bucket) return;
      else {
         const index = bucket.findIndex((item) => item[0] === key);
         if (index < 0) return;
         this.#table[this.#hash(key)] = bucket.slice(0, index).concat(bucket.slice(index + 1));
      }
   }

   display() {
      for (const index in this.#table) {
         const bucket = this.#table[index];
         if (bucket !== undefined) {
            bucket.forEach(([k, v]) => {
               console.log(`${k}: ${v}`);
            });
         }
      }
   }
}

const hashTable = new HashTable<string>(5);

hashTable.set("in", "India");
hashTable.set("ni", "Nigeria");
hashTable.set("uk", "United Kingdom");
printMessage("Setting {in:India, ni:Nigeria, uk:United Kingdom}", hashTable.display.bind(hashTable));

printMessage("Getting each");
console.log(hashTable.get("in"));
console.log(hashTable.get("ni"));
console.log(hashTable.get("uk"));
console.log("");

hashTable.remove("ni");
printMessage("Removing ni", hashTable.display.bind(hashTable));
