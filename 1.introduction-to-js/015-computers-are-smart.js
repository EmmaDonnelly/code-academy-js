//Great! We used an if statement to do something if the answer to the condition was yes, or true as we say in JavaScript.
//In addition to doing something when the condition is true, we can do something else if the condition is false.
//For example, if your name is shorter than 7 letters, we can respond with "You have a short name!" We can do this using an if / else statement:

if( "myName".length >= 7 ) {
    console.log("You have a long name!");
}
else {
    console.log("You have a short name!");
}

//Just like before, if the condition is true, then only the code inside the first pair of curly braces will run.
//Otherwise, the condition is false, so only the code inside the second pair of curly braces after the else keyword will run.
//In the example above the condition "myName".length >= 7 evaluates to false since "myName" only has 6 letters.
//Since the condition is false, only the code inside the curly braces after the else keyword runs, and prints out You have a short name!.

//01. In line 1, fill in a condition that will evaluate to false
//02. Fill in some code to run in the else portion (this will run if the condition is false). Use console.log for this part.

if ( 10 < 5 )
{
    console.log("Let's go down the first road!");
}
else
{
    console.log("You stay to fight the dragon!")

}
