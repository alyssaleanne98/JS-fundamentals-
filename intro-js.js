// Purpose of a variable
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


        // Basic Document structure

alert("Hello World"); // alert is a command in JS with an argument "hello world"


var name = prompt("What is your name?")

// Variables

var age = 44; // name of variable storing a pos integer
var status = -10; // we can also store neg integers

var gpa = 3.45; //floating point number = decimals

var output = "";

output += "Age " + age;
output += "<br/>";


alert("Mark is " + age + " years old"); // this is called concatenation when we are adding all strings 



