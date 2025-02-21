const numbers = [1, 2, 3, 4];
console.log(numbers.push(6));
console.log(numbers.pop());
console.log(numbers.unshift(2));
console.log(numbers);
console.log(numbers.shift());
console.log(numbers);

numbers.splice(2, 1, 2, 3, 4);
console.log(numbers.findIndex((v) => v === 4));
