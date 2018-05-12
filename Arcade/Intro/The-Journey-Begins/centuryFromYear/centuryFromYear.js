function centuryFromYear(year) {
  if (year < 100) {
    return 1;
  }
  let century = year.toString().slice(0, -2);
  century = parseInt(century);
  year = year.toString().slice(-2);
  if (year >= 1) {
    return (century += 1);
  } else {
    return century;
  }
}
