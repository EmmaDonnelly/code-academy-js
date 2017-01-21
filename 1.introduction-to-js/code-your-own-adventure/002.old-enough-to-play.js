//This will involve two pieces of code:
//01. First we will use prompt to ask a user for their age, like this:
  var age = prompt("What's your age");
//The variable age will hold the user's response.
//02. Then we will use an if/else statement based on the age of the user.
//Here's an outline of the code, similar to what we've seen before:
  if(age is less than 13)
  {
      // do this code
  }
  else   // "otherwise"
  {
      // do this code
  }

//01. Under the existing code, declare a variable age.
//02. Make age equal to prompt("What's your age");. See the example above.
//03. Then write an if/else statement. If age is less than 13, use console.log to tell the user that they're allowed to play but you take no responsibility.
//04. Else, use console.log and give them an encouraging message to play on!

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age");

if (age < 13) {
    console.log("I'm afraid you're too young to play, and we have to ask you not to proceed");
} else {
    console.log("Wahoo, you are old enough to play!")
}
