const makeArrayConsecutive2 = statues => {
  let smallestStatue = statues[0];
  let largestStatue = statues[statues.length - 1];
  for (i = 0; i < statues.length; i++) {
    if (statues[i] > largestStatue) {
      largestStatue = statues[i];
    }
    if (statues[i] < smallestStatue) {
      smallestStatue = statues[i];
    }
  }
  statuesNeeded = largestStatue - smallestStatue - statues.length + 1;
  return statuesNeeded;
};
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
