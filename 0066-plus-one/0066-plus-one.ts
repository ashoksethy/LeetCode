function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // Increment the current digit
            return digits; // Return the array as no further changes are needed
        }
        digits[i] = 0; // Set the current digit to 0 if it becomes 10
    }
    digits.unshift(1); // If all digits are 9, add a leading 1
    return digits;
}
