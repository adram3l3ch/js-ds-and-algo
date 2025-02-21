import pc from "picocolors";

export const printTitle = (title: string) => {
   console.log("");
   console.log(pc.blue(pc.bold(`-------------- ${title.toUpperCase()} --------------`)));
   console.log("");
};

export const printComplexity = (c: string) => {
   console.log("");
   console.log(pc.green(`___Complexity: O(${c})___`));
   console.log("");
};

export function printMessage(message: string, cb?: VoidFunction) {
   console.log(pc.yellow(message));
   cb?.();
   console.log("\n");
}
