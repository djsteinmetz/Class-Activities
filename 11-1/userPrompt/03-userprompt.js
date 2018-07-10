// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');
var password = "hello";
inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "password",
        message: "Please enter a password",
        name: "password"
    },
    {
        type: "password",
        message: "Please re-enter password",
        name: "passwordConfirm"
    },
])
    .then(function (inquirerResponse) {
        if (inquirerResponse.password === inquirerResponse.passwordConfirm) {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your favorite city?",
                    name: "favoriteCity"
                },
                {
                    type: "input",
                    message: "What is your home city?",
                    name: "homeCity"
                },
                /* Pass your questions in here */
            ])
                .then(function (inquirerResponse) {
                    if (password === inquirerResponse.passwordConfirm) {
                        console.log("Your favorite city is " + inquirerResponse.favoriteCity + ", and your home city is " + inquirerResponse.homeCity);
                    }
                    else {
                        console.log("Your favorite city is " + inquirerResponse.favoriteCity + ", and your home city is " + inquirerResponse.homeCity);

                    }
                    // Use user feedback for... whatever!!

                });
        } else {
            console.log("Passwords do not match!");
        }
    });
