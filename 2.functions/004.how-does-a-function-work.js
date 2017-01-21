//Let's break down exactly how a computer thinks when it sees the code for a function.

  var functionName = function( ) {
      // code code code
      // code code code
      // (more lines of code)
  };

//The var keyword declares a variable named functionName.
//The keyword function tells the computer that functionName is a function and not something else.
//Parameters go in the parentheses. The computer will look out for it in the code block.
//The code block is the reusable code that is between the curly brackets { }. Each line of code inside { } must end with a semi-colon.
//The entire function ends with a semi-colon.
//To use the function, we call the function by just typing the function's name, and putting a parameter
//value inside parentheses after it. The computer will run the reusable code with the specific parameter value substituted into the code.

//Let's make a function that tells the world what you want to eat.

//01. Declare your function and call it foodDemand.
//02. You can call the parameter anything you like. But we'll call it food because that is the thing that is going to change each time we call the function.
//03. Your reusable block of code follow this. Surround it with the right brackets. The code you want to repeat is: console.log("I want to eat" + " " + food);
//04. Call the function and put in a specific food you want!

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)

  var foodDemand = function(food) {
      console.log('I want to eat'+" "+ food);
  };

  foodDemand("carrots");
