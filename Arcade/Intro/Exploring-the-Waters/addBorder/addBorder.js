function addBorder(picture) {
  let borderSize = picture[0].length + 2;
  let border = "";

  let pics = picture.map(function(letters) {
    let lettersSplit = letters.split("");
    lettersSplit.push("*");
    lettersSplit.unshift("*");
    return lettersSplit.join("");
  });

  for (let i = 0; i < borderSize; i++) {
    border = border.concat("*");
  }

  pics.unshift(border);
  pics.push(border);
  return pics;
}
