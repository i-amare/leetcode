function kthSmallest(matrix: number[][], k: number): number {
	// Flatten all elements in the matrix
	const flatList: number[] = [];
	for (const arr of matrix) {
		for (const num of arr) flatList.push(num);
	}

	// Sort flattened list
	for (let i = 0; i < flatList.length - 1; i++) {
		for (let j = i + 1; j < flatList.length; j++) {
			if (flatList[i] > flatList[j]) {
				const temp = flatList[i];
				flatList[i] = flatList[j];
				flatList[j] = temp;
			}
		}
	}

	return flatList[k - 1];
}
