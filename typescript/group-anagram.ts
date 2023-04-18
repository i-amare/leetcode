function groupAnagrams(strs: string[]): string[][] {
	const wordMap = new Map<string, string[]>();

	for (let word of strs) {
			const wordKeyArr = new Array<number>(26);
			for (let char of word) {
					const charIdx = char.charCodeAt(0) - "a".charCodeAt(0);
					wordKeyArr[charIdx] = wordKeyArr[charIdx] + 1 | 1; 
			}
			const wordKey = wordKeyArr.toString();
			
			if (wordMap.get(wordKey)) {
					wordMap.set(wordKey, [...wordMap.get(wordKey), word])
			} else {
					wordMap.set(wordKey, [word]);
			}
	}
	
	const out: string[][] = [];
	[...wordMap.entries()].forEach((entry) => {
			out.push(entry[1])
	})
	return out
};