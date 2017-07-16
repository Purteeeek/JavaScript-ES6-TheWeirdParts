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
//
// 		{
//			"firstname" : "Pratik" , 
//			"isAProgrammer" : true 
// 		}

// JSON is a part of javascript that got widely accepted as the means to send data over the net

// there are some cool inbuilt things you can do with it.

console.log(JSON.stringify(objectLiteral))
// JSON.stringify will convert the object literal into JSON 
// check what it logs

// similarly you can also create an object from Json lets take the JSON mentioned above and make an
// object 

var jsonValue = JSON.parse('{"firstname" : "Pratik" , "isAProgrammer" : true }')
// I took a string which is proper JSON and converted to an object.
console.log(jsonValue)