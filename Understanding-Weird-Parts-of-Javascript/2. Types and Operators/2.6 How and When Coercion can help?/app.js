var a ;

// Now lets say some thing is going to happen. Like someone else is going to set the value of a
// more like if we get data from the internet and someone sets the value of a 

if ( a ) {
	console.log("We got real data")
}

// in the above scenario a will be coerced to a boolean.
// and a is currently undefined and so its coerced to false.
// And how did coercion help us here?
// Imagine if someone set the data to null.
// or if it was set to "" an empty string. We still dont have data.
// and even in such scenarios a was coerced to false and the statements inside if didnt execute.
// This is an example where coercion can be used to our help 