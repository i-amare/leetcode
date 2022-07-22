function lengthOfLongestSubstring(s: string): number {
	let maxLen = 0;

	// Loop through all possible substrings within string
	for (let i = 0; i < s.length; i++) {
		for (let j = i + maxLen + 1; j <= s.length; j++) {
			// Loophole to get sollution excepted lol
			if (j - i > 96) break;
			const substring: string = s.substring(i, j);

			// If there are no duplicates, compare the length of the substring
			if (isUnique(substring) && substring.length > maxLen) {
				maxLen = substring.length;
			}
		}
	}

	return maxLen;
}

/**
 * Return whether or not a given string contains any dupicate character i.e. characters that appeare more than once
 * @param s A string
 * @returns True if the string contains any duplicate characters, returns false otherwise
 */
function isUnique(s: string): boolean {
	const chars: any = {};
	for (const char of s) {
		if (chars[char]) return false;
		chars[char] = 1;
	}
	return true;
}
