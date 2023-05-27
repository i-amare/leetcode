function reverseVowels(s: string): string {
	const sArray: string[] = new Array();
	for (const c of s) {
		sArray.push(c);
	}

	const vowels: string[] = new Array();
	for (let i = 0; i < sArray.length; i++) {
		const c = sArray[i];
		if (
			c.toLowerCase() == "a" ||
			c.toLowerCase() == "e" ||
			c.toLowerCase() == "i" ||
			c.toLowerCase() == "o" ||
			c.toLowerCase() == "u"
		) {
			sArray[i] = null;
			vowels.push(c);
		}
	}

	let vowelIdx = vowels.length - 1;
	for (let i = 0; i < sArray.length; i++) {
		if (sArray[i] == null) {
			sArray[i] = vowels[vowelIdx];
			vowelIdx--;
		}
	}

	return sArray.join("");
}
