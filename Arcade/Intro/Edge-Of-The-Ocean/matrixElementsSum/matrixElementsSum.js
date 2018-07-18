function matrixElementsSum(matrix) {
  let sum = 0;

  let freeRooms = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        freeRooms.push(j);
      } else if (freeRooms.indexOf(j) === -1) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
