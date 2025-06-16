let vibrationEnabled = false; // включение/отключение вибрации где-то отдельно

function tryVibrate() {
  if (vibrationEnabled && navigator.vibrate) {
    try {
      navigator.vibrate(100);
    } catch(e) {
      // если вдруг ошибка — не ломаем остальной код
      console.warn("Vibration failed:", e);
    }
  }
}

// В основном коде клика:

img.addEventListener("click", () => {
  // основная логика клика:
  counter += clickPower;
  counterElem.textContent = counter;

  // звук
  const audio = new Audio(altMode ? "./media/ss2.mp3" : "./media/sss.mp3");
  audio.volume = volumeSlider.value / 100;
  audio.play();

  // меняем картинку, таймеры и т.д.

  // вызываем вибрацию отдельно
  tryVibrate();
});
