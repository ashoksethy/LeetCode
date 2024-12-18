function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    const result: number[] = [...prices]; // Initialize with the original prices

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prices[j] <= prices[i]) {
                result[i] -= prices[j]; // Apply the discount
                break; // Stop after the first discount is applied
            }
        }
    }

    return result;
}

// Test Cases
console.log(finalPrices([8, 4, 6, 2, 3])); // Output: [4, 2, 4, 2, 3]
console.log(finalPrices([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(finalPrices([10, 1, 1, 6]));   // Output: [9, 0, 1, 6]
