function reverse(x: number): number {
	const isNegative = x < 0;
	const strNum = isNegative ? (x + '').substring(1) : x + '';
	let reversed = '';
	for (let i = strNum.length; i >= 0; i--) {
		reversed += strNum.charAt(i);
	}
	x = isNegative ? -1 * parseInt(reversed) : parseInt(reversed);
	if (x < -1 * Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return 0;
	return x;
}
