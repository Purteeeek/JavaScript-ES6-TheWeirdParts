// JSON means Javascript object notation.
// inspired by the object literal syntax.
// it looks almost the same but there are a few differences.
// Data was sent previously a lot through XML 
// JSON was adopted later.
// it is a subset of the object literal syntax.

var objectLiteral = {
	firstname : "Pratik",
	isAProgrammer : true
}

console.log(objectLiteral) // logs the above object


// The thing below is JSON . the difference being in JSON the properties have to wrapped around in 
// double quotes. Any thing that is JSON is Javascript object literal syntax.
// but not all javascript literal syntax is JSON.
// Json comes with strict rules
{
	"firstname" : "Pratik" , 
	"isAProgrammer" : true 
}