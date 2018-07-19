function commonCharacterCount(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  let count = 0;

  for (let i = 0; i < s2.length; i++) {
    let index = s1.indexOf(s2[i]);

    if (index > -1) {
      s1.splice(index, 1);
      count += 1;
    }
  }
  return count;
}
