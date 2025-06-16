 function openSettings() {
    const modal = document.getElementById('settingsModal');
    modal.style.display = 'block';
    modal.style.animationName = 'slideInRight';
  }

  function closeSettings() {
    const modal = document.getElementById('settingsModal');
    modal.style.animationName = 'slideOutRight';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
  }

  function openInfo() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'block';
    modal.style.animationName = 'slideInUp';
  }

  function closeInfo() {
    const modal = document.getElementById('infoModal');
    modal.style.animationName = 'slideOutDown';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
  }

















  let vibrationEnabled = false;
let clickSoundEnabled = false;

function toggleVibration(elem) {
  vibrationEnabled = !vibrationEnabled;
  elem.classList.toggle('active');
  console.log('Вібрація:', vibrationEnabled);
}

function toggleClickSound(elem) {
  clickSoundEnabled = !clickSoundEnabled;
  elem.classList.toggle('active');
  console.log('Звук кліку:', clickSoundEnabled);
}

function setTheme(themeNum) {
  document.body.className = ''; // Скидуємо всі теми
  document.body.classList.add('theme-' + themeNum);
}













