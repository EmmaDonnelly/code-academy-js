//So why learn modulo? For one thing, it's good at testing divisibility.
//Consider 30 % 10. What does it return? There is nothing left over, so 0.
//How about 9 % 3? Also 0.

//We can use modulos in comparisons, like this:
//10 % 2 === 0 evaluates to true
//7 % 3 === 0 evaluates to false because there is 1 left over.

//Let's get the if/else" statement to display "The first number is even".

//01. Edit line 5 by adding a comparison that evaluates to true.
//02. In the comparison, use a modulo and an even number, like we did in the example above.

//An example of an if/else statement with modulo in the condition

if( 20 % 4 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}
