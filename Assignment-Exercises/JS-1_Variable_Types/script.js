/**
 * JavaScript Variables: let, const, and var
 *
 * 1. let:
 *    - Used to declare variables that can be reassigned later.
 *    - Block-scoped: The variable exists only within the block where it's declared.
 *    - Preferred for variables whose values may change during program execution.
 *    - Example: let count = 5; count = 10; // Valid
 *
 * 2. const:
 *    - Used to declare variables whose values cannot be reassigned.
 *    - Block-scoped like `let`.
 *    - Must be initialized at the time of declaration.
 *    - Preferred for constants or variables that should not change.
 *    - Example: const pi = 3.14159; pi = 4; // Error
 *
 * 3. var:
 *    - Used to declare variables with function scope.
 *    - Hoisted to the top of its scope, but its value remains `undefined` until assigned.
 *    - Not block-scoped, which can cause unexpected behaviors.
 *    - Its usage is generally discouraged in modern JavaScript due to better alternatives (`let` and `const`).
 *    - Example: var name = "John"; name = "Doe"; // Valid
 */

// Using let
let personName = "Juan Cruz";
let age = 30;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding", "watching", "writing"];

// Checking types and values
console.log(typeof personName); // Output: should be "string"  (until a value is assigned)
console.log(typeof age); // Output: should be "number" (until a value is assigned)
console.log(typeof isStudent); // Output:  should be "boolean" (until a value is assigned)
console.log(typeof hobbies); // Output: should be "object" (until a value is assigned)

// Using const
const pi = 3.14159;
const birthYear = 2005;
const isEmployed = false;
const favoriteBooks = ["The Secret Garden", "Ang Mutya ng Section E"];

// Checking types and values
console.log(typeof pi); // Output: should be "number" (until a value is assigned)
console.log(typeof birthYear); // Output: should be "number" (until a value is assigned)
console.log(typeof isEmployed); // Output: should be "boolean" (until a value is assigned)
console.log(typeof favoriteBooks); // Output: should be "object" (until a value is assigned)

// Using var
var city = "Pasig";
var temperature = 22.5;
var hasPets = true; //
var colors = ["purple", "sky blue", "matcha green"];

// Checking types and values
console.log(typeof city); // Output: should be "string" (until a value is assigned)
console.log(typeof temperature); // Output: should be "number" (until a value is assigned)
console.log(typeof hasPets); // Output: should be "boolean" (until a value is assigned)
console.log(typeof colors); // Output: should be "object" (until a value is assigned)
