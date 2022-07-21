// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

function isSameAfterReversals(num: number): boolean {
	if (num === 0) return true;

	// Initiate variables
	let strNum: string = num + '';
	let strRev1: string = '',
		strRev2: string = '';

	// Reverse num once
	strRev1 = reverseString(strNum);
	strRev1 = removeLeadingZeros(strRev1);

	// Reverse num again
	strRev2 = reverseString(strRev1);
	strRev2 = removeLeadingZeros(strRev2);

	return parseInt(strRev2) === num;
}

/**
 * Accepts a string value and returns the string value reversed
 * @param str A string value
 * @returns The string value rerversed
 */
function reverseString(str: string): string {
	let reversed: string = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str.charAt(i);
	}
	return reversed;
}

/**
 * Accepts a string representing a integer value and removes any leading 0's
 * @param strNum A string representing a integer value
 * @returns A string representing the integer value without any leading 0's
 */
function removeLeadingZeros(strNum: string): string {
	for (let i = 0; i < strNum.length; i++) {
		if (strNum.charAt(0) != '0') break;
		strNum = strNum.substring(i + 1);
	}
	return strNum;
}

isSameAfterReversals(120000000001);
