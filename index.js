function isPalindrome(word) {
  // Write your algorithm here
  // Convert the word to lowercase and remove any non-alphanumeric characters
  word = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the word is a palindrome
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
  1. Convert the input word to lowercase
  2. Remove any non-alphanumeric characters from the word
  3. Iterate through the characters of the word from the start to the middle
  4. Compare each character with the corresponding character from the end of the word
  5. If any pair of characters do not match, return false indicating that the word is not a palindrome
  6. If all pairs of characters match, return true indicating that the word is a palindrome
*/

/*
  Add written explanation of your solution here
  The isPalindrome function takes a word as input and follows the following steps to determine if the word is a palindrome:
  1. It converts the input word to lowercase using toLowerCase() method to ensure case-insensitive comparison.
  2. It removes any non-alphanumeric characters from the word using replace() method with a regular expression /[^a-z0-9]/g.
  3. It then iterates through the characters of the word from the start to the middle, and compares them with the corresponding characters from the end of the word.
  4. If any pair of characters do not match, it returns false indicating that the word is not a palindrome.
  5. If all pairs of characters match, it returns true indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
