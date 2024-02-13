// Получаем кнопку и скрытый контент
const showContentButton = document.getElementById('showContentButton');
const hiddenContent = document.getElementById('hiddenContent');

// Добавляем обработчик события при клике на кнопку
showContentButton.addEventListener('click', function() {
    // Переключаем отображение скрытого контента при каждом клике
    if (hiddenContent.style.display === 'none') {
        hiddenContent.classList.remove('fadeOut'); // Убираем класс fadeOut перед показом
        hiddenContent.style.display = 'block';
        showContentButton.textContent = 'Закрити листівку';

        const typingElements = document.querySelectorAll('.typing-text');
        typingElements.forEach(element => animateTyping(element));
    } else {
        hiddenContent.classList.add('fadeOut'); // Добавляем класс fadeOut при скрытии
        setTimeout(function() {
            hiddenContent.style.display = 'none';
        }, 500); // Устанавливаем таймаут в соответствии с длительностью анимации
        showContentButton.textContent = 'Показати листівку';
    }
});



function animateTyping(element) {
    console.log(element.textContent);
    let text = element.textContent;
    const originalInnerHTML = element.innerHTML;
    let i = 0;
    const interval = setInterval(() => {
      element.textContent = text.substring(0, i++);
      if (i > text.length) {
        clearInterval(interval);
        element.innerHTML = originalInnerHTML;
      }
    }, 50); // Скорость анимации (время между символами)
  }

// Прослушиваем событие загрузки страницы
window.addEventListener('load', function() {
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
});


document.getElementById('songSelect').addEventListener('change', function() {
    var selectedSong = this.value;
    var audioPlayer = document.getElementById('audioPlayer');
    var audioSource = document.getElementById('audioSource');
    audioSource.src = selectedSong;
    audioPlayer.load();
    audioPlayer.play();
  });

  
const songSelect = document.getElementById('songSelect');
songSelect.addEventListener('change', (event) => {
  const selectedSong = event.target.value;
  updateAudioSrc(selectedSong);
});


function updateAudioSrc(song) {
    const audioSource = document.getElementById('audioSource');
    audioSource.src = song;
    document.getElementById('audioPlayer').load();
  }
  
