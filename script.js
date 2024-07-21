const rollBtn = document.querySelector("button");
const result = document.querySelector(".result");
const rollDice = document.querySelector("rollDiceFace");

let historyList = [];

rollBtn.onclick = function () {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  historyList.push(rollResult);
  for (let sayi of historyList) {
    if (sayi === 1) {
      result.innerHTML = "&#9856;";
    } else if (sayi === 2) {
      result.innerHTML = "&#9857;";
    } else if (sayi === 3) {
      result.innerHTML = "&#9858;";
    } else if (sayi === 4) {
      result.innerHTML = "&#9859;";
    } else if (sayi === 5) {
      result.innerHTML = "&#9860;";
    } else {
      result.innerHTML = "&#9861;";
    }
  }
};
console.log(historyList);
