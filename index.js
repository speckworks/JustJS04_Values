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
console.log(typeof(mimsy.mood))
//null is a Primitive, as well.
//In practice, null is used for intentionally missing values. 
//Why have both null and undefined? This could help you distinguish a coding mistake (which might result in undefined) from valid missing data (which you might express as null). 

