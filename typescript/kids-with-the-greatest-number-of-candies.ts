function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const result: boolean[] = new Array();

  let maxCandies = 0;
  for (const numCandies of candies) {
    maxCandies = Math.max(maxCandies, numCandies);
  }

  for (const numCandies of candies) {
    result.push(numCandies + extraCandies >= maxCandies);
  }

  return result;
};