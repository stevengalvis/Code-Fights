function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourArms = [yourLeft, yourRight];
  let friendsArms = [friendsLeft, friendsRight];

  let yourMax = 0;
  let yourMin = yourArms[0];
  let friendsMax = 0;
  let friendsMin = friendsArms[0];

  for (let i = 0; i < yourArms.length; i++) {
    if (yourArms[i] >= yourMax) {
      yourMax = yourArms[i];
    } else {
      yourMin = yourArms[i];
    }
  }

  for (let i = 0; i < friendsArms.length; i++) {
    if (friendsArms[i] >= friendsMax) {
      friendsMax = friendsArms[i];
    } else {
      friendsMin = friendsArms[i];
    }
  }

  if (yourMax === friendsMax && yourMin === friendsMin) {
    return true;
  }

  return false;
}
