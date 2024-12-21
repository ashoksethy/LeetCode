function removeElement(nums: number[], val: number): number {
    let k = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move the current element to position k
            k++; // Increment k
        }
    }

    return k; // k is the count of elements not equal to val
}


// Test cases
const nums1 = [3, 2, 2, 3];
const val1 = 3;
const k1 = removeElement(nums1, val1);
console.log(k1); // Output: 2
console.log(nums1.slice(0, k1)); // Output: [2, 2]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
const k2 = removeElement(nums2, val2);
console.log(k2); // Output: 5
console.log(nums2.slice(0, k2)); // Output: [0, 1, 3, 0, 4]
