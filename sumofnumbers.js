"use strict";
// Sum using a for-loop
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Sum using a while-loop
function sumWhile(numbers) {
    let sum = 0, i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
// Sum using recursion
function sumRecursion(numbers, index = 0) {
    if (index >= numbers.length) {
        return 0;
    }
    return numbers[index] + sumRecursion(numbers, index + 1);
}
// Sum using Array reduce (the functional way)
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// Test the functions
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
