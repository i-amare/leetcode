function isPalindrome(s: string): boolean {
	let alphaS = "";
	for (const c of s) {
		let cCode = c.toLowerCase().charCodeAt(0);
		if ((cCode >= 97 && cCode <= 122) || (cCode >= 48 && cCode <= 57))
			alphaS += c.toLowerCase();
	}

	for (let i = 0; i < Math.floor(alphaS.length / 2); i++) {
		const charCode1 = alphaS.charCodeAt(i);
		const charCode2 = alphaS.charCodeAt(alphaS.length - i - 1);
		if (charCode1 != charCode2) return false;
	}
	return true;
}
