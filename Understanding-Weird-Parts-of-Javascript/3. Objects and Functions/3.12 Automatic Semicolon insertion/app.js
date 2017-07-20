// This is a very dangerous thing that javascript does. 
// so first of all understand this that.
// the code you write is not being directly executed.
// the code is being parsed by the syntax parser and then syntax parser in the js engine can 
// change your code.
// you may have noticed that semicolon in javascript are optional
// thats because syntax parser will put the semicolon for you when it thinks it has to 

// lets see an example
// also note that the enter or the return key you press also has some ascii value.
// i will show you one case where the problem occurs

function returnPerson() {

	return
	{
		name : 'Pratik'
	}
}

// the above function should normally return an object .
// i pressed enter after return and then wrote the object literal syntax to return a function. lets call it

returnPerson() // undefined?

// it returned undefined. Why?
// because when the syntax parser sees the carriage return or enter key hit after the return keyword 
// it automatically puts a semicolon there
// so the code that was run was 
// function returnPerson(){
// 		return;
//		{
//			name : 'Pratik'
//		}	
// 	}
// this automatic semicolon insertion can be dangerous.
// the syntax parser reads the code character by character.
// so when it saw an enter after return it assumed that you ended the line and automatically inserted a semicolon there

// to avoid this enter your own semicolons 
// and as syntax parser reads code character by character 

function returnPerson1() {
	return {
		name : "Pratik"
	}
}

// the above way would return a function as the syntax parser sees a space and then an open curly brace
// which is an object literal syntax and understands that you intend return an object
// this is a dangerous problem which can be so hard to track down