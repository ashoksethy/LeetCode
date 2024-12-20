function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let k = 1; // Pointer for the unique element position
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Place the unique element at position k
            k++; // Move the pointer forward
        }
    }

    return k;
}

// Test cases
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(k1); // Output: 2
console.log(nums1.slice(0, k1)); // Output: [1, 2]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(k2); // Output: 5
console.log(nums2.slice(0, k2)); // Output: [0, 1, 2, 3, 4]
