// Здесь можно добавить JavaScript функционал
console.log('Script loaded successfully!');

// Меню

// Открытие и закрытие меню при клике на кнопку
document.querySelector('.menu_btn').addEventListener('click', function() {
    const overlay = document.querySelector('.menu_overlay');
    overlay.classList.toggle('open');
});

// Закрытие меню при клике на любое место overlay
document.querySelector('.menu_overlay').addEventListener('click', function(event) {
    // Проверяем, что клик был именно на overlay, а не на его дочерние элементы
    if (event.target === this) {
        this.classList.remove('open');
    }
});

// Закрытие меню при клике на любую ссылку внутри меню
document.querySelectorAll('.menu_items a').forEach(link => {
    link.addEventListener('click', function() {
        const overlay = document.querySelector('.menu_overlay');
        overlay.classList.remove('open');
    });
});

// Слайдер

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.services__slider');
    const cards = document.querySelectorAll('.services__card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let position = 0;
    const cardWidth = cards[0].offsetWidth + 30; // Ширина карточки + отступ
    const visibleCards = 3; // Количество видимых карточек
    const maxPosition = -(cardWidth * (cards.length - visibleCards));
  
    function updateSlider() {
      slider.style.transform = `translateX(${position}px)`;
      
      // Управление состоянием кнопок
      prevBtn.disabled = position >= 0;
      nextBtn.disabled = position <= maxPosition;
    }
  
    prevBtn.addEventListener('click', () => {
      position = Math.min(position + cardWidth, 0);
      updateSlider();
    });
  
    nextBtn.addEventListener('click', () => {
      position = Math.max(position - cardWidth, maxPosition);
      updateSlider();
    });
    
    // Инициализация состояния кнопок
    updateSlider();
  });



// Слайдер команды

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.team-slider');
  const cards = document.querySelectorAll('.team-card');
  const prevBtn = document.querySelector('.team-nav .prev');
  const nextBtn = document.querySelector('.team-nav .next');
  
  let currentPosition = 0;
  const cardWidth = cards[0].offsetWidth;
  const gap = 30; // Отступ между карточками
  const visibleCards = Math.floor((slider.parentElement.offsetWidth) / (cardWidth + gap));
  const maxPosition = -(((cardWidth + gap) * (cards.length - visibleCards)));
  
  function updateSliderPosition(smooth = true) {
      if (currentPosition > 0) currentPosition = 0;
      if (currentPosition < maxPosition) currentPosition = maxPosition;
      
      if (smooth) {
          slider.style.transition = 'transform 0.5s ease-in-out';
      } else {
          slider.style.transition = 'none';
      }
      
      slider.style.transform = `translateX(${currentPosition}px)`;
      
      // Обновляем состояние кнопок
      prevBtn.disabled = currentPosition >= 0;
      nextBtn.disabled = currentPosition <= maxPosition;
  }
  
  prevBtn.addEventListener('click', () => {
      currentPosition += cardWidth + gap;
      updateSliderPosition();
  });
  
  nextBtn.addEventListener('click', () => {
      currentPosition -= cardWidth + gap;
      updateSliderPosition();
  });
  
  // Обработка свайпов
  let startX;
  let isDragging = false;
  let startPosition;
  
  slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startPosition = currentPosition;
      isDragging = true;
  }, { passive: true });
  
  slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      
      const x = e.touches[0].clientX;
      const walk = x - startX;
      currentPosition = startPosition + walk;
      updateSliderPosition(false);
  }, { passive: true });
  
  slider.addEventListener('touchend', () => {
      isDragging = false;
      // Снапим к ближайшей карточке
      const remainder = currentPosition % (cardWidth + gap);
      if (remainder !== 0) {
          currentPosition = Math.round(currentPosition / (cardWidth + gap)) * (cardWidth + gap);
          updateSliderPosition();
      }
  });
  
  // Инициализация
  updateSliderPosition(false);
  
  // Обновление при ресайзе окна
  window.addEventListener('resize', () => {
      updateSliderPosition(false);
  });
});