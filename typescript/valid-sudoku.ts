function isValidSudoku(board: string[][]): boolean {
	// Check for duplicates across rows
	for (const arr of board) {
			if (hasDuplicates(arr)) return false;
	}

	// Check for duplicates across columns
	for (let i = 0; i < board.length; i++) {
			const arr = new Array<string>();
			for (let j = 0; j < board.length; j++) {
					arr.push(board[i][j]);
			}
			if (hasDuplicates(arr)) return false;
	}

	// Check for duplicates in grids
	for (let i = 0; i < 3; i++) {
			const arr = new Array<string>();
			for (let j = 0; j < 3; j++) {
					arr.push(...board[j].slice(0, 3));
			}
			if (hasDuplicates(arr)) return false;
	}

	return true;
};

// Check for any duplicates in an array
function hasDuplicates(arr: string[]): boolean {
	const map = new Map<string, string>();
	for (const num of arr) {
			if (map.get(num) != undefined) return true;
			map.set(num, "");
	}
	
	return false
}