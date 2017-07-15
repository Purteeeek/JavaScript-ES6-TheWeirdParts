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

// so false when coerced to number becomes 0 . and true becomes 1 when coerced

console.log(false < 1)
// Therefore javascript logged true.
// JUST USE THE METHODS TO DEBUG AND CHECK WHAT IS GOING TO BE COERCED TO WHAT . DONT WRITE SUCH THINGS EXPLICITLY 
// IN CODE

// Now notice even in 1 < 2 < 3
// it is not returning true because it actually checked the number
// what actually happened was 
// 1 < 2 returned true 
// true < 3
// true was coerced to 1 
// 1 < 3 
// and hence it returned true 

// LETS INTRODUCE NOW == and === 
// In javascript == does check if two parameters are equal to each other. It is not strict. It tries to coerce
// and check if they are equal
// that is 
console.log(1 == true) // returns true
console.log(null == 0) // returns false
// null coerces to zero in other scenarios but not while == comparison.
// very strange behaviour. but once you understand it you get used to it.
console.log(null < 1)// returns true
// as here null was coerced to zero but not in the above scenario.
console.log("" == 0) // returns true
console.log(""  == false) // returns true
// So basically variables are coerced and then a check is being done in == 
// this is a strange behaviour
