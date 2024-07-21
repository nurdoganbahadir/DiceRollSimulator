const rollBtn = document.querySelector("button");
const result = document.querySelector(".listRollHistory");
const rollDice = document.querySelector(".rollDiceFace");

let historyList = [];
let i = 1;

rollBtn.onclick = function () {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  historyList.push(rollResult);
  
  for (let sayi of historyList) {
    if (sayi === 1) {
      rollDice.innerHTML = "&#9856;";
      listRoll(1);
      historyList = [];
      i += 1;
    } else if (sayi === 2) {
      rollDice.innerHTML = "&#9857;";
      listRoll(2);
      historyList = [];
      i += 1;
    } else if (sayi === 3) {
      rollDice.innerHTML = "&#9858;";
      listRoll(3);
      historyList = [];
      i += 1;
    } else if (sayi === 4) {
      rollDice.innerHTML = "&#9859;";
      listRoll(4);
      historyList = [];
      i += 1;
    } else if (sayi === 5) {
      rollDice.innerHTML = "&#9860;";
      listRoll(5);
      historyList = [];
      i += 1;
    } else {
      rollDice.innerHTML = "&#9861;";
      listRoll(6);
      historyList = [];
      i += 1;
    }
  }
};

function listRoll(e) {
  const listItem = document.createElement("p");
  result.appendChild(listItem);
  if (e == 1) {
    listItem.innerHTML = `Roll ${i}: ${"&#9856;"}`;
  } else if (e == 2) {
    listItem.innerHTML = `Roll ${i}: ${"&#9857;"}`;
  } else if (e == 3) {
    listItem.innerHTML = `Roll ${i}: ${"&#9858;"}`;
  } else if (e == 4) {
    listItem.innerHTML = `Roll ${i}: ${"&#9859;"}`;
  } else if (e == 5) {
    listItem.innerHTML = `Roll ${i}: ${"&#9860;"}`;
  } else {
    listItem.innerHTML = `Roll ${i}: ${"&#9861;"}`;
  }
}
