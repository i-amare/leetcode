function generateParenthesis(n: number): string[] {
	const paren: string[] = [];

	(function helper(str, open, closed) {
		if (open == n && closed == n) paren.push(str);
		if (open <= n) {
			helper(str + "(", open + 1, closed);
			if (closed < open) helper(str + ")", open, closed + 1);
		}
	})("", 0, 0);

	return paren;
}
