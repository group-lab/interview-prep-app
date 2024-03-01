const questions = {
  easy : [
    {
      "id": 'e1',
      "title" : "Declared a variables",
      "question": "How do you declare a variable in JavaScript?",
      "answer": "Variables are declared using keywords like var, let, or const, followed by the variable name.",
      "hint": "Consider the keywords used for variable declaration in JavaScript.",
      "tags": ["Javascript", "Fundamentals"]
    },

    {
      "id": 'e2',
      "title" : "Alert() function",
      "question": "What does the alert() function do?",
      "answer": "The alert() function is used to display a pop-up dialog box with a specified message.",
      "hint": "Think about how you can display a simple message to the user.",
      "tags": ["Javascript", "Fundamentals"]
    },
    {
      "id": 'e3',
      "title" : "Write a comment",
      "question": "How do you write a comment in JavaScript?",
      "answer": "Single-line comments use //, and multi-line comments use /* */.",
      "hint": "Consider the syntax for adding comments to your code.",
      "tags": ["Javascript", "Fundamentals"]
    },
    {
      "id": "e4",
      "title" : "Equall and strict equality",
      "question": "Explain the difference between == and ===.",
      "answer": " == checks for equality with type coercion, while === checks for strict equality in both value and type.",
      "hint": "Think about the importance of considering both value and type in comparisons.",
      "tags": ["Javascript", "Fundamentals"]
    },
    {
      "id": "e5",
      "title" : "Basic for loop",
      "question": "Write a basic for loop in JavaScript.",
      "answer": "Use the for keyword followed by loop initialization, condition, and increment/decrement expressions.",
      "hint": "Consider the syntax for creating a loop that iterates over a range of values.",
      "tags": ["Javascript", "Fundamentals"]
    },
    {
      "id": "e6",
      "title" : "Typeof operator",
      "question": "What does the typeof operator do?",
      "answer": "typeof is used to determine the data type of a variable or expression.",
      "hint": "Think about how you can check the type of a value in JavaScript.",
      "tags": ["Javascript", "Fundamentals"]
    },
    {
      "id": "e7",
      "title" : "An array in JavaScript",
      "question": "Define an array in JavaScript.",
      "answer": "An array is a data structure that stores a collection of elements, each identified by an index.",
      "hint": "Think about a data structure that allows you to store multiple elements.",
      "tags": ["Javascript", "Fundamentals"]
    },
    {
      "id": "e8",
      "title" : "A function in JavaScript",
      "question": "How do you write a function in JavaScript?",
      "answer": "Use the function keyword followed by the function name, parameters, and the function body.",
      "hint": "Consider the syntax for creating a reusable block of code in JavaScript.",
      "tags": ["Javascript", "Fundamentals"]
    },
    
  ],

  intermediate: [
    {
      "id": "i1",
      "title" : "Closures in JavaScript.",
      "question": "Explain closures in JavaScript.",
      "answer": "Closures allow functions to retain access to variables from their outer scope, even after the outer function has finished execution.",
      "hint": "Think about the relationship between functions and the scope of variables.",
      "tags": ["Javascript", "Intermediate"]
    },
    {
      "id": "i2",
      "title" : "The Event Loop.",
      "question": "What is the Event Loop?",
      "answer": "The Event Loop is a mechanism that handles asynchronous operations by placing them in a callback queue.",
      "hint": "Consider how JavaScript manages asynchronous tasks and callbacks.",
      "tags": ["Javascript", "Intermediate"]
    },
    {
      "id": "i3",
      "title" : "This keyword.",
      "question": "Describe the purpose of the this keyword.",
      "answer": "This refers to the current execution context and is determined by how a function is called.",
      "hint": "Think about how this is affected by function invocation.",
      "tags": ["Javascript", "Intermediate"]
    },
    {
      "id": "i4",
      "title" : "Null and Undefined.",
      "question": "Differentiate between null and undefined.",
      "answer": "null represents intentional absence, while undefined is automatically assigned to uninitialized variables.",
      "hint": "Consider scenarios where you might deliberately set a value to null or encounter undefined.",
      "tags": ["Javascript", "Intermediate"]
    },
    {
      "id": "i5",
      "title" : "The bind method.",
      "question": "What does the bind method do?",
      "answer": "The bind method creates a new function with a specified this value and initial arguments.",
      "hint": "Think about how bind can be used to control the context of a function.",
      "tags": ["Javascript", "Intermediate"]
    },
    {
      "id": "i6",
      "title" : "Asynchronous programming.",
      "question": "How does asynchronous programming work in JavaScript?",
      "answer": "Asynchronous programming is achieved through callbacks, promises, and async/await for non-blocking execution.",
      "hint": "Consider how JavaScript manages tasks that take time to complete without blocking the main thread.",
      "tags": ["Javascript", "Intermediate"]
    },
    {
      "id": "i7",
      "title" : "Try, Catch, and Finally blocks.",
      "question": "Explain the purpose of try, catch, and finally blocks.",
      "answer": "try contains code that might throw an exception, catch handles the exception, and finally runs regardless of exceptions.",
      "hint": "Think about how error handling is structured in JavaScript.",
      "tags": ["Javascript", "Intermediate"]
    },
    {
      "id": "i8",
      "title" : "Hoisting in JavaScript.",
      "question": "Explain closures in JavaScript.",
      "answer": "What is hoisting in JavaScript?",
      "hint": "Hoisting moves variable and function declarations to the top of their scope during compilation.",
      "tags": ["Javascript", "Intermediate"]
    },
  ],  

  advanced: [
    {
      "id": "a1",
      "title" : "Observer pattern.",
      "question": "What is the Observer pattern and how can it be implemented in JavaScript?",
      "answer": "The Observer pattern involves an object (subject) maintaining a list of its dependents (observers) that are notified of any state changes. Implementation can use custom code or the Observer interface in modern JavaScript.",
      "hint": "Think about how you can implement a system where multiple objects are notified of changes in another object's state.",
      "tags": ["Javascript", "Advanced"]
    },
    {
      "id": "a2",
      "title" : "Promises in JavaScript.",
      "question": "Explain the concept of Promises in JavaScript.",
      "answer": "Promises are objects that represent the eventual completion or failure of an asynchronous operation, allowing you to handle results using then() and catch() methods.",
      "hint": "Consider how Promises improve handling of asynchronous code compared to callbacks.",
      "tags": ["Javascript", "Advanced"]
    },
    {
      "id": "a3",
      "title" : "Generators in JavaScript.",
      "question": "What are Generators in JavaScript?",
      "answer": "Generators are special functions that can be paused and resumed, allowing manual control of the flow of execution. They are defined using the function* syntax and yield statements.",
      "hint": "Think about scenarios where you might need fine-grained control over function execution.",
      "tags": ["Javascript", "Advanced"]
    },
    {
      "id": "a4",
      "title" : "Memoization in JavaScript.",
      "question": "Explain the concept of memoization in JavaScript.",
      "answer": "Memoization is an optimization technique where the results of expensive function calls are cached, allowing subsequent calls with the same arguments to return the cached result instead of recomputing the function.",
      "hint": "Consider situations where you want to optimize performance by avoiding redundant calculations.",
      "tags": ["Javascript", "Advanced"]
    },
    {
      "id": "a5",
      "title" : "WeakMap and WeakSet.",
      "question": "What is the role of the WeakMap and WeakSet in JavaScript?",
      "answer": "WeakMap and WeakSet are collection objects that allow you to associate weakly held objects with values. They do not prevent the garbage collector from collecting keys or values if they are not referenced elsewhere.",
      "hint": "Consider scenarios where you need to associate data with objects without preventing them from being garbage collected.",
      "tags": ["Javascript", "Advanced"]
    },
    {
      "id": "a6",
      "title" : "The Call, Apply, and Bind methods.",
      "question": "What is the difference between the call, apply, and bind methods?",
      "answer": "call and apply immediately invoke the function, while bind returns a new function with the specified this value but doesn't invoke it.",
      "hint": "Think about how these methods are used to manipulate the this value in function calls.",
      "tags": ["Javascript", "Advanced"]
    },
    {
      "id": "a7",
      "title" : "The async/await.",
      "question": "How does the async/await syntax work in JavaScript?",
      "answer": "async/await is a syntax for handling asynchronous code more cleanly. async defines an asynchronous function, and await is used to pause execution until the awaited promise is settled.",
      "hint": "Consider how async/await simplifies asynchronous code compared to using callbacks or Promises.",
      "tags": ["Javascript", "Advanced"]
    },
    {
      "id": "a8",
      "title" : "The concept of WebSockets.",
      "question": "Explain the concept of WebSockets and how they differ from traditional HTTP communication.",
      "answer": "WebSockets provide a full-duplex communication channel over a single, long-lived connection, allowing real-time data exchange. This is different from traditional HTTP, which is request-response based.",
      "hint": "Think about scenarios where real-time, bidirectional communication is essential, and compare it to the typical request-response model of HTTP.",
      "tags": ["Javascript", "Advanced"]
    },
  ]   
}

export default questions;