function arrayMaximalAdjacentDifference(inputArray) {
  let maxDifference = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    let difference = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (difference > maxDifference) {
      maxDifference = difference;
    }
  }
  return maxDifference;
}
