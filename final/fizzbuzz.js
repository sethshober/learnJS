//Fizz Buzz is a famous functional programming exercise that uses mathematics and conditionals common to all languages. 
//The Problem:
//Write a program that prints the numbers from 1 to 100. 
//For multiples of three print “Fizz” instead of the number 
//For the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”
//We will provide you with a few different solutions as there are many different ways to skin a cat.


function fizzBuzzIf() {

	for (var i = 1; i <= 100; i++) {

		if ( i % 3 == 0 && i % 5 == 0 ) {
			console.log('FizzBuzz');
		}
		else if ( i % 3 == 0 ) {
			console.log('Fizz');
		}
		else if ( i % 5 == 0 ) {
			console.log('Buzz')
		}
		else {
			console.log(i);
		}
	}

}


function fizzBuzzSwitch() {

	for (var i = 1; i <= 100; i++) {

		switch (true) {
			
			case i % 3 == 0 && i % 5 == 0:
				console.log('FizzBuzz');
				break;

			case i % 3 == 0:
				console.log('Fizz');
				break;
			
			case i % 5 == 0:
				console.log('Buzz');
				break;
			
			default:
				console.log(i);
				break;

		}
	}

}


function fizzBuzzRecursive(start, end) {
	
	// base check
	if (start > end || typeof start != 'number' || typeof end != 'number') return
	// do fizzbuzz
	if ( start % 3 == 0 && start % 5 == 0 ) console.log('FizzBuzz')
	else if ( start % 3 == 0 ) console.log('Fizz')
	else if ( start % 5 == 0 ) console.log('Buzz')
	else console.log(start)
	// call recursively
	fizzBuzzRecursive(start + 1, end) // cannot use ++

}


//Paul Irish ternary solution
function fizzBuzzTernary() {
	for (var i = 1; i <= 100; i++) {
		var f = i % 3 == 0, b = i % 5 == 0;
		console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
	}
}


fizzBuzzIf();
fizzBuzzSwitch();
fizzBuzzRecursive(1,100);
fizzBuzzTernary();


