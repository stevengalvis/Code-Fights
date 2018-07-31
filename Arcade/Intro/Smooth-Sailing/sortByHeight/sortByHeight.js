function sortByHeight(a) {
  let trees = [];
  let heights = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      trees.push(i);
    } else {
      heights.push(a[i]);
    }
  }

  let sortedHeights = heights.sort(function(a, b) {
    return a - b;
  });

  for (let j = 0; j < trees.length; j++) {
    sortedHeights.splice(trees[j], 0, -1);
  }
  return sortedHeights;
}
