function searchMatrix(matrix: number[][], target: number): boolean {
	const getRow = (idx: number) => Math.floor(idx / matrix[0].length);
	const getCol = (idx: number) => idx - getRow(idx) * matrix[0].length;

	let left = 0;
	let right = matrix.length * matrix[0].length - 1;
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		const num = matrix[getRow(mid)][getCol(mid)];

		if (num == target) {
			return true;
		} else if (num > target) {
			right = mid - 1;
			mid = Math.floor((left + right) / 2);
		} else {
			left = mid + 1;
			mid = Math.floor((left + right) / 2);
		}
	}

	return false;
}