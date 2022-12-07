function transpose(matrix: number[][]): number[][] {
	const out: number[][] = [];
	const tempRow = new Array<number>(matrix.length);

	for (const i in matrix[0]) {
		out.push([...tempRow]);
	}

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      out[j][i] = matrix[i][j]
    }
  }
	
	return out;
}

