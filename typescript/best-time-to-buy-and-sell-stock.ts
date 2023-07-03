function maxProfit(prices: number[]): number {
	let max = 0;
	let l = 0;
	let r = 1;

	while (r < prices.length) {
		if (prices[l] < prices[r]) {
			max = Math.max(max, prices[r] - prices[l]);
		} else {
			l = r;
		}
		r++;
	}

	return max;
}
