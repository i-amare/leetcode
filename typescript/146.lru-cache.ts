/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

class Node {
	key: number;
	val: number;
	next: Node | null;
	prev: Node | null;

	constructor(
		key?: number,
		val?: number,
		next?: Node | null,
		prev?: Node | null
	) {
		this.key = key === undefined ? null : key;
		this.val = val === undefined ? null : val;
		this.next = next === undefined ? null : next;
		this.prev = prev === undefined ? null : prev;
	}
}

class LRUCache {
	private maxCapacity: number;
	private currCapacity: number;
	private head: Node;
	private tail: Node;
	private nodeMap: Map<number, Node>;

	constructor(capacity: number) {
		this.maxCapacity = capacity;
		this.currCapacity = 0;
		this.nodeMap = new Map<number, Node>();
		this.head = new Node();
		this.tail = new Node();
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	private connectNode(node: Node): void {
		const temp = this.head.next;
		this.head.next = node;
		node.prev = this.head;
		node.next = temp;
		temp.prev = node;
	}

	private disconnectNode(node: Node): void {
		node.prev.next = node.next;
		node.next.prev = node.prev;
	}

	private moveToFront(node: Node): void {
		this.disconnectNode(node);
		this.connectNode(node);
	}

	get(key: number): number {
		if (!this.nodeMap.has(key)) return -1;
		const node = this.nodeMap.get(key);
		this.moveToFront(node);
		return node.val;
	}

	put(key: number, value: number): void {
		if (this.nodeMap.has(key)) {
			// Update node's value
			const node = this.nodeMap.get(key);
			node.val = value;
			this.moveToFront(node);
		} else if (this.currCapacity < this.maxCapacity) {
			// Insert new node
			const newNode = new Node(key, value);
			this.connectNode(newNode);
			this.nodeMap.set(key, newNode);
			this.currCapacity++;
		} else {
			// Delete last node
			const oldNode = this.tail.prev;
			this.disconnectNode(oldNode);
			this.nodeMap.delete(oldNode.key);

			// Insert new node
			const newNode = new Node(key, value);
			this.connectNode(newNode);
			this.nodeMap.set(key, newNode);
		}
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
