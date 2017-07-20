// We know that function is nothing but an object. 
// We also know that whenever a function is invoked a new execution context is being created. 
// Now the thing we have to understand here is that. 
// an execution context is created only when the code property of the function object is invoked or run.
// Now whenever an execution context is being created we get a variable space and an outer reference , which
// helps us to travel the scope chain.
// and what we also know that we get a variable called this.
// Now this will point to different things depending on how the function was invoked 