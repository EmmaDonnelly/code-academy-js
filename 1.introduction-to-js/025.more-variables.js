//We have seen how to create a variable. But how do we use it? It is useful to think
//that any time you type the variable's name, you are asking the computer to swap out the variable name and swap in the value of the variable.

//For example:
//var myName = "Steve Jobs";
//myName.substring(0,5)

//Look at the second line above. You have asked the computer to swap out myName and swap in Steve Jobs, so
//myName.substring(0,5)
//becomes
//"Steve Jobs".substring(0,5)
//which evaluates to Steve.

//Another example
//var myAge = 120;
//What is
//myAge % 12 ? See the hint to check your answer.

//So the variable stores the value of the variable, whether that is a number or a string. As you will see soon, this makes writing long programs much easier!

//Follow the instructions in the comments in the code to continue.

// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "United Kingdom"

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));
