import "./css/style.css";

let images = [
  "shaker-01.svg",
  "shaker-02.svg",
  "shaker-03.svg",
  "shaker-04.svg",
  "shaker-05.svg",
  "shaker-06.svg",
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
    document.querySelector("#die1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#dieTotal").innerHTML =
      "The roll: " + (dieOneValue + 1 + (dieTwoValue + 1));
  }, 1000);
}
roll();
