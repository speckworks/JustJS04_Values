let bandersnatch;
//if we don't assign value, JS gives us "undefined"
// bandersnatch = false;
console.log(bandersnatch);
//undefined's type is "undefined"-- super meta ;)
console.log(typeof(undefined));
//null is undefined's sisted, but is defined as object because... JavaScript
let mimsy = null;
console.log(mimsy);
// it's an "object" --> head explodes <--- this is a "bug"
console.log(typeof(null))
//otherwise, we could access props of null
// console.log(typeof(mimsy.mood))
//null is a Primitive, as well.
//In practice, null is used for intentionally missing values. 
//Why have both null and undefined? This could help you distinguish a coding mistake (which might result in undefined) from valid missing data (which you might express as null). 

console.log(typeof(true));
console.log(typeof(false));
let isHappy = true;
let isSad = !isHappy;
let isFeeling = isSad || isHappy;
let isConfusing = isSad && isHappy;
console.log(isConfusing);

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004); // true
//floating point numbers as they get further from 0 
console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994
console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER + 5); // 9007199254740996

let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0

console.log(typeof(NaN)); // "number"
