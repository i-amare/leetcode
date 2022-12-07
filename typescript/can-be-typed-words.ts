function canBeTypedWords(text: string, brokenLetters: string): number {
	const words = text.split(" ");
	const brocken = brokenLetters.split("");
	let numWords = 0;

	words.forEach((word: string) => {
		let canBeMade = true;

		for (const letter of brocken) {

			if (word.indexOf(letter) >= 0) canBeMade = false;
		}  
    
		if (canBeMade) numWords++;
	});
  return numWords;
}