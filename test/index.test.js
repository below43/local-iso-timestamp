const { getLocalIsoTimestamp } = require('../index');
const assert = require('assert');

describe('getLocalIsoTimestamp', function() {
	it('should return the current local date and time in ISO format with timezone offset', function() {
        const result = getLocalIsoTimestamp();
        const date = new Date();
        const offset = date.getTimezoneOffset();
        const sign = offset > 0 ? '-' : '+';
        const absOffset = Math.abs(offset);
        const hoursOffset = String(Math.floor(absOffset / 60)).padStart(2, '0');
        const minutesOffset = String(absOffset % 60).padStart(2, '0');

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        const expected = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${sign}${hoursOffset}:${minutesOffset}`;
        assert.strictEqual(result.slice(0, 19), expected.slice(0, 19)); // Ignore milliseconds for comparison
    });

	it('should return the provided date in local ISO format with timezone offset', function() {
		const date = new Date('2023-10-12T22:15:16.521Z');
		const result = getLocalIsoTimestamp(date);
		const offset = date.getTimezoneOffset();
		const sign = offset > 0 ? '-' : '+';
		const absOffset = Math.abs(offset);
		const hoursOffset = String(Math.floor(absOffset / 60)).padStart(2, '0');
		const minutesOffset = String(absOffset % 60).padStart(2, '0');

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
		const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

		const expected = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${sign}${hoursOffset}:${minutesOffset}`;
		assert.strictEqual(result, expected);
	});
});
