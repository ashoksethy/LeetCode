function maxChunksToSorted(arr: number[]): number {
    let maxSeen = 0;
    let chunks = 0;

    for (let i = 0; i < arr.length; i++) {
        maxSeen = Math.max(maxSeen, arr[i]);
        // If the maximum value seen so far equals the current index, we can form a chunk
        if (maxSeen === i) {
            chunks++;
        }
    }

    return chunks;
}

// Test cases
console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // Output: 1
console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // Output: 4
console.log(maxChunksToSorted([2, 0, 1]));       // Output: 1
