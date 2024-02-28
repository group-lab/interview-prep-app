export default  {
  easy: [
    {
      "How do you declare a variable in JavaScript?": "Variables are declared using keywords like var, let, or const, followed by the variable name.",
      "Hint": "Consider the keywords used for variable declaration in JavaScript."     
    },
    {
      "What does the alert() function do?": "The alert() function is used to display a pop-up dialog box with a specified message.",
      "Hint": "Think about how you can display a simple message to the user."     
    },
    {
      "How do you write a comment in JavaScript?": "Single-line comments use //, and multi-line comments use /* */.",
      "Hint": "Consider the syntax for adding comments to your code."     
    },
    {
      "Explain the difference between == and ===.": " == checks for equality with type coercion, while === checks for strict equality in both value and type.",
      "Hint": "Think about the importance of considering both value and type in comparisons."     
    },
    {
      "EWrite a basic for loop in JavaScript.": "Use the for keyword followed by loop initialization, condition, and increment/decrement expressions.",
      "Hint": "Consider the syntax for creating a loop that iterates over a range of values."     
    },
    {
      "What does the typeof operator do?": "typeof is used to determine the data type of a variable or expression.",
      "Hint": "Think about how you can check the type of a value in JavaScript."     
    },
    {
      "Define an array in JavaScript.": "An array is a data structure that stores a collection of elements, each identified by an index.",
      "Hint": "Think about a data structure that allows you to store multiple elements."     
    },
    {
      "How do you write a function in JavaScript?": "Use the function keyword followed by the function name, parameters, and the function body.",
      "Hint": "Consider the syntax for creating a reusable block of code in JavaScript."     
    },
  ],
  intermediate: [
    {
      "Explain closures in JavaScript.": "Closures allow functions to retain access to variables from their outer scope, even after the outer function has finished execution.",
      "Hint": "Think about the relationship between functions and the scope of variables."
    },
    {
      "What is the Event Loop?": "The Event Loop is a mechanism that handles asynchronous operations by placing them in a callback queue.",
      "Hint": "Consider how JavaScript manages asynchronous tasks and callbacks."
    }, 
    {
      "Describe the purpose of the this keyword.": " this refers to the current execution context and is determined by how a function is called.",
      "Hint": "Think about how this is affected by function invocation."
    }, 
    {
      "Question1": "Objects can inherit properties and methods through a prototype chain, with each object having a prototype object.",
      "Hint": "Consider the concept of inheritance in the context of JavaScript objects."
    }, 
    {
      "Differentiate between null and undefined.": "null represents intentional absence, while undefined is automatically assigned to uninitialized variables.",
      "Hint": "Consider scenarios where you might deliberately set a value to null or encounter undefined."
    }, 
    {
      "What does the bind method do?": "The bind method creates a new function with a specified this value and initial arguments.",
      "Hint": "Think about how bind can be used to control the context of a function."
    }, 
    {
      "How does asynchronous programming work in JavaScript?": "Asynchronous programming is achieved through callbacks, promises, and async/await for non-blocking execution.",
      "Hint": "Consider how JavaScript manages tasks that take time to complete without blocking the main thread."
    }, 
    {
      "Explain the purpose of try, catch, and finally blocks.": "try contains code that might throw an exception, catch handles the exception, and finally runs regardless of exceptions.",
      "Hint": "Think about how error handling is structured in JavaScript."
    }, 
    {
      "What is hoisting in JavaScript?": "Hoisting moves variable and function declarations to the top of their scope during compilation.",
      "Hint": "Consider how JavaScript handles variable and function declarations before code execution."
    }, 
    {
      "How do you make an AJAX request in JavaScript?": "Use the XMLHttpRequest object or the fetch API to make asynchronous HTTP requests in JavaScript.",
      "Hint": "Consider the JavaScript tools available for making asynchronous HTTP requests."
    }, 
  ],
  advanced: [
    {
      "What is the Observer pattern and how can it be implemented in JavaScript?": "The Observer pattern involves an object (subject) maintaining a list of its dependents (observers) that are notified of any state changes. Implementation can use custom code or the Observer interface in modern JavaScript.",
      "Hint": "Think about how you can implement a system where multiple objects are notified of changes in another object's state."     
    },
    {
      "Explain the concept of Promises in JavaScript.": "Promises are objects that represent the eventual completion or failure of an asynchronous operation, allowing you to handle results using then() and catch() methods.",
      "Hint": "Consider how Promises improve handling of asynchronous code compared to callbacks."     
    },
    {
      "What are Generators in JavaScript?": "Generators are special functions that can be paused and resumed, allowing manual control of the flow of execution. They are defined using the function* syntax and yield statements.",
      "Hint": "Think about scenarios where you might need fine-grained control over function execution."     
    },
    {
      "Explain the concept of memoization in JavaScript.": "Memoization is an optimization technique where the results of expensive function calls are cached, allowing subsequent calls with the same arguments to return the cached result instead of recomputing the function.",
      "Hint": "Consider situations where you want to optimize performance by avoiding redundant calculations."     
    },
    {
      "What is the role of the WeakMap and WeakSet in JavaScript?": "WeakMap and WeakSet are collection objects that allow you to associate weakly held objects with values. They do not prevent the garbage collector from collecting keys or values if they are not referenced elsewhere.",
      "Hint": "Consider scenarios where you need to associate data with objects without preventing them from being garbage collected."     
    },
    {
      "What is the difference between the call, apply, and bind methods?": "call and apply immediately invoke the function, while bind returns a new function with the specified this value but doesn't invoke it.",
      "Hint": "Think about how these methods are used to manipulate the this value in function calls."     
    },
    {
      "How does the async/await syntax work in JavaScript?": "async/await is a syntax for handling asynchronous code more cleanly. async defines an asynchronous function, and await is used to pause execution until the awaited promise is settled.",
      "Hint": "Consider how async/await simplifies asynchronous code compared to using callbacks or Promises."     
    },
    {
      "Explain the concept of WebSockets and how they differ from traditional HTTP communication.": "WebSockets provide a full-duplex communication channel over a single, long-lived connection, allowing real-time data exchange. This is different from traditional HTTP, which is request-response based.",
      "Hint": "Think about scenarios where real-time, bidirectional communication is essential, and compare it to the typical request-response model of HTTP."     
    },
    {
      "What is the Event Delegation pattern in JavaScript?": "Event delegation is a technique where a single event listener is attached to a common ancestor, managing events for multiple child elements. This is useful for dynamically created elements.",
      "Hint": "Consider situations where you want to optimize event handling, especially for dynamic content."     
    },
    {
      "How does the WeakMap and WeakSet differ from Map and Set in JavaScript?": "WeakMap and WeakSet are similar to Map and Set, but they allow keys to be weakly held, making them eligible for garbage collection if not referenced elsewhere.",
      "Hint": "Think about scenarios where you need to associate data with objects without preventing those objects from being collected by the garbage collector."     
    },
  ]
}