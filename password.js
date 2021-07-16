// Password Validator - Chalon Hutson - July 16, 2021

// Boilerplate code begins.
const readline = require("readline");
const reader = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
// Boilerplate code ends.

// Welcomes the user.
function welcome(){
    console.log("\nWelcome to the password validator 9000!!!\n")
}

function menu(){
    // Boilerplate code begins.
    const readline = require("readline");
    const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    // Boilerplate code ends.
    console.log("\nWelcome to the main menu.")
    console.log("What would you like to do?")
    console.log("Options: Type \"1\" to validate a password // Type \"\ 2 \"\ to see the password criteria\n")
    reader.question("Please type here : ", function(answer) {
        if (answer === "1"){
            validatePassword()
        } else if (answer === "2"){
            passCriteria()
        }else {
            console.log("Please type in a valid option.")
            menu()
        }
    })
}

function validatePassword(){
        // // Boilerplate code begins.
        // const readline = require("readline");
        // const reader = readline.createInterface({
        // input: process.stdin,
        // output: process.stdout,
        // });
        // // Boilerplate code ends.
        reader.question("\nPlease type a password to validate here: ", function(answer) {
            if (answer.length >= 10){
                console.log("SUCCESS - Congratulations, your password meets our very strict criteria! It can never be broken ever, ever.")
                sendToMenu()
            }else {
                console.log("FAILURE - Sorry your password doesn't meet our criteria.")
                sendToMenu()
            }
        }) 
};

function passCriteria(){
    console.log("These are the very strict criteria for our completely unbreakable passwords.")
    console.log("Passwords must be: ")
    console.log(" - 10 characters long")
    console.log(" - ..... that's it.....")
    sendToMenu()
}

function wouldYouLikeToGoToTheMenu(){
    
}

function sendToMenu(){
    console.log("Sending you back to the menu.")
    menu()
}

function exit(){
    // Close reader
    reader.close();
}


// Run the program.

welcome();
menu();

