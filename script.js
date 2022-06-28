//Before at() Method

const arrValue = ["car", "bike", 3, false, "peach", true, 2];

console.log(arrValue[arrValue.length - 2]); // true
console.log(arrValue[arrValue.length - 1]); // 2
console.log(arrValue[arrValue.length - 3]); // peach

//Now with ECMAScript 2022 --- we can use Method .at() --- at.() of indexable values lets us read an element at a given index(like the bracket operator[]) and supports negative indices(unlike the bracket operator).

const arrValueTwo = ["car", "bike", 3, false, "peach", true, 2];

console.log(arrValueTwo.at(-2)); // true
console.log(arrValueTwo.at(-1)); // 2
console.log(arrValueTwo.at(-3)); // peach
console.log(arrValueTwo.at()); // car
