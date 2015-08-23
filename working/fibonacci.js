// Here are some examples of calculating the fibonacci sequence. It is a basic and important excerise.
// A number in the fibonacci sequence is equal to the previous number + number before previous number
// I like to show the evolution here of how I first saw it, and how it can be massively improved.
// for performance see: http://jsperf.com/fibonacci-seth

// calculate 50 iterations of fibonacci sequence

function fibonacciLong() {
	var valOne
	  , valTwo
	  , valvalAdd
	  , fibArr = [];

	//loop 50 fibonacci number iterations
	for(var i = 0; i < 50; i ++){
		//arbitrarily add first #
		if(i === 0) {
			valOne = 0;
			valTwo = 1;
			fibArr.push(valOne);
			fibArr.push(valTwo);
			continue;
		}
		//adjust variables up in sequence
		valAdd = valOne + valTwo;
		valOne = valTwo;
		valTwo = valAdd;
		fibArr.push(valAdd);
	}
	return fibArr;
}


function fibonacciOk() {
	var valOne = 0
	  , valTwo = 1
	  ,	valAdd
	  , fibArr = [];

	fibArr[0] = valOne;
	fibArr[1] = valTwo;

	// loop 50 fibonacci number iterations
	// Next fibonacci number = previous + one before previous
	for (var i = 1; i < 50; i++) {
		valAdd = valOne + valTwo;
		valOne = valTwo;
		valTwo = valAdd;
		fibArr.push(valAdd);
	}
	return fibArr;
}


function fibonacciBest() {
	var fib = [0, 1]
	for (var i = 2; i < 50; i++ ) {
		fib.push( fib[i - 1] + fib[i - 2] )
	}
	return fib
}

console.log(fibonacciLong())
console.log(fibonacciOk())
console.log(fibonacciBest())
