import { printComplexity, printTitle } from "../utils";

printTitle("tower of hanoi");

export function towerOfHanoi(disks: number, fromRod: string, toRod: string, usingRod: string) {
   if (disks === 1) {
      return console.log(`Moved disk 1 from ${fromRod} to ${toRod}`);
   }
   towerOfHanoi(disks - 1, fromRod, usingRod, toRod);
   console.log(`Moved disk ${disks} from ${fromRod} to ${toRod}`);
   towerOfHanoi(disks - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
