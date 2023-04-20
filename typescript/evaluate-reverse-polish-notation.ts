function evalRPN(tokens: string[]): number {
	const stack = new Array<number>();

	for (const token of tokens) {
		if (parseInt(token) || parseInt(token) == 0) {
			stack.push(parseInt(token));
		} else {
			const num1 = stack.pop();
			const num2 = stack.pop();
			let ans: number;
			switch (token) {
				case "/":
					ans = Math.trunc(num2 / num1);
					break;
				case "*":
					ans = num2 * num1;
					break;
				case "+":
					ans = num2 + num1;
					break;
				case "-":
					ans = num2 - num1;
					break;
			}
			stack.push(ans);
		}
	}

	return stack[0];
}
