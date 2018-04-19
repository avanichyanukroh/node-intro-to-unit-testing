// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	it('should return num, fizz, buzz, or fizz-buzz', function() {

		const normalCases = [
			{num: 1, expected: 1},
			{num: 3, expected: 'fizz'},
			{num: 5, expected: 'buzz'},
			{num: 15, expected: 'fizz-buzz'}
			];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should raise error if arg not number', function() {

		const badInput = [
			'a',
			'false'
		];

		badInput.forEach(function(input) {

			expect(function() {

				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});