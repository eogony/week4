import "./css/style.css";

let images = [
  "dice.01.png",
  "dice.02.png",
  "dice.03.png",
  "dice.04.png",
  "dice.05.png",
  "dice.06.png",
];
let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    console.log(dieOneValue, dieTwoValue);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#total").innerHTML =
      "Your roll is" + (dieOneValue + 1 + (dieTwoValue + 1));
  }, 1000);
}
roll();
