function areSimilar(a, b) {
  if (a === b) {
    return true;
  }
  let nonSimilarA = [];
  let nonSimilarB = [];
  // loop through each array and compare values to check for equal
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      // if not equal push to array
      nonSimilarA.push(a[i]);
      nonSimilarB.push(b[i]);
    }
  }

  if (nonSimilarB.reverse().toString() === nonSimilarA.toString()) {
    return true;
  } else {
    return false;
  }
}
