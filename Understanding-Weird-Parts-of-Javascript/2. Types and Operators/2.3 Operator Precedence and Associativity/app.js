// PRECEDENCE :
// Precedence is nothing but what operator function gets executed first when there 
// are multiple operator function in one line

//ASSOCIATIVITY:
// What order operator functions get called in : Left to right or right to left
// WHen Operator functions have same precedence.

var a = 2 + 3 * 10 
console.log(a)
// multiplication has more precedence therefore a is 32 and not 50
// if you want it to be 50 then do 
a = (2 + 3)* 10

var b = 2, c = 3, d = 4 ;
b = c = d 
console.log(c)
console.log(b)
console.log(d)
// All get value of 4 as = is right associative 

// CHECK ALL THE RULES OF ASSOCIATIVITY AND PRECEDENCE ON MDN. THERE IS AN EXCELLENT TABLE FOR THIS