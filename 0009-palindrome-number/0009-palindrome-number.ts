function isPalindrome(x: number): boolean {
    if (x < 0) return false; // Negative numbers are not palindromes

    const original = x.toString(); // Convert number to string
    const reversed = original.split('').reverse().join(''); // Reverse the string

    return original === reversed; // Compare original and reversed
}

// Test cases
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10));   // Output: false
console.log(isPalindrome(0));    // Output: true
