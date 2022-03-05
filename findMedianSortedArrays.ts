function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Go through all array adding num to a total
    let total = 0;
    for (let i of nums1) {
        total += i;
    }
    for (let i of nums2) {
        total += i;
    }
    
    // Divide total by the number of elements in both arrays
    let avg = total / (nums1.length + nums2.length);
    
    return total;
};

console.log(findMedianSortedArrays([1, 3], [2]))