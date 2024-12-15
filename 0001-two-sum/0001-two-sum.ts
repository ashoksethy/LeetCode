function twoSum(nums: number[], target: number): number[] {
    const numMapVal = new Map<number, number>(); // Map to store the number and its index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMapVal.has(complement)) {
            return [numMapVal.get(complement)!, i]; // Return indices of the two numbers
        }
        numMapVal.set(nums[i], i); // Store the current number with its index
    }
    throw new Error("No two sum solution"); // If no solution is found
}

let output = twoSum([2, 7, 11, 15], 9);
console.log(output); // Output: [0, 1]
