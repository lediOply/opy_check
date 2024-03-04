# opy_check

A simple utility to check if a string is a palindrome using Opyytatain library.

## Installation

You can install opy_check via npm:

```bash
npm install opy_check
```

## Usage

```javascript
// Import the opy_check module
const opyCheck = require('opy_check');

// Test if a string is a palindrome
const testString = "A man, a plan, a canal, Panama!";
console.log(`Is "${testString}" a palindrome? ${opyCheck.isPalindrome(testString)}`);
```

## API

### isPalindrome(str)

Checks if a given string is a palindrome.

- `str` (String): The string to be checked.

Returns `true` if the string is a palindrome, `false` otherwise.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
