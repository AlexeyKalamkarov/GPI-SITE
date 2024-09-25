window.onbeforeunload = function() { window.scrollTo(0, 0); };
function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
  }
}
// Закрытие меню при клике вне его
window.onclick = function(event) {
  const menu = document.getElementById('dropdownMenu');
  if (!event.target.matches('.menu-button')) {
      if (menu.style.display === 'block') {
          menu.style.display = 'none';
      }
  }
}

//Модальное окно поиска


function openModalAuth() {
    const modalAuth = document.querySelector("#myModalAuth");
    modalAuth.style.display = 'flex';
    document.body.classList.add('modal-open');
}
function closeModalAuth() {
    const modalAuth = document.querySelector("#myModalAuth");
    modalAuth.style.display = 'none';
}
window.addEventListener('click', function(event) {
    const modalAuth = document.querySelector("#myModalAuth");
    if (event.target === modalAuth) {
        closeModalAuth();
        document.body.classList.remove('modal-open');
    }
});

//Модальное окно cv


function openModalAuthCV() {
    const modalCV = document.querySelector("#myModalCV");
    modalCV.style.display = 'flex';
    document.body.classList.add('modal-open');
}
function closeModalAuthCV() {
    const modalCV = document.querySelector("#myModalCV");
    modalCV.style.display = 'none';
}
window.addEventListener('click', function(event) {
    const modalAuth = document.querySelector("#myModalCV");
    if (event.target === modalAuth) {
        closeModalAuthCV();
        document.body.classList.remove('modal-open');
    }
});

//Открытие выпадающего меню поиска по нажатию на иконку
function openSearch() {
    const dropdown = document.querySelector('.dropdown-content-srch');
    dropdown.classList.toggle('show');
  }
  
// Закрытие выпадающего меню по клику вне его области
  window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown-content-srch');
    const searchIcon = document.querySelector('.icon_search');    
    // Если клик произошел вне выпадающего меню и вне иконки поиска
    if (!dropdown.contains(event.target) && !searchIcon.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  };


// scripts.js
function modalWindow() {
  const modal = document.querySelector("#myModal")
  const sliderContainer = document.querySelector(".slider-container")
  const modalContent = document.querySelector(".modal-content")
  const shadow = document.querySelector(".shadow_div")
  const slides = document.querySelectorAll('.slide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;
  document.body.classList.add('modal-open');
  modal.style.display = "block";
  shadow.style.display = "none";

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
      });
      thumbnails.forEach((thumbnail, i) => {
          thumbnail.classList.toggle('active', i === index);
      });
  }

  function onThumbnailClick(e) {
      currentIndex = parseInt(e.target.getAttribute('data-index'));
      showSlide(currentIndex);
  }

  function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  function showPreviousSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  }
  showSlide(currentIndex);

  // Клик по миниатюрам
  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', onThumbnailClick);
  });

  // Клик по стрелкам
  leftArrow.addEventListener('click', showPreviousSlide);
  rightArrow.addEventListener('click', showNextSlide);
  
  //Закрытие модального окна по нажатию вне окна//
  function closeModal() {
    const modal = document.querySelector(".modal")
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
  }
  function outsideClickListener(event) {
    if (event.target === sliderContainer || event.target === modal || event.target === modalContent) {
        closeModal();
        shadow.style.display = "block";
        document.body.classList.remove('modal-open');
    }
  }
  window.addEventListener('click', outsideClickListener);
};


function modalWindowNewsDetails() {
    const modal = document.querySelector("#myModalnewsDetails")
    const sliderContainer = document.querySelector(".slider-container-newsDetails")
    const modalContent = document.querySelector(".modal-content-newsDetails")
    const shadow = document.querySelector(".shadow_div")
    const slides = document.querySelectorAll('.slide-newsDetails');
    const thumbnails = document.querySelectorAll('.thumbnail-newsDetails');
    const leftArrow = document.querySelector('.left-arrow-newsDetails');
    const rightArrow = document.querySelector('.right-arrow-newsDetails');
    let currentIndex = 0;
    document.body.classList.add('modal-open-newsDetails');
    modal.style.display = "block";
    // shadow.style.display = "none";
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === index);
        });
    }
  
    function onThumbnailClick(e) {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        showSlide(currentIndex);
    }
  
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
  
    function showPreviousSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    showSlide(currentIndex);
  
    // Клик по миниатюрам
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', onThumbnailClick);
    });
  
    // Клик по стрелкам
    leftArrow.addEventListener('click', showPreviousSlide);
    rightArrow.addEventListener('click', showNextSlide);
    
    //Закрытие модального окна по нажатию вне окна//
    function closeModal() {
      const modal = document.querySelector(".modalnewsDetails")
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }
    function outsideClickListener(event) {
      if (event.target === sliderContainer || event.target === modal || event.target === modalContent) {
          closeModal();
        //   shadow.style.display = "block";
          document.body.classList.remove('modal-open');
      }
    }
    window.addEventListener('click', outsideClickListener);
  };


function clickAboutButton1() {
    const aboutForm1 = document.querySelector("#content-about-form1");
    const aboutForm2 = document.querySelector("#content-about-form2");
    const aboutForm3 = document.querySelector("#content-about-form3");
    // const aboutForm3 = document.querySelector("#content-about-form3");
    if (aboutForm2.style.display === "none") {
        aboutForm2.style.display = "block";
        aboutForm1.style.display = "none";
    }
}
// Функция для отображения форм по нажатию на кнопки
function showForm(formId) {
    // Скрыть все формы
    const forms = document.querySelectorAll('.content-about-form');
    forms.forEach(form => {
      form.style.display = 'none';
    });
  
    // Отобразить выбранную форму
    document.getElementById(formId).style.display = 'block';
  }
  
  // Привязываем кнопки к функциям
  document.getElementById('radio1').addEventListener('click', () => showForm('content-about-form1'));
  document.getElementById('radio2').addEventListener('click', () => showForm('content-about-form2'));
  document.getElementById('radio3').addEventListener('click', () => showForm('content-about-form3'));
  