class RandomizedSet {
	pos: Map<number, number>;
	values: number[];

	constructor() {
		this.pos = new Map<number, number>();
		this.values = new Array<number>();
	}

	insert(val: number): boolean {
		if (this.pos.has(val)) {
			return false;
		} else {
			this.pos.set(val, this.values.push(val) - 1);
			return true;
		}
	}

	remove(val: number): boolean {
		if (this.pos.has(val)) {
			// @ts-ignore: All keys have a defined value associated with them
			let v: number = this.pos.get(val);

			this.values[v] = this.values[this.values.length - 1];
			this.values.pop();

			this.pos.delete(val);
			this.pos.set(this.values[v], v);
			return true;
		} else {
			return false;
		}
	}

	getRandom(): number {
		return this.values[Math.floor(Math.random() * this.values.length)];
	}
}
