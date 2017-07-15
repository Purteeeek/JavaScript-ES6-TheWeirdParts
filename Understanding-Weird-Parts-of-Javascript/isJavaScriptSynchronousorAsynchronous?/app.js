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