function halvesAreAlike(s: string): boolean {
	const vowels = "aeiou";

	const string1 = s.slice(0, s.length / 2).toLowerCase();
	const string2 = s.slice(s.length / 2).toLowerCase();

	let string1Vowels = 0;
	let string2Vowels = 0;

	for (let i = 0; i < string1.length; i++) {
		const char1 = string1.charAt(i);
		const char2 = string2.charAt(i);

		if (vowels.indexOf(char1) > -1) string1Vowels++;
		if (vowels.indexOf(char2) > -1) string2Vowels++;
	}

	return string1Vowels == string2Vowels;
}

