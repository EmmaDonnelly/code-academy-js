//Now you have to create different scenarios. Good thing we know how to do that using if / else statements.
//If userAnswer is "yes", print out: "You and Bieber start racing. It's neck and neck! You win by a shoelace!"
//Otherwise, print out: "Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'"
//Remember: = is for assignment, and === is to check if things are equal!

//Use an if / else statement to write out the last part of this game!
//Make sure to check the console for error messages and suggestions for how to fix them.

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age");

if (age < 13) {
    console.log("I'm afraid you're too young to play, and we have to ask you not to proceed.");
} else {
    console.log("Wahoo, you are old enough to play!")
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}
