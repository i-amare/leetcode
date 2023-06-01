interface node {
	value: string;
	timestamp: number;
}

class TimeMap {
	map: Map<string, node[]>;

	constructor() {
		this.map = new Map();
	}

	set(key: string, value: string, timestamp: number): void {
		if (this.map.has(key)) {
			const temp = this.map.get(key);
			temp?.push({ value, timestamp });
		} else {
			this.map.set(key, [{ value, timestamp }]);
		}
	}

	get(key: string, timestamp: number): string {
		if (!this.map.get(key)) return "";
		const k = this.map.get(key);

		let left = 0;
		let right = k.length - 1;
		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			if (k[mid].timestamp == timestamp) return k[mid].value;
			else if (k[mid].timestamp > timestamp) right = mid - 1;
			else left = mid + 1;
		}

    if (right >= 0) return k[right].value;
    else return ""
	}
}
