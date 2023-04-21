function isValid(s: string): boolean {
	const stack = new Array<string>();

	for (const char of s) {
		if (char == "(") {
			stack.push(")");
		} else if (char == "{") {
			stack.push("}");
		} else if (char == "[") {
			stack.push("]");
		} else {
			if (stack.pop() != char) return false;
		}
	}

	return stack.length == 0;
}
