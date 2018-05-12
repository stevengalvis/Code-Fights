function adjacentElementsProduct(inputArray) {
  let product = inputArray[inputArray.length - 1] * inputArray[inputArray.length - 2];
  for (let i = 0; i < inputArray.length; i++) {
    let adjacentProduct = inputArray[i] * inputArray[i + 1];
    product = adjacentProduct > product ? (product = adjacentProduct) : product;
  }

  return product;
}
