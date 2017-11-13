const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', function() {
	it('should reject non-string values', () => {
		var invalidString = ' s';
		var spaceString = ' ';
		var numberString = 4;
		//var validString = isRealString();

		expect(isRealString(invalidString)).toBe(true);
		expect(isRealString(spaceString)).toBe(false);
		expect(isRealString(numberString)).toBe(false);
	});
});
