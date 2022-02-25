function generateScore() {
  let a1 = Math.floor(Math.random() * 6 + 1);
  let a2 = Math.floor(Math.random() * 6 + 1);
  let a3 = Math.floor(Math.random() * 6 + 1);
  let a4 = Math.floor(Math.random() * 6 + 1);

  // console.log(a1, a2, a3, a4);

  let rollArray = [a1, a2, a3, a4];

  // console.log(rollArray);

  let abilityScore = rollArray.filter((roll) => roll > Math.min(...rollArray));
  while (abilityScore.length < 3) {
    abilityScore.push(Math.min(...rollArray));
  }

  // console.log(abilityScore);

  let score = 0;
  let finalScore = abilityScore.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    score
  );
  // console.log(finalScore);
  return finalScore;
}
// generateScore();

function getModifier(finalScore) {
  return Math.floor((finalScore - 10) / 2);
}

function d6HP() {
  let d6 = Math.floor((Math.random() * 6) + 1);
  return d6;
}

function d8HP() {
  let d8 = Math.floor((Math.random() * 8) + 1);
  return d8;
}

function d10HP() {
    let d10 = Math.floor((Math.random() * 10) +1 )
    return d10;
}

function d12HP() {
    let d12 = Math.floor((Math.random() * 12) +1 )
    return d12;
}

module.exports = { generateScore, getModifier, d6HP, d8HP, d10HP, d12HP };
