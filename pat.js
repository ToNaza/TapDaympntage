let counter = 0;
let clickPower = 1;
let upgradeCost = 50;
let altMode = false;

const counterElem = document.getElementById("coinCounter");
const img = document.getElementById("butClick");
const upgradeInfo = document.getElementById("upgradeInfo");
const volumeSlider = document.getElementById("volume");

function toggleClickSound(element) {
  altMode = !altMode;
  element.classList.toggle("active", altMode);
}

img.addEventListener("click", () => {
  counter += clickPower;
  counterElem.textContent = counter;

  const audio = new Audio(altMode ? "./media/ss2.mp3" : "./media/sss.mp3");
  audio.volume = volumeSlider.value / 100;
  audio.play();

  if (altMode) {
    img.src = "./media/patpatIlya.gif";
    setTimeout(() => {
      img.src = "./media/Ilya1.png";
    }, 500);
  } else {
    img.src = "./media/Ilya2.png";
    setTimeout(() => {
      img.src = "./media/Ilya1.png";
    }, 2000);
  }

  saveProgress();
});

function upgrade() {
  if (counter >= upgradeCost) {
    counter -= upgradeCost;
    clickPower++;
    upgradeCost *= 2;
    counterElem.textContent = counter;
    upgradeInfo.textContent = `Сила клика: ${clickPower} | Цена апгрейта: ${upgradeCost}`;
    saveProgress();
  } else {
    alert("Недостаточно коина!");
  }
}

function withdrawCoins() {
  alert("💰 Все коины теперь твои!");
  counter = 0;
  counterElem.textContent = counter;
  saveProgress();
}

function saveProgress() {
  localStorage.setItem("clickGameData", JSON.stringify({
    counter,
    clickPower,
    upgradeCost,
    altMode
  }));
}

function loadProgress() {
  const data = localStorage.getItem("clickGameData");
  if (data) {
    const saved = JSON.parse(data);
    counter = saved.counter;
    clickPower = saved.clickPower;
    upgradeCost = saved.upgradeCost;
    altMode = saved.altMode;

    counterElem.textContent = counter;
    upgradeInfo.textContent = `Сила клика: ${clickPower} | Цена апгрейта: ${upgradeCost}`;
  }
}

loadProgress();

