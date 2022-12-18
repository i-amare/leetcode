class MyQueue {
	static num = 10;

	#que: number[] = [];

	constructor() {}

	push(x: number): void {
		this.#que = [x, ...this.#que];
	}

	pop(): number {
		const num = this.#que[this.#que.length - 1];
		this.#que = this.#que.slice(0, -1);
		return num;
	}

	peek(): number {
		return this.#que[this.#que.length - 1];
	}

	empty(): boolean {
		return this.#que[0] == undefined;
	}

	static random() {
		return Math.random
	}
}

const q  = new MyQueue();
MyQueue.random();
