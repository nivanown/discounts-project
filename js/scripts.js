/*- search -*/
document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.querySelector('.search__icon');
  const searchDropdown = document.querySelector('.search__dropdown');
  
  // Функция для переключения открытия/закрытия выпадающего списка
  function toggleDropdown() {
    searchDropdown.classList.toggle('open');
  }

  // Закрыть выпадающий список, если клик произошел вне его
  function closeDropdown(event) {
    if (!event.target.closest('.language')) {
      searchDropdown.classList.remove('open');
    }
  }

  // Открытие/закрытие выпадающего списка по клику на search__text
  searchIcon.addEventListener('click', toggleDropdown);

  // Закрытие выпадающего списка при клике вне search__dropdown
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.search')) {
      searchDropdown.classList.remove('open');
    }
  });
});

/*- language -*/
document.addEventListener('DOMContentLoaded', function() {
  const languageText = document.querySelector('.language__text');
  const languageDropdown = document.querySelector('.language__dropdown');
  
  // Функция для переключения открытия/закрытия выпадающего списка
  function toggleDropdown() {
    languageDropdown.classList.toggle('open');
  }

  // Закрыть выпадающий список, если клик произошел вне его
  function closeDropdown(event) {
    if (!event.target.closest('.language')) {
      languageDropdown.classList.remove('open');
    }
  }

  // Открытие/закрытие выпадающего списка по клику на language__text
  languageText.addEventListener('click', toggleDropdown);

  // Закрытие выпадающего списка при клике вне language__dropdown
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.language')) {
      languageDropdown.classList.remove('open');
    }
  });
});

/*- discounts-slider -*/
document.getElementById('show-more').addEventListener('click', function() {
  const hiddenDivs = document.querySelectorAll('.hidden');
  
  hiddenDivs.forEach(function(div) {
    // Сначала удаляем класс 'hidden', чтобы элемент стал видимым
    div.classList.remove('hidden');
    
    // Затем добавляем класс 'fade-in' для анимации
    div.classList.add('fade-in');
  });

  // Скрываем кнопку после того, как все div стали видимыми
  this.style.display = 'none';
});

/*- discounts-slider -*/
const swiperConfigs = [
  { container: '#discounts-slider-1 .swiper', nextButton: '#discounts-slider-1 .swiper-button-next', prevButton: '#discounts-slider-1 .swiper-button-prev', sliderPagination: '#discounts-slider-1 .swiper-pagination' },
  { container: '#discounts-slider-2 .swiper', nextButton: '#discounts-slider-2 .swiper-button-next', prevButton: '#discounts-slider-2 .swiper-button-prev', sliderPagination: '#discounts-slider-2 .swiper-pagination' },
  { container: '#discounts-slider-3 .swiper', nextButton: '#discounts-slider-3 .swiper-button-next', prevButton: '#discounts-slider-3 .swiper-button-prev', sliderPagination: '#discounts-slider-3 .swiper-pagination' },
];

swiperConfigs.forEach(config => {
  new Swiper(config.container, {
    autoplay: false,
    autoHeight: true,
    loop: false,
    speed: 1000,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1079: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1401: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: config.sliderPagination,
      clickable: true,
    },
    navigation: {
      nextEl: config.nextButton,
      prevEl: config.prevButton,
    },
  });
});

/*- timer -*/
function createTimer(elementId, countdownTime) {
  const timerElement = document.getElementById(elementId);

  const countdownInterval = setInterval(() => {
    let hours = Math.floor(countdownTime / 3600);
    let minutes = Math.floor((countdownTime % 3600) / 60);
    let seconds = countdownTime % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.textContent = `${hours}:${minutes}:${seconds}`;

    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      timerElement.textContent = "Время вышло!";
    }

    countdownTime--;
  }, 1000);
}

// Запуск таймеров с разным временем
createTimer('timer-1', 72 * 3600); // Таймер на 72 часа
createTimer('timer-2', 48 * 3600); // Таймер на 48 часов
createTimer('timer-3', 24 * 3600); // Таймер на 24 часа

/*- discounts-slider -*/
document.querySelectorAll('.tabs__nav li').forEach(button => {
  button.addEventListener('click', () => {
    const tabNumber = button.getAttribute('data-tab');
    
    // Убираем активный класс у всех кнопок и контентов
    document.querySelectorAll('.tabs__nav li').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tabs__item').forEach(content => {
      content.classList.remove('active');
    });

    // Добавляем активный класс выбранным элементам
    button.classList.add('active');
    document.getElementById(`tab-${tabNumber}`).classList.add('active');
  });
});

/*- more-text -*/
document.querySelector('.more-text').addEventListener('click', function() {
  const hiddenText = document.querySelectorAll('.hidden-text');
  const isExpanded = this.textContent === 'Свернуть текст';

  hiddenText.forEach(p => {
    if (isExpanded) {
      p.classList.remove('show');
    } else {
      p.classList.add('show');
    }
  });

  this.textContent = isExpanded ? 'Развернуть текст' : 'Свернуть текст';
});

/*- accordion -*/
const accordions = document.querySelectorAll('.accordion__title-panel');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    this.classList.toggle('active');

    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

/*- mobile-modal -*/
const menuBtn = document.querySelector('.menu-btn');
const mobileModal = document.querySelector('.mobile-modal');
const closeModalBtn = document.querySelector('.mobile-modal__close-btn');
const modalOverlay = document.querySelector('.mobile-modal__overlay');
const body = document.querySelector('body');

// Функция для открытия модального окна
menuBtn.addEventListener('click', function() {
  body.classList.add('m-scroll-none'); // Добавляем класс к body
  mobileModal.classList.add('show'); // Добавляем класс к mobile-modal
});

// Функция для закрытия модального окна
function closeModal() {
  body.classList.remove('m-scroll-none'); // Убираем класс у body
  mobileModal.classList.remove('show'); // Убираем класс у mobile-modal
}

// События для закрытия модального окна
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
