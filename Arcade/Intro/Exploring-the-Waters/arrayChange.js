function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let difference = inputArray[i] - inputArray[i + 1] + 1;
      count += difference;
      inputArray[i + 1] = inputArray[i] + 1;
    }
  }
  return count;
}
