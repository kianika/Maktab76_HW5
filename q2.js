/* let a = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
    ]) ➞ 65700 */

let b = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
];



function getBudgets(obj) {
    let sum = 0;
    for (n of obj) {
        sum += Object.values(n)[2];
    }

    return sum;
}

console.log(getBudgets(b));  