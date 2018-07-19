function allLongestStrings(inputArray) {
  let maxStringSize = 0;
  let maxStrings = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxStringSize) {
      maxStrings = [];
      maxStringSize = inputArray[i].length;
    }

    if (inputArray[i].length === maxStringSize) {
      maxStrings.push(inputArray[i]);
    }
  }

  return maxStrings;
}
