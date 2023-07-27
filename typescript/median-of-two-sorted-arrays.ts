function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	let mid1;
	let mid2;

	if (nums1.length % 2 == 0) {
		const len = nums1.length;
		const num1 = nums1[Math.floor(len / 2)];
		const num2 = nums1[Math.ceil(len / 2)];
		mid1 = (num1 + num2) / 2;
	} else {
		mid1 = nums1[nums1.length / 2];
	}

	if (nums2.length % 2 == 0) {
		const len = nums2.length;
		const num1 = nums2[Math.floor(len / 2)];
		const num2 = nums2[Math.ceil(len / 2)];
		mid2 = (num1 + num2) / 2;
	} else {
		mid2 = nums2[nums2.length / 2];
	}

	return (mid1 + mid2) / 2;
}
