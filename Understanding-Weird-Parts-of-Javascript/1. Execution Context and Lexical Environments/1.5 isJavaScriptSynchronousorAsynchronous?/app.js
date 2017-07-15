//IN JAVASCRIPT THERE IS SINGLE THREADED SYNCHRONOUS EXECUTION
// Meaning only one thing is happening at a time?

// Then what are the asynchronous things in Javascript?
// Well look at it in a broad way. 
// The javascript engine on the browser is synchronous and there are other hooks. more like other things in the browser
// that the javascript engine talks with. like http request. click event handlers etc.
// Those things are asynchronous. and javascript has something called as the Event Queue.

//EVENT QUEUE is just like the EXECUTION STACK where the other parts of the browser are placing things 
//in the event queue. AND JAVASCRIPT IS CHECKING THE EVENT QUEUE FROM TIME TO TIME.
//THE JAVASCRIPT CHECKS THE EVENT QUEUE ONLY WHEN THE EXECUTION STACK IS EMPTY. 
// MEANING JAVASCRIPT IS ACTUALLY DOING IT SYNCHRONOUSLY AND THE OTHER PARTS OF THE BROWSER ARE DOING THINGS 
// ASYNCHRONOUSLY

//So when the execution stack gets empty javascript checks the eventqueue and check if it needs to execute something.
//if it does. it will create an execution context for the thing it wants to execute.
//once it completes execution it will check the event queue again. 


//LETS SEE WHAT WE HAVE DISCUSSED IN WORK NOW

function waitFor4Seconds() {
	var ms = 4000 + new Date().getTime();
	while (new Date() < ms){

	}
	console.log("finished 4 second function")
}

function clickHandler() {
	console.log("Was clicked")
}

//listen for event click
document.addEventListener('click',clickHandler);

waitFor4Seconds();
console.log("Finished Entire Execution")

// So as you may note when you open the html file. refresh. or look at the console. it waits for 4 seconds and then logs
// finished 4 second function and then sayd finished execution.
//Now if you click on the screen. 
// in those 4 seconds when the function is actually running. 
// There should be a console log of "was clicked"
// Refresh the page and in the 4 second buffer just click on the screen. 
// ANd check the output.

// Amazed ? Right.
// The output is: 
// finished 4 second function
// finished entire execution 
// was clicked 
// This explains that when you clicked asynchronously it was added asyncnhronously to the event queue by the event
//listener.
// But javascript executed it only when it finished executing everything in the execution stack?
// So that is about it. Javascript engine functions synchronously where as other parts that function asynchronously
// add things to the event queue which js checks after it finishes the execution stack.
// which in our case was the finished entire execution and then it checked the
// event queue and it had a click event in it.
// so it checked what it was supposed to do when there is a click event and it logged whatever was to be done.

// And then there was nothing in the execution stack nor in the event queue. which is unless you click somewhere.