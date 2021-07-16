// Password Validator - Chalon Hutson - July 16, 2021

const { count } = require("console");
const { send } = require("process");


// Welcomes the user.
function welcome(){
    console.log("\nWelcome to the password validator 9000!!!\n")
    console.log(`
    _     _   _                                      
   ' )   /   //                   _/_     _/_ /      
    / / /_  // _. __ ______  _    /  __   /  /_  _   
   (_(_/</_</_(__(_)/ / / <_</_  <__(_)  <__/ /_</_                                       
   `)
   console.log(`
      _ __                                 _    _     _                       __  __  __  __ 
     ' )  )                            /  ' )  /     //     /     _/_        (__)/  )/  )/  )
      /--'__.  _   _   , , , __ __  __/    (  /__.  // o __/ __.  /  __ __     //  //  //  / 
     /   (_/|_/_)_/_)_(_(_/_(_)/ (_(_/_     |/(_/|_</_<_(_/_(_/|_<__(_)/ (_   /(__/(__/(__/  
                                                                                                                                                                                                                                                                                                 `)
}

function menu(){
    // Boilerplate code begins.
    const readline = require("readline");
    const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    // Boilerplate code ends.
    console.log("\nWelcome to the main menu.\nWhat would you like to do?\nOptions: Type \"1\" to validate a password // Type \"2\" to see the password criteria\n")
    reader.question("Please type here : ", function(answer) {
        if (answer === "1"){
            reader.close();
            validatePassword()
        } else if (answer === "2"){
            reader.close();
            passCriteria()
        } else if (answer === "3"){
            exit()
        }else {
            reader.close();
            console.log("Please type in a valid option.")
            menu()
        }
    })
}

function validatePassword(){
    // Boilerplate code begins.
    const readline = require("readline");
    const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    // Boilerplate code ends.
    reader.question("\nPlease type a password to validate here: ", function(answer) {
        if (checkPasswordMeetsCriteria(answer) === true){
            reader.close();
            console.log("\nSUCCESS - Congratulations, your password meets our very strict criteria! It can never be broken ever, ever.\n")
            sendToMenu()
        }else {
            reader.close();
            console.log("\nFAILURE - Sorry your password doesn't meet our criteria.\n")
            sendToMenu()
        }
    })
};

function checkPasswordMeetsCriteria(password){
    let specialCharacters = countSpecialCharacters(password)
    let numbers = countNumbers(password)
    if (password.length >= 10 && password !== "password" && password !== "ChalonIsALoser" && specialCharacters >= 2 && numbers >= 2){
        return true;
    }
};

function countSpecialCharacters(password){
    let count = 0
    for (i = 0; i < password.length; i++){
        if (password[i] === "!" || password[i] === "@" || password[i] === "#" || password[i] === "$" || password[i] === "%" || password[i] === "^" || password[i] === "&" || password[i] === "*" || password[i] === "(" || password[i] === ")"){
            count++
        }
    }return count
}

function countNumbers(password){
    let count = 0
    for (i = 0; i < password.length; i++){
        if (password[i] === "1" || password[i] === "2" || password[i] === "3" || password[i] === "4" || password[i] === "5" || password[i] === "6" || password[i] === "7" || password[i] === "8" || password[i] === "9" || password[i] === "0"){
            count++
        }
    }return count
}

function passCriteria(){
    console.log("\nThese are the very strict criteria for our completely unbreakable passwords.\n")
    console.log("Passwords must be: ")
    console.log(" - 10 characters long")
    console.log(" - Must not be \"password\"")
    console.log(" - Must not be \"ChalonIsALoser\"")
    console.log(" - Must have at least two special characters (i.e. ! @ # $ % ^ & * ( )")
    console.log(" - Must have at least two numbers")
    console.log(" - ..... that's it.....")
    sendToMenu()
}

// function wouldYouLikeToGoToTheMenu(){
    
// }

function sendToMenu(){
    console.log("\nSending you back to the menu.")
    menu()
}

function exit(){
    // Close reader
    console.log("Thanks you have a great day!")
    // reader.close();
}


// Run the program.

welcome();
menu();

