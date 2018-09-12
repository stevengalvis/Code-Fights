function palindromeRearranging(inputString) {
  let charArray = inputString.split("");
  let charList = {};

  for (let i = 0; i < charArray.length; i++) {
    if (!charList.hasOwnProperty(charArray[i])) {
      charList[charArray[i]] = 1;
    } else {
      charList[charArray[i]]++;
    }
  }

  let oddCount = 0;
  for (let val in charList) {
    if (charList[val] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount > 1 ? false : true;
}
