let minFallingPathSum = (A, m = new Map()) => {
	let [M, N] = [A.length, A[0].length];
	for (let i = 1; i < M; ++i) {
		for (let j = 0; j < N; ++j) {
			let a = 0 <= j - 1 ? A[i - 1][j - 1] : Infinity,
				b = A[i - 1][j],
				c = j + 1 < N ? A[i - 1][j + 1] : Infinity;
			A[i][j] += Math.min(a, b, c);
		}
	}
	return Math.min(...A[M - 1]);
};
