function trap(height: number[]): number {
  const leftMax: number[] = new Array();
  const rightMax: number[] = new Array();
  let trappedWater = 0;

  leftMax.push(0);
  rightMax.push(0)

  for (let i = 0; i < height.length; i++) {
    const left = height[i];
    const right = height[height.length - 1 - i];

    leftMax.push(Math.max(left, leftMax[leftMax.length - 1]));
    rightMax.push(Math.max(right, rightMax[rightMax.length - 1]));
  }

  for (let i = 0; i < height.length; i++) {
    const min = Math.min(leftMax[i], rightMax[height.length - 1 - i]);
    trappedWater += Math.max(min - height[i], 0);
  }

  return trappedWater;
};