function search(nums: number[], target: number): number {
  if (nums[0] == target) return 0;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid + 1] == target) return mid + 1;

    if (nums[0] < nums[mid]) {
      if (nums[0] > target || nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    } else {
      if (nums[0] < target || nums[mid] > target) right = mid - 1;
      else left = mid + 1
    }
  }
  return -1;
}
