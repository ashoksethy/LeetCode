function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        if (next && current < next) {
            // If the current value is smaller than the next value, subtract the current value
            total -= current;
        } else {
            // Otherwise, add the current value
            total += current;
        }
    }

    return total;
}

// Test cases
console.log(romanToInt("III"));     // Output: 3
console.log(romanToInt("IV"));      // Output: 4
console.log(romanToInt("IX"));      // Output: 9
console.log(romanToInt("LVIII"));   // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
