const shapeArea = n => {
  let area = 1;
  for (i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
};
