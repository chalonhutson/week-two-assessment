/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "A local repository to keep your code up to date with others with whom you are working, as well as to save your own changes to later send out to others."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is an external repository on the internet, where you can send your code to be used by others, as well as download other projects as well. It's used to ensure when multiple people are working on the same project, despite everyone's local code looking slightly different, there is a central place that stores it to keep everyone on the same page."

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    description: "Once you are in the proper directory, it initializes a local git respository to begin sending your code to a central place.",
    code: "git init"
}


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    description: "This creats a local repository, copying one from GitHub, for you to work on.",
    code: "git clone REPO_URL"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
    description: "This commands checks the status of the local git repository you are in. Whether it has been created, and whether any files have been changed and need to be commited.",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    description: "This is how you send files you are working on, and have saved, to the staging process to be commited to the local repository.",
    code: "git add FILENAME or git add ."
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit = {
    description: "This is is how to finally commit updated files that have been staged, to the actual local repository. It will update files that have already been created as well as create new ones. It requires a message about what the changes are that you are commiting.",
    code: "git commit -m \"ADD A MESSAGE\""
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    description: "This is what pushes the updates from your local repository to the central GitHub project to keep it up-to-date for others.",
    code: "git push"
}