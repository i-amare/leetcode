function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	if (flowerbed.length == 1) return !flowerbed[0] || !n;

	let numPlaceable = 0;
	if (flowerbed[0] == 0 && flowerbed[1] == 0) {
		numPlaceable++;
		flowerbed[0] = 1;
	}
	if (
		flowerbed[flowerbed.length - 1] == 0 &&
		flowerbed[flowerbed.length - 2] == 0
	) {
		numPlaceable++;
		flowerbed[flowerbed.length - 1] == 1;
	}
	for (let i = 1; i < flowerbed.length - 2; i++) {
		if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 && flowerbed[i] == 0) {
			numPlaceable++;
			flowerbed[i] = 1;
		}
	}

	return numPlaceable >= n;
}
