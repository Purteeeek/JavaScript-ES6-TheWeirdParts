// Function Overloading.
// Javascript doesnt give function overloading like we find in C++ or something
// but first class functions give us alternatives which are kinda easy.
//Function overloading (also method overloading) is a programming concept that allows programmers to 
// define two or more 
//functions with the same name and in the same scope. 
// want to see how to do it in Js?
 

 // We have seen how we add the default

 function welcome(firstName, lastName, language){
 	language = language || 'English'

 	if(language == 'English'){
 		console.log("Hello " + firstName + " " + lastName);
 	}

 	if(language == 'Spanish'){
 		console.log("Hola " + firstName + " " + lastName);
 	}
 }

 welcome("Pratik","Deshpande","English");
 welcome("Pratik", "Deshpande", "Spanish");

 function welcomeEnglish(firstName,lastName){
 	welcome(firstName,lastName,"English");
 }

 function welcomeSpanish(firstName,lastName){
 	welcome(firstName,lastName,"Spanish");
 }

 welcomeEnglish("Pratik", "Deshpande");
 welcomeSpanish("Pratik", "Deshpande");

 // notice how we made a function which is calling the same function. 
 // this is just one way about it.
 // makes your life easy
 