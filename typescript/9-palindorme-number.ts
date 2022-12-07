function isPalindrome(x: number): boolean {
	let strNum = x + '';
	for (let i = 0; i < Math.floor(strNum.length / 2); i++) {
		let left = strNum.charAt(i);
		let right = strNum.charAt(strNum.length - 1 - i);
		if (left != right) {
			return false;
		}
	}
	return true;
}