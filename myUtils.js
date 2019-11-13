const reader = require("readline-sync");

module.exports = {
	//Checkes if a number is prime
	isPrime: function (n) {
		let div = 2;
		while (div <= Math.sqrt(n)) {
			if (n % div === 0) return false;
			div++;
		}
		return true;
	},
	//Gets positive number from the user
	getPositiveNum: function () {
		let num = reader.question("Enter positive number: ");
		if (num > 0) return num;
		else {
			console.log(num + " is not positive number")
			return this.getPositiveNum();
		}
	},
	//Returns all prime numbers between two postive integers
	getPrimeNumbers: function (num1, num2) {
		let result = [];
		for (let i = Math.ceil(Math.min(num1, num2)); i <= Math.floor(Math.max(num1, num2)); i++) {
			if (this.isPrime(i)) result.push(i);
		}
		return result;
	},
	//Prints all elemets of an array
	printElements: function (arr) {
		if (arr.length == 0) console.log("Empty array");
		else {
			for (let i = 0; i < arr.length; i++) {
				console.log(arr[i]);
			}
		}
	}
}
