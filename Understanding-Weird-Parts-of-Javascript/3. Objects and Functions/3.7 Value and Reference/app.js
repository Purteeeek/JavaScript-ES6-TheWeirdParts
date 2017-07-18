// By value.

var a = 2;
var b;
b = a;
a = 3;
console.log(a); // 3
console.log(b); // 2

// when a primitive type in javascript is copied or passed to a function. a new space in the memory is set up
// and the content is actually copied.
// so when b = a happened. 
// actual content from a was placed copied into a new memory space. which was associated with b
// this is called by value.
// and thats the reason why, when a was changed b did not go through any change.
// this is followed with primitives in javascript