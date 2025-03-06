/********************
 Step 1: Create Global Variables
 - Create two global variables (e.g., globalVar, anotherGlobalVar).
 - Assign any values you like.
********************/

var globalVar = "Hello, Philippines! Hello, World!";
let anotherGlobalVar = 7;

console.log(globalVar);
console.log(anotherGlobalVar);

/********************
 Step 2: Create a Function to Demonstrate Function Scope
 - Define a function (e.g., demoFunctionScope).
 - Inside this function:
   1. Declare a local variable (e.g., localVar).
   2. Log both the global variable(s) and the local variable to the console.
   3. Return a string that includes both the global and local variables.
********************/

function demoFunctionScope() {
  let localVar = "This is a local variable."; // A local variable

  console.log("Global Variable 1 (var):", globalVar);
  console.log("Global Variable 2 (let):", anotherGlobalVar);
  console.log("Local Variable:", localVar);

  return `Global: ${globalVar}, Another Global: ${anotherGlobalVar}, Local: ${localVar}`;
}

console.log(demoFunctionScope());

/********************
 Step 3: Call the Function and Log Its Return Value
 - Call your function from Step 2 and store its result in a variable.
 - Use console.log() to display the return value in the console.
********************/

let functionResult = demoFunctionScope();
console.log("Function Value:", functionResult);

/********************
 Step 4: Demonstrate Block Scope
 - Write an if statement that always executes (if (true) { ... }).
 - Inside this block:
   1. Use let to declare a block-scoped variable (e.g., blockVar).
   2. Log the block-scoped variable within the block.
 - Try logging the same variable outside the block and observe what happens.
********************/

let blockVar;

if (true) {
  blockVar = "This is a block-scoped variable!";
  console.log("Inside the block:", blockVar);
}

console.log("Outside the block:", blockVar);
