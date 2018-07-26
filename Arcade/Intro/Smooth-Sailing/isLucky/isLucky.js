function isLucky(n) {
  let ticketNumberLength = n.toString().length;
  let ticketNumbersArray = n.toString().split("");
  let secondHalf = ticketNumbersArray.splice(ticketNumberLength / 2);

  let secondSum = 0;
  let firstSum = 0;

  for (let i = 0; i < secondHalf.length; i++) {
    secondSum += parseInt(secondHalf[i]);
  }

  for (let j = 0; j < ticketNumbersArray.length; j++) {
    firstSum += parseInt(ticketNumbersArray[j]);
  }

  return firstSum === secondSum;
}
