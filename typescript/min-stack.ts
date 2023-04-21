class MinStack {
	private stack: number[];
	private min: number[];
	private length: number;

	constructor() {
		this.stack = new Array<number>();
		this.min = new Array<number>();
		this.length = -1;
	}

	push(val: number): void {
		this.stack.push(val);
		if (this.length == -1) {
			this.min.push(val);
		} else {
			this.min.push(Math.min(val, this.min[this.length]));
		}
		this.length++;
	}

	pop(): void {
		this.stack.pop();
		this.min.pop();
		this.length--;
	}

	top(): number {
		return this.stack[this.length];
	}

	getMin(): number {
		return this.min[this.length];
	}
}
