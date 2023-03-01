// Purpose of a variable
    // is to hold or reference data
    // var, let, or const - the difference is what we call a "scope"
        // var has a function scope (also known as a local scope) and let/const have more limited block scope

        // let/const have more limited block scope which in computer programming, is considered a better practice because it reduces the chance of accidentally changing a variable's value. 

        let x = 25
        x = 100 // no problem

        const z = 10 
        z = 100 // uncaight TypeError: assignment to constant variable 