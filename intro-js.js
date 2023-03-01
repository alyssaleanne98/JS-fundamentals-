//////// Purpose of a variable //////////
    // is to hold or reference data
    // var, let, or const - the difference is what we call a "scope"
        // var has a function scope (also known as a local scope) and let/const have more limited block scope

        // let/const have more limited block scope which in computer programming, is considered a better practice because it reduces the chance of accidentally changing a variable's value. 

        let x = 25
        x = 100 // no problem

        const z = 10 
        z = 100 // uncaight TypeError: assignment to constant variable 

        const person = { name: "Fred"} // objects are reference types - if we assign an object to a variable, that variable does not actually hold the object. 
        person.age = 25 // no error

        person = {name: "Barney"} // uncaught typeError


let name = "Alyssa",
age, 
town = "Fremont"

// In JS, when naming variables, the convention is to name the identifiers using lowerCamelCase. ex: numActivePlayers

//Dynamically-typed languages such as JS, Python, and Ruby allow variables to be assigned different types of data during runtime. 
// Declare a variable named data and initialize with a number 

var data = 123

//Reassign a different type of data is allowed

data = "Hello"

let m = 15 //I'm a number 
m = "hey" //Now I'm a string
