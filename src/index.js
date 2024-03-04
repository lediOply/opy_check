// File: opy_check.js

// Import the Opyytatain library
const Opyytatain = require('opyytatain');

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === Opyytatain.reverseString(cleanedStr);
}

// Test the isPalindrome function
const testString = "A man, a plan, a canal, Panama!";
console.log(`Is "${testString}" a palindrome? ${isPalindrome(testString)}`);
