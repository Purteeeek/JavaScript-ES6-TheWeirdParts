console.log(1 < 2 < 3) // true
console.log(3 < 2 < 1) // also logs true

// why is the above scenario taking place?
// The answer lies in the previous sections.
// 3 < 2 < 1 
// both the signs have the same precedence
// and now when we check the associativity it is left to right.
// so 3 < 2 will be executed first

console.log(3 < 2)
// returns false

// so now 3 < 2 < 1 becomes false < 1
// and now false and 1 cannot be directly compared so it will coerce the value of false to number 
// We can check the value. Though it is recommended not to explitly convert types like this. 
// Let javascript do it. 
// But for checking and debugging it is helpful 

a = Number(false)
console.log(a) // 0 

// so false when coerced to number becomes 0 
// and 0 < 1
// Therefore javascript logged true.
// JUST USE THE METHODS TO DEBUG AND CHECK WHAT IS GOING TO BE COERCED TO WHAT . DONT WRITE SUCH THINGS EXPLICITLY 
// IN CODE