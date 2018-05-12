function checkPalindrome(inputString) {
  let reverseString = inputString
    .split("")
    .reverse()
    .join("");
  return inputString == reverseString;
}
