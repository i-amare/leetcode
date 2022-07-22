var twoSum = function(nums, target) {
	let map = new Map();
	for (i in nums) {
		if (map.get(target - nums[i]) != undefined) {
			return [i-0, nums.indexOf(target - nums[i])]
		}
		map.set(nums[i], nums[i]);
	}
};

console.log(twoSum([3, 4, 3], 6))