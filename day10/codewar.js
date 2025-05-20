isValidWalk = function (walk) {
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;
  for (let direction of walk) {
    if (direction == "n") north++;
    else if (direction == "s") south++;
    else if (direction == "w") west++;
    else if (direction == "e") east++;
  }
  const totalstep = north + south + west + east;
  if (totalstep != 10) return false;
  return north === south && west === east;
};
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
