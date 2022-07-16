function isPalindrome(word) {
  // Write your algorithm here
  let palindromeTest = ''
  for (let i = 0; i < word.length; i++) {
    palindromeTest = word[i] + palindromeTest
  }
  if (word === palindromeTest) {
    return true
  } else if (word !== palindromeTest) {
    return false
  }
}

/* 
  Add your pseudocode here

  function recieve string
  create a variable equal to the string being iterated with each character being added to the front
  if the string is equal to new variable, it should pass
  new variable is essentially mirrored string
*/

/*
  Add written explanation of your solution here
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
