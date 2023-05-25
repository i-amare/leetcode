function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  let k = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let t = 0;
    for (const p of piles) {
      t += Math.ceil(p / mid);
    }

    if (t <= h) {
      k = Math.min(k, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return k;
}