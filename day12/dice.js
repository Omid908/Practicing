function rolldice() {
  let numOfDice = document.getElementById("num").value;
  let diceResult = document.getElementById("diceresult");
  let diceImages = document.getElementById("diceimage");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    let random = Math.floor(Math.random() * 6) + 1;
    values.push(random);
    images.push(`<img src="images/dice-${random}.png" alt="Dice ${random}">`);
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
